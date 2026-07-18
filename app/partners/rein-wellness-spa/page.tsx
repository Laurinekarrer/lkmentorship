import {CTA} from '@/components/Site';

export default function ReinWellnessSpa(){return <>
  <section className="page-head shell">
    <p className="eyebrow">Partner · Amsterdam-West</p>
    <h1>Rein Wellness Spa</h1>
    <p>A calm wellness space dedicated to relaxation, body connection and shared moments between parent and baby.</p>
  </section>

  <section className="section shell partner-detail-hero">
    <div className="partner-detail-image rein-image"><span>Rein Wellness Spa</span></div>
    <div>
      <p className="eyebrow">About the space</p>
      <h2>Relax. Refresh. Recharge.</h2>
      <p>Rein Wellness Spa is an oasis of calm in Amsterdam-West. Alongside its private spa, magnesium floating and Japanese head spa, the space offers a dedicated baby spa where parents and babies can slow down, connect and experience floating and nurturing touch together.</p>
      <a className="btn" href="https://reinwellnessspa.nl/" target="_blank" rel="noreferrer">Visit Rein</a>
    </div>
  </section>

  <section className="section approach">
    <div className="shell details">
      <div><p className="eyebrow">What I offer here</p><h2>Awareness from the earliest moments.</h2></div>
      <div className="partner-offers">
        <h3>Body Awareness Classes</h3><p>Gentle classes exploring sensation, breath, movement and a more conscious relationship with the body.</p>
        <h3>Baby Spa & Float Support</h3><p>A calm and attentive presence supporting parents and babies throughout the baby-spa and floating experience, always following the baby’s signals and the venue’s protocols.</p>
        <h3>Baby Massage</h3><p>Nurturing touch practices designed to support relaxation, bonding and a deeper understanding of your baby’s non-verbal cues.</p>
        <CTA>Book at Rein</CTA>
      </div>
    </div>
  </section>

  <section className="section shell details">
    <div><p className="eyebrow">Why this partnership</p><h2>Care begins with listening.</h2></div>
    <div><p>Rein Wellness Spa offers a natural setting for bringing body awareness into the relationship between parent and baby. Floating creates space for free movement, while conscious touch encourages parents to slow down and respond to their baby’s individual rhythm.</p><p>This partnership extends my work around presence and body listening into the earliest stages of connection, while respecting comfort, consent cues and each baby’s needs.</p><div className="note">Admiralengracht 223 · 1056 DX Amsterdam</div></div>
  </section>
</>}
