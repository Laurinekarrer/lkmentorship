import crypto from 'node:crypto';

function verify(body,header,secret){
  const parts=Object.fromEntries(String(header||'').split(',').map(item=>item.split('=')));
  if(!parts.t||!parts.v1) return false;
  if(Math.abs(Date.now()/1000-Number(parts.t))>300) return false;
  const expected=crypto.createHmac('sha256',secret).update(`${parts.t}.${body}`).digest('hex');
  const a=Buffer.from(expected);const b=Buffer.from(parts.v1);
  return a.length===b.length&&crypto.timingSafeEqual(a,b);
}

const escapeHtml=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const lines=value=>escapeHtml(value).replace(/\n/g,'<br>');

async function sendEmail(payload){
  const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(payload)});
  if(!sent.ok) throw new Error(await sent.text());
}

async function sendMassageEmails(session,meta,email){
  const amount=new Intl.NumberFormat('en-NL',{style:'currency',currency:(session.currency||'eur').toUpperCase()}).format((session.amount_total||0)/100);
  const clientHtml=`<!doctype html><html><body style="margin:0;background:#fbf6f1;color:#2b1f2f;font-family:Arial,sans-serif"><div style="max-width:680px;margin:0 auto;padding:36px 18px"><div style="background:#2b1f2f;color:#fbf6f1;padding:48px 38px"><p style="text-transform:uppercase;letter-spacing:3px;font-size:11px;color:#f0d4c8">Laurine Karrer Studio · Massage</p><h1 style="font-family:Georgia,serif;font-size:44px;font-weight:400;line-height:1.05;margin:28px 0;color:#f0d4c8">Your request is received.</h1><p style="font-size:18px">${escapeHtml(meta.massage_name)}</p><p><strong>Paid</strong> · ${amount}</p></div><div style="padding:28px 36px;border:1px solid #e1d5cf;border-top:0"><p>Thank you, ${escapeHtml(meta.client_name)}. Your payment is confirmed. Laurine will contact you personally to confirm the final appointment time and exact location.</p><p><strong>Your preferred availability</strong><br>${lines(meta.availability)}</p>${meta.alternative_availability?`<p><strong>Other possibilities</strong><br>${lines(meta.alternative_availability)}</p>`:''}<p><strong>Current massage address</strong><br>Papaverhof 71C, 1032 LX Amsterdam<br>5th floor · rooftop</p><p style="font-size:12px;color:#766d74">Sessions may take place across different wellness partner spaces. Please check Laurine's confirmation before travelling. The appointment is final only after she confirms the date, time and exact location.</p></div></div></body></html>`;
  const ownerHtml=`<h2>New paid massage request</h2><p><strong>Massage:</strong> ${escapeHtml(meta.massage_name)}<br><strong>Amount:</strong> ${amount}<br><strong>Higher pressure:</strong> ${escapeHtml(meta.higher_pressure)}</p><p><strong>Client:</strong> ${escapeHtml(meta.client_name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Phone:</strong> ${escapeHtml(meta.client_phone)}</p><p><strong>Preferred availability:</strong><br>${lines(meta.availability)}</p>${meta.alternative_availability?`<p><strong>Alternative availability:</strong><br>${lines(meta.alternative_availability)}</p>`:''}${meta.client_notes?`<p><strong>Notes:</strong><br>${lines(meta.client_notes)}</p>`:''}<p><strong>Stripe session:</strong> ${escapeHtml(session.id)}</p>`;
  const from=process.env.VOUCHER_FROM_EMAIL;
  const owner=process.env.BOOKING_NOTIFICATION_EMAIL||'info.lkmentorship@gmail.com';
  await Promise.all([
    sendEmail({from,to:[email],subject:'Your massage request is received',html:clientHtml}),
    sendEmail({from,to:[owner],reply_to:email,subject:`Paid massage request · ${meta.client_name||'New client'}`,html:ownerHtml})
  ]);
}

async function sendVoucherEmail(session,meta,email){
  const code=`LK-${String(session.id).slice(-10).toUpperCase()}`;
  const amount=new Intl.NumberFormat('en-NL',{style:'currency',currency:(session.currency||'eur').toUpperCase()}).format((session.amount_total||0)/100);
  const html=`<!doctype html><html><body style="margin:0;background:#fbf6f1;color:#2b1f2f;font-family:Arial,sans-serif"><div style="max-width:680px;margin:0 auto;padding:36px 18px"><div style="background:#2b1f2f;color:#fbf6f1;padding:48px 38px"><p style="text-transform:uppercase;letter-spacing:3px;font-size:11px;color:#f0d4c8">Laurine Karrer Studio · Gift voucher</p><h1 style="font-family:Georgia,serif;font-size:46px;font-weight:400;line-height:1;margin:28px 0;color:#f0d4c8">A moment for you.</h1><p style="font-size:18px">${escapeHtml(meta.voucher_name)}</p><div style="border-top:1px solid #705f72;margin:32px 0"></div><p><strong>To</strong><br>${escapeHtml(meta.recipient_name)}</p><p><strong>From</strong><br>${escapeHtml(meta.sender_name)}</p><p style="font-family:Georgia,serif;font-size:25px;line-height:1.35;margin:32px 0">“${escapeHtml(meta.personal_message)}”</p><p><strong>Value</strong> · ${amount}</p><p><strong>Voucher code</strong> · ${code}</p></div><div style="padding:28px 36px;border:1px solid #e1d5cf;border-top:0"><p>To redeem this gift, contact <a style="color:#6f773b" href="mailto:info.lkmentorship@gmail.com">info.lkmentorship@gmail.com</a> or book at <a style="color:#6f773b" href="https://laurinekarrer.com/booking">laurinekarrer.com/booking</a> and mention the voucher code.</p><p style="font-size:12px;color:#766d74">Keep this email. The code is unique and can be used once.</p></div></div></body></html>`;
  await sendEmail({from:process.env.VOUCHER_FROM_EMAIL,to:[email],subject:`Your gift voucher for ${meta.recipient_name||'someone special'}`,html});
}

export async function handler(event){
  const raw=event.isBase64Encoded?Buffer.from(event.body||'','base64').toString('utf8'):event.body||'';
  if(!process.env.STRIPE_WEBHOOK_SECRET||!verify(raw,event.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET)) return {statusCode:400,body:'Invalid signature'};
  const stripeEvent=JSON.parse(raw);
  if(stripeEvent.type!=='checkout.session.completed') return {statusCode:200,body:'ok'};
  const session=stripeEvent.data.object;
  const meta=session.metadata||{};
  const email=session.customer_details?.email||meta.client_email||meta.buyer_email;
  if(!email) return {statusCode:200,body:'No recipient email'};
  if(!process.env.RESEND_API_KEY||!process.env.VOUCHER_FROM_EMAIL){console.log('Payment completed; email provider not configured',session.id);return {statusCode:200,body:'Email not configured'}}
  try{
    if(meta.checkout_type==='massage_booking') await sendMassageEmails(session,meta,email);
    else await sendVoucherEmail(session,meta,email);
    return {statusCode:200,body:'ok'};
  }catch(error){
    console.error('Payment email failed',error);
    return {statusCode:500,body:'Email failed'};
  }
}
