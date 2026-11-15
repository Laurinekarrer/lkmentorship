const offers={
  'body-60':{name:'Body Ritual Massage · 60 min',amount:8500,pressure:true},
  'body-90':{name:'Body Ritual Massage · 90 min',amount:11100,pressure:true},
  'face-60':{name:'Face Ritual Massage · 60 min',amount:9500,pressure:false},
  'face-90':{name:'Face Ritual Massage · 90 min',amount:12200,pressure:false}
};

const response=(statusCode,body)=>({statusCode,headers:{'Content-Type':'application/json','Cache-Control':'no-store'},body:JSON.stringify(body)});
const clean=(value,max=500)=>String(value??'').trim().slice(0,max);

export async function handler(event){
  if(event.httpMethod!=='POST') return response(405,{error:'Method not allowed'});
  if(!process.env.STRIPE_SECRET_KEY) return response(500,{error:'Stripe is not configured yet.'});
  try{
    const data=JSON.parse(event.body||'{}');
    const offer=offers[data.massageId];
    const name=clean(data.name,80);
    const email=clean(data.email,160);
    const phone=clean(data.phone,60);
    const availability=clean(data.availability,500);
    const alternativeAvailability=clean(data.alternativeAvailability,500);
    const notes=clean(data.notes,500);
    if(!offer) return response(400,{error:'Please choose a massage.'});
    if(!name||!/^\S+@\S+\.\S+$/.test(email)||!phone||!availability) return response(400,{error:'Please complete your contact details and availability.'});
    const pressure=Boolean(data.higherPressure&&offer.pressure);
    const amount=offer.amount+(pressure?1000:0);
    const productName=offer.name+(pressure?' · Higher pressure':'');

    const proto=event.headers['x-forwarded-proto']||'https';
    const host=event.headers['x-forwarded-host']||event.headers.host;
    const origin=host?`${proto}://${host}`:'https://laurinekarrer.com';
    const params=new URLSearchParams();
    params.set('mode','payment');
    params.set('customer_email',email);
    params.set('success_url',`${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`);
    params.set('cancel_url',`${origin}/booking#booking`);
    params.set('line_items[0][price_data][currency]','eur');
    params.set('line_items[0][price_data][unit_amount]',String(amount));
    params.set('line_items[0][price_data][product_data][name]',productName);
    params.set('line_items[0][price_data][product_data][description]','Massage in Amsterdam · Appointment time and exact location confirmed after payment');
    params.set('line_items[0][quantity]','1');
    params.set('metadata[checkout_type]','massage_booking');
    params.set('metadata[massage_id]',data.massageId);
    params.set('metadata[massage_name]',productName);
    params.set('metadata[higher_pressure]',pressure?'yes':'no');
    params.set('metadata[client_name]',name);
    params.set('metadata[client_email]',email);
    params.set('metadata[client_phone]',phone);
    params.set('metadata[availability]',availability);
    params.set('metadata[alternative_availability]',alternativeAvailability);
    params.set('metadata[client_notes]',notes);
    params.set('payment_intent_data[receipt_email]',email);

    const stripe=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{Authorization:`Bearer ${process.env.STRIPE_SECRET_KEY}`,'Content-Type':'application/x-www-form-urlencoded'},body:params});
    const session=await stripe.json();
    if(!stripe.ok) throw new Error(session?.error?.message||'Stripe could not create the payment.');
    return response(200,{url:session.url});
  }catch(error){
    console.error(error);
    return response(500,{error:error instanceof Error?error.message:'Unable to create payment.'});
  }
}
