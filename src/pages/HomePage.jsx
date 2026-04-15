import { ArrowRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import GalleryCard from "../components/GalleryCard";
import Header from "../components/Header";
import ProductName from "../components/ProductName";
import {
  boxContents,
  featureCards,
  galleryShots,
  highlights,
  meeshoUrl,
  productFeatures,
  productImages,
  stats,
} from "../content";

function HomePage({ onNavigate }) {
  const { dualRobotsImage, fullKitImage, heroImage, pouchImage } = productImages;

  return (
    <div className="page-shell">
      <Header
        ariaLabel="Primary"
        onNavigate={onNavigate}
        isHome
        links={[
          { href: "#features", label: "Features" },
          { href: "/aboutus", label: "About Us" },
          { href: "/support", label: "Support" },
          { href: meeshoUrl, label: "Buy Now", external: true },
        ]}
      />

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
              <a
                className="secondary-button"
                href="#details"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("#details");
                }}
              >
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
            <div>
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
                    Each RoboMitra unit is handmade with love, giving it a polished
                    finish, compact body, and a more premium feel in hand and on
                    display.
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

export default HomePage;
