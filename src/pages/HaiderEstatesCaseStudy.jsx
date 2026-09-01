import { Link } from "react-router-dom";
import "./HaiderEstatesCaseStudy.css";

import coverImage from "../assets/haider-estates/case-study-cover.png/case-study-cover.jpeg";
import homepageShot from "../assets/haider-estates/site-screens/haider-homepage.png/haider-homepage.png";
import projectsShot from "../assets/haider-estates/site-screens/haider-projects.png/haider-projects.png";
import contactShot from "../assets/haider-estates/site-screens/haider-contact.png/haider-contact.png";
import construction from "../assets/haider-estates/site-screens/construction-1.png/construction-1.jpeg";
import exterior from "../assets/haider-estates/site-screens/exterior-render.png/exterior-render.jpeg";
import structural from "../assets/haider-estates/site-screens/structural.png/structural.jpeg";
import kitchen from "../assets/haider-estates/site-screens/kitchen-1.png/kitchen-1.jpeg";
import interior from "../assets/haider-estates/site-screens/interior-render.png/interior-render.jpeg";
import house from "../assets/haider-estates/site-screens/house-render.png/house-render.jpeg";
import businessCard from "../assets/haider-estates/site-screens/business-card.png/business-card.jpeg";

function HaiderEstatesCaseStudy() {
  const onWorkTogether = () =>
    window.dispatchEvent(new CustomEvent("open-contact-chatbot"));

  return (
    <div className="heb-case-study">
      <header className="heb-cs-nav">
        <Link to="/" className="heb-cs-logo">MZ<span>.</span></Link>
        <div className="heb-cs-center">
          <span>SELECTED WORK</span>
          <span>HAIDER ESTATE & BUILDERS / 2026</span>
        </div>
        <Link to="/" className="heb-cs-back">← Portfolio</Link>
      </header>

      <main>
        <section className="heb-cs-cover">
          <div className="heb-cs-cover-frame">
            <img
              src={coverImage}
              alt="Haider Estate & Builders sage green and peach brand cover"
            />
          </div>
          <div className="heb-cs-caption">
            <span>CASE STUDY COVER</span>
            <span>01 — BRAND DIRECTION</span>
          </div>
        </section>

        <section className="heb-cs-hero">
          <div className="heb-cs-side">
            <span>CASE STUDY</span>
            <span>06 / 06</span>
          </div>
          <p className="heb-cs-kicker">WEB DESIGN · DEVELOPMENT · CORPORATE DIGITAL PRESENCE</p>
          <h1>Haider Estate <em>& Builders.</em></h1>
          <div className="heb-cs-hero-bottom">
            <p>
              A responsive corporate website created to give Haider Estate & Builders
              a stronger digital presence and present its construction, renovation,
              structural, interior, and commercial capabilities through a clear,
              professional experience.
            </p>
            <div className="heb-cs-meta">
              <div><span>ROLE</span><strong>Design + Development</strong></div>
              <div><span>TYPE</span><strong>Corporate Website</strong></div>
              <div><span>YEAR</span><strong>2026</strong></div>
            </div>
          </div>
          <div className="heb-cs-spark spark-a">✦</div>
          <div className="heb-cs-spark spark-b">✧</div>
          <div className="heb-cs-orbit">BUILD · DEVELOP · DELIVER</div>
        </section>

        <section className="heb-cs-feature">
          <div className="heb-cs-feature-frame">
            <img src={homepageShot} alt="Screenshot of the Haider Estate & Builders website homepage" />
          </div>
          <div className="heb-cs-caption">
            <span>THE WEBSITE EXPERIENCE</span><span>01 — HOMEPAGE SCREENSHOT</span>
          </div>
        </section>

        <section className="heb-cs-story">
          <div className="heb-cs-index"><span>02</span><small>PROJECT STORY</small></div>
          <div className="heb-cs-story-grid">
            <div>
              <p className="heb-cs-label">THE OBJECTIVE</p>
              <h2>Turn construction expertise into a <em>credible digital presence.</em></h2>
            </div>
            <div className="heb-cs-copy">
              <p className="heb-cs-lead">
                The website was designed as a focused digital home for Haider Estate & Builders,
                making it easier for potential clients to understand what the company does,
                explore its capabilities, and start a conversation.
              </p>
              <p>
                The experience brings construction progress, structural work, renovation,
                interiors, and commercial services into one organized visual system. The goal
                was to balance a professional construction identity with an approachable,
                modern browsing experience.
              </p>
              <div className="heb-cs-note"><span>CORE INTENTION</span><strong>Show the work clearly. Build confidence before the first conversation.</strong></div>
            </div>
          </div>
        </section>

        <section className="heb-cs-design">
          <div className="heb-cs-index"><span>03</span><small>DESIGN DIRECTION</small></div>
          <div className="heb-cs-design-head">
            <div>
              <p className="heb-cs-label">STRUCTURE + CLARITY</p>
              <h2>A visual language built around <em>trust and execution.</em></h2>
            </div>
            <p>
              The interface uses strong editorial typography, earthy neutrals, restrained
              accents, generous spacing, and large project imagery to make the company feel
              established without becoming visually heavy.
            </p>
          </div>
          <div className="heb-cs-pills">
            <span>Corporate Storytelling</span><span>Responsive Design</span>
            <span>Service Clarity</span><span>Project Showcase</span><span>Conversion-focused CTAs</span>
          </div>
          <div className="heb-cs-image-wide">
            <img src={projectsShot} alt="Screenshot of the Haider Estate & Builders projects section" />
          </div>
          <div className="heb-cs-caption"><span>PROJECT SHOWCASE</span><span>02 — WEBSITE SCREENSHOT</span></div>
        </section>

        <section className="heb-cs-services">
          <div className="heb-cs-index"><span>04</span><small>INFORMATION ARCHITECTURE</small></div>
          <div className="heb-cs-services-grid">
            <div>
              <p className="heb-cs-label">WHAT THE SITE COMMUNICATES</p>
              <h2>From <em>capabilities</em> to completed work.</h2>
              <p className="heb-cs-copy-text">
                Content was organized around the questions a prospective client is likely
                to ask: What do they build? What experience do they have? What services do
                they offer? What does their work look like? How can I get in touch?
              </p>
            </div>
            <div className="heb-cs-service-list">
              <div><b>01</b><span>Commercial Construction</span></div>
              <div><b>02</b><span>Restaurant & Outlet Construction</span></div>
              <div><b>03</b><span>Retail & Shop Construction</span></div>
              <div><b>04</b><span>Renovation & Remodeling</span></div>
              <div><b>05</b><span>Civil & Structural Works</span></div>
              <div><b>06</b><span>Interior & Finishing</span></div>
            </div>
          </div>
        </section>

        <section className="heb-cs-gallery">
          <div className="heb-cs-index"><span>05</span><small>WORK IN FOCUS</small></div>
          <div className="heb-cs-gallery-intro">
            <p className="heb-cs-label">VISUAL STORYTELLING</p>
            <h2>Let the work <em>speak for itself.</em></h2>
            <p>Here are the actual website views from the Haider Estate & Builders project, showing the homepage, project showcase, and contact experience that I designed and developed.</p>
          </div>
          <div className="heb-cs-gallery-grid heb-cs-site-screens">
            <figure><img src={homepageShot} alt="Haider Estate & Builders homepage screenshot" /><figcaption><span>HOMEPAGE</span><span>05.01</span></figcaption></figure>
            <figure><img src={projectsShot} alt="Haider Estate & Builders projects screenshot" /><figcaption><span>PROJECTS</span><span>05.02</span></figcaption></figure>
            <figure><img src={contactShot} alt="Haider Estate & Builders contact screenshot" /><figcaption><span>CONTACT EXPERIENCE</span><span>05.03</span></figcaption></figure>
          </div>
        </section>

        <section className="heb-cs-build">
          <div className="heb-cs-build-image"><img src={businessCard} alt="Haider Estate & Builders brand collateral" /></div>
          <div>
            <p className="heb-cs-label">DESIGN + DEVELOPMENT</p>
            <h2>One system. <em>Multiple touchpoints.</em></h2>
            <p className="heb-cs-copy-text">
              Alongside the website experience, the visual direction was kept consistent with
              the brand's professional construction identity. The result is a digital presence
              that can grow with the business and communicate its services without unnecessary complexity.
            </p>
            <div className="heb-cs-tech">
              <span>React</span><span>Responsive UI</span><span>Modern CSS</span><span>Interactive Sections</span>
            </div>
          </div>
        </section>

        <section className="heb-cs-outcome">
          <p className="heb-cs-label">THE RESULT</p>
          <h2>A clearer way to present <em>the business behind the build.</em></h2>
          <p>
            Haider Estate & Builders now has a structured digital experience that brings
            its services, capabilities, project visuals, process, and contact journey into
            one professional presentation.
          </p>
          <div className="heb-cs-outcome-grid">
            <div><strong>01</strong><span>Professional Digital Presence</span></div>
            <div><strong>02</strong><span>Clear Service Architecture</span></div>
            <div><strong>03</strong><span>Visual Project Showcase</span></div>
            <div><strong>04</strong><span>Direct Contact Journey</span></div>
          </div>
        </section>

        <section className="heb-cs-next">
          <div>
            <p className="heb-cs-label">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something <em>worth remembering.</em></h2>
          </div>
          <div className="heb-cs-actions">
            <Link to="/" className="heb-cs-button secondary">Back to Portfolio <span>↗</span></Link>
            <button type="button" className="heb-cs-button primary" onClick={onWorkTogether}>Let's Work Together <span>✦</span></button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HaiderEstatesCaseStudy;
