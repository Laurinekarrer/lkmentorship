import type {Metadata} from 'next';import './globals.css';import {Header,Footer} from '@/components/Site';import {Testimonials} from '@/components/Testimonials';
export const metadata:Metadata={title:{default:'Laurine Karrer | Sophrologist in Amsterdam',template:'%s | Laurine Karrer'},description:'Sophrology, body-based therapy, massage, classes and workshops in Amsterdam and online.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Testimonials/><Footer/></body></html>}
