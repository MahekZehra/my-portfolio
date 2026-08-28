import { Link } from "react-router-dom";
import "./LumeMobileCaseStudy.css";

const screens = [
  { number: "01", label: "ONBOARDING / WELCOME", type: "onboarding" },
  { number: "02", label: "HOME / YOUR RITUAL", type: "home" },
  { number: "03", label: "EXPLORE / RITUALS", type: "explore" },
  { number: "04", label: "QUIZ / LISTEN TO YOUR SKIN", type: "quiz" },
  { number: "05", label: "PRODUCT / DEW VEIL", type: "product" },
  { number: "06", label: "CHECKOUT / SIMPLE & CALM", type: "checkout" },
];

function PhoneScreen({ type }) {
  const shell = (children, className = "") => (
    <div className={`lma-screen ${className}`}>
      <div className="lma-status">9:41 <span>● ● ▰</span></div>
      {children}
    </div>
  );

  if (type === "onboarding") {
    return shell(
      <div className="lma-onboarding">
        <div className="lma-onboarding-mark">✦</div>
        <span className="lma-micro">WELCOME TO</span>
        <h3>LUMÉ</h3>
        <p>A softer way<br /><em>to care for your skin.</em></p>
        <div className="lma-onboarding-orbit">YOUR SKIN<br /><small>YOUR RITUAL</small></div>
        <div className="lma-next">Begin your ritual <b>→</b></div>
      </div>,
      "lma-onboarding-screen"
    );
  }

  if (type === "home") {
    return shell(
      <>
        <div className="lma-screen-head"><span className="lma-micro">GOOD MORNING</span><strong>LUMÉ</strong></div>
        <p className="lma-home-title">A softer way<br /><em>to care for your skin.</em></p>
        <div className="lma-orbit-mark">✦</div>
        <p className="lma-micro lma-section-label">YOUR RITUAL</p>
        <div className="lma-ritual-row"><span>○<small>Cleanse</small></span><span>✦<small>Treat</small></span><span>◇<small>Hydrate</small></span><span>☼<small>Protect</small></span></div>
        <div className="lma-feature-card"><span className="lma-micro">TODAY'S STEP</span><strong>Hydrate</strong><p>Slow down. Give your skin a little extra care.</p><b>Begin ritual →</b></div>
        <div className="lma-tabbar"><span>⌂</span><span>⌕</span><span>♡</span><span>◯</span></div>
      </>
    );
  }

  if (type === "explore") {
    return shell(
      <>
        <div className="lma-topline"><strong>Explore</strong><span>♡</span></div>
        <p className="lma-micro">FIND WHAT YOUR SKIN NEEDS</p>
        <div className="lma-filter-row"><span className="active">All</span><span>Cleanse</span><span>Treat</span><span>Hydrate</span></div>
        <div className="lma-product-mini"><div className="lma-product-visual bottle">DEW</div><div><small>SERUM</small><strong>Dew Veil</strong><p>Hydrating glow serum</p><b>$48</b></div></div>
        <div className="lma-product-mini"><div className="lma-product-visual jar">CLOUD</div><div><small>MOISTURIZER</small><strong>Cloud Cream</strong><p>Softening daily moisturizer</p><b>$42</b></div></div>
        <div className="lma-product-mini"><div className="lma-product-visual cleanser">SILK</div><div><small>CLEANSER</small><strong>Silk Cleanse</strong><p>Gentle daily cleanser</p><b>$34</b></div></div>
        <div className="lma-tabbar"><span>⌂</span><span className="selected">⌕</span><span>♡</span><span>◯</span></div>
      </>
    );
  }

  if (type === "quiz") {
    return shell(
      <>
        <div className="lma-quiz-top"><span>01 / 03</span><span>Skin quiz</span></div>
        <div className="lma-progress"><i /></div>
        <div className="lma-quiz-symbol">◇</div>
        <p className="lma-quiz-title">How does your<br /><em>skin usually feel?</em></p>
        <div className="lma-options"><span>Dry or tight <b>○</b></span><span>Balanced and comfortable <b>○</b></span><span>Oily or shiny <b>○</b></span><span>Sensitive or easily irritated <b>○</b></span></div>
        <div className="lma-next">Continue <b>→</b></div>
      </>
      , "lma-quiz"
    );
  }

  if (type === "checkout") {
    return shell(
      <>
        <div className="lma-topline"><span>←</span><strong>Checkout</strong><span>•••</span></div>
        <p className="lma-micro lma-checkout-label">YOUR ORDER</p>
        <div className="lma-checkout-item"><div className="lma-product-visual bottle">DEW</div><div><strong>Dew Veil</strong><small>30 ML · QTY 1</small><b>$48</b></div></div>
        <div className="lma-summary"><span>Subtotal <b>$48</b></span><span>Shipping <b>Free</b></span><span>Total <b>$48</b></span></div>
        <div className="lma-add">Place order <b>→</b></div>
      </>
      , "lma-checkout"
    );
  }

  return shell(
    <>
      <div className="lma-product-top"><span>←</span><span>♡</span></div>
      <div className="lma-big-product">DEW<small>SERUM</small></div>
      <p className="lma-micro">HYDRATING SERUM</p>
      <h3>Dew Veil</h3>
      <p className="lma-product-sub">A soft veil of hydration.</p>
      <div className="lma-price">$48 <span>30 ML</span></div>
      <p className="lma-product-copy">A lightweight daily serum designed to replenish moisture, soften the feel of your skin, and leave behind a naturally fresh-looking glow.</p>
      <div className="lma-add">Add to ritual <b>+</b></div>
    </>
    , "lma-product"
  );
}

