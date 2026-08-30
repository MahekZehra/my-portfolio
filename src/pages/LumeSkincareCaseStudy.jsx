import { Link } from "react-router-dom";
import "./LumeSkincareCaseStudy.css";

// =========================================================
// LUME SKINCARE IMAGES
// =========================================================

import carousel01 from "../assets/lume-skincare.png/carousel-01.png";
import carousel02 from "../assets/lume-skincare.png/carousel-02.png";
import carousel03 from "../assets/lume-skincare.png/carousel-03.png";
import carousel04 from "../assets/lume-skincare.png/carousel-04.png";
import carousel05 from "../assets/lume-skincare.png/carousel-05.png";
import carousel06 from "../assets/lume-skincare.png/carousel-06.png";
import carousel07 from "../assets/lume-skincare.png/carousel-07.png";
import carousel08 from "../assets/lume-skincare.png/carousel-08.png";

import cover from "../assets/lume-skincare.png/cover.png";

import post01 from "../assets/lume-skincare.png/post-01.png";
import post02 from "../assets/lume-skincare.png/post-02.png";
import post03 from "../assets/lume-skincare.png/post-03.png";

// =========================================================
// EDITORIAL IMAGE COMPONENT
// =========================================================

function EditorialImage({ src, alt, label, number }) {
  return (
    <figure className="lume-editorial-shot">
      <div className="lume-shot-number">
        {number}
      </div>

      <div className="lume-shot-frame">
        <img
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>

      <figcaption>
        <span>{label}</span>
        <span>LUME / 2026</span>
      </figcaption>
    </figure>
  );
}

// =========================================================
// LUME SKINCARE CASE STUDY
// =========================================================

