import { Link } from "react-router-dom";
import "./FNJewelryCaseStudy.css";

import homepage from "../assets/fn-jewelry-home.png/homepage.PNG";
import bestseller from "../assets/fn-jewelry-home.png/Bestseller.PNG";
import shopByCategory from "../assets/fn-jewelry-home.png/Shopebycategory.PNG";
import cart from "../assets/fn-jewelry-home.png/Cart.PNG";
import checkout from "../assets/fn-jewelry-home.png/Checkout.PNG";
import footer from "../assets/fn-jewelry-home.png/Footer.PNG";
import knowYourStones from "../assets/fn-jewelry-home.png/Knowyourstones.PNG";
import worldwideDelivery from "../assets/fn-jewelry-home.png/Worldwidedelivery.PNG";
import faq from "../assets/fn-jewelry-home.png/Faq.PNG";
import ourStory1 from "../assets/fn-jewelry-home.png/Ourstory1.PNG";
import ourStory2 from "../assets/fn-jewelry-home.png/Ourstory2.PNG";

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

function FNJewelryCaseStudy({ onWorkTogether }) {
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
          <span>01 / 13</span>
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
            A refined e-commerce experience designed to bring FN Jewelry
            into a polished digital space — combining product discovery,
            brand storytelling, responsive design, and a seamless shopping
            journey for customers around the world.
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
              src={homepage}
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

            <p className="mini-label">
              THE BEGINNING
            </p>

            <h2>
              From a collection
              <em>to a digital identity.</em>
            </h2>

          </div>

          <div className="story-copy">

            <p className="lead-copy">
              FN Jewelry Worldwide needed a digital experience that could
              present its jewellery, garments, accessories, and Kundan
              pieces in a way that felt polished, feminine, and easy to
              explore.
            </p>

            <p>
              The goal was to create more than a simple product catalogue.
              The website needed to communicate the personality of the
              brand while giving customers a clear and comfortable path
              from discovering a collection to completing a purchase.
            </p>

            <div className="story-note">

              <span>THE INTENTION</span>

              <strong>
                Turn product browsing into an experience
                that feels personal, visual, and effortless.
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          BRAND STORY
      ========================= */}

      <section className="design-section">

        <div className="section-index">
          <span>03</span>
          <small>BRAND STORY</small>
        </div>

        <div className="design-intro">

          <p className="mini-label">
            BEYOND THE PRODUCT
          </p>

          <h2>
            Give the brand
            <em>a story to remember.</em>
          </h2>

          <p>
            Alongside product discovery, the experience gives visitors
            space to understand the story behind FN Jewelry and connect
            with the brand beyond individual products.
          </p>

        </div>

        <div className="design-pills">
          <span>Brand Storytelling</span>
          <span>Visual Identity</span>
          <span>Editorial Layouts</span>
          <span>Clear Hierarchy</span>
          <span>Premium Product Focus</span>
        </div>

        <EditorialImage
          src={ourStory1}
          alt="FN Jewelry brand story"
          label="Our Story / Brand Introduction"
          number="03.01"
        />

      </section>


      {/* =========================
          BRAND STORY CONTINUATION
      ========================= */}

      <section className="shopping-section">

        <div className="section-index">
          <span>04</span>
          <small>BRAND EXPERIENCE</small>
        </div>

        <div className="shopping-heading">

          <p className="mini-label">
            STORY → CONNECTION → TRUST
          </p>

          <h2>
            Let customers
            <em>meet the brand.</em>
          </h2>

        </div>

        <div className="editorial-grid">

          <EditorialImage
            src={ourStory2}
            alt="FN Jewelry brand story continuation"
            label="Our Story / Brand Experience"
            number="04.01"
          />

          <EditorialImage
            src={bestseller}
            alt="FN Jewelry bestseller collection"
            label="Bestsellers / Product Discovery"
            number="04.02"
          />

        </div>

      </section>


      {/* =========================
          SHOPPING EXPERIENCE
      ========================= */}

      <section className="product-section">

        <div className="section-index">
          <span>05</span>
          <small>SHOPPING EXPERIENCE</small>
        </div>

        <div className="product-layout">

          <div className="product-copy">

            <p className="mini-label">
              DISCOVERY WITHOUT FRICTION
            </p>

            <h2>
              Help customers
              <em>find what feels right.</em>
            </h2>

            <p className="lead-copy">
              Product discovery was structured around clear categories,
              visual browsing, and focused collections so customers can
              move naturally through the catalogue without unnecessary
              complexity.
            </p>

            <div className="editorial-note">

              <span>
                DESIGN PRINCIPLE
              </span>

              <strong>
                Make discovery simple. Let the products lead.
              </strong>

            </div>

          </div>

          <EditorialImage
            src={shopByCategory}
            alt="FN Jewelry shop by category"
            label="Shop By Category"
            number="05.01"
          />

        </div>

      </section>


      {/* =========================
          PRODUCT EDUCATION
      ========================= */}

      <section className="flow-section">

        <div className="section-index">
          <span>06</span>
          <small>PRODUCT EDUCATION</small>
        </div>

        <div className="flow-header">

          <p className="mini-label">
            DISCOVER → UNDERSTAND → CHOOSE
          </p>

          <h2>
            Beautiful products
            <em>should feel easy to understand.</em>
          </h2>

        </div>

        <div className="flow-steps">

          <div>
            <span>01</span>
            <strong>Discover</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Explore</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Understand</strong>
          </div>

          <div>
            <span>04</span>
            <strong>Choose</strong>
          </div>

        </div>

        <div className="editorial-grid">

          <EditorialImage
            src={knowYourStones}
            alt="FN Jewelry know your stones section"
            label="Know Your Stones / Product Education"
            number="06.01"
          />

          <EditorialImage
            src={faq}
            alt="FN Jewelry frequently asked questions"
            label="FAQ / Customer Support"
            number="06.02"
          />

        </div>

      </section>


      {/* =========================
          SHOPPING FLOW
      ========================= */}

      <section className="mobile-section">

        <div className="section-index">
          <span>07</span>
          <small>SHOPPING FLOW</small>
        </div>

        <div className="mobile-heading">

          <p className="mini-label">
            THE JOURNEY
          </p>

          <h2>
            From “I like this”
            <em>to “it’s mine.”</em>
          </h2>

          <p>
            Every important step of the customer journey was connected
            into one continuous shopping experience — from product
            selection to checkout.
          </p>

        </div>

        <div className="mobile-gallery">

          <EditorialImage
            src={cart}
            alt="FN Jewelry shopping cart"
            label="Shopping Cart"
            number="07.01"
          />

          <EditorialImage
            src={checkout}
            alt="FN Jewelry checkout"
            label="Checkout"
            number="07.02"
          />

        </div>

      </section>


      {/* =========================
          CHECKOUT EXPERIENCE
      ========================= */}

      <section className="global-section">

        <div className="section-index">
          <span>08</span>
          <small>CHECKOUT EXPERIENCE</small>
        </div>

        <div className="global-layout">

          <div className="global-copy">

            <p className="mini-label">
              SIMPLE → CLEAR → CONFIDENT
            </p>

            <h2>
              The final step
              <em>should feel effortless.</em>
            </h2>

            <p className="lead-copy">
              Checkout was designed to keep the purchasing process focused
              and understandable, reducing unnecessary friction while
              keeping the customer informed throughout the journey.
            </p>

            <div className="global-stamp">

              <span>
                SIMPLE
              </span>

              <strong>
                ✦
              </strong>

              <span>
                SECURE
              </span>

            </div>

          </div>

          <EditorialImage
            src={checkout}
            alt="FN Jewelry checkout experience"
            label="Checkout Experience"
            number="08.01"
          />

        </div>

      </section>


      {/* =========================
          WORLDWIDE EXPERIENCE
      ========================= */}

      <section className="design-section">

        <div className="section-index">
          <span>09</span>
          <small>GLOBAL EXPERIENCE</small>
        </div>

        <div className="design-intro">

          <p className="mini-label">
            MADE FOR WORLDWIDE
          </p>

          <h2>
            One storefront.
            <em>Different worlds.</em>
          </h2>

          <p>
            FN Jewelry was designed with a worldwide customer base in
            mind, making the experience adaptable for visitors shopping
            from different regions.
          </p>

        </div>

        <div className="design-pills">
          <span>Worldwide Delivery</span>
          <span>Regional Experience</span>
          <span>Flexible Shopping</span>
          <span>International Audience</span>
        </div>

        <EditorialImage
          src={worldwideDelivery}
          alt="FN Jewelry worldwide delivery experience"
          label="Worldwide Delivery"
          number="09.01"
        />

      </section>


      {/* =========================
          DEVELOPMENT
      ========================= */}

      <section className="development-section">

        <div className="section-index">
          <span>10</span>
          <small>DEVELOPMENT</small>
        </div>

        <div className="development-header">

          <p className="mini-label">
            UNDER THE SURFACE
          </p>

          <h2>
            Designed beautifully.
            <em>Built properly.</em>
          </h2>

          <p>
            The experience was developed as a responsive React application
            with reusable components, structured navigation, and an
            interconnected e-commerce journey.
          </p>

        </div>

        <div className="tech-grid">

          <div>
            <span>01</span>
            <h3>React</h3>
            <p>
              Component-based architecture for a flexible interface.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>JavaScript</h3>
            <p>
              Interactive functionality and dynamic behaviour.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Tailwind CSS</h3>
            <p>
              Responsive styling and consistent visual systems.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>React Router</h3>
            <p>
              Structured navigation across the portfolio experience.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          SUPPORT / INFORMATION
      ========================= */}

      <section className="challenge-section">

        <div className="section-index">
          <span>11</span>
          <small>SUPPORT EXPERIENCE</small>
        </div>

        <div className="challenge-header">

          <p className="mini-label">
            BEYOND THE PURCHASE
          </p>

          <h2>
            Good e-commerce
            <em>answers questions too.</em>
          </h2>

        </div>

        <div className="challenge-grid">

          <article>

            <span>
              EXPERIENCE 01
            </span>

            <h3>
              Clear information.
            </h3>

            <p>
              Important information was presented in a way that helps
              customers make decisions without searching through the
              entire website.
            </p>

            <strong>
              → Solution: structured content, visual hierarchy, and
              dedicated information sections.
            </strong>

          </article>


          <article>

            <span>
              EXPERIENCE 02
            </span>

            <h3>
              Helpful guidance.
            </h3>

            <p>
              Educational and FAQ content gives customers additional
              context before and after exploring products.
            </p>

            <strong>
              → Solution: dedicated educational and support sections.
            </strong>

          </article>


          <article>

            <span>
              EXPERIENCE 03
            </span>

            <h3>
              A complete brand experience.
            </h3>

            <p>
              The website connects products, stories, information,
              shopping, and support into one cohesive destination.
            </p>

            <strong>
              → Solution: consistent design language across every section.
            </strong>

          </article>

        </div>

      </section>


      {/* =========================
          FINAL WEBSITE EXPERIENCE
      ========================= */}

      <section className="shopping-section">

        <div className="section-index">
          <span>12</span>
          <small>FINAL WEBSITE EXPERIENCE</small>
        </div>

        <div className="shopping-heading">

          <p className="mini-label">
            THE DETAILS MATTER
          </p>

          <h2>
            Even the ending
            <em>belongs to the experience.</em>
          </h2>

        </div>

        <div className="editorial-grid">

          <EditorialImage
            src={footer}
            alt="FN Jewelry website footer"
            label="Footer / Final Navigation"
            number="12.01"
          />

          <EditorialImage
            src={homepage}
            alt="FN Jewelry final homepage experience"
            label="Homepage / Final Experience"
            number="12.02"
          />

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

          <p className="mini-label">
            THE RESULT
          </p>

        </div>

        <h2>
          More than a website.
          <em>A complete digital experience.</em>
        </h2>

        <p className="outcome-copy">
          FN Jewelry Worldwide brings together brand storytelling,
          product discovery, educational content, responsive design,
          worldwide delivery information, and a complete e-commerce
          journey into one cohesive digital experience.
        </p>

        <div className="outcome-highlights">

          <div>
            <strong>01</strong>
            <span>
              Premium Visual Direction
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              Responsive Experience
            </span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              Complete Shopping Flow
            </span>
          </div>

          <div>
            <strong>04</strong>
            <span>
              Worldwide Experience
            </span>
          </div>

        </div>

        <div className="final-statement">

          <span>
            DESIGNED WITH INTENTION
          </span>

          <strong>
            ✦
          </strong>

          <span>
            BUILT WITH PURPOSE
          </span>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="case-final-cta">

        <div className="cta-decoration">
          ✦
        </div>

        <p className="mini-label">
          NEXT PROJECT / NEXT IDEA
        </p>

        <h2>
          Have an idea?
          <em>Let's make it beautiful.</em>
        </h2>

        <p>
          Websites, digital experiences, creative direction,
          and everything in between.
        </p>

        <div className="cta-buttons">

          <Link
            to="/"
            className="cta-secondary"
          >
            ← Back to Portfolio
          </Link>

          <button
            type="button"
            onClick={onWorkTogether}
            className="cta-primary"
          >
            Let's Work Together
            <span>↗</span>
          </button>

        </div>

        <div className="cta-footer">

          <span>
            MZ.
          </span>

          <span>
            Creative Digital Experiences
          </span>

          <span>
            2026
          </span>

        </div>

      </section>

    </div>
  );
}

export default FNJewelryCaseStudy;