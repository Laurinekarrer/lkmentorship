import Link from 'next/link';
import {config} from '@/content/site';
import {MobileMenu} from '@/components/MobileMenu';

export function Header(){return <header className="nav"><div className="shell nav-inner"><Link className="brand" href="/">LAURINE KARRER STUDIO<small>SOPHROLOGIST</small></Link><nav className="links"><Link href="/">About</Link><Link href="/services">Services</Link><Link href="/community">Community</Link><Link href="/partners">Partners</Link><Link href="/booking">Book &amp; Shop</Link></nav><MobileMenu/></div></header>}

export function Footer(){return <footer className="footer"><div className="shell"><div className="footer-grid"><div><h3>Reconnect.<br/>Realign.<br/>Move forward.</h3></div><div><p><Link className="footer-text-link" href="/sophrologist-amsterdam">Sophrology in Amsterdam</Link><br/><Link className="footer-text-link" href="/services">In-person &amp; online sessions</Link><br/><Link className="footer-text-link" href="/partners">Studio &amp; wellness partnerships</Link></p></div><div><Link href={config.bookingUrl}>Book a session ↗</Link><br/><Link href="/gift-voucher">Gift vouchers ↗</Link><br/><a href={config.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="footer-location-note"><p className="eyebrow">Amsterdam sessions</p><p>Massage and in-person sessions take place across selected wellness spaces. Your exact location is confirmed personally with your appointment.</p></div><div className="legal">© 2026 Laurine Karrer Studio · Privacy · Legal notice · Cookies</div></div></footer>}

export function CTA({children="Book now"}:{children?:React.ReactNode}){return <Link className="btn primary" href={config.bookingUrl}>{children}</Link>}
