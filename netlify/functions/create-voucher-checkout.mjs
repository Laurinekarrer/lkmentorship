const offers={
  'massage-60':{name:'Gift Voucher · Body Ritual Massage 60 min',amount:8500,pressure:true},
  'massage-90':{name:'Gift Voucher · Body Ritual Massage 90 min',amount:10100,pressure:true},
  sophrology:{name:'Gift Voucher · Sophrology Session 60 min',amount:6000,pressure:false},
  breathwork:{name:'Gift Voucher · Breathwork + Ice Bath + Sauna',amount:2900,pressure:false}
};

const response=(statusCode,body)=>({statusCode,headers:{'Content-Type':'application/json','Cache-Control':'no-store'},body:JSON.stringify(body)});
const clean=(value,max=300)=>String(value??'').trim().slice(0,max);

export async function handler(event){
  if(event.httpMethod!=='POST') return response(405,{error:'Method not allowed'});
  if(!process.env.STRIPE_SECRET_KEY) return response(500,{error:'Stripe is not configured yet.'});
  try{
    const data=JSON.parse(event.body||'{}');
    const buyerEmail=clean(data.buyerEmail,160);
    const recipientName=clean(data.recipientName,80);
    const senderName=clean(data.senderName,80);
    const message=clean(data.message,300);
    if(!/^\S+@\S+\.\S+$/.test(buyerEmail)||!recipientName||!senderName||!message) return response(400,{error:'Please complete every field.'});

    let offer=offers[data.offerId];
    let amount;
    let name;
    let pressure=false;
    if(data.offerId==='custom'){
      amount=Math.round(Number(data.customAmount)*100);
      if(!Number.isInteger(amount)||amount<2500||amount>30000) return response(400,{error:'Choose an amount between €25 and €300.'});
      name='Gift Voucher · Choose your experience';
    }else{
      if(!offer) return response(400,{error:'Unknown gift voucher.'});
      pressure=Boolean(data.higherPressure&&offer.pressure);
      amount=offer.amount+(pressure?1000:0);
      name=offer.name+(pressure?' · Higher pressure':'');
    }

    const proto=event.headers['x-forwarded-proto']||'https';
    const host=event.headers['x-forwarded-host']||event.headers.host;
    const origin=host?`${proto}://${host}`:'https://laurinekarrer.com';
    const params=new URLSearchParams();
    params.set('mode','payment');
    params.set('customer_email',buyerEmail);
    params.set('success_url',`${origin}/gift-voucher/success?session_id={CHECKOUT_SESSION_ID}`);
    params.set('cancel_url',`${origin}/gift-voucher`);
    params.set('line_items[0][price_data][currency]','eur');
    params.set('line_items[0][price_data][unit_amount]',String(amount));
    params.set('line_items[0][price_data][product_data][name]',name);
    params.set('line_items[0][price_data][product_data][description]',`Personalised for ${recipientName}, from ${senderName}`);
    params.set('line_items[0][quantity]','1');
    params.set('metadata[voucher_type]',data.offerId);
    params.set('metadata[voucher_name]',name);
    params.set('metadata[recipient_name]',recipientName);
    params.set('metadata[sender_name]',senderName);
    params.set('metadata[personal_message]',message);
    params.set('metadata[higher_pressure]',pressure?'yes':'no');
    params.set('metadata[buyer_email]',buyerEmail);
    params.set('payment_intent_data[receipt_email]',buyerEmail);

    const stripe=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{Authorization:`Bearer ${process.env.STRIPE_SECRET_KEY}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});
    const session=await stripe.json();
    if(!stripe.ok) throw new Error(session?.error?.message||'Stripe could not create the payment.');
    return response(200,{url:session.url});
  }catch(error){
    console.error(error);
    return response(500,{error:error instanceof Error?error.message:'Unable to create payment.'});
  }
}
