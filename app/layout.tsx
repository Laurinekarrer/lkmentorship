import type {Metadata} from 'next';import './globals.css';import {Header,Footer,Testimonials} from '@/components/Site';
export const metadata:Metadata={title:{default:'Laurine Karrer Mentorship',template:'%s | Laurine Karrer'},description:'Embodied massage, clarity sessions, classes and workshops in Amsterdam and online.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Testimonials/><Footer/></body></html>}
