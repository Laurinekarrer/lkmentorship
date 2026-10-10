import {notFound} from 'next/navigation';import {services} from '@/content/site';import {CTA} from '@/components/Site';
import type {Metadata} from 'next';

const studioMapUrl='https://www.google.com/maps/search/?api=1&query=Hazenstraat+53%2C+1016+SN+Amsterdam';
const seo:Record<string,{title:string;description:string}>={
  massage:{title:'Therapeutic & Ritual Massage Amsterdam | Stress Relief',description:'Body Ritual and Face Ritual Massage in central Amsterdam for deep relaxation, physical tension, nervous-system downshifting and mind-body reconnection.'},
  'one-to-one':{title:'Sophrology Amsterdam | Stress & Emotional Regulation',description:'Personalised sophrology in Amsterdam or online with certified sophrologist Laurine Karrer for stress, emotional regulation, overthinking, sleep and body awareness.'},
  classes:{title:'Breathwork & Body Awareness Classes Amsterdam',description:'Sophrology-inspired breathwork, nervous-system regulation, dynamic relaxation, body awareness and gentle stretching classes in Amsterdam.'}
};
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const item=seo[params.slug];if(!item)return{};return{...item,alternates:{canonical:`/services/${params.slug}`},openGraph:{title:item.title,description:item.description,url:`/services/${params.slug}`}}}

const expectations:Record<string,string[]>={
  massage:[
    'Come in comfortable, loose clothing and simple undergarments. Bring a water bottle and earplugs if you wish. If you have one or more meaningful personal objects—such as jewellery or crystals—that you would like to purify during the session, you are welcome to bring them with you.',
    'Please share any medical condition, pregnancy, injury, allergy or contraindication before booking a body or facial treatment so the experience can be safely adapted to you.'
  ],
  'one-to-one':[
    'Come in comfortable clothing and bring a notebook and pen for insights. If you have one or more meaningful personal objects—such as jewellery or crystals—that you would like to purify during the session, you are welcome to bring them. You can also arrive with an intention, question or situation you would like to explore with greater clarity.',
    'For an online session, choose a quiet and private space where you can sit, breathe and move without interruption. No preparation or perfectly formed question is required.'
  ],
  classes:[
    'Wear comfortable clothing you can move and breathe in, and bring a water bottle. Bare feet or socks are recommended so you can stay connected to sensation and move freely.',
    'No previous experience is needed. Simply bring your body as it is and allow yourself to explore at your own rhythm, with rest and adaptations always available. Please share any pregnancy, injury, medical condition or movement contraindication before class.'
  ]
};

const sharedExpectation='We begin by arriving, noticing what is present and agreeing on your intention. The session unfolds with care and closes with time for integration.';

type FaqItem={question:string;answer:string};

const bodyCareFaqs:FaqItem[]=[
  {
    question:'What makes the Body Ritual Massage different from a classic massage?',
    answer:'This is not only a sequence of massage techniques. It is a slow, experiential full-body ritual shaped by what your body communicates in the moment. Intuitive touch, deep relaxation and focused abdominal work create space to notice and release physical and emotional tension without having to explain everything in words. It can be a gentle first doorway into my practice if you need care and reconnection before choosing a spoken Sophrology Session.'
  },
  {
    question:'Why does the ritual include abdominal work?',
    answer:'The abdomen is closely connected to breathing, the nervous system, digestion and the way stress or emotion can be felt physically. With your consent, gentle and attentive abdominal touch can support relaxation, awareness and a sense of inner space. Pressure and positioning are always adapted, and this part can be changed or omitted at any time.'
  },
  {
    question:'What is the Face Ritual Massage?',
    answer:'The Face Ritual Massage is a 90-minute upper-body and facial ritual combining lymphatic drainage, sculpting massage, skincare and conscious relaxation. The detox phase supports circulation and the elimination of retained fluids, while the restorative phase helps soften visible signs of stress and ageing and supports the skin’s natural collagen and elastin functions. It is designed to leave the face looking smoother, fuller and more luminous while helping the mind slow down.'
  },
  {
    question:'Who is the Face Ritual Massage for?',
    answer:'It is especially suited to people who want a deeply relaxing massage experience without undressing for a full-body treatment. Because the ritual is centred on the face, scalp, neck, shoulders and upper body, it can be supportive when you feel mentally overwhelmed, caught in overthinking, tense around the jaw and shoulders, or prone to stress-related headaches. Please seek medical advice for persistent or unexplained headaches.'
  },
  {
    question:'Is Guidance a psychic or predictive card reading?',
    answer:'Not exactly. I use situational cards through an intuitive coaching method I have developed for personal, relational and professional questions. The intention is not to predict a fixed future, remove your responsibility or tell you what decision to make. I take a wider, “hawk’s-eye” view of the situation to reflect what may be happening now, what it is challenging or transforming in your life, and what perspective may help you move forward with greater clarity and self-trust.'
  },
  {
    question:'Are there contraindications to body or facial treatments?',
    answer:'Please share any pregnancy, recent surgery, injury, skin condition, allergy, infection, fever, circulatory concern, acute inflammation or relevant medical treatment before booking. The session may be adapted, postponed or require medical approval. These treatments support wellbeing and relaxation and do not replace medical care.'
  }
];

