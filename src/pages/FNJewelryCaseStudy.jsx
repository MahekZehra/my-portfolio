import { Link } from "react-router-dom";
import "./FNJewelryCaseStudy.css";

import capture0 from "../assets/fn-jewelry-home.png/Capture.PNG";
import capture1 from "../assets/fn-jewelry-home.png/Capture1.PNG";
import capture2 from "../assets/fn-jewelry-home.png/Capture2.PNG";
import capture3 from "../assets/fn-jewelry-home.png/Capture3.PNG";
import capture4 from "../assets/fn-jewelry-home.png/Capture4.PNG";
import capture5 from "../assets/fn-jewelry-home.png/Capture5.PNG";
import capture6 from "../assets/fn-jewelry-home.png/Capture6.PNG";
import capture7 from "../assets/fn-jewelry-home.png/Capture7.PNG";
import capture8 from "../assets/fn-jewelry-home.png/Capture8.PNG";
import capture9 from "../assets/fn-jewelry-home.png/Capture9.PNG";
import capture10 from "../assets/fn-jewelry-home.png/Capture10.PNG";

function EditorialImage({ src, alt, label, number }) {
  return (
    <figure className="editorial-shot">
      <div className="shot-number">{number}</div>

      <div className="shot-frame">
        <img src={src} alt={alt} />
      </div>

      <figcaption>
        <span>{label}</span>
        <span>FN / 2026</span>
      </figcaption>
    </figure>
  );
}

