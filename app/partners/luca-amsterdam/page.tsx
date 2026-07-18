import {CTA} from '@/components/Site';

export default function LucaAmsterdam(){return <>
  <section className="page-head shell">
    <p className="eyebrow">Partner · Amsterdam-Oost</p>
    <h1>LUCA Amsterdam</h1>
    <p>A boutique wellness space by the water where wellbeing, creativity and connection come together.</p>
  </section>

  <section className="section shell partner-detail-hero">
    <div className="partner-detail-image"><span>LUCA Amsterdam</span></div>
    <div>
      <p className="eyebrow">About the space</p>
      <h2>The cold heart of the city.</h2>
      <p>Located on Cruquiuseiland in Amsterdam-Oost, LUCA is a warm and stylish wellness space built around health, relaxation and community. The space brings together sauna and ice-bath rituals, massage, art, a bar and inspiring places to work and connect.</p>
      <a className="btn" href="https://www.luca-amsterdam.nl/" target="_blank" rel="noreferrer">Visit LUCA</a>
    </div>
  </section>

  <section className="section approach">
    <div className="shell details">
      <div><p className="eyebrow">What I offer here</p><h2>Care for body and mind.</h2></div>
      <div><h3>Massage</h3><p>Conscious full-body treatments designed to release tension, support deep rest and reconnect you with your body.</p><h3>One-to-One Therapy Sessions</h3><p>Personalised support for psycho-emotional regulation, body awareness, clarity and inner alignment.</p><CTA>Book at LUCA</CTA></div>
    </div>
  </section>

  <section className="section shell details">
    <div><p className="eyebrow">Why this partnership</p><h2>Extend the experience.</h2></div>
    <div><p>LUCA offers a natural continuation of my work. Before or after your session, you can explore a sauna or ice-bath ritual to deepen relaxation, support regulation and reconnect with physical sensation.</p><p>The combination of conscious care, warmth, cold and a welcoming community creates a complete experience for body and mind.</p><div className="note">Zeeburgerkade 1314–1316 · 1019 VK Amsterdam</div></div>
  </section>
</>}
