import Link from 'next/link';
import {config} from '@/content/site';
import {MobileMenu} from '@/components/MobileMenu';

export function Header(){return <header className="nav"><div className="shell nav-inner"><Link className="brand" href="/">LAURINE KARRER STUDIO<small>SOPHROLOGIST</small></Link><nav className="links"><Link href="/">About</Link><Link href="/services">Services</Link><Link href="/community">Community</Link><Link href="/contact">Info &amp; Contact</Link><Link className="nav-book" href="/booking">Book &amp; Shop</Link></nav><MobileMenu/></div></header>}

export function Footer(){return <footer className="footer"><div className="shell"><div className="footer-grid footer-grid-simple"><div><p className="eyebrow">Laurine Karrer Studio</p><h3>Sophrology &amp; body rituals in Amsterdam.</h3></div><div className="footer-actions"><Link href={config.bookingUrl}>Book a session ↗</Link><Link href="/gift-voucher">Gift vouchers ↗</Link><Link href="/contact">Info &amp; contact ↗</Link><a href={config.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="legal">© 2026 Laurine Karrer Studio</div></div></footer>}

export function CTA({children="Book now"}:{children?:React.ReactNode}){return <Link className="btn primary" href={config.bookingUrl}>{children}</Link>}
