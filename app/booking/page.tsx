import type {Metadata} from 'next';
import {config} from '@/content/site';
import {BookShopTabs} from '@/components/BookShopTabs';

export const metadata:Metadata={
  title:'Book & Shop',
  description:'Book an in-person or online sophrology, ritual massage, guidance or breathwork session with Laurine Karrer in Amsterdam.',
  alternates:{canonical:'/booking'}
};

export default function Booking(){
  return <>
    <section className="page-head shell booking-head">
      <p className="eyebrow">Book &amp; Shop</p>
      <h1>Book your session.</h1>
      <p>Choose your experience, select an available time and complete your booking securely.</p>
    </section>
    <div className="shell commerce-shell"><BookShopTabs/></div>
    <section className="booking-help shell"><p>Not sure which session to choose? <a className="text-link" href={`mailto:${config.email}`}>Ask Laurine</a>.</p></section>
  </>;
}
