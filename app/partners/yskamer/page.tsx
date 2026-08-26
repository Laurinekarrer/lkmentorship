import {CTA} from '@/components/Site';

export default function Yskamer(){return <>
  <section className="page-head shell">
    <p className="eyebrow">Partner · Amsterdam Centrum</p>
    <h1>Yskamer</h1>
    <p>A sauna and ice-bath studio in the heart of Amsterdam created for breath, presence and a complete reset.</p>
  </section>

  <section className="section shell partner-detail-hero">
    <div className="partner-detail-image yskamer-image"><span>Yskamer Amsterdam</span></div>
    <div>
      <p className="eyebrow">About the space</p>
      <h2>Breathe. Sweat. Plunge. Surface.</h2>
      <p>Located in the 9 Straatjes, Yskamer is an intimate and down-to-earth wellness studio centred around the contrast between heat and cold. Its 90°C sauna and two ice baths at 3°C and 6°C offer a simple ritual for slowing down, feeling present and reconnecting with the body.</p>
      <a className="btn" href="https://yskamer.nl/" target="_blank" rel="noreferrer">Visit Yskamer</a>
    </div>
  </section>

  <section className="shell yskamer-gallery" aria-label="Yskamer partnership photographs">
    <div className="yskamer-gallery-stretch" role="img" aria-label="Laurine Karrer guiding body awareness at Yskamer" />
    <div className="yskamer-gallery-partners" role="img" aria-label="Laurine Karrer with the Yskamer team in Amsterdam" />
    <div className="yskamer-gallery-icebath" role="img" aria-label="Laurine Karrer beside the Yskamer ice bath" />
  </section>

  <section className="section approach">
    <div className="shell details">
      <div><p className="eyebrow">What I offer here</p><h2>Breath, regulation and rest.</h2></div>
      <div className="partner-offers">
        <h3>Beginner Breathwork</h3><p>Accessible classes and private sessions to discover conscious breathing, reconnect with your body and build safe foundations.</p>
        <h3>Breathwork Progression</h3><p>Classes and private sessions for those ready to deepen breath awareness, regulation and practice.</p>
        <h3>Sleep Improvement</h3><p>Classes and private sessions combining breath, relaxation and practical tools to prepare the body and mind for more restorative sleep.</p>
        <CTA>Book at Yskamer</CTA>
      </div>
    </div>
  </section>

  <section className="section shell details">
    <div><p className="eyebrow">Why this partnership</p><h2>A complete regulation ritual.</h2></div>
    <div><p>Yskamer creates a powerful setting for returning to the present moment. Breathwork and sleep-focused practices support awareness and nervous-system regulation, while sauna and cold exposure offer a complementary physical experience.</p><p>Your breathwork session and the sauna or ice-bath ritual remain separate experiences, allowing each practice to be approached safely and at your own pace.</p><div className="note">Beulingstraat 21-H · 1017 BA Amsterdam</div></div>
  </section>
</>}
