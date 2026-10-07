'use client';

import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { TextGlowEffect } from '@/components/effects/TextGlowEffect';
import { Navigation } from '@/components/layout/Navigation';

import { useEffect, useState } from 'react';

export default function XQCaseStudy() {
  const [activeGuide, setActiveGuide] = useState('01');

  useEffect(() => {
    // Reading progress bar
    const updateReadingProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.querySelector('.reading-progress-bar') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    // Reading time calculation
    const calculateReadingTime = () => {
      const text = document.getElementById('main-content')?.innerText || '';
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      const readingTimeEl = document.querySelector('.reading-time');
      if (readingTimeEl) {
        readingTimeEl.textContent = `${time} min read`;
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    calculateReadingTime();

    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);

  const handleGuideChange = (guideNumber: string) => {
    setActiveGuide(guideNumber);

    const guideFiles: { [key: string]: string } = {
      '01': 'XQ-College-Pathfinder-01-Discovering-Your-Path-To-College.pdf',
      '02': 'XQ-College-Pathfinder-02-Building-Your-Support-Network.pdf',
      '03': 'XQ-College-Pathfinder-03-Navigating-Your-Academic-Journey.pdf',
      '04': 'XQ-College-Pathfinder-04-Paying-for-College.pdf',
      '05': 'XQ-College-Pathfinder-05-Applying-to-College.pdf'
    };

    const iframe = document.getElementById('libraryPdfViewer') as HTMLIFrameElement;
    const fullscreenLink = document.getElementById('libraryPdfFullscreen') as HTMLAnchorElement;
    const downloadLink = document.getElementById('libraryPdfDownload') as HTMLAnchorElement;

    if (iframe && guideFiles[guideNumber]) {
      const pdfPath = `/assets/files/${guideFiles[guideNumber]}`;
      iframe.src = `${pdfPath}#toolbar=0&navpanes=0`;
      if (fullscreenLink) fullscreenLink.href = pdfPath;
      if (downloadLink) downloadLink.href = pdfPath;
    }
  };

  return (
    <>
      
      <TextGlowEffect />
      <SkipLink />
      <Header />
      <Navigation />

      {/* Reading Progress */}
      <div className="reading-progress">
        <div className="reading-progress-bar"></div>
      </div>
      <div className="reading-time"></div>

      <main className="wrap" id="main-content">

        <section className="cs-detail-hero">
          <span className="kicker">Case Study</span>
          <h1>Architecting a national movement to rethink America's high schools</h1>
          <p className="lede">
            In 2017, XQ aired an hour-long live special on all four major broadcast networks (ABC, NBC, CBS, and FOX) reaching 26 million Americans. I helped design the movement structure, engagement strategy, and digital tools that turned a one-night broadcast into a sustained national conversation about the future of public education.
          </p>
          <ul className="cs-hero-metrics">
            <li><strong>26M <span>viewers</span></strong> reached through live broadcast</li>
            <li><strong>2x <span>growth</span></strong> in supporters overnight via SMS</li>
            <li><strong>100K+ <span>members</span></strong> by end of campaign</li>
          </ul>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <div className="label">Client</div>
              <div className="value">XQ Institute / Emerson Collective</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Agency</div>
              <div className="value">SYPartners</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Role</div>
              <div className="value">Design Strategist</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Duration</div>
              <div className="value">2017–2018</div>
            </div>
          </div>
        </section>

        <figure className="cs-hero-image">
          <img src="/assets/images/pages/page-14.jpg" alt="XQ College Pathfinder guidebooks showing five themed sections" />
        </figure>

        <section className="cs-section-block">
          <h2>The Context</h2>
          <p>
            The American high school was designed over a century ago for a manufacturing economy. XQ, backed by the Emerson Collective, launched to change that, starting with an open call for educators, parents, and students to design the next model for public education.
          </p>
          <p>
            By 2017, more than 10,000 people had submitted proposals. XQ's community had grown to 100,000 supporters. The live TV special was meant to be the spark that turned early momentum into a national movement, but a broadcast only lasts an hour. The question was: what happens after the credits roll?
          </p>
        </section>

        <section className="cs-section-block">
          <h2>My Role</h2>
          <p>
            As a design strategist on SYPartners' team, I led the design of movement structure, engagement systems, and digital tools that would carry the broadcast's energy forward. My work spanned three layers:
          </p>
          <ul>
            <li><strong>Movement structure:</strong> I designed the narrative arc and calls-to-action that converted viewers into participants</li>
            <li><strong>Engagement strategy:</strong> I structured the SMS and content funnel that kept people engaged after the broadcast</li>
            <li><strong>Product design:</strong> I designed College Pathfinder, a tool to help young people navigate the path from high school to college</li>
          </ul>
        </section>

        <section className="cs-section-block">
          <h2>Turning Viewers into Participants</h2>
          <p>
            26 million people watching a broadcast is a moment. Keeping them engaged is a system. We designed a call-to-action for the live show (text XQLIVE to 225568) that doubled XQ's supporter base overnight. SMS became their most effective channel for content distribution and long-term engagement.
          </p>
          <p>
            The structure behind that CTA mattered as much as the CTA itself. Using an action ladder framework, we designed segmentation by audience type (student, parent, educator), sequenced content drops, and pathways that moved people from passive interest to actually participating.
          </p>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/pages/page-15.jpg" alt="Strategic deliverables: experience arc, SMS interaction design, action ladders, and design principles" />
          <figcaption>Movement structure: experience arcs, SMS flows, action ladders, and design principles that turned broadcast viewers into long-term participants.</figcaption>
        </figure>

        <figure className="cs-embed-full">
          <div className="cs-embed-wrapper" data-pdf="/assets/images/xq-assets/Viewing_Party_Discussion_Guide_Final.pdf">
            <iframe src="/assets/images/xq-assets/Viewing_Party_Discussion_Guide_Final.pdf#toolbar=0&navpanes=0&scrollbar=0" loading="lazy"></iframe>
            <div className="pdf-controls">
              <a href="/assets/images/xq-assets/Viewing_Party_Discussion_Guide_Final.pdf" target="_blank" className="pdf-fullscreen" title="Open fullscreen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                <span>Fullscreen</span>
              </a>
              <a href="/assets/images/xq-assets/Viewing_Party_Discussion_Guide_Final.pdf" download className="pdf-download" title="Download PDF">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                <span>Download</span>
              </a>
            </div>
          </div>
          <figcaption>Viewing Party Discussion Guide: designed to turn passive viewers into active participants through structured questions, activities, and social sharing prompts.</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2>College Pathfinder</h2>
          <p>
            The broadcast raised awareness. The tools had to deliver value. I designed College Pathfinder, a digital guide to help young people navigate the path from high school to higher education. I led the design and content structure; XQ's education experts provided the research foundation and subject matter expertise.
          </p>
          <p>
            The guide covered five territories: discovering your strengths, navigating your academic journey, paying for college, building your support network, and applying. Each section balanced inspiration with practical steps, designed to meet students where they were, whether a first-generation college applicant or a junior just starting to think about the future.
          </p>
        </section>

        <figure className="cs-embed-full">
          <div className="cs-embed-wrapper" data-pdf="/assets/images/xq-assets/XQ_P2CTimeline_v04zv.pdf">
            <iframe src="/assets/images/xq-assets/XQ_P2CTimeline_v04zv.pdf#toolbar=0&navpanes=0&scrollbar=0" loading="lazy"></iframe>
            <div className="pdf-controls">
              <a href="/assets/images/xq-assets/XQ_P2CTimeline_v04zv.pdf" target="_blank" className="pdf-fullscreen" title="Open fullscreen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                <span>Fullscreen</span>
              </a>
              <a href="/assets/images/xq-assets/XQ_P2CTimeline_v04zv.pdf" download className="pdf-download" title="Download PDF">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                <span>Download</span>
              </a>
            </div>
          </div>
          <figcaption>College Pathfinder timeline: a four-year guide from freshman to senior year, designed to meet students where they are.</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2>Design Principles</h2>
          <p>
            We established a framework called "Design to Empower" that guided every decision, from visual tone to information structure:
          </p>
          <ul>
            <li><strong>Create connection:</strong> Let users see themselves in the path described</li>
            <li><strong>Foster discovery:</strong> Build curiosity and momentum through the content</li>
            <li><strong>Build commitment:</strong> Make the next step obvious and achievable</li>
            <li><strong>Stay accessible:</strong> Remove barriers to entry, especially for first-generation students</li>
          </ul>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/pages/page-17.jpg" alt="Interior pages of the College Pathfinder guide showing layout and content design" />
          <figcaption>Each section balanced inspiration with practical guidance, designed to empower without overwhelming.</figcaption>
        </figure>

        <section className="cs-library">
          <h2>The College Pathfinder Library</h2>
          <p>Browse all five guides from the College Pathfinder series. Click any guide to view it inline.</p>

          <div className="cs-library-tabs" role="tablist">
            <button
              className={`cs-library-tab ${activeGuide === '01' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeGuide === '01'}
              data-guide="01"
              onClick={() => handleGuideChange('01')}
            >
              <span className="tab-number">I.</span>
              <span className="tab-title">Discovering Your Path</span>
            </button>
            <button
              className={`cs-library-tab ${activeGuide === '02' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeGuide === '02'}
              data-guide="02"
              onClick={() => handleGuideChange('02')}
            >
              <span className="tab-number">II.</span>
              <span className="tab-title">Building Your Support Network</span>
            </button>
            <button
              className={`cs-library-tab ${activeGuide === '03' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeGuide === '03'}
              data-guide="03"
              onClick={() => handleGuideChange('03')}
            >
              <span className="tab-number">III.</span>
              <span className="tab-title">Navigating Your Academic Journey</span>
            </button>
            <button
              className={`cs-library-tab ${activeGuide === '04' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeGuide === '04'}
              data-guide="04"
              onClick={() => handleGuideChange('04')}
            >
              <span className="tab-number">IV.</span>
              <span className="tab-title">Paying for College</span>
            </button>
            <button
              className={`cs-library-tab ${activeGuide === '05' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeGuide === '05'}
              data-guide="05"
              onClick={() => handleGuideChange('05')}
            >
              <span className="tab-number">V.</span>
              <span className="tab-title">Applying to College</span>
            </button>
          </div>

          <div className="cs-library-viewer">
            <div className="cs-library-frame">
              <iframe
                id="libraryPdfViewer"
                src="/assets/files/XQ-College-Pathfinder-01-Discovering-Your-Path-To-College.pdf#toolbar=0&navpanes=0"
                loading="lazy"
                title="College Pathfinder Guide Viewer">
              </iframe>
              <div className="pdf-controls">
                <a href="/assets/files/XQ-College-Pathfinder-01-Discovering-Your-Path-To-College.pdf" target="_blank" className="pdf-fullscreen" id="libraryPdfFullscreen" title="Open fullscreen">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                  <span>Fullscreen</span>
                </a>
                <a href="/assets/files/XQ-College-Pathfinder-01-Discovering-Your-Path-To-College.pdf" download className="pdf-download" id="libraryPdfDownload" title="Download PDF">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section-block">
          <h2>Naming & Positioning</h2>
          <p>
            The original working title, "Passport to College," tested poorly. The passport metaphor felt like a transaction, and for immigrant students, it carried unintended weight. Using a design sprint approach, we led a naming sprint grounded in a core insight: 95% of freshmen already want to go to college. The barrier was never motivation. It was complexity, lack of resources, and the absence of mentorship.
          </p>
          <p>
            We reframed the guide as a mentor or big sibling, someone who demystifies the process rather than sells the destination. The naming criteria that emerged:
          </p>
          <ul>
            <li><strong>Connect to future self:</strong> Help students see who they could become</li>
            <li><strong>Signal support:</strong> You are not alone in this</li>
            <li><strong>Balance tactical and hopeful:</strong> Steps you can take today, journey you can imagine tomorrow</li>
          </ul>
          <p>
            We presented four alternatives to leadership, each pressure-tested against competitive landscape (BigFuture, College Board) and tone. The final name, College Pathfinder, landed on the balance we were looking for: grounded enough to be useful, forward-looking enough to inspire.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>Impact</h2>
          <p>
            The numbers tell part of the story:
          </p>
          <ul>
            <li><strong>26 million</strong> Americans reached through the live broadcast</li>
            <li><strong>2x growth</strong> in XQ's supporter base overnight via SMS</li>
            <li><strong>100,000+</strong> community members by end of campaign</li>
            <li><strong>Thousands</strong> of College Pathfinder downloads in the first week</li>
          </ul>
          <p>
            The larger impact was structural: SMS became XQ's most effective engagement channel, and the movement structure we designed gave them a repeatable system for turning moments into ongoing engagement.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>What I Learned</h2>
          <p>
            Movement design taught me that reach is not the same as engagement. 26 million viewers meant nothing without converting attention into action. The action ladder (text a number, receive content, join a community, host a viewing party) was the real product. The broadcast was just the trigger.
          </p>
          <p>
            The naming work taught me something else: language carries weight you may not see. "Passport" felt neutral to us. To first-generation and immigrant students, it carried the weight of documents, barriers, access denied. The best naming is careful, not clever.
          </p>
        </section>

      </main>

      <section className="cs-explore cs-explore--brutalist">
        <span className="cs-explore-label">Other Case Studies</span>
        <div className="cs-explore-strip">
          <a className="cs-explore-item" href="/case-study/along">
            <h3 className="cs-explore-title">Along Mentoring Tool</h3>
            <p className="cs-explore-excerpt">Designing a relationship-building tool that helps teachers and students connect through structured reflection prompts.</p>
          </a>
          <a className="cs-explore-item" href="/case-study/czi">
            <h3 className="cs-explore-title">Chan Zuckerberg Initiative</h3>
            <p className="cs-explore-excerpt">Designing digital tools to help empower teachers, school leaders, and young people with data and educational experiences.</p>
          </a>
          <a className="cs-explore-item" href="/case-study/mru">
            <h3 className="cs-explore-title">Mediation Response Unit</h3>
            <p className="cs-explore-excerpt">Designing a national toolkit to help communities respond to conflict with mediation instead of police.</p>
          </a>
          <a className="cs-explore-item" href="/case-study/ipg">
            <h3 className="cs-explore-title">Interpublic Group</h3>
            <p className="cs-explore-excerpt">Bringing collective intelligence to executive decision-making at a global advertising holding company operating in over 130 countries.</p>
          </a>
        </div>
        <div className="cs-explore-back">
          <a href="/designer">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.3"/></svg>
            Back to Design
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
