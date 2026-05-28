import { Heart, Sparkles } from "lucide-react";
import Header from "../components/Header";
import FadeIn from "../components/FadeIn";
import { aboutPoints, instagramUrl } from "../content";

function AboutPage({ onNavigate, theme, onToggleTheme }) {
  return (
    <div className="page-shell support-shell">
      <Header
        ariaLabel="About navigation"
        onNavigate={onNavigate}
        theme={theme}
        onToggleTheme={onToggleTheme}
        links={[
          { href: "/", label: "Home" },
          { href: "/support", label: "Support" },
          { href: instagramUrl, label: "Buy Now", external: true },
        ]}
      />

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

export default AboutPage;
