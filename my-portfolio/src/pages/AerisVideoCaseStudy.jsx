import React from "react";
import "./AerisVideoCaseStudy.css";

import aerisVideo from "../assets/video-editing/aeris-video.mp4";
import aerisCover from "../assets/video-editing/aeris-cover.png";

function AerisVideoCaseStudy({ onOpenChatbot }) {
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
    <main className="aeris-case-study">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="aeris-hero">
        <div className="aeris-hero-glow aeris-glow-one" />
        <div className="aeris-hero-glow aeris-glow-two" />

        <div className="aeris-container">

          <div className="aeris-topbar">
            <span>VIDEO EDITING</span>
            <span>01 / 02</span>
          </div>

          <div className="aeris-hero-main">

            <div className="aeris-hero-kicker">
              <span className="aeris-kicker-line" />
              <span>SPECULATIVE BRAND FILM</span>
            </div>

            <h1>
              Aeris
              <span>Motion in Atmosphere.</span>
            </h1>

            <div className="aeris-hero-footer">

              <p>
                A cinematic short-form video concept created for Aeris —
                an imaginary modern lifestyle brand focused on movement,
                atmosphere and visual storytelling.
              </p>

              <div className="aeris-scroll-indicator">
                <span>SCROLL TO EXPLORE</span>
                <span className="aeris-scroll-arrow">↓</span>
              </div>

            </div>

          </div>
        </div>

        <div className="aeris-hero-word">AERIS</div>
      </section>


      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <section className="aeris-meta-section">
        <div className="aeris-container">

          <div className="aeris-meta-intro">
            <span className="aeris-eyebrow">PROJECT / 01</span>

            <p>
              A visual identity study translated into motion —
              designed to make atmosphere feel tangible.
            </p>
          </div>

          <div className="aeris-meta-line" />

          <div className="aeris-meta-grid">

            <div>
              <span>PROJECT</span>
              <strong>Brand Video</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Video Editor</strong>
            </div>

            <div>
              <span>STYLE</span>
              <strong>Cinematic / Editorial</strong>
            </div>

            <div>
              <span>FORMAT</span>
              <strong>Short-form Video</strong>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CINEMATIC FILM
      ===================================================== */}

      <section className="aeris-film-section">

        <div className="aeris-film-heading">
          <div className="aeris-container">

            <div className="aeris-film-label">
              <span>FINAL FILM</span>
              <span>PLAY / 01</span>
            </div>

          </div>
        </div>

        <div className="aeris-film-wrapper">

          <video
            src={aerisVideo}
            poster={aerisCover}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>

          <div className="aeris-film-overlay">
            <span>AERIS / VISUAL IDENTITY STUDY</span>
          </div>

        </div>

        <div className="aeris-container">

          <div className="aeris-film-caption">
            <span>01</span>
            <p>
              Final edited film — Aeris visual identity study.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT STORY
      ===================================================== */}

      <section className="aeris-story-section">

        <div className="aeris-container">

          <div className="aeris-section-marker">
            <span>01</span>
            <span>THE STORY</span>
          </div>

          <div className="aeris-story-layout">

            <div className="aeris-story-heading">

              <h2>
                Turning
                <em>atmosphere</em>
                into movement.
              </h2>

            </div>

            <div className="aeris-story-copy">

              <p className="aeris-lead">
                Aeris was created as a fictional video-editing project
                to explore how a lifestyle brand could communicate its
                identity without relying heavily on dialogue or
                conventional advertising.
              </p>

              <p>
                The edit focuses on rhythm, composition, transitions
                and carefully timed visual moments to create a premium,
                contemporary brand experience.
              </p>

              <div className="aeris-story-note">
                <span>CREATIVE INTENT</span>
                <strong>Less explanation. More feeling.</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CREATIVE DIRECTION
      ===================================================== */}

      <section className="aeris-direction-section">

        <div className="aeris-container">

          <div className="aeris-section-marker aeris-marker-light">
            <span>02</span>
            <span>CREATIVE DIRECTION</span>
          </div>

          <div className="aeris-direction-header">

            <h2>
              Quiet visuals.
              <br />
              <em>Strong movement.</em>
            </h2>

            <p>
              The creative direction was intentionally minimal,
              allowing motion, sound and pacing to carry the story.
            </p>

          </div>

          <div className="aeris-direction-list">

            <article>
              <span>01</span>

              <div>
                <h3>Atmospheric Opening</h3>
                <p>
                  The opening establishes mood through slower pacing
                  and carefully framed visuals before gradually
                  introducing motion.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Rhythmic Editing</h3>
                <p>
                  Cuts were synchronized with the soundtrack to create
                  a natural visual rhythm without making the edit feel
                  forced.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Visual Transitions</h3>
                <p>
                  Clean movement-based transitions connect different
                  scenes while maintaining a cohesive visual language.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>

              <div>
                <h3>Premium Finish</h3>
                <p>
                  Subtle grading, typography and restrained motion
                  graphics give the final piece an elevated editorial
                  feel.
                </p>
              </div>
            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITING LANGUAGE
      ===================================================== */}

      <section className="aeris-language-section">

        <div className="aeris-container">

          <div className="aeris-section-marker">
            <span>03</span>
            <span>EDITING LANGUAGE</span>
          </div>

          <div className="aeris-language-layout">

            <h2>
              Every cut
              <br />
              has a reason.
            </h2>

            <div className="aeris-language-copy">

              <p>
                Rather than overwhelming the viewer with effects,
                the edit uses restraint as a design tool.
              </p>

              <p>
                Movement becomes the transition. Rhythm becomes
                the structure. Typography becomes part of the
                composition.
              </p>

            </div>

          </div>

          <div className="aeris-language-quote">
            <span>EDITING PRINCIPLE</span>
            <strong>“Let the visual breathe.”</strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="aeris-process-section">

        <div className="aeris-container">

          <div className="aeris-section-marker">
            <span>04</span>
            <span>EDITING PROCESS</span>
          </div>

          <div className="aeris-process-heading">

            <h2>
              From raw footage
              <br />
              <em>to final story.</em>
            </h2>

          </div>

          <div className="aeris-process-list">

            <div className="aeris-process-row">

              <div className="aeris-process-index">01</div>

              <div className="aeris-process-content">
                <h3>Footage Selection</h3>
                <p>
                  Selected clips based on composition, movement,
                  lighting and their ability to contribute to
                  the story.
                </p>
              </div>

              <span className="aeris-process-side">
                SELECT
              </span>

            </div>

            <div className="aeris-process-row">

              <div className="aeris-process-index">02</div>

              <div className="aeris-process-content">
                <h3>Story Assembly</h3>
                <p>
                  Arranged the strongest moments into a visual
                  sequence with a clear beginning, build-up and ending.
                </p>
              </div>

              <span className="aeris-process-side">
                STRUCTURE
              </span>

            </div>

            <div className="aeris-process-row">

              <div className="aeris-process-index">03</div>

              <div className="aeris-process-content">
                <h3>Rhythm &amp; Timing</h3>
                <p>
                  Adjusted clip duration and cut points to work
                  naturally with the soundtrack and overall pacing.
                </p>
              </div>

              <span className="aeris-process-side">
                RHYTHM
              </span>

            </div>

            <div className="aeris-process-row">

              <div className="aeris-process-index">04</div>

              <div className="aeris-process-content">
                <h3>Finishing</h3>
                <p>
                  Added visual polish through color treatment,
                  typography, motion details and final pacing adjustments.
                </p>
              </div>

              <span className="aeris-process-side">
                FINISH
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOOLKIT
      ===================================================== */}

      <section className="aeris-toolkit-section">

        <div className="aeris-toolkit-orbit" />

        <div className="aeris-container">

          <div className="aeris-section-marker aeris-marker-light">
            <span>05</span>
            <span>EDITING TOOLKIT</span>
          </div>

          <div className="aeris-toolkit-heading">
            <h2>
              Built around
              <br />
              <em>visual storytelling.</em>
            </h2>

            <p>
              A restrained toolkit focused on clarity, movement
              and atmosphere rather than visual noise.
            </p>
          </div>

          <div className="aeris-toolkit-list">

            <span>Video Editing</span>
            <span>Color Grading</span>
            <span>Motion Graphics</span>
            <span>Typography</span>
            <span>Sound Synchronization</span>
            <span>Transitions</span>
            <span>Short-form Content</span>
            <span>Visual Storytelling</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="aeris-result-section">

        <div className="aeris-container">

          <div className="aeris-result-number">06</div>

          <div className="aeris-result-content">

            <span className="aeris-eyebrow">
              OUTCOME
            </span>

            <h2>
              A short film
              <br />
              designed to feel
              <br />
              <em>like a brand.</em>
            </h2>

            <p>
              The final piece combines cinematic pacing,
              atmospheric visuals and restrained motion design
              to create a polished piece of portfolio-ready
              brand content.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="aeris-cta-section">

        <div className="aeris-cta-shape" />

        <div className="aeris-container">

          <span className="aeris-cta-label">
            HAVE A STORY TO TELL?
          </span>

          <h2>
            Let&apos;s create
            <br />
            something memorable.
          </h2>

          <div className="aeris-cta-buttons">

            <button
              type="button"
              className="aeris-button aeris-button-outline"
              onClick={handleBackToPortfolio}
            >
              <span>←</span>
              Back to Portfolio
            </button>

            <button
              type="button"
              className="aeris-button aeris-button-solid"
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

export default AerisVideoCaseStudy;