function SectionIndex({ number, label }) {
  return <div className="lma-section-index"><span>{number}</span><small>{label}</small></div>;
}

function LumeMobileCaseStudy() {
  return (
    <div className="lma-case">
      <header className="lma-nav">
        <Link to="/" className="lma-logo">MZ<span>.</span></Link>
        <div><span>SELECTED WORK</span><span>LUMÉ MOBILE / 2026</span></div>
        <Link to="/" className="lma-back">← Portfolio</Link>
      </header>

      <main>
        <section className="lma-hero">
          <div className="lma-hero-side-label"><span>CASE STUDY</span><span>01 / 12</span></div>
          <div className="lma-hero-copy">
            <p className="lma-kicker">MOBILE APP · UI/UX · PRODUCT DESIGN</p>
            <h1>LUMÉ<em>A ritual made personal.</em></h1>
            <p className="lma-lead">A conceptual skincare mobile experience that turns product discovery into a calm, personalized self-care ritual — from first touch to checkout.</p>
            <div className="lma-meta"><div><small>ROLE</small><strong>UI/UX + Product Design</strong></div><div><small>TYPE</small><strong>Concept / Sample Project</strong></div><div><small>YEAR</small><strong>2026</strong></div></div>
          </div>
          <div className="lma-hero-phones"><div className="lma-hero-phone lma-tilt-left"><PhoneScreen type="explore" /></div><div className="lma-hero-phone lma-main-phone"><PhoneScreen type="home" /></div><div className="lma-hero-phone lma-tilt-right"><PhoneScreen type="product" /></div></div>
          <div className="lma-hero-sparkle one">✦</div><div className="lma-hero-sparkle two">✧</div><div className="lma-hero-orbit-word">WELLNESS</div>
        </section>

        <section className="lma-intro-shot">
          <div className="lma-shot-frame"><div className="lma-shot-collage"><div><PhoneScreen type="onboarding" /></div><div><PhoneScreen type="home" /></div><div><PhoneScreen type="quiz" /></div></div></div>
          <div className="lma-shot-caption"><span>THE MOBILE EXPERIENCE</span><span>01 — ONBOARDING / HOME / QUIZ</span></div>
        </section>

        <section className="lma-overview lma-editorial-section">
          <SectionIndex number="02" label="PROJECT STORY" />
          <div className="lma-overview-grid"><div><p className="lma-kicker">THE BEGINNING</p><h2>From skincare shopping<br /><em>to a daily ritual.</em></h2></div><div><p className="lma-large-copy">LUMÉ was created as a UI/UX sample project around one simple idea: skincare should feel personal, not overwhelming.</p><p>The product brings together guided onboarding, a lightweight skin quiz, ritual-based discovery, product details, saved products, cart and checkout, journal content, and a personal profile.</p><div className="lma-intention"><span>THE INTENTION</span><strong>Make every decision feel guided, calm, and easy to return to.</strong></div></div></div>
        </section>

        <section className="lma-challenge lma-dark-section">
          <SectionIndex number="03" label="THE CHALLENGE" />
          <div className="lma-challenge-grid"><div><p className="lma-kicker">A COMMON FRICTION</p><h2>Too many products.<br /><em>Too little confidence.</em></h2></div><div className="lma-challenge-list"><article><b>01</b><h3>CHOICE OVERLOAD</h3><p>Skincare categories can make users compare products before they understand what they actually need.</p></article><article><b>02</b><h3>LOW PERSONAL CONTEXT</h3><p>A product catalogue alone does not explain how a routine should fit an individual's skin or habits.</p></article><article><b>03</b><h3>TRANSACTION-FIRST FLOWS</h3><p>The experience needed to make education and care feel as important as the eventual purchase.</p></article></div></div>
        </section>

        <section className="lma-strategy lma-editorial-section">
          <SectionIndex number="04" label="DESIGN DIRECTION" />
          <div className="lma-strategy-head"><p className="lma-kicker">THE EXPERIENCE</p><h2>Simple enough to use.<br /><em>Thoughtful enough to remember.</em></h2></div>
          <div className="lma-principles"><article><b>01</b><h3>GUIDE</h3><p>Use onboarding and a focused quiz to help people understand their skin without adding friction.</p></article><article><b>02</b><h3>DISCOVER</h3><p>Organize products around four intuitive rituals — Cleanse, Treat, Hydrate, and Protect.</p></article><article><b>03</b><h3>REASSURE</h3><p>Keep copy, hierarchy, and product information calm, clear, and easy to scan.</p></article></div>
        </section>

        <section className="lma-journey lma-editorial-section">
          <SectionIndex number="05" label="USER JOURNEY" />
          <div className="lma-journey-head"><div><p className="lma-kicker">THE CORE FLOW</p><h2>Discover → Understand →<br /><em>Choose → Continue.</em></h2></div><p>The flow deliberately moves from emotional entry to useful guidance, then into confident product selection and a low-friction purchase.</p></div>
          <div className="lma-flow"><div><span>01</span><strong>WELCOME</strong><small>Set the tone</small></div><i>→</i><div><span>02</span><strong>QUIZ</strong><small>Learn about skin</small></div><i>→</i><div><span>03</span><strong>RITUAL</strong><small>Personalize discovery</small></div><i>→</i><div><span>04</span><strong>PRODUCT</strong><small>Build confidence</small></div><i>→</i><div><span>05</span><strong>CHECKOUT</strong><small>Finish simply</small></div></div>
        </section>

        <section className="lma-screens-section lma-editorial-section">
          <SectionIndex number="06" label="KEY SCREENS" />
          <div className="lma-screens-head"><p className="lma-kicker">UI SYSTEM IN PRACTICE</p><h2>Every screen has<br /><em>a clear reason to exist.</em></h2></div>
          <div className="lma-screen-grid">{screens.map((screen) => <figure key={screen.number}><div className="lma-device"><PhoneScreen type={screen.type} /></div><figcaption><span>{screen.number}</span><strong>{screen.label}</strong></figcaption></figure>)}</div>
        </section>

        <section className="lma-system lma-editorial-section">
          <SectionIndex number="07" label="VISUAL SYSTEM" />
          <div className="lma-system-grid"><div><p className="lma-kicker">THE LANGUAGE</p><h2>Soft surfaces.<br /><em>Strong hierarchy.</em></h2><p className="lma-system-copy">Warm neutrals and blush accents create a wellness-led atmosphere, while dark type and generous spacing preserve clarity. Serif display type adds editorial character without compromising usability.</p></div><div className="lma-token-board"><div className="lma-token-colors"><span></span><span></span><span></span><span></span><span></span></div><div className="lma-type-sample"><small>DISPLAY / PLAYFAIR</small><strong>A softer ritual.</strong><em>made personal.</em><small>UI / DM SANS</small><b>Cleanse · Treat · Hydrate · Protect</b></div></div></div>
        </section>

        <section className="lma-features lma-editorial-section">
          <SectionIndex number="08" label="FEATURE SET" />
          <div className="lma-feature-grid"><article><b>01</b><h3>Personalized skin quiz</h3><p>Three focused questions lead into a skin-type result and recommended ritual.</p></article><article><b>02</b><h3>Ritual-led discovery</h3><p>Browse by what the user wants to do — cleanse, treat, hydrate, or protect.</p></article><article><b>03</b><h3>Product detail</h3><p>Benefits, finish, size, price, and a clear action keep decisions simple.</p></article><article><b>04</b><h3>Saved products & checkout</h3><p>Favorites, cart, checkout, orders, preferences, and profile complete the core journey.</p></article><article><b>05</b><h3>Journal & support</h3><p>Editorial content and help extend the experience beyond transactions.</p></article><article><b>06</b><h3>Responsive interaction</h3><p>Clear states, predictable navigation, and touch-friendly controls support everyday use.</p></article></div>
        </section>

        <section className="lma-build lma-dark-section">
          <SectionIndex number="09" label="PROTOTYPE & BUILD" />
          <div className="lma-build-grid"><div><p className="lma-kicker">FROM DESIGN TO PRODUCT</p><h2>A concept that<br /><em>behaves like an app.</em></h2></div><div><p>The sample was implemented as a React Native / Expo app with file-based routing. The prototype includes onboarding, home, explore, quiz, product, cart, checkout, journal, profile, preferences, orders, saved products, and help/support flows.</p><div className="lma-tags"><span>React Native</span><span>Expo Router</span><span>TypeScript</span><span>UI/UX</span><span>Interaction Design</span><span>Mobile Product Design</span></div></div></div>
        </section>

        <section className="lma-reflection lma-editorial-section">
          <SectionIndex number="10" label="DESIGN OUTCOME" />
          <div className="lma-reflection-grid"><div><p className="lma-kicker">WHAT THE CONCEPT PROVES</p><h2>A calmer interface can still support a <em>complete product journey.</em></h2></div><div><p className="lma-large-copy">The result is not just a collection of pretty screens. It is a connected product story where brand, navigation, personalization, commerce, and content reinforce the same feeling.</p><ul><li>Less cognitive load through ritual-led categories.</li><li>More confidence through guided personalization.</li><li>A consistent visual language from onboarding to checkout.</li><li>A scalable foundation for future routines, content, and recommendations.</li></ul></div></div>
        </section>

        <section className="lma-final-visual"><div className="lma-final-phones"><div><PhoneScreen type="onboarding" /></div><div><PhoneScreen type="home" /></div><div><PhoneScreen type="quiz" /></div><div><PhoneScreen type="product" /></div></div><div className="lma-final-caption"><span>LUMÉ / MOBILE APP / 2026</span><span>END OF CASE STUDY</span></div></section>

        <section className="lma-cta"><p className="lma-kicker">LUMÉ / 2026</p><h2>Small moments.<br /><em>Beautiful experiences.</em></h2><p>A UI/UX concept designed to make skincare feel more personal, more understandable, and more human.</p><Link to="/" className="lma-cta-button">Back to selected work ↗</Link></section>
      </main>
    </div>
  );
}

export default LumeMobileCaseStudy;