function LumeSkincareCaseStudy() {
  const onWorkTogether = () => window.dispatchEvent(new CustomEvent("open-contact-chatbot"));

  // =========================================================
  // OPEN GLOBAL CHATBOT
  // =========================================================

  const openChatbot = () => {
    window.dispatchEvent(
      new Event("open-contact-chatbot")
    );
  };

  return (
    <div className="lume-case-study">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="lume-editorial-nav">

        <Link
          to="/"
          className="lume-editorial-logo"
        >
          MZ<span>.</span>
        </Link>

        <div className="lume-nav-center">
          <span>
            SELECTED WORK
          </span>

          <span>
            LUME SKINCARE / 2026
          </span>
        </div>

        <Link
          to="/"
          className="lume-nav-back"
        >
          ← Portfolio
        </Link>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="lume-editorial-hero">

        <div className="lume-hero-side-label">
          <span>
            CASE STUDY
          </span>

          <span>
            01 / 08
          </span>
        </div>


        <div className="lume-hero-kicker">
          DIGITAL MARKETING · SOCIAL MEDIA · CONTENT
        </div>


        <h1>
          Lume
          <em>
            Skincare.
          </em>
        </h1>


        <div className="lume-hero-bottom">

          <p className="lume-hero-description">
            A conceptual digital marketing project exploring how a
            modern skincare brand could build a softer, more intentional,
            and educational presence on Instagram.
          </p>


          <div className="lume-hero-meta">

            <div>
              <span>
                PROJECT TYPE
              </span>

              <strong>
                Concept / Sample Project
              </strong>
            </div>


            <div>
              <span>
                SERVICE
              </span>

              <strong>
                Digital Marketing
              </strong>
            </div>


            <div>
              <span>
                PLATFORM
              </span>

              <strong>
                Instagram
              </strong>
            </div>

          </div>

        </div>


        {/* =====================================================
            LUME COVER IMAGE
        ===================================================== */}

        <div className="lume-hero-cover">

          <img
            src={cover}
            alt="Lume Skincare case study cover"
            className="lume-cover-image"
          />

        </div>


        <div className="lume-hero-sparkle lume-sparkle-one">
          ✦
        </div>

        <div className="lume-hero-sparkle lume-sparkle-two">
          ✧
        </div>

        <div className="lume-hero-orbit-word">
          WELLNESS
        </div>

      </section>


      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="lume-story-section">

        <div className="lume-section-index">
          <span>
            02
          </span>

          <small>
            PROJECT OVERVIEW
          </small>
        </div>


        <div className="lume-story-layout">

          <div className="lume-story-title">

            <p className="lume-mini-label">
              THE IDEA
            </p>

            <h2>
              Creating content
              <em>
                that makes skincare feel personal.
              </em>
            </h2>

          </div>


          <div className="lume-story-copy">

            <p className="lume-lead-copy">
              Lume Skincare is a conceptual digital marketing project
              created to explore how a skincare brand could build a
              warm, approachable, and educational presence on Instagram.
            </p>


            <p>
              The content direction focuses on skincare education,
              self-care, wellness, and relatable messaging — creating
              posts that feel informative without losing the soft and
              personal nature of the beauty space.
            </p>


            <div className="lume-story-note">

              <span>
                PROJECT INTENTION
              </span>

              <strong>
                Build a social presence around
                education, connection, and wellness.
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THE OPPORTUNITY
      ===================================================== */}

      <section className="lume-direction-section">

        <div className="lume-section-index">

          <span>
            03
          </span>

          <small>
            THE OPPORTUNITY
          </small>

        </div>


        <div className="lume-direction-header">

          <p className="lume-mini-label">
            CONTENT DIRECTION
          </p>

          <h2>
            Making skincare
            <em>
              more than a product.
            </em>
          </h2>

          <p>
            The goal was to explore a social media presence that feels
            more than promotional. Instead of focusing only on products,
            the content creates conversations around skincare,
            hydration, self-care, and everyday wellness.
          </p>

        </div>


        <div className="lume-direction-grid">

          <article>

            <span>
              01
            </span>

            <h3>
              EDUCATE
            </h3>

            <p>
              Make skincare information simple,
              approachable, and useful.
            </p>

          </article>


          <article>

            <span>
              02
            </span>

            <h3>
              CONNECT
            </h3>

            <p>
              Create relatable content that feels
              personal rather than purely promotional.
            </p>

          </article>


          <article>

            <span>
              03
            </span>

            <h3>
              BUILD
            </h3>

            <p>
              Establish a consistent and visually
              appealing Instagram presence.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          CONTENT STRATEGY
      ===================================================== */}

      <section className="lume-strategy-section">

        <div className="lume-section-index">

          <span>
            04
          </span>

          <small>
            CONTENT STRATEGY
          </small>

        </div>


        <div className="lume-strategy-header">

          <p className="lume-mini-label">
            THREE CONTENT PILLARS
          </p>

          <h2>
            A content direction
            <em>
              built around education + connection.
            </em>
          </h2>

        </div>


        <div className="lume-pillars">

          <article>

            <span>
              01
            </span>

            <h3>
              EDUCATION
            </h3>

            <p>
              Helpful skincare information designed
              to give the audience something valuable
              to take away.
            </p>

          </article>


          <article>

            <span>
              02
            </span>

            <h3>
              SELF-CARE
            </h3>

            <p>
              Content that connects skincare with
              everyday self-care and personal wellbeing.
            </p>

          </article>


          <article>

            <span>
              03
            </span>

            <h3>
              WELLNESS
            </h3>

            <p>
              Lifestyle-led messaging that positions
              skincare as part of a more intentional routine.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          EDUCATIONAL CAROUSEL
      ===================================================== */}

      <section className="lume-carousel-section">

        <div className="lume-section-index">

          <span>
            05
          </span>

          <small>
            EDUCATIONAL CONTENT
          </small>

        </div>


        <div className="lume-carousel-header">

          <p className="lume-mini-label">
            CONTENT CONCEPT
          </p>

          <h2>
            Turning skincare education
            <em>
              into scroll-worthy content.
            </em>
          </h2>

          <p>
            To explore Lume's educational content direction, I created
            an Instagram carousel focused on one of the most common
            skincare concerns — hydration.
          </p>

        </div>


        <div className="lume-carousel-info">

          <div>

            <span>
              CONTENT
            </span>

            <strong>
              5 Signs Your Skin Needs More Hydration
            </strong>

          </div>


          <div>

            <span>
              FORMAT
            </span>

            <strong>
              Instagram Carousel
            </strong>

          </div>


          <div>

            <span>
              GOAL
            </span>

            <strong>
              Education + Engagement
            </strong>

          </div>

        </div>


        <div className="lume-carousel-grid">

          <EditorialImage
            src={carousel01}
            alt="Lume Skincare hydration carousel introduction"
            label="Carousel / Introduction"
            number="05.01"
          />

          <EditorialImage
            src={carousel02}
            alt="Lume Skincare hydration carousel slide 2"
            label="Carousel / Hydration Education"
            number="05.02"
          />

          <EditorialImage
            src={carousel03}
            alt="Lume Skincare hydration carousel slide 3"
            label="Carousel / Hydration Education"
            number="05.03"
          />

          <EditorialImage
            src={carousel04}
            alt="Lume Skincare hydration carousel slide 4"
            label="Carousel / Hydration Education"
            number="05.04"
          />

          <EditorialImage
            src={carousel05}
            alt="Lume Skincare hydration carousel slide 5"
            label="Carousel / Hydration Education"
            number="05.05"
          />

          <EditorialImage
            src={carousel06}
            alt="Lume Skincare hydration carousel slide 6"
            label="Carousel / Hydration Education"
            number="05.06"
          />

          <EditorialImage
            src={carousel07}
            alt="Lume Skincare hydration carousel slide 7"
            label="Carousel / Hydration Education"
            number="05.07"
          />

          <EditorialImage
            src={carousel08}
            alt="Lume Skincare hydration carousel closing"
            label="Carousel / Closing Message"
            number="05.08"
          />

        </div>

      </section>


      {/* =====================================================
          SOCIAL MEDIA CONTENT
      ===================================================== */}

      <section className="lume-posts-section">

        <div className="lume-section-index">

          <span>
            06
          </span>

          <small>
            SOCIAL MEDIA CONTENT
          </small>

        </div>


        <div className="lume-posts-header">

          <p className="lume-mini-label">
            BUILDING THE EVERYDAY FEED
          </p>

          <h2>
            Content that keeps
            <em>
              the conversation going.
            </em>
          </h2>

          <p>
            Alongside educational content, three standalone Instagram
            posts were created to explore Lume's everyday communication
            style across introduction, self-care, and wellness.
          </p>

        </div>


        <div className="lume-posts-grid">

          <EditorialImage
            src={post01}
            alt="Lume Skincare introductory Instagram post"
            label="Post / Brand Introduction"
            number="06.01"
          />

          <EditorialImage
            src={post02}
            alt="Lume Skincare Your Skin Deserves a Little Love post"
            label="Post / Self-Care"
            number="06.02"
          />

          <EditorialImage
            src={post03}
            alt="Lume Skincare Glow Starts From Within post"
            label="Post / Wellness"
            number="06.03"
          />

        </div>


        <div className="lume-post-descriptions">

          <article>

            <span>
              POST 01
            </span>

            <h3>
              Introducing Lume
            </h3>

            <p>
              A simple introductory post designed to establish
              the brand's presence and visual tone.
            </p>

          </article>


          <article>

            <span>
              POST 02
            </span>

            <h3>
              Your Skin Deserves a Little Love
            </h3>

            <p>
              A self-care focused message connecting skincare
              with everyday moments of personal care.
            </p>

          </article>


          <article>

            <span>
              POST 03
            </span>

            <h3>
              Glow Starts From Within
            </h3>

            <p>
              A wellness-led concept connecting healthy habits,
              wellbeing, and skincare.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          VISUAL DIRECTION
      ===================================================== */}

      <section className="lume-visual-section">

        <div className="lume-section-index">

          <span>
            07
          </span>

          <small>
            VISUAL DIRECTION
          </small>

        </div>


        <div className="lume-visual-header">

          <p className="lume-mini-label">
            SOFT · CLEAN · INTENTIONAL
          </p>

          <h2>
            Soft visuals.
            <em>
              Clear messaging.
            </em>
          </h2>

          <p>
            The visual direction was intentionally kept soft, clean,
            and feminine to reflect the emotional side of skincare
            while allowing the content itself to remain the focus.
          </p>

        </div>


        <div className="lume-visual-principles">

          <div>

            <span>
              01
            </span>

            <strong>
              Soft & Feminine
            </strong>

            <p>
              A gentle visual direction suited to the skincare space.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <strong>
              Clean Layouts
            </strong>

            <p>
              Simple compositions that keep the message easy to follow.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <strong>
              Editorial Typography
            </strong>

            <p>
              Typography used to create a polished and elevated feel.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <strong>
              Wellness-led Messaging
            </strong>

            <p>
              Content designed around skincare, self-care, and wellbeing.
            </p>

          </div>

        </div>


        <div className="lume-visual-statement">

          <span>
            DESIGN APPROACH
          </span>

          <strong>
            Make the content feel useful,
            beautiful, and easy to connect with.
          </strong>

        </div>

      </section>


      {/* =====================================================
          FINAL OUTCOME
      ===================================================== */}

      <section className="lume-outcome-section">

        <div className="lume-outcome-top">

          <div className="lume-section-index">

            <span>
              08
            </span>

            <small>
              FINAL OUTCOME
            </small>

          </div>


          <p className="lume-mini-label">
            THE RESULT
          </p>

        </div>


        <h2>
          More than pretty posts.
          <em>
            A content direction with purpose.
          </em>
        </h2>


        <p className="lume-outcome-copy">
          The project resulted in a cohesive sample content direction
          for Lume Skincare, combining educational, self-care, and
          wellness-focused content into a consistent Instagram presence.
        </p>


        <div className="lume-outcome-highlights">

          <div>

            <strong>
              01
            </strong>

            <span>
              Educational Content
            </span>

          </div>


          <div>

            <strong>
              02
            </strong>

            <span>
              Social Media Strategy
            </span>

          </div>


          <div>

            <strong>
              03
            </strong>

            <span>
              Content Design
            </span>

          </div>


          <div>

            <strong>
              04
            </strong>

            <span>
              Wellness-led Communication
            </span>

          </div>

        </div>


        <div className="lume-final-statement">

          <span>
            STRATEGY
          </span>

          <strong>
            ✦
          </strong>

          <span>
            CONTENT
          </span>

          <strong>
            ✦
          </strong>

          <span>
            DESIGN
          </span>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="lume-final-cta">

        <div className="lume-cta-decoration">
          ✦
        </div>


        <p className="lume-mini-label">
          NEXT PROJECT / NEXT IDEA
        </p>


        <h2>
          Have a brand?
          <em>
            Let's make it memorable.
          </em>
        </h2>


        <p>
          From social media strategy and content creation
          to complete digital experiences, let's turn your
          brand's ideas into something people remember.
        </p>


        <div className="lume-cta-buttons">

          <Link
            to="/"
            className="lume-cta-secondary"
          >
            ← Back to Portfolio
          </Link>


          <button
            type="button"
            className="lume-cta-primary"
            onClick={openChatbot}
          >
            Let's Work Together
            <span>
              ↗
            </span>
          </button>

        </div>


        <div className="lume-cta-footer">

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

export default LumeSkincareCaseStudy;