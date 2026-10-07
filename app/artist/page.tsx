import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navigation } from '@/components/layout/Navigation';
import { TextGlowEffect } from '@/components/effects/TextGlowEffect';

import { YearNav } from '@/components/artist/YearNav';

export const metadata: Metadata = {
  title: 'Zella — Artist',
  description: 'Artwork by Zella spanning performance, painting, zines, and portal-making. Exhibited at Mass MoCA, LMCC, Flux Factory, and galleries internationally.',
  openGraph: {
    title: 'Zella — Artist',
    description: 'Artwork spanning performance, painting, zines, and portal-making. Exhibited internationally.',
    type: 'website',
    url: 'https://zella.design/artist',
    images: [
      {
        url: 'https://zella.design/assets/images/og-image.png',
        alt: 'Zella Artist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zella — Artist',
    description: 'Artwork spanning performance, painting, zines, and portal-making. Exhibited internationally.',
    images: ['https://zella.design/assets/images/og-image.png'],
  },
};

export default function ArtistPage() {
  return (
    <>
      
      <TextGlowEffect />
      <SkipLink />
      <Header />
      <Navigation />

      <main className="wrap" id="main-content">

        <section className="section-hero">
          <h1>Art</h1>
        </section>

        <section className="artist-statement">
          <div className="artist-statement-content">
            <p>
              My work asks new questions about what it means to be free. Across performance, painting, zines, and installation, I make portals: spaces where Black queer people can see our beauty, our divinity, and the boundless worlds that have always been ours to take up spiritual residence in. I believe personal and collective imagination is a tool for liberation here and now. To feel joy, to love, to forgive, to conceptualize how to be free, I must first imagine that these ways of existing are attainable, and then build them into being. My imagination exists beyond the gender binary. It exists beyond sadness and suffering. Beyond imperial power.
            </p>
            <p>
              My sources shift and overlap: lived experience, conversations with my community, archives, my reverence for the natural world, and traditional spirituality all move through the work. I paint in gouache, oil, acrylic, and mixed media, letting dense matte pigment carry history and luminous transparencies carry what is still arriving.
            </p>
            <p>
              Across every form, the work is a practice of recognition: we see each other and affirm that we are here, in this now and in every now that came before us. Each time we gather, that presence reaches forward.
            </p>
          </div>
          <div className="artist-statement-image">
            <img src="/assets/images/zella-studio.jpg" alt="Zella in studio" />
          </div>
        </section>

        <section className="artist-cv">
          <div className="cv-columns">
            <div className="cv-col">
              <h2>Group Exhibitions and Activations</h2>
              <div className="cv-year-group">
                <span className="cv-year-header">2026</span>
                <ul className="cv-list cv-list-expanded">
                  <li>Flux Factory — A Thousand Answers, curated by Meghana Karnik</li>
                  <li>Lower Manhattan Cultural Council — Eat Slow Sketch Show, curated by Darla Migan</li>
                  <li>ArtCrawl Harlem — Water No Get Enemy, curated by Jomani Danielle</li>
                  <li>BedStuy Art Club — Migrations, curated by Jenella Young</li>
                </ul>
              </div>
              <div className="cv-year-group">
                <span className="cv-year-header">2025</span>
                <ul className="cv-list cv-list-expanded">
                  <li><a href="https://www.recessart.org/events/295-deli-radio-presents-dream-ki-by-zella-vanie-followed-by-yatta-earthheaven" target="_blank" rel="noopener">Recess — Deli Radio Presents: Dream Ki by Zella Vanie</a></li>
                  <li><a href="https://www.lichtundfire.com/tag/zella/" target="_blank" rel="noopener">Lichtundfire Gallery — Kinfolk Reimagined</a></li>
                </ul>
              </div>
              <div className="cv-year-group">
                <span className="cv-year-header">2024</span>
                <ul className="cv-list cv-list-expanded">
                  <li><a href="https://moore.edu/events/re-focus-then-and-now/2024-01-27/" target="_blank" rel="noopener">Smith College — (Re)FOCUS: Then and Now</a></li>
                  <li>Industry City, curated by Jomani Danielle</li>
                  <li>NYC Crit Club — Swimming in the Mirror</li>
                </ul>
              </div>
              <div className="cv-year-group">
                <span className="cv-year-header">2023</span>
                <ul className="cv-list cv-list-expanded">
                  <li><a href="https://www.pentimenti.com/one-to-the-next" target="_blank" rel="noopener">Pentimenti Gallery — One to the Next</a>, curated by Catherine Hagerty</li>
                  <li>Heath Gallery — Let Black Folks Feel, curated by Jomani Danielle</li>
                  <li>Ely Center of Contemporary Art</li>
                  <li><a href="https://www.cbkzuidoost.nl/tentoonstellingen/nu-en-verwacht/knights-in-shining-armour-reappropriating-the-appropriated/?lang=en" target="_blank" rel="noopener">CBK Zuidoost — Knights in Shining Armour</a></li>
                </ul>
              </div>
              <div className="cv-year-group">
                <span className="cv-year-header">2022</span>
                <ul className="cv-list cv-list-expanded">
                  <li>Mobifest at Aferro Gallery</li>
                  <li>Untitled Gallery</li>
                  <li>The Other Art Fair</li>
                </ul>
              </div>
            </div>
            <div className="cv-col">
              <h2>Honors</h2>
              <ul className="cv-list cv-list-plain">
                <li><a href="https://www.instagram.com/pollinator_coop/" target="_blank" rel="noopener">Pollinator</a> Residency</li>
                <li><a href="/assets/lmcc-residency-2026.pdf" target="_blank" rel="noopener">LMCC 2026 Cohort of Arts Center Residents</a></li>
                <li><a href="https://www.canva.com/design/DAHBtGzLX68/52-Gkksm-ZUoVtQmfRszVQ/edit" target="_blank" rel="noopener">Speaker at 2026 Black Information Futures Symposium</a></li>
                <li>Guest lecturer at RISD</li>
                <li>Mass MoCA artist residency grant recipient</li>
                <li><a href="https://thecanopyprogram.com/exhibitions" target="_blank" rel="noopener">Canopy program grant recipient</a></li>
                <li>Gatekeepers Collective grant recipient</li>
                <li><a href="https://www.theotherartfair.com/new-futures/2022-recipients/" target="_blank" rel="noopener">New Futures recipient</a></li>
                <li>Flux Factory Exhibition grant recipient</li>
                <li>Carrie Able artist-in-residence recipient</li>
                <li>Guest critic at Parsons BFA Photography</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="art-layout">

          <YearNav />

          <div className="art-scroll">

            <section className="art-year-section" id="y2026" data-year-section>
              <span className="year-label">2026</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--cyanotype">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_7588-placeholder.jpg')"}}>
                      <img src="/assets/images/art/IMG_7588.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>Cyanotype, 11×17 in</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--poster">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/ESBI_poster_23x15_600dpi-placeholder.jpg')"}}>
                      <img src="/assets/images/art/ESBI_poster_23x15_600dpi.jpg" alt="Experimental School for Black Imagination manifesto poster" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>ESBI Manifesto</strong>
                      <span>Poster, 23×15 in, digital print</span>
                    </figcaption>
                  </figure>
                </div>
                <span className="art-row-label">Flyers and activations</span>
                <div className="art-row">
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/dreamki-2026-placeholder.jpg')"}}>
                        <img src="/assets/images/art/dreamki-2026.jpg" alt="DREAMKI event flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>DREAMKI</strong>
                        <span>Event flyer, MOTHERBOARD</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/dream-ki-journey-placeholder.jpg')"}}>
                        <img src="/assets/images/art/dream-ki-journey.jpg" alt="Dream Ki Journey event flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Dream Ki</strong>
                        <span>Event flyer</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/kaleidoscope-flyer-2026.jpg" alt="Kaleidoscope event flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Kaleidoscope</strong>
                        <span>Event flyer, ESBI</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/eat-slow-flyer-2026.png" alt="Eat Slow Sketch Show event flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Eat Slow Sketch Show</strong>
                        <span>Event flyer, LMCC Open Studios</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/esbi-flyer-manifesto.png" alt="ESBI manifesto flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>ESBI Manifesto</strong>
                        <span>Flyer, ESBI</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--flyer">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/imagining-sense-flyer.png" alt="Imagining Sense workshop flyer" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Imagining Sense</strong>
                        <span>Workshop series flyer, ESBI</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <span className="art-row-label">Zines</span>
                <div className="art-row art-row--zines">
                  <div className="art-item art-item--zine">
                    <figure>
                      <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/nigga-way-zine-1-placeholder.jpg')"}}>
                        <img src="/assets/images/art/nigga-way-zine-1.png" alt="THE NIGGA WAY zine page" />
                      </div>
                      <figcaption>
                        <strong>THE NIGGA WAY</strong>
                        <span>Zine</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--zine">
                    <figure>
                      <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/nigga-way-zine-2-placeholder.jpg')"}}>
                        <img src="/assets/images/art/nigga-way-zine-2.png" alt="THE NIGGA WAY zine page" />
                      </div>
                      <figcaption>
                        <strong>THE NIGGA WAY</strong>
                        <span>Zine</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--zine">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/nigga-way-zine-safety.png" alt="THE NIGGA WAY - Safety zine page" />
                      </div>
                      <figcaption>
                        <strong>THE NIGGA WAY</strong>
                        <span>Zine</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--zine">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/noticing-zine.png" alt="NOTICING zine cover" />
                      </div>
                      <figcaption>
                        <strong>NOTICING</strong>
                        <span>Zine (We Be Coming Free)</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <section className="art-year-section" id="y2025" data-year-section>
              <span className="year-label">2025</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_7041-placeholder.jpg')"}}>
                      <img src="/assets/images/art/IMG_7041.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>18×24 in, gouache, oil stick on paper</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_7042-placeholder.jpg')"}}>
                      <img src="/assets/images/art/IMG_7042.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>18×24 in, gouache, oil stick on paper</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_7043-placeholder.jpg')"}}>
                      <img src="/assets/images/art/IMG_7043.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>18×24 in, gouache, oil stick on paper</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-row art-row--centered">
                  <div className="art-item art-item--medium">
                    <figure>
                      <div className="art-frame-img">
                        <img src="/assets/images/art/IMG_8054.jpg" alt="Untitled" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Untitled</strong>
                        <span>18×24 in, gouache, oil stick on paper</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="art-item art-item--medium">
                    <figure>
                      <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_7046-placeholder.jpg')"}}>
                        <img src="/assets/images/art/IMG_7046.jpg" alt="Untitled" loading="lazy" />
                      </div>
                      <figcaption>
                        <strong>Untitled</strong>
                        <span>18×24 in, gouache, oil stick on paper</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/IMG_7433.jpg" alt="Altar I" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Altar I</strong>
                      <span>2023, Gouache on canvas mounted on wood panel in artist's frame, 54×82</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--wide">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/IMG_7561.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>51×97 in, oil, oil pastel, aerosol, gouache, acrylic</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className="art-year-section" id="y2024" data-year-section>
              <span className="year-label">2024</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--large">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/IMG_5899.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>48×60 in, oil, oil pastel, aerosol, gouache, acrylic</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/sparks-placeholder.jpg')"}}>
                      <img src="/assets/images/art/sparks.jpg" alt="Altar I" />
                    </div>
                    <figcaption>
                      <strong>Altar I</strong>
                      <span>54×82 in, gouache on canvas mounted on wood panel in artist's frame, 2023</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/divine-femininity-placeholder.jpg')"}}>
                      <img src="/assets/images/art/divine-femininity.jpg" alt="Untitled" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>36×48 in, oil on canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/the-anointment-placeholder.jpg')"}}>
                      <img src="/assets/images/art/the-anointment.jpg" alt="Untitled" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>36×48 in, oil on canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/IMG_4402-placeholder.jpg')"}}>
                      <img src="/assets/images/art/IMG_4402.jpg" alt="Untitled" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>18×24 in, gouache, oil stick on paper</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className="art-year-section" id="y2023" data-year-section>
              <span className="year-label">2023</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--large">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/juneteenth-2023-placeholder.jpg')"}}>
                      <img src="/assets/images/art/juneteenth-2023.jpg" alt="Juneteenth 2023" />
                    </div>
                    <figcaption>
                      <strong>Juneteenth 2023</strong>
                      <span>48×36 in, gouache on wood, 2022</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/golden-placeholder.jpg')"}}>
                      <img src="/assets/images/art/golden.jpg" alt="Untitled" />
                    </div>
                    <figcaption>
                      <strong>Untitled</strong>
                      <span>18×24 in, gouache, oil stick, glitter, aerosol on paper</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/the-wanderer-placeholder.jpg')"}}>
                      <img src="/assets/images/art/the-wanderer.jpg" alt="Untitled II, Allegories of Liberation Series" />
                    </div>
                    <figcaption>
                      <strong>Untitled II</strong>
                      <span>65×84 in, gouache on unstretched canvas · Allegories of Liberation</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className="art-year-section" id="y2022" data-year-section>
              <span className="year-label">2022</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/tempest.jpg" alt="Tempest" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Tempest</strong>
                      <span>48×54 in, acrylic, aerosol spray, oil stick, holographic sticker</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/recruiters-bonus-placeholder.jpg')"}}>
                      <img src="/assets/images/art/recruiters-bonus.jpg" alt="Recruiter's Bonus" />
                    </div>
                    <figcaption>
                      <strong>Recruiter's Bonus</strong>
                      <span>72×60 in, acrylic and oilstick on canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/untitled-snake-sword-2022.png" alt="Untitled I, Allegories of Liberation Series" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled I, Allegories of Liberation Series</strong>
                      <span>70×84 in, gouache on unstretched canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/untitled-crocodiles-2022.png" alt="Untitled III, Allegories of Liberation Series" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled III, Allegories of Liberation Series</strong>
                      <span>70×84 in, gouache on unstretched canvas, 2023</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/untitled-couch-swords-2022.png" alt="Untitled II, Allegories of Liberation Series" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Untitled II, Allegories of Liberation Series</strong>
                      <span>65×84 in, gouache on unstretched canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/sweet-surrender-ii.jpg" alt="Sweet Surrender II" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Sweet Surrender II</strong>
                      <span>70×84 in, gouache on canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <span className="art-row-label">Flyers and activations</span>
                <div className="art-row">
                  <div className="art-item art-item--flyer">
                    <a href="https://www.fluxfactory.org/black-bliss-rave/" target="_blank" rel="noopener">
                      <figure>
                        <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/black-bliss-flyer-2022-placeholder.jpg')"}}>
                          <img src="/assets/images/art/black-bliss-flyer-2022.jpg" alt="Every N*gga Is A Star Trek - Black Bliss Rangers event flyer" />
                        </div>
                        <figcaption>
                          <strong>Every N*gga Is A Star Trek</strong>
                          <span>Black Bliss Rangers</span>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="art-year-section" id="y2021" data-year-section>
              <span className="year-label">2021</span>
              <div className="art-grid-scatter">
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img">
                      <img src="/assets/images/art/gangstas-paradise.jpg" alt="Gangsta's Paradise" loading="lazy" />
                    </div>
                    <figcaption>
                      <strong>Gangsta's Paradise</strong>
                      <span>36×48 in, acrylic, oil stick, gesso, and aerosol on stretched canvas</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--hero">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/a-queer-ass-black-ass-picnic-placeholder.jpg')"}}>
                      <img src="/assets/images/art/a-queer-ass-black-ass-picnic.jpg" alt="A queer ass black ass picnic, Allegories of Liberation Series" />
                    </div>
                    <figcaption>
                      <strong>A queer ass black ass picnic</strong>
                      <span>70×70 in, acrylic, oil stick, aerosol · Allegories of Liberation</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="art-item art-item--medium">
                  <figure>
                    <div className="art-frame-img" style={{backgroundImage: "url('/assets/images/art/placeholders/liaison-costumes-desprit-placeholder.jpg')"}}>
                      <img src="/assets/images/art/liaison-costumes-desprit.jpg" alt="Liaison, costumes d'esprit" />
                    </div>
                    <figcaption>
                      <strong>Liaison, costumes d'esprit</strong>
                      <span>25×10 in, reclaimed wood, stones, gems, epoxy resin</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
