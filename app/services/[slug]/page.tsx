import {notFound} from 'next/navigation';import {services} from '@/content/site';import {CTA} from '@/components/Site';

const expectations:Record<string,string[]>={
  massage:[
    'Come in comfortable, loose clothing and simple undergarments. Bring a water bottle; earplugs and a personal object you would like to place in the space are both welcome and optional.',
    'Please share any medical condition, pregnancy, injury, allergy or contraindication before booking a body or facial treatment so the experience can be safely adapted to you.'
  ],
  'one-to-one':[
    'Come in comfortable clothing and bring a notebook and pen for insights. You may also bring a personal object and arrive with an intention, question or situation you would like to explore with greater clarity.',
    'For an online session, choose a quiet and private space where you can sit, breathe and move without interruption. No preparation or perfectly formed question is required.'
  ],
  classes:[
    'Wear comfortable clothing you can move and breathe in, and bring a water bottle. Bare feet or socks are recommended so you can stay connected to sensation and move freely.',
    'No previous experience is needed. Simply bring your body as it is and allow yourself to explore at your own rhythm, with rest and adaptations always available. Please share any pregnancy, injury, medical condition or movement contraindication before class.'
  ]
};

const sharedExpectation='We begin by arriving, noticing what is present and agreeing on your intention. The session unfolds with care and closes with time for integration.';

export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}export default function ServicePage({params}:{params:{slug:string}}){const s=services.find(x=>x.slug===params.slug);if(!s)notFound();const whatToExpect=expectations[s.slug]??expectations['one-to-one'];return <><section className="page-head shell"><p className="eyebrow">Services · {s.number}</p><h1>{s.title}</h1><p>{s.description}</p></section><section className="section shell"><div className="cards">{s.items.map((item,i)=><article className="card" key={item.name}><p className="eyebrow">0{i+1}</p><h3>{item.name}</h3><p>{item.text}</p>{'price' in item&&item.price?<div className="service-meta"><p className="service-price">{'duration' in item&&item.duration?`${item.duration} · `:''}{item.price}</p><small>{'location' in item&&item.location?item.location:'Location — to be confirmed'}</small></div>:<p><small>Duration · Price · Location — to be confirmed</small></p>}<CTA/></article>)}</div></section><section className="section approach"><div className="shell details"><div><p className="eyebrow">What to expect</p><h2>A space adapted to you.</h2></div><div><p>{sharedExpectation}</p>{whatToExpect.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div></section></>}
