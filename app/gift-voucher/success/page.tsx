import Link from 'next/link';
import type {Metadata} from 'next';

export const metadata:Metadata={title:'Your gift is on its way',robots:{index:false,follow:false}};

export default function GiftVoucherSuccess(){return <section className="section"><div className="shell" style={{maxWidth:820,textAlign:'center'}}><p className="eyebrow">Payment confirmed</p><h1 style={{fontSize:'clamp(3.4rem,8vw,7rem)'}}>Your gift is on its way.</h1><p style={{maxWidth:600,margin:'0 auto'}}>Your personalised voucher will arrive in the buyer&apos;s inbox shortly. Please also check the spam folder if it does not appear within a few minutes.</p><div className="buttons" style={{justifyContent:'center'}}><Link className="btn primary" href="/">Return home</Link><Link className="btn" href="/booking">Book a session</Link></div></div></section>}
