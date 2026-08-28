import { Link } from "react-router-dom";
import "./TeaCoffeeCaseStudy.css";

// =========================================================
// TEA, COFFEE & GREEN TEA — IMAGES
// =========================================================

import newLogo from "../assets/tea-coffee-&-greentea.png/new logo.png";
import newPost1 from "../assets/tea-coffee-&-greentea.png/new post 1.png";

import oldLogo from "../assets/tea-coffee-&-greentea.png/old logo.png";
import oldMenu from "../assets/tea-coffee-&-greentea.png/old menu.png";
import oldPost1 from "../assets/tea-coffee-&-greentea.png/old post 1.png";
import oldPost2 from "../assets/tea-coffee-&-greentea.png/old post 2.png";

import ramadanSpecials from "../assets/tea-coffee-&-greentea.png/ramadan specials.png";

// =========================================================
// EDITORIAL IMAGE COMPONENT
// =========================================================

function EditorialImage({ src, alt, label, number }) {
  return (
    <figure className="tea-editorial-shot">
      <div className="tea-shot-number">{number}</div>

      <div className="tea-shot-frame">
        <img src={src} alt={alt} />
      </div>

      <figcaption>
        <span>{label}</span>
        <span>TEA / COFFEE / 2026</span>
      </figcaption>
    </figure>
  );
}

// =========================================================
// TEA, COFFEE & GREEN TEA CASE STUDY
// =========================================================

