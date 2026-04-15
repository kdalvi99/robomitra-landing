import { Clock3, Mail, Wrench } from "lucide-react";
import Header from "../components/Header";
import FadeIn from "../components/FadeIn";
import { meeshoUrl, supportFaqs } from "../content";

function SupportPage({ onNavigate }) {
  return (
    <div className="page-shell support-shell">
      <Header
        ariaLabel="Support navigation"
        onNavigate={onNavigate}
        links={[
          { href: "/", label: "Home" },
          { href: "/aboutus", label: "About Us" },
          { href: meeshoUrl, label: "Buy Now", external: true },
        ]}
      />

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

export default SupportPage;
