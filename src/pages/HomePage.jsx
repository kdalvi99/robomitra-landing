import {
  ArrowRight,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import GalleryCard from "../components/GalleryCard";
import Header from "../components/Header";
import heroReferenceDarkShot from "../../bec4568b-9ea5-4b72-844e-27d7d9d113f7.png";
import heroReferenceLightShot from "../../ChatGPT Image May 28, 2026, 01_25_30 PM.png";
import {
  boxContents,
  featureCards,
  galleryShots,
  highlights,
  instagramUrl,
  productFeatures,
  productImages,
} from "../content";

function HomePage({ onNavigate, theme, onToggleTheme }) {
  const { dualRobotsImage, fullKitImage, pouchImage } = productImages;
  const heroReferenceShot =
    theme === "light" ? heroReferenceLightShot : heroReferenceDarkShot;

  return (
    <div className="page-shell">
      <Header
        ariaLabel="Primary"
        onNavigate={onNavigate}
        theme={theme}
        onToggleTheme={onToggleTheme}
        isHome
        promoText="Launch Offer: Free Shipping on all orders!"
        tagline="Your Smart Desk Buddy"
        links={[
          { href: "#home", label: "Home" },
          { href: "#features", label: "Features" },
          { href: "#gallery", label: "Gallery" },
          { href: "/support", label: "FAQ" },
          { href: instagramUrl, label: "Buy Now", external: true },
        ]}
      />

      <main>
        <section className="hero hero-reference" id="home">
          <FadeIn className="hero-shot-wrap" delay={0.05}>
            <img
              className="hero-shot-exact"
              src={heroReferenceShot}
              alt="RoboMitra landing design reference"
            />
            <a
              className="hero-hotspot hero-hotspot-order"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Buy RoboMitra now on Instagram"
            />
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
            <h2>See the real RoboMitra, packaging, and accessories in a cleaner store-style layout.</h2>
            <p>
              Your actual RoboMitra photos are now placed across the site to show
              the robot unit, two-robot interaction, charging cable, pouch,
              manual, and full package contents.
            </p>
          </FadeIn>

          <div className="gallery-grid">
            {galleryShots.map((shot, index) => (
              <GalleryCard
                key={shot.title}
                title={shot.title}
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
            <p className="section-tag">Order on Instagram</p>
            <h2>To order RoboMitra, DM us on Instagram at @RoboMitra.tech.</h2>
          </div>
          <a className="primary-button" href={instagramUrl} target="_blank" rel="noreferrer">
            Buy Now
            <ArrowRight size={18} />
          </a>
        </FadeIn>
      </main>
    </div>
  );
}

export default HomePage;