function TeaCoffeeCaseStudy() {
  // =======================================================
  // OPEN GLOBAL CHATBOT
  // =======================================================

  const openChatbot = () => {
    window.dispatchEvent(new Event("open-contact-chatbot"));
  };

  return (
    <div className="tea-case-study">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="tea-editorial-nav">
        <Link to="/" className="tea-editorial-logo">
          MZ<span>.</span>
        </Link>

        <div className="tea-nav-center">
          <span>SELECTED WORK</span>
          <span>TEA, COFFEE & GREEN TEA / 2026</span>
        </div>

        <Link to="/" className="tea-nav-back">
          ← Portfolio
        </Link>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tea-editorial-hero">

        <div className="tea-hero-side-label">
          <span>CASE STUDY</span>
          <span>02 / 08</span>
        </div>

        <div className="tea-hero-kicker">
          DIGITAL MARKETING · BRAND REFRESH · SOCIAL MEDIA
        </div>

        <h1>
          Tea,
          <em>Coffee & Green Tea.</em>
        </h1>

        <div className="tea-hero-bottom">

          <p className="tea-hero-description">
            A conceptual digital marketing project exploring how a
            familiar tea and coffee brand could strengthen its visual
            identity, content direction, and social media presence.
          </p>

          <div className="tea-hero-meta">

            <div>
              <span>PROJECT TYPE</span>
              <strong>Concept / Sample Project</strong>
            </div>

            <div>
              <span>SERVICE</span>
              <strong>Digital Marketing</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Brand Refresh + Content</strong>
            </div>

          </div>
        </div>

        <div className="tea-hero-decor tea-decor-one">✦</div>
        <div className="tea-hero-decor tea-decor-two">✧</div>

        <div className="tea-hero-orbit-word">
          BREW · PAUSE · CONNECT
        </div>
      </section>

      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="tea-story-section">

        <div className="tea-section-index">
          <span>02</span>
          <small>PROJECT OVERVIEW</small>
        </div>

        <div className="tea-story-layout">

          <div className="tea-story-title">

            <p className="tea-mini-label">
              THE IDEA
            </p>

            <h2>
              Turning everyday drinks
              <em>into memorable moments.</em>
            </h2>

          </div>

          <div className="tea-story-copy">

            <p className="tea-lead-copy">
              Tea, Coffee & Green Tea is a conceptual digital marketing
              project focused on improving how a beverage brand presents
              itself across social media.
            </p>

            <p>
              The project explores the transition from a more traditional
              visual presence toward a cleaner, warmer, and more
              intentional communication style — one that gives the
              products personality while making the brand easier to
              recognize and connect with.
            </p>

            <p>
              Rather than treating tea and coffee as simple products,
              the content direction positions them as part of everyday
              rituals, conversations, breaks, gatherings, and moments
              worth remembering.
            </p>

            <div className="tea-story-note">

              <span>PROJECT INTENTION</span>

              <strong>
                Create a stronger digital identity through
                consistent visuals, meaningful content, and
                lifestyle-led storytelling.
              </strong>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          THE CHALLENGE
      ===================================================== */}

      <section className="tea-challenge-section">

        <div className="tea-section-index">
          <span>03</span>
          <small>THE CHALLENGE</small>
        </div>

        <div className="tea-challenge-header">

          <p className="tea-mini-label">
            THE DIGITAL GAP
          </p>

          <h2>
            From familiar
            <em>to unforgettable.</em>
          </h2>

          <p>
            The existing communication had the opportunity to become
            more consistent and visually distinctive. The challenge was
            not simply to create new posts, but to explore how the brand
            could communicate with a clearer identity across its digital
            touchpoints.
          </p>

        </div>

        <div className="tea-challenge-grid">

          <article>
            <span>01</span>

            <h3>CONSISTENCY</h3>

            <p>
              Establish a more cohesive visual language across
              social media content.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>IDENTITY</h3>

            <p>
              Give the brand a stronger and more recognizable
              digital personality.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>ENGAGEMENT</h3>

            <p>
              Create content that encourages people to connect
              with the brand beyond the product itself.
            </p>
          </article>

        </div>
      </section>

      {/* =====================================================
          BEFORE THE REFRESH
      ===================================================== */}

      <section className="tea-before-section">

        <div className="tea-section-index">
          <span>04</span>
          <small>BEFORE THE REFRESH</small>
        </div>

        <div className="tea-before-header">

          <p className="tea-mini-label">
            EXISTING COMMUNICATION
          </p>

          <h2>
            Understanding where
            <em>the brand started.</em>
          </h2>

          <p>
            Before developing the new direction, the existing visual
            material was reviewed to understand the brand's previous
            communication style, layouts, and overall presentation.
          </p>

        </div>

        <div className="tea-before-grid">

          <EditorialImage
            src={oldLogo}
            alt="Original Tea Coffee and Green Tea logo"
            label="Previous / Logo"
            number="04.01"
          />

          <EditorialImage
            src={oldMenu}
            alt="Original Tea Coffee and Green Tea menu"
            label="Previous / Menu"
            number="04.02"
          />

          <EditorialImage
            src={oldPost1}
            alt="Original Tea Coffee and Green Tea social media post"
            label="Previous / Social Post"
            number="04.03"
          />

          <EditorialImage
            src={oldPost2}
            alt="Original Tea Coffee and Green Tea second social media post"
            label="Previous / Social Post"
            number="04.04"
          />

        </div>

        <div className="tea-before-statement">

          <span>OBSERVATION</span>

          <strong>
            The opportunity was to create a more unified visual
            language while keeping the brand familiar and approachable.
          </strong>

        </div>

      </section>

      {/* =====================================================
          BRAND REFRESH
      ===================================================== */}

      <section className="tea-refresh-section">

        <div className="tea-section-index">
          <span>05</span>
          <small>BRAND REFRESH</small>
        </div>

        <div className="tea-refresh-layout">

          <div className="tea-refresh-copy">

            <p className="tea-mini-label">
              NEW DIRECTION
            </p>

            <h2>
              A fresher identity
              <em>for a familiar brand.</em>
            </h2>

            <p>
              The refreshed direction focuses on making the brand feel
              cleaner, more current, and easier to recognize across
              digital platforms.
            </p>

            <p>
              The intention is not to remove the familiarity of the
              original brand, but to present it through a more polished
              and consistent visual system.
            </p>

          </div>

          <div className="tea-refresh-image">

            <div className="tea-shot-frame">
              <img
                src={newLogo}
                alt="New Tea Coffee and Green Tea logo"
              />
            </div>

            <span>NEW IDENTITY / 2026</span>

          </div>

        </div>

        <div className="tea-refresh-pillars">

          <article>
            <span>01</span>
            <strong>CLEANER</strong>
            <p>
              A clearer visual presentation designed for modern
              digital platforms.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>COHESIVE</strong>
            <p>
              A stronger connection between branding and content.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>MEMORABLE</strong>
            <p>
              A visual identity that can become easier to recognize.
            </p>
          </article>

        </div>
      </section>

      {/* =====================================================
          CONTENT STRATEGY
      ===================================================== */}

      <section className="tea-strategy-section">

        <div className="tea-section-index">
          <span>06</span>
          <small>CONTENT STRATEGY</small>
        </div>

        <div className="tea-strategy-header">

          <p className="tea-mini-label">
            CONTENT PILLARS
          </p>

          <h2>
            Building a feed around
            <em>the ritual of every cup.</em>
          </h2>

          <p>
            The content strategy moves beyond product-only communication
            and explores the moments, moods, and experiences connected
            with tea and coffee.
          </p>

        </div>

        <div className="tea-pillars">

          <article>

            <span>01</span>

            <h3>PRODUCT</h3>

            <p>
              Showcase tea, coffee, and green tea through clear,
              attractive, product-focused content.
            </p>

          </article>

          <article>

            <span>02</span>

            <h3>LIFESTYLE</h3>

            <p>
              Connect beverages with everyday routines, breaks,
              conversations, and moments of comfort.
            </p>

          </article>

          <article>

            <span>03</span>

            <h3>OCCASIONS</h3>

            <p>
              Use seasonal moments and cultural occasions to create
              timely and relevant communication.
            </p>

          </article>

          <article>

            <span>04</span>

            <h3>COMMUNITY</h3>

            <p>
              Encourage a sense of familiarity by making the brand
              feel present in everyday customer experiences.
            </p>

          </article>

        </div>
      </section>

      {/* =====================================================
          SOCIAL MEDIA CONTENT
      ===================================================== */}

      <section className="tea-content-section">

        <div className="tea-section-index">
          <span>07</span>
          <small>SOCIAL MEDIA CONTENT</small>
        </div>

        <div className="tea-content-header">

          <p className="tea-mini-label">
            CONTENT EXECUTION
          </p>

          <h2>
            Making the new direction
            <em>visible on social media.</em>
          </h2>

          <p>
            The refreshed direction was translated into social content
            designed to create a more cohesive and recognizable presence.
          </p>

        </div>

        <div className="tea-content-grid">

          <EditorialImage
            src={newPost1}
            alt="New Tea Coffee and Green Tea social media post"
            label="New Direction / Social Post"
            number="07.01"
          />

        </div>

        <div className="tea-content-note">

          <span>CONTENT ROLE</span>

          <strong>
            Create a visual bridge between the refreshed identity
            and the everyday experience of the products.
          </strong>

        </div>

      </section>

      {/* =====================================================
          SEASONAL CAMPAIGN
      ===================================================== */}

      <section className="tea-campaign-section">

        <div className="tea-section-index">
          <span>08</span>
          <small>SEASONAL CAMPAIGN</small>
        </div>

        <div className="tea-campaign-header">

          <p className="tea-mini-label">
            RAMADAN SPECIALS
          </p>

          <h2>
            Turning seasonal moments
            <em>into marketing opportunities.</em>
          </h2>

          <p>
            Seasonal campaigns give brands an opportunity to become
            part of moments that already matter to their audience.
            Ramadan Specials was developed as an example of how
            timely content can support product communication while
            remaining culturally relevant.
          </p>

        </div>

        <div className="tea-campaign-layout">

          <div className="tea-campaign-image">

            <div className="tea-shot-frame">
              <img
                src={ramadanSpecials}
                alt="Tea Coffee and Green Tea Ramadan Specials campaign"
              />
            </div>

            <figcaption>
              RAMADAN SPECIALS / SEASONAL CAMPAIGN
            </figcaption>

          </div>

          <div className="tea-campaign-copy">

            <div>
              <span>CAMPAIGN PURPOSE</span>
              <strong>Seasonal Relevance</strong>
              <p>
                Create content that connects the brand with an
                important cultural moment.
              </p>
            </div>

            <div>
              <span>COMMUNICATION</span>
              <strong>Product + Occasion</strong>
              <p>
                Combine the product offering with the context
                surrounding Ramadan.
              </p>
            </div>

            <div>
              <span>MARKETING VALUE</span>
              <strong>Timely Engagement</strong>
              <p>
                Use seasonal moments to encourage attention,
                interaction, and purchase consideration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL DIRECTION
      ===================================================== */}

      <section className="tea-visual-section">

        <div className="tea-section-index">
          <span>09</span>
          <small>VISUAL DIRECTION</small>
        </div>

        <div className="tea-visual-header">

          <p className="tea-mini-label">
            WARM · PREMIUM · INVITING
          </p>

          <h2>
            A visual language that feels
            <em>as warm as the first sip.</em>
          </h2>

          <p>
            The visual direction balances warmth and sophistication,
            creating a digital presence that feels welcoming while
            maintaining a polished and professional appearance.
          </p>

        </div>

        <div className="tea-visual-principles">

          <div>
            <span>01</span>
            <strong>Warm Visuals</strong>
            <p>
              A cozy direction that reflects the emotional experience
              associated with tea and coffee.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Clear Hierarchy</strong>
            <p>
              Simple compositions that allow products and messages
              to remain easy to understand.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Product Storytelling</strong>
            <p>
              Content that presents beverages as part of a lifestyle
              rather than isolated products.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>Seasonal Flexibility</strong>
            <p>
              A system flexible enough to support campaigns and
              culturally relevant occasions.
            </p>
          </div>

        </div>

        <div className="tea-visual-statement">

          <span>DESIGN APPROACH</span>

          <strong>
            Make every piece of content feel intentional,
            recognizable, and worth stopping for.
          </strong>

        </div>

      </section>

      {/* =====================================================
          MARKETING APPROACH
      ===================================================== */}

      <section className="tea-marketing-section">

        <div className="tea-section-index">
          <span>10</span>
          <small>MARKETING APPROACH</small>
        </div>

        <div className="tea-marketing-header">

          <p className="tea-mini-label">
            BEYOND THE VISUALS
          </p>

          <h2>
            Content designed to support
            <em>the bigger marketing picture.</em>
          </h2>

        </div>

        <div className="tea-marketing-grid">

          <article>
            <span>01</span>
            <h3>CONSISTENCY</h3>
            <p>
              Maintain a recognizable visual and communication style
              across the brand's social presence.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>STORYTELLING</h3>
            <p>
              Turn everyday products into stories around routines,
              moods, occasions, and experiences.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>SEASONAL CONTENT</h3>
            <p>
              Build campaigns around relevant moments to keep the
              brand timely and culturally connected.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>ENGAGEMENT</h3>
            <p>
              Create content that encourages people to pause,
              relate, remember, and interact.
            </p>
          </article>

        </div>
      </section>

      {/* =====================================================
          FINAL OUTCOME
      ===================================================== */}

      <section className="tea-outcome-section">

        <div className="tea-outcome-top">

          <div className="tea-section-index">

            <span>11</span>

            <small>FINAL OUTCOME</small>

          </div>

          <p className="tea-mini-label">
            THE RESULT
          </p>

        </div>

        <h2>
          From everyday products
          <em>to a stronger digital story.</em>
        </h2>

        <p className="tea-outcome-copy">
          The project created a clearer digital marketing direction
          for Tea, Coffee & Green Tea — combining brand refresh,
          content strategy, social media design, and seasonal
          storytelling into one cohesive approach.
        </p>

        <div className="tea-outcome-highlights">

          <div>
            <strong>01</strong>
            <span>Brand Refresh</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Content Strategy</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Social Media Content</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Seasonal Campaign</span>
          </div>

        </div>

        <div className="tea-final-statement">

          <span>BRAND</span>

          <strong>✦</strong>

          <span>STRATEGY</span>

          <strong>✦</strong>

          <span>CONTENT</span>

          <strong>✦</strong>

          <span>DESIGN</span>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="tea-final-cta">

        <div className="tea-cta-decoration">
          ✦
        </div>

        <p className="tea-mini-label">
          NEXT PROJECT / NEXT IDEA
        </p>

        <h2>
          Have a brand?
          <em>Let's make it memorable.</em>
        </h2>

        <p>
          From social media strategy and content creation
          to complete digital experiences, let's turn your
          brand's ideas into something people remember.
        </p>

        <div className="tea-cta-buttons">

          <Link
            to="/"
            className="tea-cta-secondary"
          >
            ← Back to Portfolio
          </Link>

          <button
            type="button"
            className="tea-cta-primary"
            onClick={openChatbot}
          >
            Let's Work Together
            <span>↗</span>
          </button>

        </div>

        <div className="tea-cta-footer">

          <span>MZ.</span>

          <span>
            Creative Digital Experiences
          </span>

          <span>2026</span>

        </div>

      </section>

    </div>
  );
}

export default TeaCoffeeCaseStudy;