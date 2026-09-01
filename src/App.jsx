import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FNJewelryCaseStudy from "./pages/FNJewelryCaseStudy";
import HomeLoansCaseStudy from "./pages/HomeLoansCaseStudy";
import LumeSkincareCaseStudy from "./pages/LumeSkincareCaseStudy";
import LumeMobileCaseStudy from "./pages/LumeMobileCaseStudy";
import LumeSocialMediaCaseStudy from "./pages/LumeSocialMediaCaseStudy";
import TeaCoffeeSocialMediaCaseStudy from "./pages/TeaCoffeeSocialMediaCaseStudy";
import TeaCoffeeCaseStudy from "./pages/TeaCoffeeCaseStudy";
import HaiderEstatesCaseStudy from "./pages/HaiderEstatesCaseStudy";
import GraphicDesignCaseStudy from "./pages/GraphicDesignCaseStudy";

import ContactChatbot from "./components/ContactChatbot";
import {
  Magnetic,
  ClickSpark,
  GlareHover,
  SpotlightCard,
  ShinyText,
  PastelPill,
  ElectricCard,
} from "./components/WowEffects";

import homeLoanzHome from "./assets/home-loanz-home.png/homeloanz-home.PNG";
import fnJewelryHome from "./assets/fn-jewelry-home.png/homepage.PNG";
import teaCoffeeCover from "./assets/tea-coffee-&-greentea.png/new logo.png";
import graphicDesignCover from "./assets/graphic-design/graphic-design-cover.jpg";
import haiderHome from "./assets/haider-estates/site-screens/haider-homepage.png/haider-homepage.png";

/* =========================================================
   PORTFOLIO HOME
========================================================= */

