import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navigation } from '@/components/layout/Navigation';


export default function MRUCaseStudy() {
  return (
    <>
      
      <SkipLink />

      <Header />

      {/* Reading Progress */}
      <div className="reading-progress">
        <div className="reading-progress-bar"></div>
      </div>
      <div className="reading-time"></div>

      <main className="wrap" id="main-content">

        <section className="cs-detail-hero">
          <span className="kicker">Case Study</span>
          <h1>Designing a national toolkit to help communities respond to conflict with mediation instead of police</h1>
          <p className="lede">
            Dignity Best Practices helped Dayton, Ohio launch the nation's first 911-dispatched Mediation Response Unit. They brought me on to turn two years of that working pilot into a toolkit other cities and counties could use to build their own.
          </p>
          <ul className="cs-hero-metrics">
            <li><strong>5 <span>jurisdictions</span></strong> in the national feedback cohort</li>
            <li><strong>2 <span>cities</span></strong> now launching with the toolkit</li>
            <li><strong>15 <span>months</span></strong> follow-on grant funding secured</li>
          </ul>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <div className="label">Client</div>
              <div className="value">Dignity Best Practices</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Role</div>
              <div className="value">Design Strategist</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Duration</div>
              <div className="value">April – July 2024</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Scope</div>
              <div className="value">National Cohort</div>
            </div>
          </div>
        </section>

        <section className="cs-section-block">
          <h2>For Context</h2>
          <p>
            When someone calls 911 during a behavioral health crisis or a conflict between neighbors, police are almost always who shows up, even in situations they lack training or resources to handle well. Alternative response is the field of civilian-led programs built to change that, and most of it focuses on mental health and substance use calls. Conflict mediation (interpersonal disputes, noise complaints) was largely missing from that landscape.
          </p>
          <p>
            In 2021, Dayton, Ohio changed that. Dignity Best Practices helped the city build the first 911-dispatched Mediation Response Unit, proving a civilian mediation team could work inside a real emergency response system. The model was still so new that most cities had never heard of it as an option, let alone how to build one.
          </p>
          <p>
            Launching a program like this is an orchestration of stakeholders: a city's fire chief, 911 director, police commander, and community organizers all in the same room and moving in the same direction. That's the part DBP asked me to lead.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>The Toolkit</h2>
          <p>
            The Field Mediation Launch Toolkit is now public and free for any city or county to use.
          </p>
          <div className="cs-pdf-embed" data-pdf="/assets/files/field-mediation-toolkit-2025.pdf">
            <iframe src="/assets/files/field-mediation-toolkit-2025.pdf" title="Field Mediation Launch Toolkit (2025)"></iframe>
            <div className="pdf-controls">
              <a href="/assets/files/field-mediation-toolkit-2025.pdf" target="_blank" className="pdf-fullscreen" title="Open fullscreen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                <span>Fullscreen</span>
              </a>
              <a href="/assets/files/field-mediation-toolkit-2025.pdf" download className="pdf-download" title="Download PDF">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cs-section-block">
          <h2>Process</h2>
          <p>
            The theory of change was direct. Dayton had already proven the model worked. The job was taking what one team had built well, mostly through instinct and improvisation, and giving it enough structure that a city that had never done this before could see themselves in it. Every template and process guide in the toolkit came directly from codifying what Dayton's team had already built and proven.
          </p>
          <p>
            Before anyone could design anything, everyone at the table needed to be looking at the same picture. Half the people in a given session (a fire chief, a 911 director, a community advocate) had never seen the full arc of what launching one of these programs actually requires, so I built that arc first. Using stakeholder mapping, I identified every role that touches an MRU: city and county leadership, fire and EMS, the police division commander, 911 dispatch, behavioral health and alternative response providers, conflict mediators, community voice, and the facilitator role I was filling myself. I mapped each role to the specific capabilities the program requires to function.
          </p>
          <p>
            Alongside that, I built a journey map of the MRU Launch itself: Dayton's real path from pre-work and discovery through design, build planning, launch, and ongoing quality improvement, broken into the specific activities at each stage. This became the shared reference every session came back to.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>Readiness Assessment</h2>
          <p>
            From that shared map, I built a readiness assessment framework covering funding clarity, community trust, data access, inter-agency collaboration, and political support. Each lever translated into direct questions a jurisdiction could answer on a simple scale. I ran it as a live survey inside sessions, and the questions ended up doing more work than the assessment itself: they became the conversation.
          </p>
          <p>
            A city official would rate their CAD data access a 2, and that number would open the real discussion: what's actually blocking access, who owns that data, what would a 4 look like. The assessment did the facilitation work for me.
          </p>
          <p>
            Those levers held up well enough across sessions that I could trace them straight through to the toolkit itself. I turned the findings into four design principles (user-centered, scalable, evidence-based, and collaborative) that governed every template we built. I kept a direct line from each lever to the template meant to answer it: legal and regulatory questions map to audit trail and risk management templates, resource questions map to budget and staffing templates, community trust maps to the community input plan.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>Outcome & Reflection</h2>
          <p>
            The five jurisdictions in the Feedback Cohort (Austin/Travis County, Harris County, Tempe, Baltimore, and San Francisco) gave us something more valuable than a launch commitment: clarity on who the toolkit was actually for. These were genuinely the right people to have in the room, engaged, credible, connected to their local systems. What the process surfaced was the gap between interest and readiness to move first, and that gap became one of the clearest findings from the work.
          </p>
          <p>
            The toolkit launched. It's public now, live on DBP's site as the Field Mediation Toolkit, free for any city or county to use. DBP used it to secure follow-on grant funding, using that same toolkit to directly support Chicago and Iowa City/Johnson County in launching their own field mediation teams.
          </p>
          <p>
            What started as documentation of one city's process became the foundation DBP is now using to scale to two more. Watching the toolkit do exactly what it was built to do, travel past Dayton, is the clearest evidence the work held up.
          </p>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/mru-assets/MRU-flow.png" alt="MRU Launch Journey map showing roles, capabilities, and phases from discovery through quality improvement" />
          <figcaption>Roles, capabilities, and the full MRU Launch Journey from pre-work through quality improvement.</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2>What I Learned</h2>
          <p>
            This project taught me that the hardest design problem in civic work is alignment. The toolkit itself was straightforward: templates, process guides, assessment frameworks. The real work was getting a fire chief, a 911 director, and a community organizer to see the same picture at the same time.
          </p>
          <p>
            The deeper lesson was about the difference between interest and readiness. Every jurisdiction in the cohort wanted this to exist. The gap between wanting something and being positioned to move first is where most civic innovation stalls. The toolkit had to meet cities where they actually were.
          </p>
        </section>

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
            <a className="cs-explore-item" href="/case-study/ipg">
              <h3 className="cs-explore-title">Interpublic Group</h3>
              <p className="cs-explore-excerpt">Bringing collective intelligence to executive decision-making at a global advertising holding company operating in over 130 countries.</p>
            </a>
            <a className="cs-explore-item" href="/case-study/xq">
              <h3 className="cs-explore-title">XQ Institute</h3>
              <p className="cs-explore-excerpt">Architecting a national movement to rethink America's high schools. 26 million viewers, 2x supporter growth overnight.</p>
            </a>
          </div>
          <div className="cs-explore-back">
            <a href="/designer">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.3"/></svg>
              Back to Design
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
