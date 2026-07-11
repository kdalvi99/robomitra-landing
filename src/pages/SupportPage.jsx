import { Clock3, Mail, Wrench } from "lucide-react";
import Header from "../components/Header";
import FadeIn from "../components/FadeIn";
import { supportFaqs } from "../content";

function SupportPage({ onNavigate, cartCount, onCartClick }) {
  return (
    <div className="page-shell support-shell">
      <Header
        ariaLabel="Support navigation"
        onNavigate={onNavigate}
        theme="light"
        onToggleTheme={() => {}}
        links={[]}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />

      <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
        <FadeIn className="support-hero" delay={0.04}>
          <p className="section-tag" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 8 }}>Support and FAQ</p>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 12 }}>Help &amp; Frequently Asked Questions</h1>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 560 }}>
            If you are facing charging, connection, touch, display, or power issues,
            this page covers the most common fixes.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} style={{ marginTop: 36 }}>
          <div style={{ background: "var(--blue-light)", border: "1px solid #c7d7fd", borderRadius: 16, padding: "24px", display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 40 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
              <Mail size={20} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Contact Support</p>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Need direct help?</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <a href="mailto:robomitra@zohomail.in" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.88rem", color: "var(--blue)", fontWeight: 600 }}>
                  <Mail size={14} /> robomitra@zohomail.in
                </a>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  <Clock3 size={14} /> Response: 24–48 hours
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <section>
          <FadeIn delay={0.1}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: 24 }}>Quick Fixes</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
            {supportFaqs.map(({ icon: Icon, title, points }, index) => (
              <FadeIn
                as="article"
                delay={0.05 * (index + 1)}
                key={title}
                style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 22, background: "#fff", transition: "all 200ms" }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", marginBottom: 12 }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
                <ul style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                  {points.map((point) => (
                    <li key={point} style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{point}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn delay={0.12} style={{ marginTop: 40 }}>
          <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
              <Wrench size={20} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Need More Help?</p>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Email us with your issue, photos or videos. We will help you ASAP.</h3>
              <a href="mailto:robomitra@zohomail.in" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "var(--blue)", color: "#fff", borderRadius: 8, fontSize: "0.88rem", fontWeight: 700, textDecoration: "none" }}>
                <Mail size={15} /> robomitra@zohomail.in
              </a>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

export default SupportPage;
