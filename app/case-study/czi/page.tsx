import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navigation } from '@/components/layout/Navigation';


export default function CZICaseStudy() {
  return (
    <div className="case-study">
      
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
          <h1>Designing digital tools to help empower teachers, school leaders, and young people with data and educational experiences</h1>
          <p className="lede">
            The Chan Zuckerberg Initiative's education team, focused on advancing personalized learning, required product solutions that would integrate data-driven insights into educational strategies for middle and high schools across the nation.
          </p>
          <ul className="cs-hero-metrics">
            <li><strong>30% <span>increase</span></strong> in data drill-down usage during back to school</li>
            <li><strong>3 <span>surfaces</span></strong> across the platform adopted the design system</li>
            <li><strong>300 <span>schools</span></strong> using the Summit Learning platform</li>
          </ul>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <div className="label">Company</div>
              <div className="value">Chan Zuckerberg Initiative</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Role</div>
              <div className="value">Lead Product Designer</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Duration</div>
              <div className="value">3 years</div>
            </div>
            <div className="cs-meta-item">
              <div className="label">Teams</div>
              <div className="value">Growth & Onboarding</div>
            </div>
          </div>
        </section>

        <section className="cs-section-split">
          <div className="cs-split-text">
            <h2>For Context</h2>
            <p>
              We built ed tech tools for Summit Learning, a personalized, project-based instructional model live in public and charter schools nationwide. For students, it delivers personalized curriculum through projects and self-paced focus areas. For teachers and school leaders, it gives them visibility into student performance.
            </p>
            <p>
              My team built dashboards that turned that data into insight: principals, school leaders, and teachers could open them and see, at a glance, who was on track, who was struggling, and where to step in that week, turning a semester's worth of lagging indicators into a weekly signal.
            </p>
            <p>
              That weekly signal only became useful in the hands of a coach—the data wasn't yet quickly discernable, so neither were the actions. That's the Summit Success Manager, embedded with each partner school, meeting with leaders on a regular cadence, walking through the data together, building an actual plan for who needs support, what's working, and what to adjust before it's too late. Our team functioned as the growth product for the platform, working in tight partnership with SSMs to evolve the tools alongside the people using them. All of their coaching sessions, excel workarounds they'd built to fill a gap, teacher and school leader feedback—it all guided what we shipped next. Sixteen SSMs across 300 schools meant constant signal on where the platform needed to go.
            </p>
            <p>
              My first move was leading the team through a visioning phase grounded in direct evidence: I audited the tools SSMs actually used, ran workshops with SSM teams, and aligned the whole group (data science, PM, engineering, content, and research) on what "impactful" actually meant from an experience, value, and design perspective before any wireframes were drawn. The roadmap, the opportunity areas, the whole sequencing that followed were all downstream of that first workshop.
            </p>
          </div>
          <div className="cs-split-image">
            <div className="cs-scroll-preview">
              <img src="/assets/images/czi-assets/dashboard-old-full.png" alt="Original Summit Learning dashboard showing 9th grade data" />
            </div>
            <span className="cs-whisper">We inherited a dashboard that, despite its potential, received consistent feedback from teachers, school leaders, and partners about its complexity and the challenges in interpreting and applying its data. The surface area was large, with over 20 pages of unique data views.</span>
          </div>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/journey-map.png" alt="Journey map showing the full pipeline from SSM to classroom" />
          <figcaption>Using journey mapping, we traced the full pipeline from SSM to classroom during discovery.</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2>The Unglamorous Work</h2>
          <p>
            What followed was a semester of unglamorous but necessary groundwork. The first cross-functional project was aligning platform language to platform actions—and to how school leaders and SSMs actually understood what was happening. A metric literally labeled "Projects Currently Assigned" meant something else entirely by the time an SSM had to explain it live, and that was the pattern everywhere: confusing names, labels that shifted from page to page, titles that could belong to any page on the site.
          </p>
          <p>
            We looked at how Google and the New York Times handled their COVID dashboards: plain metric names, a linked "about this data" note, a tooltip instead of a phone call. We shipped renamed metrics, real page titles, and inline tooltips in a matter of weeks. Small, but it meant a school leader could know what a number meant without waiting for their next SSM call.
          </p>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/metrics-audit.png" alt="Page inventory and metrics audit showing all dashboard pages and their associated data rollups" />
          <figcaption>Auditing every page, every metric, every rollup. Mapping what existed before we could decide what to change.</figcaption>
        </figure>

        <section className="cs-section-block">
          <p>
            In parallel we mapped the ecosystem end to end, everything inside the platform and everything an SSM was doing around it, and turned that into a shared language for the whole team. We built a cadence for research, design, and engineering to work together. And we spent real time with stakeholders, making the case for why this work mattered and what it would take, so by the time we got to the bigger swings (the dashboard redesign) the team had credibility and a tempo behind it.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>Prioritization</h2>
          <p>
            After the visioning work gave us a long list of concepts and features, I needed a shared and objective way to show the tradeoffs across all of them. I built a prioritization matrix, plotting complexity to build against how much process change each concept demanded from School Leaders and SSMs, and ran it as a live working session where the team plotted their own concepts on it together. By the time we mapped the R&D and data science work alongside the platform concepts, the team had a shared, defensible logic for what to build first, what needed more research before it could even be scoped, and what was genuinely a bigger bet.
          </p>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/prioritization-matrix.png" alt="Two-axis prioritization matrix plotting complexity against process change" />
          <figcaption>A prioritization matrix plotting build complexity against process change, used to align the team on sequencing.</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2 className="cs-major-heading">School Leader Dashboard Redesign</h2>
        </section>

        <section className="cs-split-reverse">
          <div className="cs-split-text">
            <h3>What changed in the first pass</h3>
            <ul className="cs-change-list">
              <li><strong>Unified navigation:</strong> one nav bar across the whole product (Homepage, Grade Level, Teachers, Mentor, Course). Same five destinations regardless of school or role.</li>
              <li><strong>Single source of truth:</strong> one single Site Level Overview per school, replacing scattered grade-level pages.</li>
              <li><strong>Data freshness indicator:</strong> a last-synced timestamp so school leaders could trust the numbers were current.</li>
              <li><strong>Graceful transition:</strong> a Legacy/Pilot toggle so users could move between old and new systems instead of having it swapped out from under them.</li>
              <li><strong>Drill-down structure:</strong> View Details buttons on every card, giving school leaders a path from summary to specifics.</li>
            </ul>
          </div>
          <div className="cs-split-image">
            <div className="cs-browser-frame" data-draggable-scroll>
              <div className="browser-chrome">
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
              </div>
              <div className="browser-viewport">
                <img src="/assets/images/czi-assets/dashboard-ia-structure.png" alt="Dashboard structure with placeholder 28% values showing IA and navigation" className="scroll-img-drag" />
              </div>
            </div>
            <span className="cs-whisper">First pass: proving the structure with placeholder data. Drag to explore.</span>
          </div>
        </section>

        <section className="cs-section-block">
          <p>
            The whole arc ran through three layers: get the content right, get the structure right, then get the visual system right so the structure actually reads.
          </p>
          <p>
            What I inherited: a single grade-level page with tabs for Overall, Students, Assessments, Goals. Five near-identical stat blocks stacked one after another. A color logic that meant "on-track" in one section and nothing in particular in the next. Cog Skills and Math Units left their worst bucket gray instead of red. One static chart with no way to filter. PBL, Mentoring, and Self-Directed Learning as raw stat panels with no drill-down.
          </p>
          <p>
            All the right data existed. It just sat there in a flat list, with nothing telling a school leader where to start. That first pass shipped with every card still reading a placeholder 28%, proof the structure had to hold before a single pixel got designed.
          </p>
        </section>

        <section className="cs-section-block">
          <h3>The design system pass</h3>
          <p>
            This is where the numbers finally get told what they mean.
          </p>
        </section>

        <section className="cs-split-reverse">
          <div className="cs-split-text">
            <h3>What the visual system introduced</h3>
            <ul className="cs-change-list">
              <li><strong>Meaningful color bars:</strong> each stat tile picks up a four-segment bar, green to red, so a school leader reads severity at a glance instead of doing the math across four percentages.</li>
              <li><strong>Trend chips:</strong> an arrow and a color, "↑10% vs last week," doing double duty as both the delta and the judgment call on whether that's good news.</li>
              <li><strong>Labeled line chart:</strong> multi-line view with a hover tooltip breaking down one exact date: "Oct. 11th: 10% 4+ Off Track, 40% Off Track, 20% On Track, 30% Very On Track."</li>
              <li><strong>Explicit axis key:</strong> spelling out what the percentage is a percentage of: 215 students, monthly. A direct answer to "SLs need help understanding the data."</li>
              <li><strong>Typography hierarchy:</strong> eyebrow label, bold title, uppercase micro-labels. Consistent across every tile.</li>
            </ul>
          </div>
          <div className="cs-split-image">
            <div className="cs-browser-frame" data-draggable-scroll>
              <div className="browser-chrome">
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
                <span className="browser-dot"></span>
              </div>
              <div className="browser-viewport">
                <img src="/assets/images/czi-assets/dashboard-design-system.png" alt="Final dashboard design with meaningful color system and data visualization" className="scroll-img-drag" />
              </div>
            </div>
            <span className="cs-whisper">Second pass: the visual system and meaningful color palette. Drag to explore.</span>
          </div>
        </section>

        <section className="cs-section-block">
          <p>
            The color bars, the trend chips, the tile pattern, the chart and tooltip spec: all of it got pulled out as the shared design system and rebuilt into Grade Level, Teacher, Mentor, and Course, and eventually into surface areas well outside School and District Tools.
          </p>
          <p>
            I led the redesign and owned the design system end to end: the color tokens, the type scale, the card and tile patterns, the chart and tooltip spec, then partnered with engineering to turn all of it into a shared component library the rest of the design org could build from instead of reinventing it project by project. This effort ended up doubling as the pilot for standardizing design system elements across the whole platform.
          </p>
          <p>
            I ran user testing alongside Research to validate the redesign with school leaders before anything shipped, and built interactive prototypes to pressure-test navigation and drill-down flows ahead of engineering investment. The harder part of the job was less about any single deliverable and more about keeping data science's definition of the metrics, content strategy's language, and engineering's build in sync with one coherent experience, catching the moments where a technically correct call in one discipline would have confused a school leader in another.
          </p>
        </section>

        <section className="cs-section-block">
          <h2 className="cs-major-heading">The Impact</h2>
          <p>
            Within the first weeks back to school, data drill-down usage increased 30%. School leaders were navigating from summary to student-level data on their own, without an SSM walking them there first. The dashboard's return pattern shifted from one-time visits to weekly cadence, aligned with SSM coaching calls.
          </p>
          <p>
            The design system we built (color tokens, type scale, component patterns) was adopted by three other product surface areas across the platform, with designers from other teams building on the foundation I created. It later became the pilot for standardizing design elements across the entire platform.
          </p>
        </section>

        <section className="cs-section-block">
          <h2 className="cs-major-heading">Key Flows</h2>
        </section>

        {/* Flow 1: Making data legible at a glance */}
        <section className="cs-flow-section">
          <h3>Making data legible at a glance</h3>
          <p className="cs-flow-rationale">Discovery told us school leaders needed an SSM to interpret the data. These interactions put the answer in the interface itself.</p>
          <div className="cs-flow-row">
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-hover-breakdown.png" alt="Hovering on Student Outcomes bar shows breakdown" />
              </div>
              <span className="cs-whisper">Hover on any bar to see the exact breakdown: "144/311 or 46% of students are on track." No mental math required.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-chart-tooltip.png" alt="Chart tooltip showing detailed breakdown by date" />
              </div>
              <span className="cs-whisper">Hover on any point in time for a date-specific breakdown: "Jan 7: 0% 4+ Off Track, 27% 2-3 Off Track, 24% 1 Off Track, 49% On Track."</span>
            </div>
          </div>
        </section>

        {/* Flow 2: From summary to action */}
        <section className="cs-flow-section">
          <h3>From summary to action</h3>
          <p className="cs-flow-rationale">Drill-down went from a rare action to a routine one. This is the path: school-level → category → individual.</p>
          <div className="cs-flow-row">
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-impl-metrics.png" alt="Implementation Practices with View Details buttons" />
              </div>
              <span className="cs-whisper">Every Implementation Practices card has a View Details button, a consistent entry point into deeper data.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-impl-drilldown.png" alt="Granular drilldown by grade" />
              </div>
              <span className="cs-whisper">First drill-down: metrics broken by Grade, Teacher, Mentor, or Course. Click any row to go deeper.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-student-list.png" alt="Student list" />
              </div>
              <span className="cs-whisper">Final level: individual students. A school leader can now identify who needs intervention without an SSM.</span>
            </div>
          </div>
        </section>

        {/* Flow 3: Custom student groupings */}
        <section className="cs-flow-section">
          <h3>Custom student groupings</h3>
          <p className="cs-flow-rationale">Teachers think in periods, sections, intervention groups, not grade-level aggregates. This flow lets them create views that match how they actually organize their classroom.</p>
          <div className="cs-flow-row">
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-views-list.png" alt="Student Progress Views showing grade-level defaults" />
              </div>
              <span className="cs-whisper">Default view: grade-level progress views. Useful for school leaders, but not how most teachers slice their day.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-create-view.png" alt="Create a new view modal with section selection" />
              </div>
              <span className="cs-whisper">"Create a new view" lets teachers pull students from any combination of sections: afterschool programs, intervention groups, advisory cohorts.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-edit-views.png" alt="Edit Views showing custom views at top" />
              </div>
              <span className="cs-whisper">Custom views surface at the top, ready to use. A teacher can now track "Joi's favorites" or "Afterschool Program" the same way they'd track a grade.</span>
            </div>
          </div>
        </section>

        {/* Flow 4: Building views from individual students */}
        <section className="cs-flow-section">
          <h3>Building views from individual students</h3>
          <p className="cs-flow-rationale">Sections cover the common case, but some groups exist outside any roster: a reading intervention cohort, students flagged in last week's data review, the six kids a counselor is tracking. This flow lets teachers hand-pick students across grades and sections to build a view that exists nowhere else in the system.</p>
          <div className="cs-flow-row">
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-select-students-option.png" alt="Dropdown showing Select from all students option" />
              </div>
              <span className="cs-whisper">The departure: instead of pulling from sections, choose "Select from all students" to build a custom roster from scratch.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-pick-students.png" alt="Individual student selection with 13 students selected" />
              </div>
              <span className="cs-whisper">Hand-pick students one by one: search, filter by grade, check the names. "13 students are selected" confirms the roster as you build it.</span>
            </div>
            <span className="cs-flow-arrow">→</span>
            <div className="cs-flow-item">
              <div className="cs-flow-frame">
                <img src="/assets/images/czi-assets/sdd-custom-view-result.png" alt="Afterschool Program view with student-level metrics" />
              </div>
              <span className="cs-whisper">The result: a custom view with full student-level data (off-track courses, focus area progress, overdue projects) for exactly the students who matter.</span>
            </div>
          </div>
        </section>

        <section className="cs-section-block">
          <h2 className="cs-major-heading">Project 2: Back to School Dashboard</h2>
          <p>
            I also led the design of Launch Metrics, a dashboard built around one insight: what happens in the first few weeks of school predicts the rest of the year. High early-year engagement from teachers and students correlates with better outcomes across the board.
          </p>
          <p>
            The challenge was surfacing that signal fast enough to act on it. I worked with research, data science, and our school partnerships team to identify the metrics that mattered most during launch, then designed a dashboard that gave school leaders visibility into teacher and student progress while there was still time to intervene.
          </p>
        </section>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/launch-metrics.jpg" alt="Launch Metrics dashboard showing progress tracking" />
          <figcaption>Launch Metrics dashboard with progress tracking and teacher visibility</figcaption>
        </figure>

        <div className="cs-image-grid">
          <figure>
            <img src="/assets/images/czi-assets/launch-landing.jpg" alt="Launch dashboard landing page" />
            <figcaption>Landing page</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/czi-assets/launch-drilldown1.jpg" alt="Teacher progress view" />
            <figcaption>Teacher progress across grades</figcaption>
          </figure>
        </div>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/launch-drilldown2.jpg" alt="Teacher sections drill down" />
          <figcaption>School leaders can view teacher-led sections and further drill down to specific students</figcaption>
        </figure>

        <figure className="cs-image-full">
          <img src="/assets/images/czi-assets/team-zoom.png" alt="CZI Education Design team on a Zoom call" />
          <figcaption>Design team sync during our remote era</figcaption>
        </figure>

        <section className="cs-section-block">
          <h2 className="cs-major-heading">Team Culture & Leadership</h2>
          <p>
            Beyond product work, I shaped how the team worked together. I ran our retrospectives and organized cross-functional design critiques, creating space for honest feedback and creative exchange. I also led critiques with teams across the organization, helping raise design standards and build stronger collaboration between product, engineering, and research.
          </p>
        </section>

        <section className="cs-section-block">
          <h2>What I Learned</h2>
          <p>
            Three years at CZI taught me that data products fail when they assume expertise. School leaders had the data all along. What they lacked was an interface that did the interpretation for them. Meaningful color, trend chips, inline tooltips: these were the product.
          </p>
          <p>
            The deeper lesson was about pace. The unglamorous work (renaming metrics, fixing labels, building shared language) created the credibility that made the bigger redesign possible.
          </p>
        </section>

        <section className="cs-explore cs-explore--brutalist">
          <span className="cs-explore-label">Other Case Studies</span>
          <div className="cs-explore-strip">
            <a className="cs-explore-item" href="/case-study/along">
              <h3 className="cs-explore-title">Along Mentoring Tool</h3>
              <p className="cs-explore-excerpt">Designing a relationship-building tool that helps teachers and students connect through structured reflection prompts.</p>
            </a>
            <a className="cs-explore-item" href="/case-study/mru">
              <h3 className="cs-explore-title">Mediation Response Unit</h3>
              <p className="cs-explore-excerpt">Designing a national toolkit to help communities respond to conflict with mediation instead of police.</p>
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
    </div>
  );
}

// Metadata export (must be in a separate export for Next.js App Router)
export const metadata: Metadata = {
  title: 'Chan Zuckerberg Initiative Case Study — Zella',
  description: 'Designing digital tools to empower teachers, school leaders, and students with data-driven insights. Lead Product Designer at CZI for 3 years.',
  openGraph: {
    title: 'Chan Zuckerberg Initiative Case Study — Zella',
    description: 'Designing digital tools to empower educators and students with data-driven insights.',
    type: 'article',
    url: 'https://zella.design/case-study/czi',
    images: [
      {
        url: 'https://zella.design/assets/images/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chan Zuckerberg Initiative Case Study — Zella',
    description: 'Designing digital tools to empower educators and students with data-driven insights.',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
};
