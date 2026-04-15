import {
  ArrowRight,
  BatteryCharging,
  BadgeCheck,
  Backpack,
  Bot,
  Clock3,
  Cpu,
  Eye,
  Factory,
  Hand,
  Heart,
  Lightbulb,
  Layers3,
  Mail,
  Monitor,
  PlugZap,
  Radio,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Volume2,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cableImage from "./assets/cable.jpg";
import dualRobotsImage from "./assets/dual-robots.jpg";
import fullKitImage from "./assets/full-kit.jpg";
import heroImage from "./assets/hero.jpg";
import manualImage from "./assets/manual.jpg";
import pouchImage from "./assets/pouch.jpg";

const meeshoUrl = "https://www.meesho.com/s/p/ewd36y?utm_source=s";

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const highlights = [
  {
    icon: Cpu,
    title: "Interactive Robot Experience",
    text: "RoboMitra reacts with expressive movement and playful behavior that makes every interaction feel more alive.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Build Quality",
    text: "Each RoboMitra unit is handmade with love, giving it a polished finish, compact body, and a more premium feel in hand and on display.",
  },
  {
    icon: Zap,
    title: "Compact size Convenience",
    text: "Portable sizing make RoboMitra ready to use anytime.",
  },
];

const featureCards = [
  {
    icon: Bot,
    title: "Made To Be Giftable",
    text: "Its expressive personality, movement, and compact size make RoboMitra a fun gift for kids, friends, and collectors.",
  },
  {
    icon: Layers3,
    title: "Easy To Carry And Place",
    text: "Small enough for desks, shelves, and bedside tables, while still standing out as a display-worthy companion robot.",
  },
  // {
  //   icon: BadgeCheck,
  //   title: "Simple To Order",
  //   text: "A direct Buy Now path takes shoppers straight to Meesho, keeping the purchase flow easy and familiar.",
  // },
];

const productFeatures = [
  {
    icon: Bot,
    title: "Robots Interact Together",
    text: "When placed close to each other, RoboMitra units automatically respond and feel like they are talking to one another.",
  },
  {
    icon: BatteryCharging,
    title: "2-4 Hours Battery Backup",
    text: "Built for extended play and display sessions with dependable battery life in a compact body.",
  },
  {
    icon: Eye,
    title: "Smooth Eye Movements",
    text: "Expressive eye motion adds life, attention, and a more believable robotic personality.",
  },
  {
    icon: Sparkles,
    title: "Cute Animations",
    text: "Delightful animation moments make RoboMitra feel lively without losing its premium product feel.",
  },
  // {
  //   icon: Zap,
  //   title: "Type-C Fast Charging",
  //   text: "Quick, modern charging support keeps the product easy to power up and use every day.",
  // },
  {
    icon: Backpack,
    title: "Compact and Portable",
    text: "Designed to be easy to carry, place, and showcase anywhere without taking much space.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Build",
    text: "A sturdy finish and well-made construction help RoboMitra feel polished and durable.",
  },
  {
    icon: Heart,
    title: "Human-Like Emotions",
    text: "Emotion-inspired expressions give the product a warmer, more relatable presence.",
  },
];

const galleryShots = [
  {
    image: heroImage,
    title: "Hero Product Shot",
    alt: "RoboMitra front-facing product photo",
    caption: "The main product shot gives the page an immediate real-world product feel.",
  },
  {
    image: dualRobotsImage,
    title: "Dual Robot View",
    alt: "Two RoboMitra units shown together",
    caption: "Use the two-unit photo to support the interaction feature when robots are placed close together.",
  },
  {
    image: fullKitImage,
    title: "Full Box Contents",
    alt: "RoboMitra with pouch, manual, cable and box contents",
    caption: "Shows the robot, cable, manual, pouch, and packaging together in a complete product presentation.",
  },
  {
    image: cableImage,
    title: "Charging Cable",
    alt: "RoboMitra Type-C charging cable",
    caption: "The Type-C cable photo supports the fast charging story with a simple accessory close-up.",
  },
  {
    image: pouchImage,
    title: "Brand Pouch",
    alt: "Red branded RoboMitra pouch",
    caption: "The branded red pouch makes the product feel more premium, presentable, and gift-ready.",
  },
  {
    image: manualImage,
    title: "Manual",
    alt: "RoboMitra manual",
    caption: "Packaging and printed material help build trust and make the overall bundle feel complete.",
  },
];

const boxContents = [
  "RoboMitra robot unit",
  "Type-C charging cable",
  "User manual",
  "Branded storage pouch",
  "Retail packaging",
];

const stats = [
  { value: "2-4 Hrs", label: "Battery backup" },
  { value: "Type-C", label: "Fast charging support" },
  { value: "Compact", label: "Portable daily use" },
];

const supportFaqs = [
  {
    icon: BatteryCharging,
    title: "1. Robot is not turning ON",
    points: [
      "Make sure the battery is charged",
      "Connect to charger and try again",
      "Check if power switch is ON",
    ],
  },
  {
    icon: Monitor,
    title: "2. Screen is not turning ON",
    points: [
      "Charge the battery fully",
      "Restart the robot",
      "Ensure all connections are proper",
    ],
  },
  {
    icon: PlugZap,
    title: "3. Robot is not charging",
    points: [
      "Use a good quality USB cable",
      "Check charging module connection",
      "Try a different charger",
    ],
  },
  {
    icon: Hand,
    title: "4. Touch is not working",
    points: [
      "Make sure your finger is clean and dry",
      "Touch properly on the sensor area",
      "Restart the robot",
    ],
  },
  {
    icon: Volume2,
    title: "5. No sound from buzzer",
    points: ["Restart the robot", "Contact support"],
  },
  {
    icon: Radio,
    title: "6. Two RoboMitra are not connecting",
    points: [
      "Bring both robots closer",
      "Restart both devices",
      "Wait a few seconds for auto connect",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Robot keeps restarting",
    points: ["Battery may be low", "Charge fully before use"],
  },
];

const aboutPoints = [
  {
    icon: Lightbulb,
    title: "Built From A Simple Idea",
    text: "RoboMitra started with one question: why should smart companion robots be expensive? The project is focused on making them more affordable and accessible.",
  },
  {
    icon: Bot,
    title: "More Than A Gadget",
    text: "RoboMitra is designed as a small desk companion that reacts, expresses, and interacts through touch, sound, and smart behavior.",
  },
  {
    icon: Heart,
    title: "Technology That Feels Human",
    text: "Our mission is to make technology more human, more fun, and more approachable for everyday use.",
  },
  {
    icon: Factory,
    title: "Designed And Assembled In India",
    text: "We focus on creativity, simplicity, and continuous improvement while building and assembling our products in India.",
  },
  {
    icon: Radio,
    title: "Interactive Future",
    text: "When two RoboMitra devices come close, they can interact with each other, creating a fun and unique shared experience.",
  },
  {
    icon: Target,
    title: "Just The Beginning",
    text: "We aim to improve RoboMitra with better design, smarter features, and more interactive capabilities in the future.",
  },
];

function ProductName() {
  return (
    <span className="product-name">
      <span className="product-name-robo">Robo</span>
      <span className="product-name-mitra">Mitra</span>
    </span>
  );
}

function FadeIn({ children, className, delay = 0, as = "div", ...props }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      custom={delay}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
}

function GalleryCard({ title, caption, image, alt, delay }) {
  return (
    <FadeIn as="article" className="gallery-card" delay={delay}>
      <img className="gallery-photo" src={image} alt={alt} />
      <div className="gallery-copy gallery-copy-overlay">
        <h3>{title}</h3>
      </div>
    </FadeIn>
  );
}

function SupportPage() {
  return (
    <div className="page-shell support-shell">
      <header className="topbar">
        <div className="navbar">
          <a className="brand-lockup" href="/" aria-label="RoboMitra home">
            <div className="brand-mark">
              <Sparkles size={18} />
            </div>
            <div className="brand-copy">
              <h1>
                <ProductName />
              </h1>
            </div>
          </a>

          <nav className="nav-links" aria-label="Support navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href={meeshoUrl} target="_blank" rel="noreferrer">
              Buy Now
            </a>
          </nav>
        </div>
      </header>

      <main className="support-main">
        <FadeIn className="support-hero" delay={0.04}>
          <p className="section-tag">Support and FAQ</p>
          <h2>Help for your RoboMitra, fast answers, and direct support contact.</h2>
          <p className="hero-text">
            If you are facing charging, connection, touch, display, or power issues,
            this page covers the most common fixes before you reach out.
          </p>
        </FadeIn>

        <FadeIn className="support-contact-card" delay={0.08}>
          <div className="support-card-head">
            <div className="icon-wrap support-head-icon">
              <Mail size={20} />
            </div>
            <div>
              <p className="section-tag">Contact support</p>
              <h3>Need direct help?</h3>
            </div>
          </div>
          <div className="support-contact-grid">
            <a className="support-contact-item" href="mailto:robomitra@zohomail.in">
              <Mail size={18} />
              <span>robomitra@zohomail.in</span>
            </a>
            <div className="support-contact-item">
              <Clock3 size={18} />
              <span>Response time: Within 24-48 hours</span>
            </div>
          </div>
        </FadeIn>

        <section className="faq-section">
          <FadeIn className="faq-intro" delay={0.1}>
            <p className="section-tag">Frequently asked questions</p>
            <h2>Quick fixes for the most common RoboMitra issues.</h2>
          </FadeIn>

          <div className="faq-grid">
            {supportFaqs.map(({ icon: Icon, title, points }, index) => (
              <FadeIn
                as="article"
                className="faq-card"
                delay={0.05 * (index + 1)}
                key={title}
              >
                <div className="support-card-head">
                  <div className="icon-wrap support-head-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <div className="faq-points">
                  {points.map((point) => (
                    <div className="faq-point" key={point}>
                      <span className="box-content-dot" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn className="support-help-card" delay={0.12}>
          <div className="support-card-head">
            <div className="icon-wrap support-head-icon">
              <Wrench size={20} />
            </div>
            <div>
              <p className="section-tag">Need more help?</p>
              <h3>If your issue is not listed above, email us with:</h3>
            </div>
          </div>
          <div className="faq-points">
            <div className="faq-point">
              <span className="box-content-dot" />
              <span>Problem description</span>
            </div>
            <div className="faq-point">
              <span className="box-content-dot" />
              <span>Photos or videos</span>
            </div>
          </div>
          <p className="support-help-note">We will help you as soon as possible.</p>
        </FadeIn>
      </main>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-shell support-shell">
      <header className="topbar">
        <div className="navbar">
          <a className="brand-lockup" href="/" aria-label="RoboMitra home">
            <div className="brand-mark">
              <Sparkles size={18} />
            </div>
            <div className="brand-copy">
              <h1>
                <ProductName />
              </h1>
            </div>
          </a>

          <nav className="nav-links" aria-label="About navigation">
            <a href="/">Home</a>
            <a href="/support">Support</a>
            <a href={meeshoUrl} target="_blank" rel="noreferrer">
              Buy Now
            </a>
          </nav>
        </div>
      </header>

      <main className="support-main">
        <FadeIn className="support-hero" delay={0.04}>
          <p className="section-tag">About RoboMitra</p>
          <h2>Small, interactive, affordable smart robots made for everyday joy.</h2>
          <p className="hero-text">
            RoboMitra is a small innovation project focused on creating simple,
            interactive, and affordable smart robots for everyday use.
          </p>
        </FadeIn>

        <FadeIn className="about-story-card" delay={0.08}>
          <div className="support-card-head">
            <div className="icon-wrap support-head-icon">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="section-tag">Our story</p>
              <h3>Why RoboMitra exists</h3>
            </div>
          </div>
          <div className="about-story-copy">
            <p>
              We started with a simple idea: smart companion robots should not be
              out of reach. Our goal is to bring fun, expressive, and engaging
              robots to everyone at a budget-friendly price.
            </p>
            <p>
              RoboMitra is not just a gadget. It is a small desk companion
              designed to react, express, and interact with you through touch,
              sound, and smart behavior.
            </p>
            <p>
              When two RoboMitra devices come close, they can even interact with
              each other, creating a unique and playful experience.
            </p>
          </div>
        </FadeIn>

        <section className="faq-section">
          <FadeIn className="faq-intro" delay={0.1}>
            <p className="section-tag">What we believe</p>
            <h2>Making technology more fun, accessible, and human.</h2>
          </FadeIn>

          <div className="faq-grid">
            {aboutPoints.map(({ icon: Icon, title, text }, index) => (
              <FadeIn
                as="article"
                className="faq-card"
                delay={0.05 * (index + 1)}
                key={title}
              >
                <div className="support-card-head">
                  <div className="icon-wrap support-head-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p className="about-card-text">{text}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn className="support-help-card" delay={0.12}>
          <div className="support-card-head">
            <div className="icon-wrap support-head-icon">
              <Heart size={20} />
            </div>
            <div>
              <p className="section-tag">Thank you</p>
              <h3>This is just the beginning.</h3>
            </div>
          </div>
          <p className="support-help-note">
            Thank you for supporting RoboMitra. We are continuing to improve the
            product with better design, smarter features, and more interactive
            capabilities in the future.
          </p>
        </FadeIn>
      </main>
    </div>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (pathname === "/support") {
    return <SupportPage />;
  }

  if (pathname === "/about") {
    return <AboutPage />;
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="navbar">
          <a className="brand-lockup" href="#home" aria-label="RoboMitra home">
            <div className="brand-mark">
              <Sparkles size={18} />
            </div>
            <div className="brand-copy">
              <h1>
                <ProductName />
              </h1>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="/about">About</a>
            <a href="/support">Support</a>
            <a href={meeshoUrl} target="_blank" rel="noreferrer">
              Buy Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <FadeIn className="hero-copy" delay={0.05}>
            <p className="section-tag">Interactive companion robot</p>
            <h2>
              Meet <ProductName />, the expressive mini robot made to move, react,
              and charm instantly.
            </h2>
            <p className="hero-text">
              A compact premium robot with smooth eye movements, cute animations,
              human-like emotions, and robot-to-robot interaction when two units
              come close together.
            </p>

            <div className="cta-row">
              <a
                className="primary-button"
                href={meeshoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy Now
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#details">
                View Product Details
              </a>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <FadeIn className="stat-card" delay={0.12} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="hero-visual" delay={0.16}>
            <div className="">
              <div className="product-card">
                <div className="product-image">
                  <img
                    className="hero-product-photo"
                    src={heroImage}
                    alt="RoboMitra hero product view"
                  />
                </div>
                <div className="product-meta">
                  <p className="meta-label">Featured product</p>
                  <h3>
                    <ProductName />
                  </h3>
                  <p>
                    Each RoboMitra unit is handmade with love, giving it a polished finish, compact body, and a more premium feel in hand and on display.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="highlights">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <FadeIn
              as="article"
              className="highlight-card"
              delay={0.08 * (index + 1)}
              key={title}
            >
              <div className="icon-wrap">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </FadeIn>
          ))}
        </section>

        <section className="feature-showcase" id="features">
          <FadeIn className="feature-showcase-copy" delay={0.06}>
            <p className="section-tag">Key features</p>
            <h2>Everything packed into RoboMitra to make it expressive, portable, and fun to own.</h2>
            <p>
              From smooth eye movement and emotion-inspired reactions to Type-C
              charging and portable design, RoboMitra is built to feel engaging
              the moment it is switched on.
            </p>
          </FadeIn>

          <div className="feature-grid">
            {productFeatures.map(({ icon: Icon, title, text }, index) => (
              <FadeIn
                as="article"
                className="feature-spotlight-card"
                delay={0.06 * (index + 1)}
                key={title}
              >
                <div className="icon-wrap feature-spotlight-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <FadeIn className="gallery-intro" delay={0.06}>
            <p className="section-tag">Product gallery</p>
            <h2>Show the real product, packaging, and accessories in a cleaner store-style layout.</h2>
            <p>
              Your actual RoboMitra photos are now placed across the site to show
              the robot unit, two-robot interaction, charging cable, pouch,
              manual, and full package contents in a cleaner product-page format.
            </p>
          </FadeIn>

          <div className="gallery-grid">
            {galleryShots.map((shot, index) => (
              <GalleryCard
                key={shot.title}
                title={shot.title}
                caption={shot.caption}
                image={shot.image}
                alt={shot.alt}
                delay={0.05 * (index + 1)}
              />
            ))}
          </div>
        </section>

        <section className="details-section" id="details">
          <FadeIn className="details-copy" delay={0.06}>
            <p className="section-tag">Product details</p>
            <h2>A compact robot designed to look premium, feel expressive, and fit easily into everyday spaces.</h2>
            <p>
              RoboMitra is designed for people who want a small interactive robot
              that feels more polished than a typical novelty item. It is easy to
              place on a desk or shelf, simple to recharge, and handmade with
              love to deliver a charming experience through motion and
              expression.
            </p>

            <div className="feature-list">
              {featureCards.map(({ icon: Icon, title, text }, index) => (
                <FadeIn className="feature-item" delay={0.08 * (index + 1)} key={title}>
                  <div className="feature-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="box-contents-card" delay={0.18}>
              <p className="section-tag">What's in the box</p>
              <div className="box-contents-list">
                {boxContents.map((item) => (
                  <div className="box-content-row" key={item}>
                    <span className="box-content-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </FadeIn>

          <FadeIn className="media-column" delay={0.14}>
            <FadeIn className="media-card media-large" delay={0.18}>
              <img className="media-photo" src={fullKitImage} alt="Full RoboMitra box contents" />
            </FadeIn>
            <div className="media-row">
              <FadeIn className="media-card" delay={0.22}>
                <img className="media-photo" src={dualRobotsImage} alt="Two RoboMitra units together" />
              </FadeIn>
              <FadeIn className="media-card accent-card" delay={0.28}>
                <img className="media-photo" src={pouchImage} alt="RoboMitra branded pouch" />
              </FadeIn>
            </div>
          </FadeIn>
        </section>

        <FadeIn as="section" className="cta-banner" delay={0.1}>
          <div>
            <p className="section-tag">Ready to order</p>
            <h2>Bring home RoboMitra and order directly through Meesho.</h2>
          </div>
          <a className="primary-button" href={meeshoUrl} target="_blank" rel="noreferrer">
            Buy <ProductName /> Now
            <ArrowRight size={18} />
          </a>
        </FadeIn>
      </main>
    </div>
  );
}

export default App;
