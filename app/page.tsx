import type { Metadata } from 'next';
import Link from 'next/link';
import { MagneticScatterText } from '@/components/effects/MagneticScatterText';

export const metadata: Metadata = {
  title: 'Zella — Artist, Designer, Cultural Organizer',
  description: 'Zella is an artist, cultural organizer, and designer whose work spans performance, painting, zines, and portal-making. Based in Brooklyn and Abidjan.',
  openGraph: {
    title: 'Zella — Artist, Designer, Cultural Organizer',
    description: 'Artist, cultural organizer, and designer whose work spans performance, painting, zines, and portal-making.',
    type: 'website',
    url: 'https://zella.design/',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zella — Artist, Designer, Cultural Organizer',
    description: 'Artist, cultural organizer, and designer whose work spans performance, painting, zines, and portal-making.',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
  icons: {
    icon: '/assets/images/zella-logo.png',
    apple: '/assets/images/zella-logo.png',
  },
};

export default function HomePage() {
  return (
    <div className="home-locked">
      <MagneticScatterText />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <canvas id="ink-canvas"></canvas>

      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/"><img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" /></Link>
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className="doors">
            <Link href="/">Home</Link>
            <Link href="/artist">Art</Link>
            <Link href="/designer">Design</Link>
          </nav>
        </div>
      </header>

      <main className="wrap" id="main-content">
        <section className="essay essay-wide">
          <h1>Zella is an artist, cultural organizer, and designer whose work spans performance, painting, zines, and portal-making. Their work has been exhibited internationally and supported by Mass MoCA, LMCC, and Flux Factory. Zella splits their time between Brooklyn and Abidjan and is a co-founder and product lead with Black Veterans Project.</h1>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-right">
            <a href="mailto:zellavanie@gmail.com?subject=Hi%20Zella!" className="footer-link">Email me</a>
            <a href="https://www.instagram.com/zellanealehurston/" target="_blank" rel="noopener" className="footer-link">Instagram</a>
            <a href="https://x.com/zella_vanie" target="_blank" rel="noopener" className="footer-link">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