function PortfolioHome() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeService, setActiveService] = useState("All");

  useEffect(() => {
    const nodes = document.querySelectorAll(".wow-auto");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }),
      { threshold: 0.12 }
    );

    nodes.forEach((node) => io.observe(node));

    return () => io.disconnect();
  }, []);

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const handleServiceClick = (service) => {
    setActiveService(service);

    requestAnimationFrame(() => {
      document.getElementById("work")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const projectMatchesService = (services) =>
    activeService === "All" || services.includes(activeService);

  const serviceProjectCounts = {
    "All": 9,
    "Web Design & Development": 3,
    "UI/UX Design": 3,
    "Digital Marketing": 4,
    "Social Media Management": 4,
    "Graphic Design": 4,
    "Video Editing": 0,
  };

  useEffect(() => {
    const halo = document.createElement("div");
    halo.className = "mz-cursor-halo";
    document.body.appendChild(halo);

    const move = (event) => {
      halo.style.left = `${event.clientX}px`;
      halo.style.top = `${event.clientY}px`;
      halo.classList.add("is-active");
    };

    const leave = () => halo.classList.remove("is-active");

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      halo.remove();
    };
  }, []);

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar whimsical-navbar">
        <div className="nav-sparkle nav-sparkle-one" aria-hidden="true">
          ✦
        </div>

        <div className="nav-sparkle nav-sparkle-two" aria-hidden="true">
          ·
        </div>

        <div className="nav-container whimsical-nav-container">

          <a
            href="#top"
            className="logo whimsical-logo"
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

          <nav className="nav-links whimsical-nav-links">

            <a href="#about">
              <span className="nav-spark">✦</span>
              About
            </a>

            <a href="#services">
              <span className="nav-spark">✦</span>
              Services
            </a>

            <a href="#work">
              <span className="nav-spark">✦</span>
              Projects
            </a>

            <a href="#skills">
              <span className="nav-spark">✦</span>
              Skills
            </a>

            <a href="#contact">
              <span className="nav-spark">✦</span>
              Contact
            </a>

          </nav>

          <Magnetic>
            <button
              type="button"
              className="nav-button"
              onClick={openChat}
            >
              Let's Talk <span>↗</span>
            </button>
          </Magnetic>

        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main id="top">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero aurora-wrap whimsical-hero">

          <div className="hero-doodle hero-doodle-one" aria-hidden="true">
            ✦
          </div>

          <div className="hero-doodle hero-doodle-two" aria-hidden="true">
            ♡
          </div>

          <div className="hero-doodle hero-doodle-three" aria-hidden="true">
            ⌁
          </div>

          <div className="hero-floating-note" aria-hidden="true">
            made with curiosity <span>♡</span>
          </div>

          <div className="pastel-aurora aurora-one" aria-hidden="true" />
          <div className="pastel-aurora aurora-two" aria-hidden="true" />
          <div className="pastel-aurora aurora-three" aria-hidden="true" />

          <div className="hero-content">

            <div className="hero-text">

              <p className="eyebrow">
                <ShinyText>
                  WEB DESIGN · DIGITAL MARKETING · CREATIVE DESIGN
                </ShinyText>
              </p>

              <h1 className="whimsical-hero-title">
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

                <Magnetic>
                  <ClickSpark>
                    <a
                      href="#work"
                      className="primary-button"
                    >
                      View My Work <span>↗</span>
                    </a>
                  </ClickSpark>
                </Magnetic>

                <Magnetic>
                  <ClickSpark>
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={openChat}
                    >
                      Let's Work Together <span>→</span>
                    </button>
                  </ClickSpark>
                </Magnetic>

              </div>

              <div className="hero-highlights">
                <span>Creative Direction</span>
                <span>Digital Experiences</span>
                <span>Brand Growth</span>
              </div>

            </div>

            <div className="hero-visual whimsical-hero-visual">

              <div className="hero-visual-card whimsical-hero-card">

                <span
                  className="hero-card-sticker"
                  aria-hidden="true"
                >
                  ✦
                </span>

                <div className="hero-visual-top">

                  <span className="status-dot" />

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

              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />

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
          className="about-section section whimsical-about"
        >

          <div className="section-container about-whimsy-container">

            <div
              className="about-orbit-word"
              aria-hidden="true"
            >
              curious · creative · intentional
            </div>

            <div className="section-heading wow-auto about-heading-whimsy">

              <p className="eyebrow about-eyebrow">
                <span className="eyebrow-spark">✦</span>
                ABOUT ME
                <span className="eyebrow-mini-note">
                  a little more about me
                </span>
              </p>

              <h2>
                Turning ideas into
                <span>
                  digital experiences.
                </span>
              </h2>

            </div>

            <div className="about-grid about-grid-whimsy">

              <div className="about-intro">

                <span className="about-number about-number-whimsy">
                  01
                </span>

                <span className="about-handnote">
                  a little bit of me <b>↘</b>
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
                      border: "5px solid rgba(255,255,255,0.75)",
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

                <div className="about-whimsy-note">
                  <span>✦</span>
                  curious mind · creative heart
                </div>

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

              <ElectricCard color="#C8B6FF">
                <div
                  className={`service-card-clickable ${activeService === "Web Design & Development" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show Web Design & Development projects`}
                  onClick={() => handleServiceClick("Web Design & Development")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("Web Design & Development");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-lavender">

                  <div className="service-top">
                    <span>01</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      Web Design & Development
                    </h3>

                    <p>
                      Modern, responsive websites designed to give brands
                      a professional online presence and a smooth user
                      experience.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

              <ElectricCard color="#FFB7C5">
                <div
                  className={`service-card-clickable ${activeService === "UI/UX Design" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show UI/UX Design projects`}
                  onClick={() => handleServiceClick("UI/UX Design")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("UI/UX Design");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-blush">

                  <div className="service-top">
                    <span>02</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      UI/UX Design
                    </h3>

                    <p>
                      Clean and intuitive interfaces focused on usability,
                      visual hierarchy, and meaningful user experiences.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

              <ElectricCard color="#FFD6A5">
                <div
                  className={`service-card-clickable ${activeService === "Digital Marketing" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show Digital Marketing projects`}
                  onClick={() => handleServiceClick("Digital Marketing")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("Digital Marketing");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-peach">

                  <div className="service-top">
                    <span>03</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      Digital Marketing
                    </h3>

                    <p>
                      Digital strategies focused on improving online
                      visibility, reaching the right audience, and building
                      stronger brands.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

              <ElectricCard color="#B8E0D2">
                <div
                  className={`service-card-clickable ${activeService === "Social Media Management" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show Social Media Management projects`}
                  onClick={() => handleServiceClick("Social Media Management")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("Social Media Management");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-sage">

                  <div className="service-top">
                    <span>04</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      Social Media Management
                    </h3>

                    <p>
                      Content planning and creative direction designed to keep
                      brands consistent, active, and engaging online.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

              <ElectricCard color="#FFF1B8">
                <div
                  className={`service-card-clickable ${activeService === "Graphic Design" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show Graphic Design projects`}
                  onClick={() => handleServiceClick("Graphic Design")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("Graphic Design");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-butter">

                  <div className="service-top">
                    <span>05</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      Graphic Design
                    </h3>

                    <p>
                      Visual assets that help brands communicate clearly and
                      maintain a consistent professional identity.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

              <ElectricCard color="#F3C7D2">
                <div
                  className={`service-card-clickable ${activeService === "Video Editing" ? "is-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show Video Editing projects`}
                  onClick={() => handleServiceClick("Video Editing")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleServiceClick("Video Editing");
                    }
                  }}
                >
                  <SpotlightCard className="service-card service-card-rose">

                  <div className="service-top">
                    <span>06</span>
                    <span className="service-arrow">↗</span>
                  </div>

                  <div>
                    <h3>
                      Video Editing
                    </h3>

                    <p>
                      Engaging short-form and promotional video content
                      created for social media, campaigns, and brand
                      communication.
                    </p>
                  </div>

                </SpotlightCard>
                </div>
              </ElectricCard>

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

            <div className="section-heading wow-auto">

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

            <div className="work-filter-bar" aria-label="Project service filter">
              <div className="work-filter-copy">
                <span>SHOWING</span>
                <strong>{activeService === "All" ? "All Projects" : activeService}</strong>
                <small>{serviceProjectCounts[activeService]} {serviceProjectCounts[activeService] === 1 ? "project" : "projects"}</small>
              </div>

              <button
                type="button"
                className={`work-filter-reset ${activeService === "All" ? "is-active" : ""}`}
                onClick={() => setActiveService("All")}
              >
                All Projects
                <span>↗</span>
              </button>
            </div>

            {/* =================================================
                FN JEWELRY
            ================================================= */}

            {projectMatchesService(["Web Design & Development", "UI/UX Design"]) && (
            <>
<ElectricCard color="#C8B6FF">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project">

                  <div className="project-visual">

                    <div className="project-image-frame glare-hover">

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

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                HOME LOANS
            ================================================= */}

            {projectMatchesService(["Web Design & Development", "UI/UX Design"]) && (
            <>
<ElectricCard color="#BDE0FE">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project">

                  <div className="project-visual">

                    <div className="project-image-frame glare-hover">

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

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                LUMÉ MOBILE APP
            ================================================= */}

            {projectMatchesService(["UI/UX Design"]) && (
            <>
<ElectricCard color="#FFB7C5">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project lume-mobile-project">

                  <div className="project-visual">

                    <div className="project-image-frame lume-mobile-preview glare-hover">

                      <div className="lume-mobile-preview-glow" />

                      <div className="lume-preview-phone lume-preview-phone-back">
                        <div className="lume-preview-notch" />
                        <span className="lume-preview-small-logo">
                          LUMÉ
                        </span>
                        <div className="lume-preview-orb">
                          ✦
                        </div>
                        <strong>
                          Your ritual,
                          <br />
                          made personal.
                        </strong>
                      </div>

                      <div className="lume-preview-phone lume-preview-phone-front">
                        <div className="lume-preview-notch" />
                        <div className="lume-preview-status">
                          GOOD MORNING
                        </div>
                        <div className="lume-preview-brand">
                          LUMÉ
                        </div>
                        <p className="lume-preview-greeting">
                          A softer way
                          <br />
                          to care for your skin.
                        </p>

                        <div className="lume-preview-rituals">
                          <span>
                            ○
                            <small>Cleanse</small>
                          </span>

                          <span>
                            ✦
                            <small>Treat</small>
                          </span>

                          <span>
                            ◇
                            <small>Hydrate</small>
                          </span>
                        </div>

                        <div className="lume-preview-card">
                          <small>
                            YOUR RITUAL
                          </small>

                          <strong>
                            Dew Veil
                          </strong>

                          <span>
                            Hydrating glow serum · $48
                          </span>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="project-content">

                    <div className="project-content-top">

                      <p className="project-category">
                        MOBILE APP · UI/UX · PRODUCT DESIGN
                      </p>

                      <span className="project-year">
                        2026
                      </span>

                    </div>

                    <h3>
                      LUMÉ — Skincare Mobile App
                    </h3>

                    <p className="project-description">
                      A conceptual skincare mobile experience designed around
                      personalization, guided rituals, product discovery, and
                      a calmer everyday self-care journey.
                    </p>

                    <div className="project-tags">
                      <span>UI/UX Design</span>
                      <span>Mobile App</span>
                      <span>Personalization</span>
                      <span>Product Discovery</span>
                      <span>React Native</span>
                    </div>

                    <a
                      href="/case-study/lume-mobile-app"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>

                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                LUMÉ SKINCARE
            ================================================= */}

            {projectMatchesService(["Digital Marketing", "Social Media Management"]) && (
            <>
<ElectricCard color="#B8E0D2">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project">

                  <div className="project-visual">

                    <div
                      className="project-image-frame glare-hover"
                      style={{
                        overflow: "hidden",
                      }}
                    >

                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          minHeight: "420px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, #f8eeee, #f5e7e4)",
                          overflow: "hidden",
                        }}
                      >

                        <div
                          style={{
                            textAlign: "center",
                            padding: "40px",
                          }}
                        >

                          <span
                            style={{
                              display: "block",
                              marginBottom: "12px",
                              fontSize: "11px",
                              letterSpacing: "0.18em",
                              fontWeight: "700",
                              color: "#9d7777",
                            }}
                          >
                            DIGITAL MARKETING
                          </span>

                          <h3
                            style={{
                              margin: 0,
                              fontFamily:
                                '"Playfair Display", Georgia, serif',
                              fontSize: "48px",
                              fontWeight: "500",
                              color: "#4d3b3b",
                            }}
                          >
                            Lume

                            <em
                              style={{
                                display: "block",
                                fontWeight: "400",
                                color: "#9d7777",
                              }}
                            >
                              Skincare.
                            </em>
                          </h3>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="project-content">

                    <div className="project-content-top">

                      <p className="project-category">
                        DIGITAL MARKETING · SOCIAL MEDIA · CONTENT
                      </p>

                      <span className="project-year">
                        2026
                      </span>

                    </div>

                    <h3>
                      Lume Skincare
                    </h3>

                    <p className="project-description">
                      A conceptual digital marketing project exploring how a
                      modern skincare brand could build a softer, educational,
                      and wellness-led presence on Instagram.
                    </p>

                    <div className="project-tags">
                      <span>Digital Marketing</span>
                      <span>Social Media</span>
                      <span>Content Strategy</span>
                      <span>Instagram</span>
                      <span>Content Design</span>
                    </div>

                    <a
                      href="/case-study/lume-skincare"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>

                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                TEA COFFEE & GREEN TEA
            ================================================= */}

            {projectMatchesService(["Digital Marketing", "Social Media Management", "Graphic Design"]) && (
            <>
<ElectricCard color="#FFD6A5">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project">

                  <div className="project-visual">

                    <div className="project-image-frame glare-hover">

                      <img
                        src={teaCoffeeCover}
                        alt="Tea Coffee & Green Tea digital marketing project"
                        className="project-image"
                      />

                    </div>

                  </div>

                  <div className="project-content">

                    <div className="project-content-top">

                      <p className="project-category">
                        DIGITAL MARKETING · SOCIAL MEDIA · BRAND CONTENT
                      </p>

                      <span className="project-year">
                        2026
                      </span>

                    </div>

                    <h3>
                      Tea Coffee & Green Tea
                    </h3>

                    <p className="project-description">
                      A conceptual digital marketing project exploring how a
                      tea and coffee brand could refresh its visual identity,
                      strengthen social media communication, and create a more
                      engaging content presence.
                    </p>

                    <div className="project-tags">
                      <span>Digital Marketing</span>
                      <span>Social Media</span>
                      <span>Brand Refresh</span>
                      <span>Content Design</span>
                      <span>Visual Strategy</span>
                    </div>

                    <a
                      href="/case-study/tea-coffee"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>

                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                LUMÉ — SOCIAL MEDIA MANAGEMENT
            ================================================= */}

            {projectMatchesService(["Digital Marketing", "Social Media Management"]) && (
            <>
<ElectricCard color="#F3C7D2">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project lume-social-project">

                  <div className="project-visual">
                    <div
                      className="project-image-frame glare-hover"
                      style={{
                        overflow: "hidden",
                        minHeight: "420px",
                        background: "linear-gradient(135deg, #f9e9ec 0%, #f5dfe4 48%, #efe4e8 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "78%",
                          padding: "34px 28px",
                          borderRadius: "22px",
                          background: "rgba(255,255,255,0.72)",
                          border: "1px solid rgba(255,255,255,0.9)",
                          boxShadow: "0 24px 60px rgba(100,70,80,0.12)",
                          textAlign: "center",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            marginBottom: "12px",
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            fontWeight: "700",
                            color: "#9d7777",
                          }}
                        >
                          SOCIAL MEDIA MANAGEMENT
                        </span>

                        <div
                          style={{
                            fontFamily: '"Playfair Display", Georgia, serif',
                            fontSize: "42px",
                            lineHeight: "1",
                            color: "#4d3b3b",
                            marginBottom: "14px",
                          }}
                        >
                          LUMÉ
                        </div>

                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#876d72",
                          }}
                        >
                          Content · Strategy · Social
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "28px",
                          right: "34px",
                          fontSize: "24px",
                          color: "#b98f9b",
                        }}
                      >
                        ✦
                      </span>

                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          bottom: "30px",
                          left: "34px",
                          fontSize: "22px",
                          color: "#b98f9b",
                        }}
                      >
                        ♡
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-content-top">
                      <p className="project-category">
                        SOCIAL MEDIA MANAGEMENT · CONTENT STRATEGY · BRAND COMMUNICATION
                      </p>

                      <span className="project-year">
                        2026
                      </span>
                    </div>

                    <h3>
                      LUMÉ — Social Media Management
                    </h3>

                    <p className="project-description">
                      A complete social media management case study for LUMÉ,
                      focused on content planning, visual direction, educational
                      storytelling, and building a consistent skincare presence
                      across social platforms.
                    </p>

                    <div className="project-tags">
                      <span>Social Media Management</span>
                      <span>Content Strategy</span>
                      <span>Instagram</span>
                      <span>Creative Direction</span>
                      <span>Brand Communication</span>
                    </div>

                    <a
                      href="/case-study/lume-social-media"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>
                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                TEA, COFFEE & GREEN TEA — SOCIAL MEDIA MANAGEMENT
            ================================================= */}

            {projectMatchesService(["Digital Marketing", "Social Media Management"]) && (
            <>
<ElectricCard color="#A8B89A">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project tea-social-project">

                  <div className="project-visual">
                    <div
                      className="project-image-frame glare-hover"
                      style={{
                        overflow: "hidden",
                        minHeight: "420px",
                        background:
                          "linear-gradient(135deg, #f5eee4 0%, #e7dccb 52%, #cfd8c5 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "78%",
                          padding: "36px 28px",
                          borderRadius: "22px",
                          background: "rgba(255,255,255,0.72)",
                          border: "1px solid rgba(255,255,255,0.9)",
                          boxShadow: "0 24px 60px rgba(62,43,33,0.14)",
                          textAlign: "center",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            marginBottom: "12px",
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            fontWeight: "700",
                            color: "#7a8f6a",
                          }}
                        >
                          SOCIAL MEDIA MANAGEMENT
                        </span>

                        <div
                          style={{
                            fontFamily: '"Playfair Display", Georgia, serif',
                            fontSize: "36px",
                            lineHeight: "1.05",
                            color: "#3e2b21",
                            marginBottom: "14px",
                          }}
                        >
                          Tea, Coffee
                          <em
                            style={{
                              display: "block",
                              fontWeight: "400",
                              color: "#6b4e3d",
                            }}
                          >
                            & Green Tea.
                          </em>
                        </div>

                        <p
                          style={{
                            margin: 0,
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#75675e",
                          }}
                        >
                          Content · Strategy · Storytelling
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "28px",
                          right: "34px",
                          fontSize: "24px",
                          color: "#7a8f6a",
                        }}
                      >
                        ✦
                      </span>

                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          bottom: "30px",
                          left: "34px",
                          fontSize: "22px",
                          color: "#a47b57",
                        }}
                      >
                        ☕
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-content-top">
                      <p className="project-category">
                        SOCIAL MEDIA MANAGEMENT · CONTENT STRATEGY · BRAND STORYTELLING
                      </p>

                      <span className="project-year">
                        2026
                      </span>
                    </div>

                    <h3>
                      Tea, Coffee & Green Tea — Social Media Management
                    </h3>

                    <p className="project-description">
                      A complete social media management concept built around
                      turning everyday tea and coffee moments into meaningful
                      lifestyle rituals through education, product storytelling,
                      brewing content, and community engagement.
                    </p>

                    <div className="project-tags">
                      <span>Social Media Management</span>
                      <span>Content Strategy</span>
                      <span>Instagram</span>
                      <span>Creative Direction</span>
                      <span>Brand Storytelling</span>
                    </div>

                    <a
                      href="/case-study/tea-coffee-social-media"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>
                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                GRAPHIC DESIGN
            ================================================= */}

            {projectMatchesService(["Graphic Design"]) && (
            <>
<ElectricCard color="#A8B8A0">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project graphic-design-project">

                  <div className="project-visual">
                    <div className="project-image-frame glare-hover">
                      <img
                        src={graphicDesignCover}
                        alt="Selected graphic design work by Mahek Zehra"
                        className="project-image"
                      />
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-content-top">
                      <p className="project-category">
                        GRAPHIC DESIGN · BRANDING · SOCIAL MEDIA · VISUAL COMMUNICATION
                      </p>
                      <span className="project-year">2026</span>
                    </div>

                    <h3>
                      Graphic Design Collection
                    </h3>

                    <p className="project-description">
                      A curated collection of graphic design work featuring
                      brand explorations, promotional creatives, social visuals,
                      identity studies, and presentation-ready artwork.
                    </p>

                    <div className="project-tags">
                      <span>Graphic Design</span>
                      <span>Branding</span>
                      <span>Visual Identity</span>
                      <span>Social Media</span>
                      <span>Creative Direction</span>
                    </div>

                    <a
                      href="/case-study/graphic-design"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>
                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

            {/* =================================================
                HAIDER ESTATE & BUILDERS — LAST PROJECT
            ================================================= */}

            {projectMatchesService(["Web Design & Development"]) && (
            <>
<ElectricCard color="#D8C3A5">
              <GlareHover className="project-electric-content">
                <SpotlightCard className="featured-project">

                  <div className="project-visual">
                    <div className="project-image-frame glare-hover">
                      <img
                        src={haiderHome}
                        alt="Haider Estate & Builders website"
                        className="project-image"
                      />
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-content-top">
                      <p className="project-category">
                        WEB DESIGN · DEVELOPMENT · CORPORATE WEBSITE
                      </p>

                      <span className="project-year">
                        2026
                      </span>
                    </div>

                    <h3>
                      Haider Estate & Builders
                    </h3>

                    <p className="project-description">
                      A responsive corporate website designed to give Haider
                      Estate & Builders a stronger digital presence and
                      showcase its construction, renovation, structural,
                      interior, and commercial capabilities.
                    </p>

                    <div className="project-tags">
                      <span>Web Design</span>
                      <span>React</span>
                      <span>Responsive UI</span>
                      <span>Corporate Website</span>
                      <span>Interactive Sections</span>
                    </div>

                    <a
                      href="/case-study/haider-estates"
                      className="project-link"
                    >
                      View Full Case Study
                      <span>↗</span>
                    </a>
                  </div>

                </SpotlightCard>
              </GlareHover>
            </ElectricCard>
            </>
          )}

          {activeService === "Video Editing" && (
            <div className="work-empty-state">
              <span>✦</span>
              <strong>More video work is coming soon.</strong>
              <p>Selected video-editing projects will appear here as the portfolio grows.</p>
            </div>
          )}

          </div>

        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          id="skills"
          className="skills-section section"
        >

          <div className="section-container">

            <div className="section-heading wow-auto">

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
                  className="skill-card wow-static"
                  key={number}
                >

                  <span>
                    {number}
                  </span>

                  <div>

                    <h3>
                      <PastelPill
                        tone={
                          number === "01" || number === "03"
                            ? "lavender"
                            : number === "02" || number === "06"
                            ? "blush"
                            : number === "04" || number === "07"
                            ? "blue"
                            : "mint"
                        }
                      >
                        {title}
                      </PastelPill>
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
            TECH MARQUEE
        ===================================================== */}

        <section
          className="tech-marquee-section"
          aria-label="Technology and creative toolkit"
        >

          <div className="tech-marquee-track">

            {[
              "React",
              "JavaScript",
              "UI / UX",
              "Responsive Web",
              "Figma",
              "SEO",
              "Digital Marketing",
              "Creative Design",
              "React Native",
              "Git",
            ].map((item, i) => (

              <span key={`${item}-${i}`}>
                <b>✦</b>
                {item}
              </span>

            ))}

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

            <div
              className="contact-mini-ui"
              aria-label="Project starter"
            >

              <label>
                <span>Your name</span>
                <input
                  aria-label="Your name"
                  placeholder="Tell me your name"
                />
              </label>

              <label>
                <span>What are we creating?</span>
                <input
                  aria-label="Project type"
                  placeholder="Website, app, brand or campaign"
                />
              </label>

            </div>

            <Magnetic>
              <ClickSpark>

                <button
                  type="button"
                  className="contact-button"
                  onClick={openChat}
                >
                  Let's Work Together <span>↗</span>
                </button>

              </ClickSpark>
            </Magnetic>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer whimsical-footer">

        <div
          className="footer-doodle footer-doodle-one"
          aria-hidden="true"
        >
          ✦
        </div>

        <div
          className="footer-doodle footer-doodle-two"
          aria-hidden="true"
        >
          ♡
        </div>

        <div
          className="footer-doodle footer-doodle-three"
          aria-hidden="true"
        >
          ⌁
        </div>

        <div className="footer-container whimsical-footer-container">

          <div className="footer-main footer-main-whimsy">

            <div className="footer-brand">

              <a
                href="#top"
                className="footer-logo whimsical-footer-logo"
              >
                MZ<span>.</span>
              </a>

              <p className="footer-tagline">
                Creative digital experiences built with strategy,
                design, and purpose.
              </p>

              <span className="footer-availability whimsical-availability">
                <i>●</i>
                Available for creative projects
              </span>

            </div>

            <div>

              <p className="footer-heading">
                EXPLORE
              </p>

              <div className="footer-links">

                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#work">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>

              </div>

            </div>

            <div>

              <p className="footer-heading">
                CONNECT
              </p>

              <div className="footer-socials">

                <a
                  href="https://www.linkedin.com/in/mahek-zehra-b141263b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>

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

          <div className="footer-bottom footer-bottom-whimsy">

            <p className="footer-copyright">
              © 2026 Mahek Zehra. All rights reserved.
            </p>

            <p className="footer-made-with">
              Designed & Developed with <span>♡</span> purpose.
            </p>

          </div>

        </div>

      </footer>

      {/* =====================================================
          FLOATING WHATSAPP
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
          boxShadow:
            "0 10px 28px rgba(37, 211, 102, 0.30)",
          zIndex: 9990,
          transition:
            "transform 0.2s ease, box-shadow 0.2s ease",
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
          HOME PAGE CHATBOT
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
   APP
========================================================= */

function App() {

  const [globalChatOpen, setGlobalChatOpen] = useState(false);

  useEffect(() => {

    const handleOpenChat = () => {
      setGlobalChatOpen(true);
    };

    window.addEventListener(
      "open-contact-chatbot",
      handleOpenChat
    );

    return () => {
      window.removeEventListener(
        "open-contact-chatbot",
        handleOpenChat
      );
    };

  }, []);

  const closeGlobalChat = () => {
    setGlobalChatOpen(false);
  };

  return (

    <BrowserRouter>

      <Routes>

        {/* PORTFOLIO HOME */}
        <Route
          path="/"
          element={<PortfolioHome />}
        />

        {/* FN JEWELRY */}
        <Route
          path="/case-study/fn-jewelry"
          element={<FNJewelryCaseStudy />}
        />

        {/* HOME LOANS */}
        <Route
          path="/case-study/home-loans"
          element={<HomeLoansCaseStudy />}
        />

        {/* LUMÉ MOBILE */}
        <Route
          path="/case-study/lume-mobile-app"
          element={<LumeMobileCaseStudy />}
        />

        {/* LUMÉ SKINCARE */}
        <Route
          path="/case-study/lume-skincare"
          element={<LumeSkincareCaseStudy />}
        />

        {/* LUMÉ SOCIAL MEDIA MANAGEMENT */}
        <Route
          path="/case-study/lume-social-media"
          element={<LumeSocialMediaCaseStudy />}
        />

        {/* TEA COFFEE */}
        <Route
          path="/case-study/tea-coffee"
          element={<TeaCoffeeCaseStudy />}
        />

        {/* TEA, COFFEE & GREEN TEA — SOCIAL MEDIA MANAGEMENT */}
        <Route
          path="/case-study/tea-coffee-social-media"
          element={<TeaCoffeeSocialMediaCaseStudy />}
        />

        {/* =================================================
            HAIDER ESTATE & BUILDERS
        ================================================= */}

        <Route
          path="/case-study/haider-estates"
          element={<HaiderEstatesCaseStudy />}
        />

        {/* GRAPHIC DESIGN */}
        <Route
          path="/case-study/graphic-design"
          element={<GraphicDesignCaseStudy />}
        />

      </Routes>

      {/* GLOBAL CHATBOT */}

      {globalChatOpen && (
        <ContactChatbot
          onClose={closeGlobalChat}
        />
      )}

    </BrowserRouter>

  );
}

export default App;