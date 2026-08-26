export default function RitualAnimation() {
  return (
    <section className="ritual-signature" aria-label="Oil, breath and presence ritual">
      <div className="shell ritual-signature-inner">
        <div className="ritual-signature-copy">
          <p className="eyebrow">A ritual of return</p>
          <h2>Oil. Breath.<br/><em>Presence.</em></h2>
          <p>Care begins before words. A slow ritual where touch, breath and awareness invite the body to soften, release and return to itself.</p>
        </div>

        <div className="ritual-motion" aria-hidden="true">
          <div className="ritual-aura" />
          <svg className="ritual-vessel" viewBox="0 0 520 560" role="presentation">
            <path className="oil-thread" d="M260 30 C258 126 262 182 260 250" />
            <path className="oil-drop" d="M260 84 C242 111 229 130 229 151 C229 171 243 185 260 185 C277 185 291 171 291 151 C291 130 278 111 260 84Z" />
            <ellipse className="oil-ripple oil-ripple-one" cx="260" cy="356" rx="45" ry="14" />
            <ellipse className="oil-ripple oil-ripple-two" cx="260" cy="356" rx="90" ry="27" />
            <ellipse className="oil-ripple oil-ripple-three" cx="260" cy="356" rx="145" ry="43" />
            <ellipse className="oil-ripple oil-ripple-four" cx="260" cy="356" rx="205" ry="61" />
          </svg>
          <div className="ritual-words">
            <span>Breathe</span><i />
            <span>Feel</span><i />
            <span>Release</span>
          </div>
        </div>
      </div>
    </section>
  );
}
