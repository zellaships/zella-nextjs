import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import './colophon.css';

export const metadata: Metadata = {
  title: 'Colophon — Zella',
  description: 'Design system, typography, and technical details',
};

// Build timestamp - updates on each deploy
const BUILD_TIME = new Date().toISOString();

export default function ColophonPage() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/">
            <img src="/assets/images/zella-logo.png" alt="Zella" className="logo-img" />
          </Link>
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

      <main className="colophon-main wrap">
        <h1 className="colophon-title">Colophon</h1>

        <div className="colophon-grid">
          {/* Left column - info */}
          <div className="colophon-info">
            <section className="colophon-block">
              <h2>Typeface</h2>
              <p><a href="https://abcdinamo.com/typefaces/areal" target="_blank" rel="noopener">ABC Areal Variable</a></p>
              <p className="meta">Dinamo Typefaces</p>
            </section>

            <section className="colophon-block">
              <h2>Stack</h2>
              <p>Next.js, React, Vercel</p>
            </section>

            <section className="colophon-block">
              <h2>Last deploy</h2>
              <p className="mono">{BUILD_TIME}</p>
            </section>

            <section className="colophon-block">
              <h2>Made by</h2>
              <p>Zella</p>
            </section>
          </div>

          {/* Right column - specimens */}
          <div className="colophon-specimens">
            <section className="specimen-block">
              <h2>Type specimen</h2>
              <div className="specimen-demo">
                <div className="specimen-row specimen-sans">
                  <span className="specimen-label">Sans</span>
                  <span className="specimen-sample">The ceremony of innocence is drowned</span>
                </div>
                <div className="specimen-row specimen-semi">
                  <span className="specimen-label">Semi</span>
                  <span className="specimen-sample">The ceremony of innocence is drowned</span>
                </div>
                <div className="specimen-row specimen-mono">
                  <span className="specimen-label">Mono</span>
                  <span className="specimen-sample">The ceremony of innocence is drowned</span>
                </div>
              </div>
            </section>

            <section className="specimen-block">
              <h2>Colors</h2>
              <div className="color-row">
                <div className="color-chip color-ink"></div>
                <span>Ink #17140F</span>
              </div>
              <div className="color-row">
                <div className="color-chip color-blurple"></div>
                <span>Blurple #5865F2</span>
              </div>
              <div className="color-row">
                <div className="color-chip color-green"></div>
                <span>Green #10B981</span>
              </div>
            </section>

            <section className="specimen-block">
              <h2>Scale</h2>
              <div className="scale-demo">
                <p className="scale-4xl">We are here</p>
                <p className="scale-2xl">In this now</p>
                <p className="scale-l">And every now before</p>
                <p className="scale-base">Body text for extended reading at base size</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
