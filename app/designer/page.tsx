'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navigation } from '@/components/layout/Navigation';
import { TextGlowEffect } from '@/components/effects/TextGlowEffect';

export default function DesignerPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showError, setShowError] = useState(false);

  // Check unlock status on mount
  useEffect(() => {
    const checkUnlocked = () => {
      const stored = localStorage.getItem('zv_ax');
      if (!stored) return false;
      try {
        const data = JSON.parse(stored);
        const sessionToken = generateSessionToken();
        return data.v === 1 && data.t === sessionToken;
      } catch {
        return false;
      }
    };

    if (checkUnlocked()) {
      setIsUnlocked(true);
    }
  }, []);

  // Session token generator
  const generateSessionToken = () => {
    const hashString = (s: string) => {
      let h = 0;
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        h = ((h << 5) - h) + c;
        h = h & h;
      }
      return h.toString(36);
    };

    const d = new Date().toDateString();
    return hashString(d + navigator.userAgent.slice(0, 20));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hash function for password verification
    const hashPassword = (s: string) => {
      let h = 0;
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        h = ((h << 5) - h) + c;
        h = h & h;
      }
      return h.toString(36);
    };

    const expectedHash = '-dreq7x';

    if (hashPassword(passwordInput) === expectedHash) {
      // Store unlock with session token
      const sessionToken = generateSessionToken();
      localStorage.setItem('zv_ax', JSON.stringify({ v: 1, t: sessionToken }));

      setIsUnlocked(true);
      setPasswordInput('');
      setShowError(false);
    } else {
      setShowError(true);
      setPasswordInput('');
      setTimeout(() => setShowError(false), 1600);
    }
  };

  // Case study data
  const caseStudies = [
    {
      href: '/case-study/along',
      image: '/assets/images/czi-assets/along-showcase.png',
      tags: ['Product Design', 'Responsive', 'Ed Tech'],
      title: 'Along Mentoring Tool',
      isScroll: true
    },
    {
      href: '/case-study/czi',
      image: '/assets/images/czi-assets/dashboard-new-crop.jpg',
      tags: ['Product Design', 'Data Visualization', 'Design Systems'],
      title: 'Chan Zuckerberg Initiative',
      isScroll: true
    },
    {
      href: '/case-study/mru',
      image: '/assets/images/mru-assets/toolkit-flipbook.gif',
      tags: ['Design Strategy', 'Civic Design', 'Toolkit'],
      title: 'Mediation Response Unit Toolkit',
      isScroll: false
    },
    {
      href: '/case-study/ipg',
      image: '/assets/images/pages/ipg-phone-tight.jpg',
      tags: ['Enterprise UX', 'Workflow Design', 'Mobile Design'],
      title: 'Interpublic Group',
      isScroll: false
    },
    {
      href: '/case-study/xq',
      image: '/assets/images/pages/xq-covers-crop.jpg',
      tags: ['Movement Design', 'Engagement Strategy', 'Design Strategy'],
      title: 'XQ Institute',
      isScroll: false
    }
  ];

  return (
    <>
      <TextGlowEffect />
      <SkipLink />
      <Header />
      <Navigation />

      <main className="wrap" id="main-content">
        <section className="section-hero">
          <h1>Design</h1>
        </section>

        <section className="designer-intro">
          <div className="designer-intro-main">
            <p>
              I&apos;m currently Product Lead and Co-Founder with Black Veterans Project.
            </p>
            <p>
              Before that, I spent three years as a staff product designer at a major edtech platform, moving between building 0-1 product experiences and the strategy that shaped them, plus a year leading two design teams as a manager, working across large cross-functional teams on products used by thousands of K-12 educators, students, and school leaders.
            </p>
            <p>
              My T-shape as a designer spans hands-on product and interaction design, visual language, to product management, to the strategic layer, helping teams navigate complexity, align on vision, and ship meaningful experiences across software, digital transformation, and narrative design.
            </p>
            <p>
              I&apos;ve also designed curriculum and taught interaction design at NYU and California College of the Arts.
            </p>
            <p>
              Alongside BVP, I founded and run the Experimental School for Imagination, where I&apos;ve built the digital infrastructure, our zine library, and membership system.
            </p>
          </div>
          <aside className="designer-intro-sidebar">
            <div className="exp-item">
              <span className="exp-date">2022–Now</span>
              <span className="exp-role">Product Lead, Co-founder</span>
              <span className="exp-org">Black Veterans Project</span>
            </div>
            <div className="exp-item">
              <span className="exp-date">2019–22</span>
              <span className="exp-role">Design Lead, Manager</span>
              <span className="exp-org">Chan Zuckerberg Initiative</span>
            </div>
            <div className="exp-item">
              <span className="exp-date">2018–19</span>
              <span className="exp-role">Senior Design Strategist</span>
              <span className="exp-org">Contract — IPG</span>
            </div>
            <div className="exp-item">
              <span className="exp-date">2016–17</span>
              <span className="exp-role">Contract Designer & Strategist</span>
              <span className="exp-org">SYPartners</span>
            </div>
            <div className="exp-item">
              <span className="exp-date">2013–16</span>
              <span className="exp-role">Freelance Designer</span>
              <span className="exp-org">Pfizer, Poker Central, Creative Good</span>
            </div>
            <div className="exp-item">
              <span className="exp-date">2006–10</span>
              <span className="exp-role">Satellite Technician Sergeant</span>
              <span className="exp-org">US Army</span>
            </div>
          </aside>
        </section>

        <div className="logo-marquee">
          <span className="logo-marquee-label">Select clients & collaborators</span>
          <div className="logo-marquee-track">
            <img src="/assets/images/logos/ibm.png" alt="IBM" loading="lazy" />
            <img src="/assets/images/logos/ww.png" alt="WW" loading="lazy" />
            <img src="/assets/images/logos/emerson-collective.png" alt="Emerson Collective" loading="lazy" />
            <img src="/assets/images/logos/viacom.png" alt="Viacom" loading="lazy" />
            <img src="/assets/images/logos/ipg.png" alt="IPG" loading="lazy" />
            <img src="/assets/images/logos/virgin.png" alt="Virgin" loading="lazy" />
            <img src="/assets/images/logos/xq.png" alt="XQ" loading="lazy" />
            <img src="/assets/images/logos/us-green-building-council.png" alt="US Green Building Council" loading="lazy" />
            <img src="/assets/images/logos/hias.png" alt="HIAS" loading="lazy" />
            <img src="/assets/images/logos/fast-company.png" alt="Fast Company" loading="lazy" />
            {/* Duplicate for seamless loop */}
            <img src="/assets/images/logos/ibm.png" alt="IBM" loading="lazy" />
            <img src="/assets/images/logos/ww.png" alt="WW" loading="lazy" />
            <img src="/assets/images/logos/emerson-collective.png" alt="Emerson Collective" loading="lazy" />
            <img src="/assets/images/logos/viacom.png" alt="Viacom" loading="lazy" />
            <img src="/assets/images/logos/ipg.png" alt="IPG" loading="lazy" />
            <img src="/assets/images/logos/virgin.png" alt="Virgin" loading="lazy" />
            <img src="/assets/images/logos/xq.png" alt="XQ" loading="lazy" />
            <img src="/assets/images/logos/us-green-building-council.png" alt="US Green Building Council" loading="lazy" />
            <img src="/assets/images/logos/hias.png" alt="HIAS" loading="lazy" />
            <img src="/assets/images/logos/fast-company.png" alt="Fast Company" loading="lazy" />
          </div>
        </div>

        <h2 className="section-header">Product, Design, and Strategy Case Studies</h2>

        <div className="cs-featured-cards">
          <div className="cs-featured-card">
            <div className="cs-featured-content">
              <ul className="cs-card-tags">
                <li>Product Lead</li>
                <li>Brand & Web Redesign</li>
                <li>Headless CMS</li>
              </ul>
              <h2 className="cs-featured-title">Black Veterans Project</h2>
              <p className="cs-featured-desc">After years of growth with the same website, BVP had evolved into a national social justice organization, and our digital presence needed to reflect that. As co-founder and product lead, I led our website redesign—shipped in 8 weeks—coordinating brand design and content while also handling development. I chose a headless CMS so our comms team could update content without engineering support, and structured it to feed future channels as we scale.</p>
              <div className="cs-featured-links">
                <a href="https://www.blackveteransproject.org/" target="_blank" rel="noopener" className="cs-featured-link">View live site →</a>
                <a href="https://www.blackveteransproject.org/design-system" target="_blank" rel="noopener" className="cs-featured-link">View design system →</a>
              </div>
            </div>
            <div className="cs-featured-preview">
              <div className="browser-chrome">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">blackveteransproject.org</div>
              </div>
              <div className="browser-viewport browser-viewport-interactive">
                <iframe
                  src="https://www.blackveteransproject.org/"
                  title="Black Veterans Project website preview"
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>

          <div className="cs-featured-card">
            <div className="cs-featured-content">
              <ul className="cs-card-tags">
                <li>Founding Organizer</li>
                <li>Brand Identity</li>
                <li>Web Design</li>
              </ul>
              <h2 className="cs-featured-title">Experimental School for Black Imagination</h2>
              <p className="cs-featured-desc">ESBI is a collective offering led by artists tending to the ways we come together to create, feel, and grow. As a founding organizer, I solo-built everything: brand identity, digital infrastructure, web design, and a lightweight design system with tokens that sync directly to code. The site holds the school&apos;s programs, a zine library, publications, and membership system—shipped iteratively as each program launched, then refined based on how our community actually used it.</p>
              <div className="cs-featured-links">
                <a href="https://experimentalschoolforblackimagination.com/" target="_blank" rel="noopener" className="cs-featured-link">View live site →</a>
              </div>
            </div>
            <div className="cs-featured-preview">
              <div className="browser-chrome">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">experimentalschoolforblackimagination.com</div>
              </div>
              <div className="browser-viewport browser-viewport-interactive">
                <iframe
                  src="https://experimentalschoolforblackimagination.com/"
                  title="Experimental School for Black Imagination website preview"
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Password Gate */}
        <div className="cs-gate-box" id="csGateSection">
          <span className="cs-gate-label">My other past work is password protected. <a href="mailto:zellavanie@gmail.com?subject=Portfolio%20request%20%F0%9F%91%80" className="cs-gate-link">Reach out</a> if you&apos;d like to see it.</span>
          <form className="cs-gate-form-inline" id="csGateForm" onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              id="csPassword"
              placeholder="Password"
              autoComplete="off"
              spellCheck={false}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button type="submit" aria-label="Submit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
          {showError && <span className="cs-gate-error" id="csGateError">Incorrect password</span>}
        </div>

        {/* Placeholder cards (visible before unlock) */}
        {!isUnlocked && (
          <section className="cs-gate-section">
            <div className="cs-grid cs-grid-placeholder" id="csGridPlaceholder">
              <div className="cs-card cs-card-placeholder">
                <div className="cs-card-image cs-card-placeholder-img">
                  <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <ul className="cs-card-tags">
                  <li>Product Design</li>
                  <li>Responsive</li>
                  <li>Ed Tech</li>
                </ul>
                <h2 className="cs-card-title">Protected Case Study</h2>
              </div>
              <div className="cs-card cs-card-placeholder">
                <div className="cs-card-image cs-card-placeholder-img">
                  <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <ul className="cs-card-tags">
                  <li>Product Design</li>
                  <li>Data Visualization</li>
                  <li>Design Systems</li>
                </ul>
                <h2 className="cs-card-title">Protected Case Study</h2>
              </div>
              <div className="cs-card cs-card-placeholder">
                <div className="cs-card-image cs-card-placeholder-img">
                  <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <ul className="cs-card-tags">
                  <li>Design Strategy</li>
                  <li>Civic Design</li>
                  <li>Toolkit</li>
                </ul>
                <h2 className="cs-card-title">Protected Case Study</h2>
              </div>
              <div className="cs-card cs-card-placeholder">
                <div className="cs-card-image cs-card-placeholder-img">
                  <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <ul className="cs-card-tags">
                  <li>Enterprise UX</li>
                  <li>Workflow Design</li>
                  <li>Mobile Design</li>
                </ul>
                <h2 className="cs-card-title">Protected Case Study</h2>
              </div>
              <div className="cs-card cs-card-placeholder">
                <div className="cs-card-image cs-card-placeholder-img">
                  <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <ul className="cs-card-tags">
                  <li>Movement Design</li>
                  <li>Engagement Strategy</li>
                  <li>Design Strategy</li>
                </ul>
                <h2 className="cs-card-title">Protected Case Study</h2>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid (shown when unlocked) */}
        {isUnlocked && (
          <div className="cs-grid cs-grid-unlocked" id="csGrid">
            {caseStudies.map((study, index) => (
              <Link key={index} className="cs-card" href={study.href}>
                <div className={`cs-card-image${study.isScroll ? ' cs-card-scroll' : ''}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className={study.isScroll ? 'scroll-img' : ''}
                    loading="eager"
                  />
                </div>
                <ul className="cs-card-tags">
                  {study.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
                <h2 className="cs-card-title">{study.title}</h2>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
