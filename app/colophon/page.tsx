import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { LiveGrid } from '@/components/colophon/LiveGrid';
import './colophon.css';

export const metadata: Metadata = {
  title: 'Colophon — Zella',
  description: 'Design system, typography, and technical details',
};

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

        {/* Overview */}
        <section className="col-section">
          <p className="col-overview">
            This site is set in <strong>ABC Areal</strong>, a variable superfamily by Dinamo
            that spans sans, semi-mono, and mono on a single axis. Design, writing,
            and development by Zella.
          </p>
          <div className="stack-inline">
            <span className="stack-item"><span className="stack-label">Framework</span> Next.js 16</span>
            <span className="stack-item"><span className="stack-label">Library</span> React 19</span>
            <span className="stack-item"><span className="stack-label">Hosting</span> Vercel</span>
            <span className="stack-item"><span className="stack-label">Last Deploy</span> <span className="stack-mono">{BUILD_TIME.split('T')[0]}</span></span>
          </div>
        </section>

        {/* Typography */}
        <section className="col-section">
          <h2 className="col-heading">Typography</h2>

          <div className="col-card">
            <div className="col-card-header">
              <span className="col-label">Typeface</span>
              <a href="https://abcdinamo.com/typefaces/areal" target="_blank" rel="noopener" className="col-link">ABC Areal Variable</a>
            </div>
            <div className="col-card-body">
              <div className="type-axes">
                <div className="axis-item">
                  <span className="axis-label">MONO</span>
                  <span className="axis-value">0–100</span>
                </div>
                <div className="axis-item">
                  <span className="axis-label">wght</span>
                  <span className="axis-value">400–700</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-card">
            <div className="col-card-header">
              <span className="col-label">Specimen</span>
            </div>
            <div className="col-card-body specimen-grid">
              <div className="specimen-row">
                <span className="specimen-label">Sans</span>
                <span className="specimen-sample specimen-sans">The ceremony of innocence is drowned</span>
              </div>
              <div className="specimen-row">
                <span className="specimen-label">Semi</span>
                <span className="specimen-sample specimen-semi">The ceremony of innocence is drowned</span>
              </div>
              <div className="specimen-row">
                <span className="specimen-label">Mono</span>
                <span className="specimen-sample specimen-mono">The ceremony of innocence is drowned</span>
              </div>
            </div>
          </div>

          <div className="col-card">
            <div className="col-card-header">
              <span className="col-label">Type Scale</span>
            </div>
            <div className="col-card-body">
              <div className="scale-row">
                <span className="scale-label">4xl</span>
                <span className="scale-sample scale-4xl">We are here</span>
              </div>
              <div className="scale-row">
                <span className="scale-label">3xl</span>
                <span className="scale-sample scale-3xl">In this now</span>
              </div>
              <div className="scale-row">
                <span className="scale-label">2xl</span>
                <span className="scale-sample scale-2xl">And every now before</span>
              </div>
              <div className="scale-row">
                <span className="scale-label">xl</span>
                <span className="scale-sample scale-xl">Each time we gather</span>
              </div>
              <div className="scale-row">
                <span className="scale-label">l</span>
                <span className="scale-sample scale-l">That presence reaches forward</span>
              </div>
              <div className="scale-row">
                <span className="scale-label">base</span>
                <span className="scale-sample scale-base">Body text for extended reading</span>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="col-section">
          <h2 className="col-heading">Colors</h2>
          <div className="color-grid">
            <div className="color-card">
              <div className="color-swatch color-ink"></div>
              <div className="color-meta">
                <span className="color-name">Ink</span>
                <span className="color-hex">#17140F</span>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch color-blurple"></div>
              <div className="color-meta">
                <span className="color-name">Blurple</span>
                <span className="color-hex">#5865F2</span>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch color-green"></div>
              <div className="color-meta">
                <span className="color-name">Green</span>
                <span className="color-hex">#10B981</span>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch color-paper"></div>
              <div className="color-meta">
                <span className="color-name">Paper</span>
                <span className="color-hex">#FFFFFF</span>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch color-ink-soft"></div>
              <div className="color-meta">
                <span className="color-name">Ink Soft</span>
                <span className="color-hex">#4A453C</span>
              </div>
            </div>
            <div className="color-card">
              <div className="color-swatch color-paper-deep"></div>
              <div className="color-meta">
                <span className="color-name">Paper Deep</span>
                <span className="color-hex">#F5F5F5</span>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="col-section">
          <h2 className="col-heading">Spacing</h2>
          <p className="col-intro">Fluid spacing using clamp() for smooth scaling between 320px and 1200px viewports.</p>
          <div className="spacing-scale">
            <div className="space-row">
              <div className="space-bar space-3xs"></div>
              <span className="space-label">3xs</span>
              <span className="space-value">4–6px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-2xs"></div>
              <span className="space-label">2xs</span>
              <span className="space-value">8–12px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-xs"></div>
              <span className="space-label">xs</span>
              <span className="space-value">12–18px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-s"></div>
              <span className="space-label">s</span>
              <span className="space-value">16–24px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-m"></div>
              <span className="space-label">m</span>
              <span className="space-value">24–40px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-l"></div>
              <span className="space-label">l</span>
              <span className="space-value">32–64px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-xl"></div>
              <span className="space-label">xl</span>
              <span className="space-value">48–96px</span>
            </div>
            <div className="space-row">
              <div className="space-bar space-2xl"></div>
              <span className="space-label">2xl</span>
              <span className="space-value">64–144px</span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="col-section">
          <h2 className="col-heading">Grid</h2>
          <LiveGrid />
        </section>

        {/* Cards & Radius */}
        <section className="col-section">
          <h2 className="col-heading">Cards & Radius</h2>
          <div className="radius-demo">
            <div className="radius-card radius-none">
              <span className="radius-label">0px</span>
              <span className="radius-use">Buttons, chips</span>
            </div>
            <div className="radius-card radius-small">
              <span className="radius-label">4px</span>
              <span className="radius-use">Images, cards</span>
            </div>
            <div className="radius-card radius-medium">
              <span className="radius-label">8px</span>
              <span className="radius-use">Modals, popups</span>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section className="col-section">
          <h2 className="col-heading">Effects</h2>
          <p className="col-intro">The homepage hero text repels from the cursor using magnetic scatter physics.</p>

          <div className="col-card">
            <div className="col-card-header">
              <span className="col-label">Magnetic Scatter</span>
            </div>
            <div className="col-card-body">
              <div className="effect-specs">
                <div className="effect-row">
                  <span className="effect-label">Radius</span>
                  <span className="effect-value">60px</span>
                </div>
                <div className="effect-row">
                  <span className="effect-label">Strength</span>
                  <span className="effect-value">80</span>
                </div>
                <div className="effect-row">
                  <span className="effect-label">Easing</span>
                  <span className="effect-value">0.08</span>
                </div>
                <div className="effect-row">
                  <span className="effect-label">Rotation</span>
                  <span className="effect-value">±15°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-card">
            <div className="col-card-header">
              <span className="col-label">Force Formula</span>
            </div>
            <div className="col-card-body">
              <code className="formula">force = ((radius - distance) / radius)²</code>
              <p className="formula-note">Quadratic falloff creates natural deceleration at the edge of influence.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