function FNJewelryCaseStudy() {
  return (
    <div className="fn-case-study">

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="editorial-nav">
        <Link to="/" className="editorial-logo">
          MZ<span>.</span>
        </Link>

        <div className="nav-center">
          <span>SELECTED WORK</span>
          <span>FN JEWELRY / 2026</span>
        </div>

        <Link to="/" className="nav-back">
          ← Portfolio
        </Link>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="editorial-hero">

        <div className="hero-side-label">
          <span>CASE STUDY</span>
          <span>01 / 12</span>
        </div>

        <div className="hero-kicker">
          E-COMMERCE · DIGITAL EXPERIENCE · ART DIRECTION
        </div>

        <h1>
          FN Jewelry
          <em>Worldwide.</em>
        </h1>

        <div className="hero-bottom">

          <p className="hero-description">
            A fashion-forward e-commerce experience created to turn a
            jewellery brand into a polished digital destination —
            playful, elegant, responsive, and ready for a worldwide audience.
          </p>

          <div className="hero-meta">
            <div>
              <span>ROLE</span>
              <strong>Design + Development</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>E-Commerce</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>2026</strong>
            </div>
          </div>

        </div>

        <div className="hero-sparkle sparkle-one">✦</div>
        <div className="hero-sparkle sparkle-two">✧</div>
        <div className="hero-orbit-word">WORLDWIDE</div>

      </section>

      {/* =========================
          HERO SCREENSHOT
      ========================= */}

      <section className="hero-screen-section">
        <div className="editorial-shot hero-shot">
          <div className="shot-frame">
            <img
              src={capture0}
              alt="FN Jewelry Worldwide homepage"
            />
          </div>

          <div className="hero-caption">
            <span>THE DIGITAL STOREFRONT</span>
            <span>01 — HOMEPAGE</span>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECT STORY
      ========================= */}

      <section className="story-section">

        <div className="section-index">
          <span>02</span>
          <small>PROJECT STORY</small>
        </div>

        <div className="story-layout">

          <div className="story-title">
            <p className="mini-label">THE BEGINNING</p>

            <h2>
              From a product
              <em>to a presence.</em>
            </h2>
          </div>

          <div className="story-copy">

            <p className="lead-copy">
              FN Jewelry Worldwide began with a simple idea:
              create a digital space where jewellery, garments,
              and Kundan accessories could feel as beautiful online
              as they do in real life.
            </p>

            <p>
              The goal was never to build just another online shop.
              The experience needed to feel intentional, feminine,
              modern, and effortless — while still making the actual
              shopping journey incredibly simple.
            </p>

            <div className="story-note">
              <span>THE INTENTION</span>
              <strong>
                Make shopping feel less like a task
                and more like discovering something beautiful.
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PROBLEM / GOAL
      ========================= */}

      <section className="goal-section">

        <div className="editorial-number">03</div>

        <div className="goal-header">
          <p className="mini-label">PROBLEM / GOAL</p>

          <h2>
            Beautiful products
            <em>needed a beautiful journey.</em>
          </h2>
        </div>

        <div className="goal-grid">

          <article>
            <span>01</span>
            <h3>Make discovery effortless.</h3>
            <p>
              Customers should be able to move from browsing
              to product discovery without feeling overwhelmed.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Keep the interface elegant.</h3>
            <p>
              The design needed enough personality to feel premium
              without distracting from the products themselves.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Build for real shopping.</h3>
            <p>
              Product pages, cart, checkout, confirmation,
              country and currency all needed to work together.
            </p>
          </article>

        </div>

      </section>

      {/* =========================
          APPROACH
      ========================= */}

      <section className="approach-section">

        <div className="section-index">
          <span>04</span>
          <small>MY APPROACH</small>
        </div>

        <div className="approach-layout">

          <div>
            <p className="mini-label">DESIGN THINKING</p>

            <h2>
              Less friction.
              <em>More feeling.</em>
            </h2>
          </div>

          <div className="approach-copy">

            <p className="lead-copy">
              I approached the project as both a designer and developer,
              thinking about the visual experience and the actual user
              journey at the same time.
            </p>

            <div className="approach-list">

              <div>
                <span>01</span>
                <strong>Understand</strong>
                <p>Define the brand, audience, and shopping goals.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Design</strong>
                <p>Create a visual system that feels premium and approachable.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Build</strong>
                <p>Turn the experience into responsive, interactive interfaces.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Refine</strong>
                <p>Polish spacing, interactions, responsiveness, and flow.</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          DESIGN DECISIONS
      ========================= */}

      <section className="design-section">

        <div className="section-index">
          <span>05</span>
          <small>DESIGN DECISIONS</small>
        </div>

        <div className="design-intro">

          <p className="mini-label">VISUAL DIRECTION</p>

          <h2>
            Soft visuals.
            <em>Strong structure.</em>
          </h2>

          <p>
            The interface balances feminine visual details with a clean
            structure so the jewellery remains the main character.
          </p>

        </div>

        <div className="design-pills">
          <span>Editorial Layouts</span>
          <span>Soft Visual Language</span>
          <span>Clear Hierarchy</span>
          <span>Premium Product Focus</span>
          <span>Responsive First</span>
        </div>

        <EditorialImage
          src={capture1}
          alt="FN Jewelry homepage design"
          label="Homepage / Brand Introduction"
          number="05.01"
        />

      </section>

      {/* =========================
          SHOPPING EXPERIENCE
      ========================= */}

      <section className="shopping-section">

        <div className="section-index">
          <span>06</span>
          <small>SHOPPING EXPERIENCE</small>
        </div>

        <div className="shopping-heading">

          <p className="mini-label">DISCOVER → EXPLORE → CHOOSE</p>

          <h2>
            Shopping should feel
            <em>natural.</em>
          </h2>

        </div>

        <div className="editorial-grid">

          <EditorialImage
            src={capture2}
            alt="FN Jewelry shop collection"
            label="Shop / Collection"
            number="06.01"
          />

          <EditorialImage
            src={capture3}
            alt="FN Jewelry product grid"
            label="Product Grid"
            number="06.02"
          />

        </div>

      </section>

      {/* =========================
          PRODUCT EXPERIENCE
      ========================= */}

      <section className="product-section">

        <div className="section-index">
          <span>07</span>
          <small>PRODUCT EXPERIENCE</small>
        </div>

        <div className="product-layout">

          <div className="product-copy">

            <p className="mini-label">THE PRODUCT MOMENT</p>

            <h2>
              Let every piece
              <em>have its moment.</em>
            </h2>

            <p className="lead-copy">
              Product pages were designed to give each item enough room
              to breathe while keeping the important shopping information
              easy to find.
            </p>

            <div className="editorial-note">
              <span>DESIGN PRINCIPLE</span>
              <strong>
                Product first. Interface second.
              </strong>
            </div>

          </div>

          <EditorialImage
            src={capture4}
            alt="FN Jewelry product details"
            label="Product Details"
            number="07.01"
          />

        </div>

      </section>

      {/* =========================
          SHOPPING FLOW
      ========================= */}

      <section className="flow-section">

        <div className="section-index">
          <span>08</span>
          <small>SHOPPING FLOW</small>
        </div>

        <div className="flow-header">

          <p className="mini-label">THE JOURNEY</p>

          <h2>
            From “I like this”
            <em>to “it’s mine.”</em>
          </h2>

        </div>

        <div className="flow-steps">

          <div>
            <span>01</span>
            <strong>Product</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Cart</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Checkout</strong>
          </div>

          <div>
            <span>04</span>
            <strong>Confirmation</strong>
          </div>

        </div>

        <div className="editorial-grid">

          <EditorialImage
            src={capture5}
            alt="FN Jewelry shopping cart"
            label="Shopping Cart"
            number="08.01"
          />

          <EditorialImage
            src={capture6}
            alt="FN Jewelry checkout"
            label="Checkout"
            number="08.02"
          />

        </div>

        <div className="flow-confirmation">

          <EditorialImage
            src={capture7}
            alt="FN Jewelry order confirmation"
            label="Order Confirmation"
            number="08.03"
          />

          <div>
            <p className="mini-label">THE FINISH</p>
            <h3>
              A small moment
              <em>of reassurance.</em>
            </h3>
            <p>
              The confirmation screen closes the journey clearly,
              giving customers a sense that everything went exactly
              as expected.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          MOBILE
      ========================= */}

      <section className="mobile-section">

        <div className="section-index">
          <span>09</span>
          <small>MOBILE EXPERIENCE</small>
        </div>

        <div className="mobile-heading">

          <p className="mini-label">SMALL SCREEN / SAME EXPERIENCE</p>

          <h2>
            Designed to move
            <em>with the customer.</em>
          </h2>

          <p>
            Responsive behaviour was treated as part of the design itself,
            rather than something added at the end.
          </p>

        </div>

        <div className="mobile-gallery">

          <EditorialImage
            src={capture8}
            alt="FN Jewelry mobile experience"
            label="Mobile Homepage"
            number="09.01"
          />

          <EditorialImage
            src={capture9}
            alt="FN Jewelry responsive interface"
            label="Mobile Shopping Experience"
            number="09.02"
          />

        </div>

      </section>

      {/* =========================
          COUNTRY / CURRENCY
      ========================= */}

      <section className="global-section">

        <div className="section-index">
          <span>10</span>
          <small>GLOBAL EXPERIENCE</small>
        </div>

        <div className="global-layout">

          <div className="global-copy">

            <p className="mini-label">MADE FOR WORLDWIDE</p>

            <h2>
              One storefront.
              <em>Different worlds.</em>
            </h2>

            <p className="lead-copy">
              Country and currency selection adds another layer of
              personalization, helping the shopping experience feel
              relevant to customers across different regions.
            </p>

            <div className="global-stamp">
              <span>WORLDWIDE</span>
              <strong>✦</strong>
              <span>READY</span>
            </div>

          </div>

          <EditorialImage
            src={capture10}
            alt="FN Jewelry country and currency selector"
            label="Country + Currency"
            number="10.01"
          />

        </div>

      </section>

      {/* =========================
          DEVELOPMENT
      ========================= */}

      <section className="development-section">

        <div className="section-index">
          <span>11</span>
          <small>DEVELOPMENT</small>
        </div>

        <div className="development-header">

          <p className="mini-label">UNDER THE SURFACE</p>

          <h2>
            Designed beautifully.
            <em>Built properly.</em>
          </h2>

          <p>
            The final experience was developed as a responsive React
            application with reusable components and a complete shopping flow.
          </p>

        </div>

        <div className="tech-grid">

          <div>
            <span>01</span>
            <h3>React</h3>
            <p>Component-based architecture for a flexible interface.</p>
          </div>

          <div>
            <span>02</span>
            <h3>JavaScript</h3>
            <p>Interactive functionality and dynamic behaviour.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Tailwind CSS</h3>
            <p>Responsive styling and consistent visual systems.</p>
          </div>

          <div>
            <span>04</span>
            <h3>React Router</h3>
            <p>Structured navigation between shopping experiences.</p>
          </div>

        </div>

      </section>

      {/* =========================
          CHALLENGES
      ========================= */}

      <section className="challenge-section">

        <div className="section-index">
          <span>12</span>
          <small>CHALLENGES + SOLUTIONS</small>
        </div>

        <div className="challenge-header">

          <p className="mini-label">WHAT HAPPENED BEHIND THE SCENES</p>

          <h2>
            Pretty is easy.
            <em>Making it work is the craft.</em>
          </h2>

        </div>

        <div className="challenge-grid">

          <article>
            <span>CHALLENGE 01</span>
            <h3>Keeping the experience simple.</h3>
            <p>
              Multiple product categories and shopping steps could easily
              make the experience feel complicated.
            </p>
            <strong>
              → Solution: clear hierarchy, focused navigation, and a
              straightforward shopping flow.
            </strong>
          </article>

          <article>
            <span>CHALLENGE 02</span>
            <h3>Maintaining responsive consistency.</h3>
            <p>
              The experience needed to remain visually polished across
              different screen sizes.
            </p>
            <strong>
              → Solution: responsive layouts and component-based styling
              designed with mobile behaviour in mind.
            </strong>
          </article>

          <article>
            <span>CHALLENGE 03</span>
            <h3>Connecting the entire journey.</h3>
            <p>
              Product discovery, cart, checkout, and confirmation needed
              to feel like one continuous experience.
            </p>
            <strong>
              → Solution: structured state management and connected
              shopping interactions.
            </strong>
          </article>

        </div>

      </section>

      {/* =========================
          OUTCOME
      ========================= */}

      <section className="outcome-section">

        <div className="outcome-top">

          <div className="section-index">
            <span>13</span>
            <small>FINAL OUTCOME</small>
          </div>

          <p className="mini-label">THE RESULT</p>

        </div>

        <h2>
          More than a website.
          <em>A complete digital experience.</em>
        </h2>

        <p className="outcome-copy">
          FN Jewelry Worldwide brings together visual storytelling,
          product discovery, responsive design, and a complete e-commerce
          journey in one cohesive experience.
        </p>

        <div className="outcome-highlights">

          <div>
            <strong>01</strong>
            <span>Premium Visual Direction</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Responsive Experience</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Complete Shopping Flow</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Worldwide Experience</span>
          </div>

        </div>

        <div className="final-statement">
          <span>DESIGNED WITH INTENTION</span>
          <strong>✦</strong>
          <span>BUILT WITH PURPOSE</span>
        </div>

      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="case-final-cta">

        <div className="cta-decoration">✦</div>

        <p className="mini-label">NEXT PROJECT / NEXT IDEA</p>

        <h2>
          Have an idea?
          <em>Let's make it beautiful.</em>
        </h2>

        <p>
          Websites, digital experiences, creative direction,
          and everything in between.
        </p>

        <div className="cta-buttons">

          <Link to="/" className="cta-secondary">
            ← Back to Portfolio
          </Link>

          <a
            href="mailto:your@email.com"
            className="cta-primary"
          >
            Let's Work Together
            <span>↗</span>
          </a>

        </div>

        <div className="cta-footer">
          <span>MZ.</span>
          <span>Creative Digital Experiences</span>
          <span>2026</span>
        </div>

      </section>

    </div>
  );
}

export default FNJewelryCaseStudy;