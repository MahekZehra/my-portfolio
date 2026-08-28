import { Link } from "react-router-dom";
import "./HomeLoansCaseStudy.css";

import home from "../assets/home-loanz-home.png/homeloanz-home.PNG";
import calculator from "../assets/home-loanz-home.png/homeloanz-calculator3.PNG";
import faq from "../assets/home-loanz-home.png/homeloanz-faq.PNG";
import footer from "../assets/home-loanz-home.png/homeloanz-footer.PNG";
import consultation from "../assets/home-loanz-home.png/homeloanz-freeconsultation.PNG";
import howItWorks from "../assets/home-loanz-home.png/homeloanz-howitworks.PNG";
import ourServices from "../assets/home-loanz-home.png/homeloanz-ourservices.PNG";
import chatbox from "../assets/home-loanz-home.png/homeloanz-personalchatbox.png";
import resources from "../assets/home-loanz-home.png/homeloanz-resources.PNG";
import reviews from "../assets/home-loanz-home.png/homeloanz-reviews.PNG";
import whyChooseUs from "../assets/home-loanz-home.png/homeloanz-whychooseus.PNG";

function HomeLoansCaseStudy({ onWorkTogether }) {
  return (
    <div className="home-loans-case-study">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="hl-navbar">
        <Link to="/" className="hl-logo">
          MZ<span>.</span>
        </Link>

        <Link to="/" className="hl-back-link">
          <span>←</span> Back to Portfolio
        </Link>
      </header>


      {/* =====================================================
          01 — COVER
      ===================================================== */}

      <section className="hl-cover">

        <div className="hl-cover-top">

          <div className="hl-cover-number">
            <span>01</span>
            <span>CASE STUDY</span>
          </div>

          <p className="hl-eyebrow">
            WEB DESIGN & DEVELOPMENT
          </p>

        </div>

        <div className="hl-cover-content">

          <p className="hl-kicker">
            HOME LOANS LLC.
          </p>

          <h1>
            Home Loans,
            <span>Reimagined.</span>
          </h1>

          <p className="hl-cover-description">
            A modern mortgage experience designed to make the journey
            toward homeownership feel clearer, more approachable,
            and easier to navigate.
          </p>

        </div>

        <div className="hl-cover-meta">

          <div>
            <span>CLIENT</span>
            <strong>Home Loans LLC</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Design & Development</strong>
          </div>

          <div>
            <span>INDUSTRY</span>
            <strong>Mortgage / Finance</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>Web Experience</strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section className="hl-cover-image">

        <div className="hl-image-label">
          <span>HOME LOANS LLC.</span>
          <span>01 / 09</span>
        </div>

        <img
          src={home}
          alt="Home Loans LLC homepage"
        />

      </section>


      {/* =====================================================
          02 — THE STORY
      ===================================================== */}

      <section className="hl-editorial-section hl-story">

        <div className="hl-section-index">
          <span>02</span>
          <small>THE STORY</small>
        </div>

        <div className="hl-story-grid">

          <div className="hl-story-heading">

            <p className="hl-small-label">
              THE STARTING POINT
            </p>

            <h2>
              Making the path to
              <span>homeownership feel simpler.</span>
            </h2>

          </div>

          <div className="hl-story-copy">

            <p className="hl-lead">
              Home Loans LLC is a digital experience created around
              one of the biggest decisions people make — finding the
              right home financing solution.
            </p>

            <p>
              The challenge was not simply to present mortgage services.
              The experience needed to communicate trust and professionalism
              while making potentially complicated information easier to
              understand.
            </p>

            <p>
              The website therefore needed to guide visitors naturally —
              from discovering the brand and understanding its services,
              through exploring useful tools and resources, to finally
              connecting with the team.
            </p>

          </div>

        </div>

        <div className="hl-pull-quote">
          <span>“</span>

          <p>
            The goal was to turn a potentially overwhelming financial
            journey into an experience that feels clear and approachable.
          </p>

        </div>

      </section>


      {/* =====================================================
          03 — THE DIRECTION
      ===================================================== */}

      <section className="hl-dark-section hl-direction">

        <div className="hl-section-index hl-light-index">
          <span>03</span>
          <small>THE DIRECTION</small>
        </div>

        <div className="hl-direction-header">

          <p className="hl-small-label">
            DESIGN PHILOSOPHY
          </p>

          <h2>
            Design with intention.
            <span>Guide with clarity.</span>
          </h2>

          <p>
            The visual direction was built around a simple idea:
            financial information should feel trustworthy without
            feeling intimidating.
          </p>

        </div>

        <div className="hl-direction-grid">

          <div className="hl-direction-item">

            <span className="hl-direction-number">01</span>

            <h3>CLARITY</h3>

            <p>
              Information is structured into digestible sections
              so visitors can understand what matters without
              navigating unnecessary complexity.
            </p>

          </div>

          <div className="hl-direction-item">

            <span className="hl-direction-number">02</span>

            <h3>TRUST</h3>

            <p>
              Visual hierarchy, social proof, useful resources,
              and transparent pathways help establish confidence.
            </p>

          </div>

          <div className="hl-direction-item">

            <span className="hl-direction-number">03</span>

            <h3>ACTION</h3>

            <p>
              Calls-to-action are positioned throughout the journey
              so visitors always have a natural next step.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — VISUAL LANGUAGE
      ===================================================== */}

      <section className="hl-visual-language">

        <div className="hl-section-index">
          <span>04</span>
          <small>VISUAL LANGUAGE</small>
        </div>

        <div className="hl-visual-header">

          <p className="hl-small-label">
            DESIGN DECISIONS
          </p>

          <h2>
            Professional,
            <span>approachable, intentional.</span>
          </h2>

          <p>
            The interface combines clean layouts, strong typography,
            structured content, and carefully placed calls-to-action
            to create a digital presence that feels reliable without
            becoming visually heavy.
          </p>

        </div>

        <div className="hl-feature-image">

          <div className="hl-feature-image-label">
            <span>01 — TRUST & POSITIONING</span>
            <span>WHY CHOOSE US</span>
          </div>

          <img
            src={whyChooseUs}
            alt="Home Loans LLC Why Choose Us section"
          />

        </div>

      </section>


      {/* =====================================================
          05 — THE EXPERIENCE
      ===================================================== */}

      <section className="hl-experience">

        <div className="hl-section-index">
          <span>05</span>
          <small>THE EXPERIENCE</small>
        </div>

        <div className="hl-experience-intro">

          <p className="hl-small-label">
            HOMEPAGE + SERVICES
          </p>

          <h2>
            A homepage built
            <span>around the user.</span>
          </h2>

          <p>
            The homepage establishes the brand quickly while giving
            visitors multiple clear entry points into the experience.
            Instead of forcing users to search for information, important
            services, benefits, resources, and conversion points are
            introduced naturally throughout the journey.
          </p>

        </div>

        <div className="hl-experience-image hl-large-image">

          <div className="hl-image-label">
            <span>HOMEPAGE EXPERIENCE</span>
            <span>01</span>
          </div>

          <img
            src={home}
            alt="Home Loans LLC homepage experience"
          />

        </div>


        <div className="hl-experience-split">

          <div className="hl-experience-text">

            <span className="hl-mini-number">05.1</span>

            <h3>
              Helping visitors
              <span>understand their options.</span>
            </h3>

            <p>
              Services are organized into approachable content blocks,
              allowing visitors to quickly understand what kind of
              support is available to them.
            </p>

          </div>

          <div className="hl-experience-image">

            <img
              src={ourServices}
              alt="Home Loans LLC services section"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — INTERACTION
      ===================================================== */}

      <section className="hl-dark-section hl-interaction">

        <div className="hl-section-index hl-light-index">
          <span>06</span>
          <small>INTERACTION</small>
        </div>

        <div className="hl-interaction-header">

          <p className="hl-small-label">
            FROM INFORMATION TO ACTION
          </p>

          <h2>
            The experience
            <span>does more than inform.</span>
          </h2>

          <p>
            Interactive elements turn the website from a static
            information source into a more useful digital experience.
          </p>

        </div>

        <div className="hl-interaction-grid">

          <article className="hl-interaction-card">

            <div className="hl-card-number">
              01
            </div>

            <div className="hl-card-image">

              <img
                src={howItWorks}
                alt="Home Loans LLC How It Works section"
              />

            </div>

            <div className="hl-card-content">

              <p>HOW IT WORKS</p>

              <h3>
                Explaining the journey
                <span>one step at a time.</span>
              </h3>

              <p className="hl-card-description">
                A dedicated journey breaks the loan process into
                understandable stages, reducing uncertainty and
                helping potential clients know what to expect.
              </p>

            </div>

          </article>


          <article className="hl-interaction-card hl-card-offset">

            <div className="hl-card-number">
              02
            </div>

            <div className="hl-card-image">

              <img
                src={calculator}
                alt="Home Loans LLC loan calculator"
              />

            </div>

            <div className="hl-card-content">

              <p>LOAN CALCULATOR</p>

              <h3>
                Turning numbers into
                <span>something understandable.</span>
              </h3>

              <p className="hl-card-description">
                The calculator gives visitors a practical way to
                explore potential loan scenarios and interact with
                information instead of simply reading about it.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          07 — BUILDING TRUST
      ===================================================== */}

      <section className="hl-trust">

        <div className="hl-section-index">
          <span>07</span>
          <small>BUILDING TRUST</small>
        </div>

        <div className="hl-trust-header">

          <p className="hl-small-label">
            CONTENT + CONFIDENCE
          </p>

          <h2>
            Because trust is part
            <span>of the experience.</span>
          </h2>

          <p>
            For a financial website, good design is only part of the
            equation. Visitors also need useful information, reassurance,
            answers, and human connection before they feel ready to act.
          </p>

        </div>

        <div className="hl-trust-grid">

          <article className="hl-trust-item">

            <div className="hl-trust-image">

              <img
                src={resources}
                alt="Home Loans LLC resources section"
              />

            </div>

            <div className="hl-trust-content">

              <span>01</span>

              <h3>
                Useful information,
                <span>right when it matters.</span>
              </h3>

              <p>
                The resources area gives visitors a place to explore
                helpful information before making a decision.
              </p>

            </div>

          </article>


          <article className="hl-trust-item hl-trust-middle">

            <div className="hl-trust-content">

              <span>02</span>

              <h3>
                Building confidence
                <span>through real experiences.</span>
              </h3>

              <p>
                Reviews and social proof help visitors feel more
                confident about taking the next step.
              </p>

            </div>

            <div className="hl-trust-image">

              <img
                src={reviews}
                alt="Home Loans LLC reviews section"
              />

            </div>

          </article>


          <article className="hl-trust-item">

            <div className="hl-trust-image">

              <img
                src={faq}
                alt="Home Loans LLC FAQ section"
              />

            </div>

            <div className="hl-trust-content">

              <span>03</span>

              <h3>
                Answering questions
                <span>before they become barriers.</span>
              </h3>

              <p>
                FAQs provide immediate answers to common concerns,
                helping reduce hesitation and unnecessary friction.
              </p>

            </div>

          </article>

        </div>


        <div className="hl-chat-feature">

          <div className="hl-chat-content">

            <span className="hl-mini-number">
              07.1 — HUMAN CONNECTION
            </span>

            <h3>
              Making help feel
              <span>closer and more immediate.</span>
            </h3>

            <p>
              The personal chat experience introduces a more direct
              way for visitors to ask questions and connect, adding
              a human touch to an otherwise digital journey.
            </p>

          </div>

          <div className="hl-chat-image">

            <img
              src={chatbox}
              alt="Home Loans LLC personal chatbox"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          08 — FROM IDEA TO EXPERIENCE
      ===================================================== */}

      <section className="hl-dark-section hl-build">

        <div className="hl-section-index hl-light-index">
          <span>08</span>
          <small>FROM IDEA TO EXPERIENCE</small>
        </div>

        <div className="hl-build-header">

          <p className="hl-small-label">
            CONVERSION + DEVELOPMENT
          </p>

          <h2>
            From browsing
            <span>to taking action.</span>
          </h2>

          <p>
            Every part of the journey was designed to support the next
            step — including a clear consultation experience and a
            responsive technical foundation.
          </p>

        </div>

        <div className="hl-consultation">

          <div className="hl-consultation-image">

            <img
              src={consultation}
              alt="Home Loans LLC free consultation section"
            />

          </div>

          <div className="hl-consultation-copy">

            <span>08.1 — CONVERSION EXPERIENCE</span>

            <h3>
              A clear path
              <span>forward.</span>
            </h3>

            <p>
              The free consultation experience provides a clear next
              step for visitors who are ready to move forward, turning
              interest into a direct opportunity for conversation.
            </p>

          </div>

        </div>


        <div className="hl-build-details">

          <div className="hl-build-statement">

            <span>08.2 — DEVELOPMENT</span>

            <h3>
              From visual concept
              <span>to functional experience.</span>
            </h3>

            <p>
              The website was developed with a focus on responsive
              layouts, reusable components, clear navigation,
              interactive sections, and a smooth experience across
              different screen sizes.
            </p>

          </div>


          <div className="hl-tech-stack">

            <span className="hl-stack-label">
              TECHNOLOGY / APPROACH
            </span>

            <div className="hl-tags">

              <span>React</span>
              <span>JavaScript</span>
              <span>Responsive Design</span>
              <span>UI Development</span>
              <span>Interactive Components</span>
              <span>Modern Web Design</span>

            </div>

          </div>

        </div>


        <div className="hl-challenges">

          <div className="hl-challenges-heading">

            <span>08.3 — CHALLENGES</span>

            <h3>
              Designing for trust
              <span>without creating friction.</span>
            </h3>

          </div>

          <div className="hl-challenge-list">

            <div className="hl-challenge">

              <strong>01</strong>

              <div>
                <h4>Information Overload</h4>

                <p>
                  Complex information was organized into clearer
                  sections and a more intentional visual hierarchy.
                </p>
              </div>

            </div>


            <div className="hl-challenge">

              <strong>02</strong>

              <div>
                <h4>User Confidence</h4>

                <p>
                  Trust-building content, reviews, resources, and
                  clear calls-to-action reinforce confidence.
                </p>
              </div>

            </div>


            <div className="hl-challenge">

              <strong>03</strong>

              <div>
                <h4>Conversion Journey</h4>

                <p>
                  Natural pathways guide visitors from discovery
                  toward consultation and contact.
                </p>
              </div>

            </div>


            <div className="hl-challenge">

              <strong>04</strong>

              <div>
                <h4>Responsive Experience</h4>

                <p>
                  The interface was structured to remain usable and
                  visually balanced across different devices.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          09 — THE OUTCOME
      ===================================================== */}

      <section className="hl-outcome">

        <div className="hl-section-index">
          <span>09</span>
          <small>THE OUTCOME</small>
        </div>

        <div className="hl-outcome-header">

          <p className="hl-small-label">
            PROJECT HIGHLIGHTS
          </p>

          <h2>
            One website.
            <span>A complete digital journey.</span>
          </h2>

        </div>

        <div className="hl-outcome-grid">

          <div className="hl-outcome-item">

            <span>01</span>

            <h3>Clear Information</h3>

            <p>
              Important mortgage information presented in an
              approachable and structured way.
            </p>

          </div>


          <div className="hl-outcome-item">

            <span>02</span>

            <h3>Interactive Calculator</h3>

            <p>
              A practical tool that adds functionality to the
              overall experience.
            </p>

          </div>


          <div className="hl-outcome-item">

            <span>03</span>

            <h3>Trust Building</h3>

            <p>
              Reviews, resources, FAQs, and human connection
              reinforce confidence.
            </p>

          </div>


          <div className="hl-outcome-item">

            <span>04</span>

            <h3>Conversion Focused</h3>

            <p>
              Clear consultation pathways encourage visitors
              to take the next step.
            </p>

          </div>

        </div>


        <div className="hl-final-statement">

          <p className="hl-small-label">
            FINAL OUTCOME
          </p>

          <h2>
            A digital experience
            <span>built to feel trustworthy.</span>
          </h2>

          <p>
            The final experience brings together information,
            interaction, trust-building content, and conversion-focused
            design into one cohesive digital presence.
          </p>

          <p>
            More than simply presenting mortgage services, the website
            is designed to help visitors understand their options,
            feel supported, and confidently take the next step.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL FOOTER VISUAL
      ===================================================== */}

      <section className="hl-final-visual">

        <div className="hl-final-visual-label">
          <span>HOME LOANS LLC.</span>
          <span>FINAL DETAIL</span>
        </div>

        <img
          src={footer}
          alt="Home Loans LLC footer"
        />

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="hl-final-cta">

        <p className="hl-eyebrow">
          ANOTHER DIGITAL EXPERIENCE
        </p>

        <h2>
          Have an idea?
          <span>Let's build it.</span>
        </h2>

        <p>
          From websites and digital experiences to creative brand
          solutions, I love turning thoughtful ideas into something
          people can actually interact with.
        </p>

        <div className="hl-cta-buttons">

          <Link to="/" className="hl-secondary-button">
            ← Back to Portfolio
          </Link>

          <button
            type="button"
            className="hl-primary-button"
            onClick={onWorkTogether}
          >
            Let's Work Together
            <span>↗</span>
          </button>

        </div>

      </section>

    </div>
  );
}

export default HomeLoansCaseStudy;