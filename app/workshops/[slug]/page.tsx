import {notFound} from 'next/navigation';
import {CTA} from '@/components/Site';

const workshops = {
  'body-awareness-lab': {
    title: 'Body Awareness Lab',
    description: 'Explore the language of sensation and embodied self-trust through conscious movement, breath and guided awareness.',
    date: 'To be announced',
    place: 'Amsterdam',
    duration: '2 hours',
  },
  'breath-release': {
    title: 'Breath & Release',
    description: 'A nervous-system-led exploration of conscious breath, release and deep reconnection.',
    date: 'To be announced',
    place: 'Amsterdam',
    duration: '2 hours',
  },
} as const;

export function generateStaticParams(){return Object.keys(workshops).map(slug=>({slug}))}

export default function WorkshopPage({params}:{params:{slug:string}}){
  const workshop=workshops[params.slug as keyof typeof workshops];
  if(!workshop)notFound();
  return <>
    <section className="page-head shell"><p className="eyebrow">Workshop</p><h1>{workshop.title}</h1></section>
    <section className="section shell">
      <article className="workshop">
        <div className={`photo workshop-detail-photo workshop-${params.slug}`}/>
        <div className="workshop-copy">
          <p className="eyebrow">Upcoming workshop</p>
          <h2>{workshop.title}</h2>
          <p>{workshop.description}</p>
          <div className="facts">
            <div className="fact"><span>Date</span><b>{workshop.date}</b></div>
            <div className="fact"><span>Place</span><b>{workshop.place}</b></div>
            <div className="fact"><span>Duration</span><b>{workshop.duration}</b></div>
          </div>
          <div className="buttons"><CTA>Join the workshop</CTA></div>
        </div>
      </article>
    </section>
  </>;
}
