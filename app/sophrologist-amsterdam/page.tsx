import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata:Metadata={
  title:'Sophrologist Amsterdam | Stress, Emotions & Body Awareness',
  description:'English and French sophrology in Amsterdam with Laurine Karrer for stress management, emotional regulation, overthinking, body awareness, sleep and embodied clarity.',
  keywords:['sophrologist Amsterdam','sophrology Amsterdam','stress management Amsterdam','emotional regulation Amsterdam','body awareness Amsterdam','nervous system regulation Amsterdam','English speaking sophrologist','French speaking sophrologist'],
  alternates:{canonical:'/sophrologist-amsterdam'},
  openGraph:{title:'Sophrologist in Amsterdam | Laurine Karrer',description:'Individual sophrology sessions in Amsterdam and online, available in English and French.',url:'/sophrologist-amsterdam'}
};

const faq=[
  {q:'What is sophrology?',a:'Sophrology is a structured mind-body practice combining conscious breathing, muscular relaxation, gentle movement, guided imagery and focused awareness.'},
  {q:'Can I practise sophrology in English in Amsterdam?',a:'Yes. Laurine offers individual sophrology sessions in Amsterdam in English and French, as well as online sessions.'},
  {q:'What happens during a sophrology session?',a:'A session begins with a conversation, followed by practices adapted to your needs. These may include breathing, dynamic relaxation, gentle movement and guided imagery, with time afterwards to notice and integrate your experience.'},
  {q:'Is sophrology a replacement for medical care or psychotherapy?',a:'No. Sophrology is a complementary form of support and does not replace medical diagnosis, treatment or psychological care.'}
];

export default function SophrologistAmsterdam(){
  const schema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="page-head shell"><p className="eyebrow">Sophrology in Amsterdam</p><h1>Sophrologist in Amsterdam.</h1><p>Individual mind-body support in English and French, grounded in conscious breath, dynamic relaxation, gentle movement and lived sensation.</p><div className="buttons"><Link className="btn primary" href="/booking">Book a session</Link></div></section>
    <section className="section"><div className="shell intro-grid"><div><p className="eyebrow">A practical method</p><h2>Come back to what your body already knows.</h2></div><div><p className="lead">Sophrology brings body, breath and mind back into conversation.</p><p>Created in 1960 by Colombian neuropsychiatrist Alfonso Caycedo, sophrology offers a structured way to observe your experience, ease accumulated pressure and develop inner resources you can use beyond the session.</p><p>Laurine Karrer is a certified sophrologist trained over three years with Sophrocap. Her approach is informed by clinical support, float sessions, bodywork and her own lived understanding of nervous-system regulation across change and different cultural environments.</p></div></div></section>
    <section className="section approach"><div className="shell"><p className="eyebrow">A session may support</p><h2>Less overload.<br/>More embodied clarity.</h2><div className="pillars"><div className="pillar"><h3>Stress</h3><p>Notice pressure earlier and practise responding differently.</p></div><div className="pillar"><h3>Sleep</h3><p>Create calmer conditions for rest and recovery.</p></div><div className="pillar"><h3>Body awareness</h3><p>Reconnect with sensations, limits and needs.</p></div><div className="pillar"><h3>Emotions</h3><p>Meet emotional overload with grounding and greater awareness.</p></div><div className="pillar"><h3>Self-trust</h3><p>Move through transitions and decisions from a steadier place.</p></div></div></div></section>
    <section className="section"><div className="shell details"><div><p className="eyebrow">For life in Amsterdam</p><h2>When your mind keeps going, but your body asks you to slow down.</h2></div><div><p>This work is particularly relevant for professionals, entrepreneurs, creatives and internationals navigating a demanding rhythm, cultural change or a personal transition.</p><p>You may arrive feeling stressed, mentally crowded, emotionally overloaded, disconnected from your body or unable to fully rest. Sophrology does not ask you to force a positive mindset. It gives you concrete ways to work with breath, sensation, movement and attention so that regulation becomes something you can practise—not simply understand.</p><p>Sessions are available in Amsterdam and online, in English or French.</p></div></div></section>
    <section className="section faq-section"><div className="shell faq-shell"><p className="eyebrow">Sophrology Amsterdam</p><h2>Frequently asked questions.</h2><div className="faq-list">{faq.map(item=><details className="faq-item" key={item.q}><summary><span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div><div className="buttons"><Link className="btn primary" href="/services/one-to-one">Explore the session</Link></div></div></section>
  </>
}
