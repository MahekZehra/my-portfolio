import { Link } from "react-router-dom";
import "./LumeMobileCaseStudy.css";

const screens = [
  {
    number: "01",
    label: "HOME / YOUR RITUAL",
    type: "home",
  },
  {
    number: "02",
    label: "DISCOVER / RITUALS",
    type: "explore",
  },
  {
    number: "03",
    label: "QUIZ / LISTEN TO YOUR SKIN",
    type: "quiz",
  },
  {
    number: "04",
    label: "PRODUCT / DEW VEIL",
    type: "product",
  },
];

function PhoneScreen({ type }) {
  if (type === "home") {
    return (
      <div className="lma-screen lma-home">
        <div className="lma-status">9:41 <span>● ● ▰</span></div>
        <div className="lma-screen-head">
          <span className="lma-micro">GOOD MORNING</span>
          <strong>LUMÉ</strong>
        </div>
        <p className="lma-home-title">A softer way<br /><em>to care for your skin.</em></p>
        <div className="lma-orbit-mark">✦</div>
        <p className="lma-micro lma-section-label">YOUR RITUAL</p>
        <div className="lma-ritual-row">
          <span>○<small>Cleanse</small></span>
          <span>✦<small>Treat</small></span>
          <span>◇<small>Hydrate</small></span>
          <span>☼<small>Protect</small></span>
        </div>
        <div className="lma-feature-card">
          <span className="lma-micro">TODAY'S STEP</span>
          <strong>Hydrate</strong>
          <p>Slow down. Give your skin a little extra care.</p>
          <b>Begin ritual →</b>
        </div>
        <div className="lma-tabbar"><span>⌂</span><span>⌕</span><span>♡</span><span>◯</span></div>
      </div>
    );
  }

  if (type === "explore") {
    return (
      <div className="lma-screen lma-explore">
        <div className="lma-status">9:41 <span>● ● ▰</span></div>
        <div className="lma-topline"><strong>Explore</strong><span>♡</span></div>
        <p className="lma-micro">FIND WHAT YOUR SKIN NEEDS</p>
        <div className="lma-filter-row"><span className="active">All</span><span>Cleanse</span><span>Treat</span><span>Hydrate</span></div>
        <div className="lma-product-mini"><div className="lma-product-visual bottle">DEW</div><div><small>SERUM</small><strong>Dew Veil</strong><p>Hydrating glow serum</p><b>$48</b></div></div>
        <div className="lma-product-mini"><div className="lma-product-visual jar">CLOUD</div><div><small>MOISTURIZER</small><strong>Cloud Cream</strong><p>Softening daily moisturizer</p><b>$42</b></div></div>
        <div className="lma-product-mini"><div className="lma-product-visual cleanser">SILK</div><div><small>CLEANSER</small><strong>Silk Cleanse</strong><p>Gentle daily cleanser</p><b>$34</b></div></div>
        <div className="lma-tabbar"><span>⌂</span><span className="selected">⌕</span><span>♡</span><span>◯</span></div>
      </div>
    );
  }

  if (type === "quiz") {
    return (
      <div className="lma-screen lma-quiz">
        <div className="lma-status">9:41 <span>● ● ▰</span></div>
        <div className="lma-quiz-top"><span>01 / 03</span><span>Skin quiz</span></div>
        <div className="lma-progress"><i></i></div>
        <div className="lma-quiz-symbol">◇</div>
        <p className="lma-quiz-title">How does your<br /><em>skin usually feel?</em></p>
        <div className="lma-options">
          <span>Dry or tight <b>○</b></span>
          <span>Balanced and comfortable <b>○</b></span>
          <span>Oily or shiny <b>○</b></span>
          <span>Sensitive or easily irritated <b>○</b></span>
        </div>
        <div className="lma-next">Continue <b>→</b></div>
      </div>
    );
  }

  return (
    <div className="lma-screen lma-product">
      <div className="lma-status">9:41 <span>● ● ▰</span></div>
      <div className="lma-product-top"><span>←</span><span>♡</span></div>
      <div className="lma-big-product">DEW<small>SERUM</small></div>
      <p className="lma-micro">HYDRATING SERUM</p>
      <h3>Dew Veil</h3>
      <p className="lma-product-sub">A soft veil of hydration.</p>
      <div className="lma-price">$48 <span>30 ML</span></div>
      <p className="lma-product-copy">A lightweight daily serum designed to replenish moisture, soften the feel of your skin, and leave behind a naturally fresh-looking glow.</p>
      <div className="lma-add">Add to ritual <b>+</b></div>
    </div>
  );
}

