import { Link } from "react-router-dom";
import "./GraphicDesignCaseStudy.css";

import graphicCover from "../assets/graphic-design/graphic-design-cover.jpg";

const graphicImages = Object.entries(
  import.meta.glob("../assets/graphic-design/graphic-*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  )
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop().replace(".jpeg", ""),
  }));

function GraphicDesignCaseStudy() {
  const onWorkTogether = () =>
    window.dispatchEvent(new CustomEvent("open-contact-chatbot"));

  const primaryImages = graphicImages.slice(0, 6);
  const remainingImages = graphicImages.slice(6);

  return (
    <div className="gd-case-study">
      <header className="gd-nav">
        <Link to="/" className="gd-logo">
          MZ<span>.</span>
        </Link>

        <div className="gd-nav-center">
          <span>SELECTED WORK</span>
          <span>GRAPHIC DESIGN / 2026</span>
        </div>

        <Link to="/" className="gd-back">
          ← Portfolio
        </Link>
      </header>

      <main>
        <section className="gd-hero">
          <div className="gd-hero-orbit gd-orbit-one" />
          <div className="gd-hero-orbit gd-orbit-two" />

          <div className="gd-hero-content">
            <p className="gd-kicker">
              GRAPHIC DESIGN · BRANDING · VISUAL COMMUNICATION
            </p>

            <h1>
              Graphic Design
              <em>Collection.</em>
            </h1>

            <p className="gd-hero-intro">
              A visual collection bringing together selected graphic design
              work, including identity explorations, promotional artwork,
              social-media creatives, and presentation-focused compositions.
            </p>

            <div className="gd-meta">
              <div>
                <span>ROLE</span>
                <strong>Graphic Designer</strong>
              </div>
              <div>
                <span>SCOPE</span>
                <strong>Brand + Visual Design</strong>
              </div>
              <div>
                <span>YEAR</span>
                <strong>2026</strong>
              </div>
            </div>
          </div>

          <div className="gd-hero-mark" aria-hidden="true">
            ✦
          </div>
        </section>

        <section className="gd-cover">
          <div className="gd-cover-frame">
            <img
              src={graphicCover}
              alt="Selected graphic design work"
            />
          </div>

          <div className="gd-caption">
            <span>SELECTED VISUAL DIRECTION</span>
            <span>01 — COLLECTION COVER</span>
          </div>
        </section>

        <section className="gd-story">
          <div className="gd-index">
            <span>02</span>
            <small>PROJECT STORY</small>
          </div>

          <div className="gd-story-grid">
            <div>
              <p className="gd-label">THE APPROACH</p>
              <h2>
                Design that makes an idea
                <em> visually memorable.</em>
              </h2>
            </div>

            <div className="gd-copy">
              <p className="gd-lead">
                This collection focuses on the visual side of communication:
                shaping a message through typography, composition, imagery,
                color, and graphic hierarchy.
              </p>

              <p>
                Rather than treating every artwork as an isolated piece, the
                collection presents the work as a flexible visual practice —
                moving between brand-facing graphics, promotional layouts,
                social content, and identity explorations.
              </p>

              <div className="gd-note">
                <span>CORE INTENTION</span>
                <strong>
                  Make the message clear, distinctive, and ready to be seen.
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="gd-direction">
          <div className="gd-index">
            <span>03</span>
            <small>DESIGN DIRECTION</small>
          </div>

          <div className="gd-direction-head">
            <div>
              <p className="gd-label">VISUAL SYSTEM</p>
              <h2>
                A mix of structure,
                <em> personality, and polish.</em>
              </h2>
            </div>

            <p>
              The selected pieces show an adaptable approach to graphic
              communication, balancing strong focal points with readable
              layouts and recognizable visual cues.
            </p>
          </div>

          <div className="gd-pills">
            <span>Visual Identity</span>
            <span>Graphic Composition</span>
            <span>Social Media Design</span>
            <span>Promotional Artwork</span>
            <span>Brand Exploration</span>
            <span>Creative Direction</span>
          </div>

          <div className="gd-highlight-grid">
            {primaryImages.map((item, index) => (
              <figure
                key={item.name}
                className={index === 0 ? "gd-highlight-feature" : ""}
              >
                <img
                  src={item.src}
                  alt={`Graphic design work ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <figcaption>
                  <span>SELECTED WORK</span>
                  <span>03.{String(index + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="gd-gallery">
          <div className="gd-index">
            <span>04</span>
            <small>VISUAL ARCHIVE</small>
          </div>

          <div className="gd-gallery-intro">
            <p className="gd-label">THE WORK</p>
            <h2>
              A closer look at the
              <em> full collection.</em>
            </h2>
            <p>
              The gallery below keeps the original artwork visible and lets
              each piece retain its own proportions and visual character.
            </p>
          </div>

          <div className="gd-gallery-grid">
            {remainingImages.map((item, index) => (
              <figure key={item.name}>
                <div className="gd-image-wrap">
                  <img
                    src={item.src}
                    alt={`Graphic design work ${index + 7}`}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>GRAPHIC DESIGN</span>
                  <span>04.{String(index + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="gd-process">
          <div className="gd-index">
            <span>05</span>
            <small>DESIGN PRINCIPLES</small>
          </div>

          <div className="gd-process-grid">
            <div>
              <p className="gd-label">FROM IDEA TO ARTWORK</p>
              <h2>
                Every piece starts with
                <em> a clear visual job.</em>
              </h2>
            </div>

            <div className="gd-process-list">
              <div>
                <b>01</b>
                <span>Hierarchy</span>
                <p>Give the main message a clear visual starting point.</p>
              </div>
              <div>
                <b>02</b>
                <span>Composition</span>
                <p>Balance type, imagery, spacing, and supporting elements.</p>
              </div>
              <div>
                <b>03</b>
                <span>Consistency</span>
                <p>Build recognizable visual cues across related pieces.</p>
              </div>
              <div>
                <b>04</b>
                <span>Presentation</span>
                <p>Keep the final artwork polished and ready to share.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gd-outcome">
          <p className="gd-label">THE RESULT</p>
          <h2>
            A portfolio-ready archive of
            <em> visual communication.</em>
          </h2>
          <p>
            The collection brings the supplied graphic-design artwork into one
            cohesive case-study experience while keeping the original pieces
            front and center.
          </p>

          <div className="gd-outcome-grid">
            <div>
              <strong>01</strong>
              <span>Brand Visuals</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Promotional Graphics</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Social Creatives</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Visual Explorations</span>
            </div>
          </div>
        </section>

        <section className="gd-next">
          <div>
            <p className="gd-label">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's create something
              <em> worth seeing.</em>
            </h2>
          </div>

          <div className="gd-actions">
            <Link to="/" className="gd-button secondary">
              Back to Portfolio <span>↗</span>
            </Link>

            <button
              type="button"
              className="gd-button primary"
              onClick={onWorkTogether}
            >
              Let's Work Together <span>✦</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GraphicDesignCaseStudy;