const oneToOneFaqs=[
  {
    question:'What is sophrology?',
    answer:'Sophrology is a body–mind method created in the 1960s by neuropsychiatrist Alfonso Caycedo. It combines conscious breathing, gentle movement, dynamic relaxation, guided visualisation and attention to lived sensations. Rather than analysing only with the mind, the practice helps you experience your resources through the body and gradually integrate them into daily life.'
  },
  {
    question:'Can sophrology be part of continuous therapeutic support?',
    answer:'Yes. A single session can offer an initial experience or a focused reset, while regular sessions create a personalised and progressive therapeutic support. Together, we define an intention and adapt the practices over time—for example around stress regulation, sleep, emotional balance, confidence or a life transition. Simple exercises may be suggested between sessions so that the method becomes a resource you can use independently.'
  },
  {
    question:'Can I book a single Sophrology Session?',
    answer:'Yes. A 60-minute Sophrology Session can be booked as a single experience or become part of regular support. Each session combines conscious breathing, gentle movement, dynamic relaxation and guided visualisation around what you are experiencing now.'
  },
  {
    question:'Who are Sophrology Sessions for?',
    answer:'This support may be helpful if you feel confused, overwhelmed, emotionally overloaded, disconnected from your body or caught in overthinking. It can also support stress management, nervous-system regulation, sleep difficulties, low self-trust, decision paralysis, recurring patterns, identity questions, personal or professional transitions, relationship changes, loss of direction or the desire to reconnect with what genuinely feels right for you.'
  },
  {
    question:'What can I expect after a session?',
    answer:'Every response is different. You may feel calmer, lighter, clearer, more grounded or more aware of what needs attention. You may also feel tired, emotional or in need of quiet while the experience settles. Give yourself space to hydrate, rest, journal and avoid forcing an immediate conclusion. Clarity can continue to emerge in the hours or days that follow.'
  },
  {
    question:'Does this replace medical care or psychotherapy?',
    answer:'No. Sophrology, coaching and intuitive guidance are complementary forms of support. They do not provide a medical diagnosis and do not replace care from a doctor, psychologist, psychotherapist or psychiatrist. If you are experiencing acute psychological distress, a medical emergency or symptoms requiring clinical care, please contact an appropriately qualified healthcare professional.'
  }
];

const classesFaqs:FaqItem[]=[
  {
    question:'Do I need previous experience?',
    answer:'No. Body awareness and breathwork classes are accessible to beginners. Each practice is explained progressively, with options to pause, rest or adapt the movement. The intention is not performance; it is learning to notice sensation, breath and your own rhythm.'
  },
  {
    question:'What is the difference between Body Awareness & Gentle Stretching and Sophrology Breathwork?',
    answer:'Body Awareness & Gentle Stretching uses accessible movement, sensation and the dynamic-relaxation principles of sophrology to release tension and rebuild a more attentive relationship with your body. Sophrology Breathwork focuses more directly on foundational breathing practices inspired by Alfonso Caycedo’s method, helping you regulate pressure and develop practical tools for daily life. Both approaches overlap, but each class offers a different primary doorway.'
  },
  {
    question:'What can I expect during and after a class?',
    answer:'You will be guided through arrival, accessible practices and a closing moment for integration. You may leave feeling calmer, more energised, emotionally open, physically grounded or simply more aware of yourself. Responses vary, so hydrate, rest if needed and let the experience settle without forcing a particular result.'
  },
  {
    question:'Who are the classes for?',
    answer:'They may support people who feel stressed, disconnected, mentally overloaded, tense, low in energy or curious about building a safer and more conscious relationship with their body. They can also be useful if you want practical tools for breathing, presence, sleep preparation, emotional regulation or embodied self-confidence.'
  },
  {
    question:'Are there any precautions or contraindications?',
    answer:'Please tell me before class about pregnancy, recent surgery, injury, cardiovascular or respiratory concerns, epilepsy, acute pain, dizziness, panic symptoms or any condition affected by movement or breathing practices. Breath and movement are always adapted, and you remain free to pause at any time. Classes do not replace medical or psychological care.'
  }
];

const faqsByService:Record<string,FaqItem[]>={massage:bodyCareFaqs,'one-to-one':oneToOneFaqs,classes:classesFaqs};

export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}export default function ServicePage({params}:{params:{slug:string}}){const s=services.find(x=>x.slug===params.slug);if(!s)notFound();const whatToExpect=expectations[s.slug]??expectations['one-to-one'];const serviceFaqs=faqsByService[s.slug]??[];return <><section className="page-head shell"><p className="eyebrow">Services · {s.number}</p><h1>{s.title}</h1><p>{s.description}</p></section><section className="section shell"><div className="cards">{s.items.map((item,i)=><article className="card" key={item.name}><p className="eyebrow">0{i+1}</p><h3>{item.name}</h3><p>{item.text}</p>{'price' in item&&item.price?<div className="service-meta">{'options' in item&&Array.isArray(item.options)?<div className="service-options">{item.options.map(option=><p key={option}>{option}</p>)}</div>:<p className="service-price">{'duration' in item&&item.duration?`${item.duration} · `:''}{item.price}</p>}{'location' in item&&item.location?<small>{item.location.includes('Hazenstraat 53')?<><a className="location-link" href={studioMapUrl} target="_blank" rel="noreferrer">Hazenstraat 53, 1016 SN Amsterdam ↗</a>{item.location.includes('Online')&&' · Online'}</>:item.location}</small>:<small>Location — to be confirmed</small>}</div>:<p><small>Duration · Price · Location — to be confirmed</small></p>}<CTA/></article>)}</div></section>{serviceFaqs.length>0&&<section className="section faq-section"><div className="shell faq-shell"><p className="eyebrow">{s.title}</p><h2>Frequently asked questions.</h2><div className="faq-list">{serviceFaqs.map(item=><details className="faq-item" key={item.question}><summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>}<section className="section approach"><div className="shell details"><div><p className="eyebrow">What to expect</p><h2>A space adapted to you.</h2></div><div><p>{sharedExpectation}</p>{whatToExpect.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div></section></>}
