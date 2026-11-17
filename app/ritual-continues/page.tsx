import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ritual Continues',
  robots: { index: false, follow: false },
};

const audioPath = '/ritual-audio/a-moment-to-come-back-to-yourself.mp3';

export default function RitualContinuesPage() {
  return (
    <section
      aria-labelledby="ritual-title"
      style={{
        width: 'min(680px, calc(100% - 32px))',
        margin: 'clamp(36px, 8vw, 100px) auto',
        padding: 'clamp(24px, 6vw, 60px)',
        border: '1px solid var(--line, #d6cbd3)',
        background: 'var(--cream, #fbf6f1)',
      }}
    >
      <p className="eyebrow">The Ritual Continues</p>
      <h1 id="ritual-title" style={{ fontSize: 'clamp(2.75rem, 8vw, 5rem)', marginBottom: 24 }}>
        A Moment to Come Back to Yourself
      </h1>
      <p>
        Thank you for your time, your presence and the trust you placed in my hands during your massage.
        I made this guided sophrology practice to continue caring for you through my voice.
        It’s yours to come back to whenever you need a moment for yourself.
      </p>
      <p style={{ marginBottom: 32 }}>With care, Laurine</p>
      <p id="ritual-duration" style={{ fontSize: '0.875rem', marginBottom: 8 }}>
        Guided sophrology · 17 min 19 sec
      </p>
      <audio
        controls
        preload="metadata"
        aria-label="A Moment to Come Back to Yourself"
        aria-describedby="ritual-duration"
        style={{ display: 'block', width: '100%' }}
      >
        <source src={audioPath} type="audio/mpeg" />
        <a href={audioPath}>Listen to the audio</a>
      </audio>
    </section>
  );
}
