import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FNJewelryCaseStudy from "./pages/FNJewelryCaseStudy";
import HomeLoansCaseStudy from "./pages/HomeLoansCaseStudy";

import ContactChatbot from "./components/ContactChatbot";

import homeLoanzHome from "./assets/home-loanz-home.png/homeloanz-home.PNG";
import fnJewelryHome from "./assets/fn-jewelry-home.png/Capture.png";


/* =========================================================
   PORTFOLIO HOME
========================================================= */

function PortfolioHome() {

  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <a
            href="#top"
            className="logo"
            onClick={(e) => {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            MZ<span>.</span>
          </a>

          <nav className="nav-links">

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#work">
              Projects
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

          {/* =================================================
              LET'S TALK
          ================================================= */}

          <button
            type="button"
            className="nav-button"
            onClick={openChat}
          >
            Let's Talk
            <span>↗</span>
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main id="top">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          <div className="hero-content">

            <div className="hero-text">

              <p className="eyebrow">
                WEB DESIGN · DIGITAL MARKETING · CREATIVE DESIGN
              </p>

              <h1>
                I Design Digital Experiences
                <span>
                  That Help Brands Stand Out.
                </span>
              </h1>

              <p className="hero-description">
                I create modern websites, engaging digital experiences,
                and creative digital solutions that help brands build
                a stronger and more memorable presence online.
              </p>

              <div className="hero-buttons">

                <a
                  href="#work"
                  className="primary-button"
                >
                  View My Work
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={openChat}
                >
                  Let's Work Together
                  <span>→</span>
                </button>

              </div>

              <div className="hero-highlights">

                <span>
                  Creative Direction
                </span>

                <span>
                  Digital Experiences
                </span>

                <span>
                  Brand Growth
                </span>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-visual">

              <div className="hero-visual-card">

                <div className="hero-visual-top">

                  <span className="status-dot"></span>

                  <span>
                    AVAILABLE FOR WORK
                  </span>

                </div>

                <h3>
                  Creative digital experiences.
                </h3>

                <p>
                  Websites, design & digital solutions crafted with purpose.
                </p>

                <div className="hero-visual-footer">

                  <span>
                    CreativeMZ.digital
                  </span>

                  <span>
                    2026
                  </span>

                </div>

              </div>

              <div className="hero-orbit hero-orbit-one"></div>

              <div className="hero-orbit hero-orbit-two"></div>

              <div className="hero-number">
                01
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="about-section section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="eyebrow">
                ABOUT ME
              </p>

              <h2>
                Turning ideas into
                <span>
                  digital experiences.
                </span>
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-intro">

                <span className="about-number">
                  01
                </span>

                <div
                  className="about-profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    marginBottom: "32px",
                  }}
                >

                  <div
                    className="about-photo"
                    style={{
                      width: "115px",
                      height: "115px",
                      minWidth: "115px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#f7f2f8",
                      border:
                        "5px solid rgba(255,255,255,0.75)",
                      boxShadow:
                        "0 12px 30px rgba(70,55,75,0.12)",
                    }}
                  >

                    <img
                      src="/images/mahek.jpg"
                      alt="Mahek Zehra"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />

                  </div>

                  <div>

                    <span
                      style={{
                        display: "block",
                        fontFamily:
                          '"Playfair Display", Georgia, serif',
                        fontSize: "26px",
                        fontWeight: "600",
                        lineHeight: "1.1",
                        letterSpacing: "-0.035em",
                        color: "var(--text)",
                        transform: "rotate(-2deg)",
                      }}
                    >
                      Mahek Zehra
                    </span>

                    <span
                      style={{
                        display: "block",
                        marginTop: "7px",
                        color: "var(--lavender-dark)",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Creative Digital Professional
                    </span>

                  </div>

                </div>

                <p>
                  I'm a creative digital professional with a background in
                  Computer Science, combining technical thinking with a strong
                  interest in design, branding, and digital marketing.
                </p>

              </div>


              <div className="about-text">

                <p>
                  I enjoy turning ideas into clean, engaging, and
                  user-focused digital experiences — from designing and
                  developing websites to creating visual content and
                  digital marketing solutions.
                </p>

                <p>
                  My approach is simple: understand the goal, create with
                  purpose, and make the final experience feel polished,
                  professional, and meaningful.
                </p>

                <div
                  className="about-stats"
                  style={{
                    marginTop: "48px",
                    marginBottom: "62px",
                  }}
                >

                  <div>
                    <strong>01</strong>
                    <span>Creative Approach</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Technical Mindset</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>User Focused</span>
                  </div>

                </div>

                <div
                  className="about-process"
                  style={{
                    paddingTop: "8px",
                    borderTop: "1px solid var(--border)",
                  }}
                >

                  <p
                    style={{
                      marginBottom: "13px",
                      color: "var(--lavender-dark)",
                      fontSize: "10px",
                      fontWeight: "700",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    A LITTLE ABOUT MY PROCESS
                  </p>

                  <h3
                    style={{
                      marginBottom: "15px",
                      fontFamily:
                        '"Playfair Display", Georgia, serif',
                      fontSize: "28px",
                      lineHeight: "1.15",
                      letterSpacing: "-0.035em",
                      color: "var(--text)",
                    }}
                  >
                    Think intentionally.
                    <br />
                    Create with purpose.
                  </h3>

                  <p
                    style={{
                      maxWidth: "650px",
                      fontSize: "15px",
                      lineHeight: "1.85",
                    }}
                  >
                    I like exploring ideas from different angles, mixing
                    creativity with technology, and adding thoughtful little
                    details that make a digital experience feel truly its
                    own. I enjoy experimenting, playing with ideas, and
                    finding those little touches that make something feel a
                    bit more special, expressive, and memorable.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="services-section section"
        >

          <div className="section-container">

            <div className="section-heading services-heading">

              <p className="eyebrow">
                WHAT I DO
              </p>

              <h2>
                Creative skills.
                <span>
                  Digital solutions.
                </span>
              </h2>

              <p>
                From websites and interfaces to branding and digital
                marketing, I create digital experiences designed around
                real goals.
              </p>

            </div>


            <div className="services-grid">

              <article className="service-card service-card-lavender">
                <div className="service-top">
                  <span>01</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>Web Design & Development</h3>

                  <p>
                    Modern, responsive websites designed to give brands
                    a professional online presence and a smooth user
                    experience.
                  </p>
                </div>
              </article>


              <article className="service-card service-card-blush">
                <div className="service-top">
                  <span>02</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>UI/UX Design</h3>

                  <p>
                    Clean and intuitive interfaces focused on usability,
                    visual hierarchy, and meaningful user experiences.
                  </p>
                </div>
              </article>


              <article className="service-card service-card-peach">
                <div className="service-top">
                  <span>03</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>Digital Marketing</h3>

                  <p>
                    Digital strategies focused on improving online
                    visibility, reaching the right audience, and building
                    stronger brands.
                  </p>
                </div>
              </article>


              <article className="service-card service-card-sage">
                <div className="service-top">
                  <span>04</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>Social Media Management</h3>

                  <p>
                    Content planning and creative direction designed to keep
                    brands consistent, active, and engaging online.
                  </p>
                </div>
              </article>


              <article className="service-card service-card-butter">
                <div className="service-top">
                  <span>05</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>Graphic Design</h3>

                  <p>
                    Visual assets that help brands communicate clearly and
                    maintain a consistent professional identity.
                  </p>
                </div>
              </article>


              <article className="service-card service-card-rose">
                <div className="service-top">
                  <span>06</span>
                  <span className="service-arrow">↗</span>
                </div>

                <div>
                  <h3>Video Editing</h3>

                  <p>
                    Engaging short-form and promotional video content
                    created for social media, campaigns, and brand
                    communication.
                  </p>
                </div>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            SELECTED WORK
        ===================================================== */}

        <section
          id="work"
          className="work-section section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="eyebrow">
                SELECTED WORK
              </p>

              <h2>
                Work that turns
                <span>
                  ideas into reality.
                </span>
              </h2>

              <p>
                A selection of projects where strategy, design,
                development, and user experience come together.
              </p>

            </div>


            {/* FN JEWELRY */}

            <article className="featured-project">

              <div className="project-visual">

                <div className="project-image-frame">

                  <img
                    src={fnJewelryHome}
                    alt="FN Jewelry Worldwide e-commerce website"
                    className="project-image"
                  />

                </div>

              </div>


              <div className="project-content">

                <div className="project-content-top">

                  <p className="project-category">
                    E-COMMERCE · UI/UX · FRONT-END DEVELOPMENT
                  </p>

                  <span className="project-year">
                    2026
                  </span>

                </div>

                <h3>
                  FN Jewelry Worldwide
                </h3>

                <p className="project-description">
                  A complete e-commerce experience designed to showcase
                  jewelry, garments, and Kundan accessories through a
                  premium, responsive, and intuitive shopping journey.
                </p>

                <div className="project-tags">
                  <span>E-Commerce</span>
                  <span>Responsive Design</span>
                  <span>UI/UX</span>
                  <span>Shopping Flow</span>
                  <span>Country & Currency</span>
                </div>

                <a
                  href="/case-study/fn-jewelry"
                  className="project-link"
                >
                  View Full Case Study
                  <span>↗</span>
                </a>

              </div>

            </article>


            {/* HOME LOANS */}

            <article className="featured-project">

              <div className="project-visual">

                <div className="project-image-frame">

                  <img
                    src={homeLoanzHome}
                    alt="Home Loans LLC website"
                    className="project-image"
                  />

                </div>

              </div>


              <div className="project-content">

                <div className="project-content-top">

                  <p className="project-category">
                    FINANCE · WEB DESIGN · FRONT-END DEVELOPMENT
                  </p>

                  <span className="project-year">
                    2026
                  </span>

                </div>

                <h3>
                  Home Loans LLC
                </h3>

                <p className="project-description">
                  A modern mortgage and home-loan website designed to make
                  financial information easier to explore through clear
                  sections, interactive tools, and a more approachable
                  digital experience.
                </p>

                <div className="project-tags">
                  <span>Web Design</span>
                  <span>Responsive Design</span>
                  <span>Mortgage</span>
                  <span>Calculator</span>
                  <span>UI/UX</span>
                </div>

                <a
                  href="/case-study/home-loans"
                  className="project-link"
                >
                  View Full Case Study
                  <span>↗</span>
                </a>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            SKILLS & TOOLS
        ===================================================== */}

        <section
          id="skills"
          className="skills-section section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="eyebrow">
                SKILLS & TOOLS
              </p>

              <h2>
                Creative thinking.
                <span>
                  Technical execution.
                </span>
              </h2>

              <p>
                A combination of creative skills and technical tools
                that allows me to take ideas from concept to execution.
              </p>

            </div>


            <div className="skills-grid">

              {[
                [
                  "01",
                  "Web Design",
                  "Responsive and modern website experiences.",
                ],
                [
                  "02",
                  "UI / UX",
                  "User-focused interfaces with clear hierarchy.",
                ],
                [
                  "03",
                  "React",
                  "Interactive and component-based web experiences.",
                ],
                [
                  "04",
                  "JavaScript",
                  "Dynamic functionality and interactions.",
                ],
                [
                  "05",
                  "Tailwind CSS",
                  "Responsive and scalable interface styling.",
                ],
                [
                  "06",
                  "Digital Marketing",
                  "Strategies focused on visibility and growth.",
                ],
                [
                  "07",
                  "Graphic Design",
                  "Visual communication and brand assets.",
                ],
                [
                  "08",
                  "Video Editing",
                  "Short-form and promotional visual content.",
                ],
              ].map(([number, title, description]) => (

                <div
                  className="skill-card"
                  key={number}
                >

                  <span>
                    {number}
                  </span>

                  <div>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact-section section"
        >

          <div className="contact-content">

            <p className="eyebrow">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let's create something
              <span>
                worth remembering.
              </span>
            </h2>

            <p className="contact-description">
              Whether you need a website, a stronger digital presence,
              or creative content for your brand, let's turn your idea
              into something impactful.
            </p>

            <button
              type="button"
              className="contact-button"
              onClick={openChat}
            >
              Let's Work Together
              <span>↗</span>
            </button>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-main">

            {/* BRAND */}

            <div className="footer-brand">

              <a
                href="#top"
                className="footer-logo"
              >
                MZ<span>.</span>
              </a>

              <p>
                Creative digital experiences built with strategy,
                design, and purpose.
              </p>

              <span className="footer-availability">
                ● Available for creative projects
              </span>

            </div>


            {/* EXPLORE */}

            <div>

              <p className="footer-heading">
                EXPLORE
              </p>

              <div className="footer-links">

                <a href="#about">
                  About
                </a>

                <a href="#services">
                  Services
                </a>

                <a href="#work">
                  Projects
                </a>

                <a href="#skills">
                  Skills
                </a>

                <a href="#contact">
                  Contact
                </a>

              </div>

            </div>


            {/* CONNECT */}

            <div>

              <p className="footer-heading">
                CONNECT
              </p>

              <div className="footer-socials">

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/mahek-zehra-b141263b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>


                {/* INSTAGRAM */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>


                {/* GITHUB */}

                <a
                  href="https://github.com/MahekZehra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              © 2026 Mahek Zehra. All rights reserved.
            </p>

            <p>
              Designed & Developed with purpose.
            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          FLOATING WHATSAPP BUTTON
          VISIBLE ON PORTFOLIO HOME
      ===================================================== */}

      <a
        href="https://wa.me/923353149929"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mahek on WhatsApp"
        title="Chat with me on WhatsApp"
        style={{
          position: "fixed",
          right: "22px",
          bottom: "22px",
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          fontSize: "28px",
          lineHeight: "1",
          boxShadow: "0 10px 28px rgba(37, 211, 102, 0.30)",
          zIndex: 9990,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 14px 34px rgba(37, 211, 102, 0.38)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 10px 28px rgba(37, 211, 102, 0.30)";
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          ☎
        </span>
      </a>


      {/* =====================================================
          CONTACT CHATBOT
      ===================================================== */}

      {chatOpen && (
        <ContactChatbot
          onClose={closeChat}
        />
      )}

    </div>
  );
}


/* =========================================================
   ROUTES
========================================================= */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<PortfolioHome />}
        />

        <Route
          path="/case-study/fn-jewelry"
          element={<FNJewelryCaseStudy />}
        />

        <Route
          path="/case-study/home-loans"
          element={<HomeLoansCaseStudy />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;