import React from "react";
import "./MorrowVideoEditingCaseStudy.css";

import morrowVideo from "../assets/video-editing/morrow-video.mp4";
import morrowCover from "../assets/video-editing/morrow-cover.png";

function MorrowVideoEditingCaseStudy({ onOpenChatbot }) {
  const handleBackToPortfolio = () => {
    window.location.href = "/";
  };

  const handleWorkTogether = () => {
    if (typeof onOpenChatbot === "function") {
      onOpenChatbot();
      return;
    }

    window.dispatchEvent(new Event("open-contact-chatbot"));
  };

  return (
    <main className="morrow-case-study">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="morrow-hero">

        <div className="morrow-hero-grid" />

        <div className="morrow-container">

          <div className="morrow-topbar">
            <span>VIDEO EDITING</span>
            <span>02 / 02</span>
          </div>

          <div className="morrow-hero-content">

            <div className="morrow-kicker">
              <span />
              <p>SPECULATIVE BRAND CAMPAIGN</p>
            </div>

            <h1>MORROW</h1>

            <div className="morrow-hero-bottom">

              <p>
                A high-energy fashion campaign edit built around
                rhythm, movement, typography and visual attitude.
              </p>

              <div className="morrow-scroll">
                <span>SCROLL TO EXPLORE</span>
                <strong>↓</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="morrow-hero-number">02</div>

      </section>


      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="morrow-meta-section">

        <div className="morrow-container">

          <div className="morrow-meta-top">

            <span className="morrow-eyebrow">
              MORROW / CAMPAIGN FILM
            </span>

            <p>
              A fashion-led editing study exploring how pace,
              movement and graphic language can turn campaign
              footage into an attitude.
            </p>

          </div>

          <div className="morrow-meta-line" />

          <div className="morrow-meta-grid">

            <div>
              <span>PROJECT</span>
              <strong>Fashion Campaign</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Video Editor</strong>
            </div>

            <div>
              <span>FORMAT</span>
              <strong>9:16 / Social First</strong>
            </div>

            <div>
              <span>STYLE</span>
              <strong>Editorial / Commercial</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILM
      ===================================================== */}

      <section className="morrow-film-section">

        <div className="morrow-film-header">

          <div className="morrow-container">

            <div className="morrow-film-label">
              <span>FINAL CAMPAIGN FILM</span>
              <span>PLAY / 02</span>
            </div>

          </div>

        </div>

        <div className="morrow-video-wrapper">

          <video
            src={morrowVideo}
            poster={morrowCover}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>

          <div className="morrow-video-label">
            MORROW / CAMPAIGN FILM
          </div>

        </div>

        <div className="morrow-container">

          <div className="morrow-film-caption">
            <span>02</span>
            <p>
              Final campaign edit — short-form fashion film concept.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="morrow-story-section">

        <div className="morrow-container">

          <div className="morrow-section-marker">
            <span>01</span>
            <span>THE CONCEPT</span>
          </div>

          <div className="morrow-story-grid">

            <h2>
              Make it
              <br />
              <em>impossible</em>
              <br />
              to ignore.
            </h2>

            <div className="morrow-story-copy">

              <p className="morrow-lead">
                Morrow is a fictional fashion and lifestyle campaign
                created to explore a more experimental approach to
                commercial video editing.
              </p>

              <p>
                Instead of following a traditional product-ad format,
                the edit uses rapid pacing, graphic interruptions,
                movement and typography to make the brand feel
                contemporary and confident.
              </p>

              <div className="morrow-concept-note">
                <span>CREATIVE POSITION</span>
                <strong>Energy is the identity.</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITING LANGUAGE
      ===================================================== */}

      <section className="morrow-editing-section">

        <div className="morrow-container">

          <div className="morrow-section-marker morrow-light-marker">
            <span>02</span>
            <span>EDITING LANGUAGE</span>
          </div>

          <div className="morrow-editing-heading">

            <h2>
              Built on
              <br />
              <em>momentum.</em>
            </h2>

            <p>
              Every cut, transition and text movement was designed
              to keep the viewer moving through the story.
            </p>

          </div>

          <div className="morrow-editing-list">

            <article>

              <span>01</span>

              <div>
                <h3>Fast Cuts</h3>
                <p>
                  Short, intentional cuts create energy and prevent
                  visual fatigue while maintaining a strong campaign rhythm.
                </p>
              </div>

            </article>

            <article>

              <span>02</span>

              <div>
                <h3>Speed Ramps</h3>
                <p>
                  Controlled changes in speed add impact to movement
                  and create natural points of emphasis.
                </p>
              </div>

            </article>

            <article>

              <span>03</span>

              <div>
                <h3>Graphic Type</h3>
                <p>
                  Oversized typography works as part of the composition
                  rather than simply functioning as captions.
                </p>
              </div>

            </article>

            <article>

              <span>04</span>

              <div>
                <h3>Hard Transitions</h3>
                <p>
                  Directional cuts and sharp transitions create a
                  stronger editorial identity throughout the film.
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="morrow-marquee">

        <div className="morrow-marquee-track">

          <span>MOVE DIFFERENT</span>
          <span>MOVE DIFFERENT</span>
          <span>MOVE DIFFERENT</span>
          <span>MOVE DIFFERENT</span>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="morrow-process-section">

        <div className="morrow-container">

          <div className="morrow-section-marker">
            <span>03</span>
            <span>INSIDE THE EDIT</span>
          </div>

          <div className="morrow-process-heading">

            <h2>
              Inside the
              <br />
              <em>edit.</em>
            </h2>

          </div>

          <div className="morrow-process-list">

            <div className="morrow-process-row">

              <div className="morrow-process-index">
                01
              </div>

              <div className="morrow-process-content">
                <h3>Build the Rhythm</h3>
                <p>
                  The soundtrack became the structural foundation.
                  Major beats were identified first, creating a
                  framework for the visual sequence.
                </p>
              </div>

              <span>RHYTHM</span>

            </div>

            <div className="morrow-process-row">

              <div className="morrow-process-index">
                02
              </div>

              <div className="morrow-process-content">
                <h3>Create Visual Contrast</h3>
                <p>
                  Slow moments were placed beside high-energy
                  sequences to create tension and make the faster
                  sections feel even more impactful.
                </p>
              </div>

              <span>CONTRAST</span>

            </div>

            <div className="morrow-process-row">

              <div className="morrow-process-index">
                03
              </div>

              <div className="morrow-process-content">
                <h3>Introduce Typography</h3>
                <p>
                  Graphic text was introduced as a visual element,
                  appearing rhythmically throughout the sequence.
                </p>
              </div>

              <span>TYPE</span>

            </div>

            <div className="morrow-process-row">

              <div className="morrow-process-index">
                04
              </div>

              <div className="morrow-process-content">
                <h3>Polish &amp; Finish</h3>
                <p>
                  Final adjustments focused on color, timing,
                  transitions, sound balance and overall visual consistency.
                </p>
              </div>

              <span>FINISH</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT DETAILS
      ===================================================== */}

      <section className="morrow-details-section">

        <div className="morrow-container">

          <div className="morrow-section-marker">
            <span>04</span>
            <span>PROJECT DETAILS</span>
          </div>

          <div className="morrow-details-grid">

            <h2>
              Designed for
              <br />
              <em>attention.</em>
            </h2>

            <div className="morrow-details-list">

              <div>
                <span>FORMAT</span>
                <strong>9:16 / Social First</strong>
              </div>

              <div>
                <span>PACE</span>
                <strong>Fast / Dynamic</strong>
              </div>

              <div>
                <span>STYLE</span>
                <strong>Editorial / Commercial</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Movement + Identity</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="morrow-result-section">

        <div className="morrow-container">

          <div className="morrow-result-number">
            05
          </div>

          <div className="morrow-result-content">

            <span className="morrow-eyebrow">
              OUTCOME
            </span>

            <h2>
              More than
              <br />
              a product
              <br />
              <em>video.</em>
            </h2>

            <p>
              The final edit transforms simple campaign footage into
              a distinctive visual experience — combining commercial
              clarity with the energy of an editorial fashion film.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="morrow-cta-section">

        <div className="morrow-cta-circle" />

        <div className="morrow-container">

          <span className="morrow-cta-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let&apos;s make
            <br />
            something bold.
          </h2>

          <div className="morrow-buttons">

            <button
              type="button"
              className="morrow-button morrow-button-light"
              onClick={handleBackToPortfolio}
            >
              <span>←</span>
              Back to Portfolio
            </button>

            <button
              type="button"
              className="morrow-button morrow-button-dark"
              onClick={handleWorkTogether}
            >
              Let&apos;s Work Together
              <span>→</span>
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default MorrowVideoEditingCaseStudy;