function LumeMobileCaseStudy() {
  return (
    <div className="lma-case">
      <header className="lma-nav">
        <Link to="/" className="lma-logo">MZ<span>.</span></Link>
        <div><span>SELECTED WORK</span><span>LUMÉ / MOBILE APP / 2026</span></div>
        <Link to="/" className="lma-back">← Portfolio</Link>
      </header>

      <main>
        <section className="lma-hero">
          <div className="lma-hero-copy">
            <p className="lma-kicker">MOBILE APP · UI/UX · PRODUCT DESIGN</p>
            <h1>LUMÉ<em>A ritual made personal.</em></h1>
            <p className="lma-lead">A conceptual skincare mobile experience that turns product discovery into a calm, personalized self-care ritual.</p>
            <div className="lma-meta">
              <div><small>PROJECT TYPE</small><strong>Concept / Sample Project</strong></div>
              <div><small>PLATFORM</small><strong>Mobile · iOS / Android</strong></div>
              <div><small>BUILD</small><strong>React Native · Expo</strong></div>
            </div>
          </div>
          <div className="lma-hero-phones">
            <div className="lma-hero-phone lma-tilt-left"><PhoneScreen type="explore" /></div>
            <div className="lma-hero-phone lma-main-phone"><PhoneScreen type="home" /></div>
            <div className="lma-hero-phone lma-tilt-right"><PhoneScreen type="product" /></div>
          </div>
        </section>

        <section className="lma-overview">
          <div className="lma-section-label-large"><span>01</span><small>OVERVIEW</small></div>
          <div className="lma-overview-grid">
            <h2>Designing a skincare app that feels like a <em>ritual.</em></h2>
            <div>
              <p className="lma-large-copy">LUMÉ was created as a UI/UX sample project around one simple idea: skincare should feel personal, not overwhelming.</p>
              <p>The experience combines guided onboarding, a lightweight skin quiz, ritual-based discovery, product details, saved products, cart and checkout, journal content, and a personal profile.</p>
              <p>The visual language uses warm neutrals, soft blush tones, editorial typography, generous spacing, and quiet interactions to make the product feel closer to a wellness ritual than a traditional storefront.</p>
            </div>
          </div>
        </section>

        <section className="lma-strategy">
          <div className="lma-section-label-large"><span>02</span><small>DESIGN DIRECTION</small></div>
          <div className="lma-strategy-head">
            <p className="lma-kicker">THE EXPERIENCE</p>
            <h2>Simple enough to use.<br /><em>Thoughtful enough to remember.</em></h2>
          </div>
          <div className="lma-principles">
            <article><b>01</b><h3>GUIDE</h3><p>Use onboarding and a three-step quiz to help people understand their skin without creating friction.</p></article>
            <article><b>02</b><h3>DISCOVER</h3><p>Organize products around four intuitive rituals — Cleanse, Treat, Hydrate, and Protect.</p></article>
            <article><b>03</b><h3>REASSURE</h3><p>Keep copy, hierarchy, and product information calm, clear, and easy to scan.</p></article>
          </div>
        </section>

        <section className="lma-screens-section">
          <div className="lma-section-label-large"><span>03</span><small>KEY SCREENS</small></div>
          <div className="lma-screens-head"><p className="lma-kicker">UI SYSTEM IN PRACTICE</p><h2>From first touch<br /><em>to daily ritual.</em></h2></div>
          <div className="lma-screen-grid">
            {screens.map((screen) => (
              <figure key={screen.number}>
                <div className="lma-device"><PhoneScreen type={screen.type} /></div>
                <figcaption><span>{screen.number}</span><strong>{screen.label}</strong></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="lma-features">
          <div className="lma-section-label-large"><span>04</span><small>FEATURE SET</small></div>
          <div className="lma-feature-grid">
            <article><b>01</b><h3>Personalized skin quiz</h3><p>Three focused questions lead into a skin-type result and a recommended ritual.</p></article>
            <article><b>02</b><h3>Ritual-led discovery</h3><p>Browse by what the user wants to do — cleanse, treat, hydrate, or protect.</p></article>
            <article><b>03</b><h3>Product detail</h3><p>Benefits, finish, size, price, and a clear add-to-ritual action keep decisions simple.</p></article>
            <article><b>04</b><h3>Saved products & checkout</h3><p>Favorites, cart, checkout, orders, preferences, and profile complete the core journey.</p></article>
            <article><b>05</b><h3>Journal & support</h3><p>Editorial content and help/support extend the experience beyond transactions.</p></article>
            <article><b>06</b><h3>Calm visual system</h3><p>Soft surfaces, serif display type, rounded cards, and restrained controls create a consistent feel.</p></article>
          </div>
        </section>

        <section className="lma-tech">
          <div><p className="lma-kicker">BUILD NOTES</p><h2>A design concept<br /><em>built as a real app.</em></h2></div>
          <div><p>Designed and implemented as a React Native / Expo sample project with file-based routing. The prototype includes real navigation between onboarding, home, explore, quiz, product, cart, checkout, journal, profile, preferences, orders, saved products, and help/support screens.</p><div className="lma-tags"><span>React Native</span><span>Expo Router</span><span>TypeScript</span><span>UI/UX</span><span>Interaction Design</span><span>Mobile Product Design</span></div></div>
        </section>

        <section className="lma-cta">
          <p className="lma-kicker">LUMÉ / 2026</p>
          <h2>Small moments.<br /><em>Beautiful experiences.</em></h2>
          <Link to="/" className="lma-cta-button">Back to selected work ↗</Link>
        </section>
      </main>
    </div>
  );
}

export default LumeMobileCaseStudy;
