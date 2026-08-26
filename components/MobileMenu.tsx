'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

const links=[
  {href:'/',label:'About'},
  {href:'/services',label:'Services'},
  {href:'/partners',label:'Partners'},
  {href:'/booking',label:'Booking'}
];

export function MobileMenu(){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();

  useEffect(()=>setOpen(false),[pathname]);

  return <div className={`mobile-nav${open?' is-open':''}`}>
    <button className="mobile-menu" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)}>{open?'Close':'Menu'}</button>
    <nav id="mobile-navigation" aria-label="Mobile navigation">
      {links.map(link=><Link key={link.href} className={pathname===link.href?'active':undefined} href={link.href} onClick={()=>setOpen(false)}>{link.label}</Link>)}
    </nav>
  </div>;
}
