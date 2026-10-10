import type {Metadata} from 'next';
import {GiftVoucherForm} from '@/components/GiftVoucherForm';
import styles from '@/components/GiftVoucherForm.module.css';

export const metadata:Metadata={title:'Gift Vouchers',description:'Offer a massage, sophrology session or breathwork experience with Laurine Karrer Studio in Amsterdam.',alternates:{canonical:'/gift-voucher'}};

export default function GiftVoucherPage(){return <>
  <section className="page-head shell"><div className={styles.giftIntro}><div><p className="eyebrow">Book &amp; Shop · Gift voucher</p><h1>Offer a moment that stays.</h1></div><p>Choose an experience, add your words and pay securely. Your personalised digital voucher will be sent to your email, ready to offer.</p></div></section>
  <div className="shell"><GiftVoucherForm/></div>
</>}
