import { useEffect, useState } from "react";
import { ArrowLeft, BatteryCharging, Camera, Gamepad2, Hand, ShoppingBag, Smile, Sparkles, Star, Truck, Volume2, Zap } from "lucide-react";
import nimbuBanner1 from "../assets/nimbu-banner-1.jpeg";
import nimbuBanner2 from "../assets/nimbu-banner-2.jpeg";
import nimbuBanner3 from "../assets/nimbu-banner-3.jpeg";
import nimbuProduct from "../assets/nimbu-product.jpeg";

const whatsappUrl = "https://wa.me/917977473538";

const nimbuFeatures = [
  { icon: Gamepad2, label: "6+ Built-in Games" },
  { icon: Hand, label: "Touch Reactions" },
  { icon: Smile, label: "Animated Expressions" },
  { icon: Camera, label: "Video Streaming" },
  { icon: BatteryCharging, label: "Rechargeable Battery" },
  { icon: Zap, label: "Pocket-Sized & Portable" },
];

const nimbuProducts = [
  {
    id: "nimbu-bot-main",
    name: "Nimbu Bot",
    nameHighlight: "Keychain",
    tagline: "Tiny Companion. Big Possibilities.",
    price: "₹899",
    originalPrice: "₹1,799",
    whatsappMsg: "Hi! I want to buy Nimbu Bot Keychain",
    tag: "Best Seller",
    emoji: "🍋",
    highlights: [
      "6+ Built-in Games",
      "Touch Reactions",
      "Animated Expressions",
      "Video & Photo Streaming",
      "Rechargeable Battery",
      "Pocket-Sized Design",
    ],
    description:
      "Your pocket-sized smart buddy! Always ready to play — touch it, react with it, and game on the go. Interactive, fun, portable & cool.",
  },
  {
    id: "nimbu-bot-gift",
    name: "Nimbu Bot",
    nameHighlight: "Gift Box",
    tagline: "Perfect Gift for Every Occasion 🎁",
    price: "₹949",
    originalPrice: "₹1,899",
    whatsappMsg: "Hi! I want to buy Nimbu Bot Gift Box",
    tag: "Gift Special",
    emoji: "🎁",
    highlights: [
      "Premium Gift Packaging",
      "All Keychain Features Included",
      "6+ Built-in Games",
      "Touch Reactions",
      "Rechargeable Battery",
      "Perfect for Birthdays & Festivals",
    ],
    description:
      "Give the gift of fun! Nimbu Bot Gift Box comes in premium packaging — perfect for birthdays, Diwali, and any special occasion.",
  },
];

const banners = [
  { src: nimbuBanner1, alt: "Nimbu Bot Fresh Smart Full of Zest banner 1" },
  { src: nimbuBanner2, alt: "Nimbu Bot Fresh Smart Full of Zest banner 2" },
  { src: nimbuBanner3, alt: "Nimbu Bot Fresh Smart Full of Zest banner 3" },
];

const trustItems = [
  { icon: Truck, text: "Proudly Made in India" },
  { icon: Zap, text: "Type-C Fast Charging" },
  { icon: Star, text: "Fast Delivery" },
  { icon: Volume2, text: "Compact & Portable" },
];

export default function NimbuBotPage({ onNavigate, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nimbu-page-shell">
      <header className="nimbu-header">
        <div className="nimbu-header-inner">
          <button
            type="button"
            className="nimbu-back-btn"
            onClick={() => onNavigate("/")}
            aria-label="Go back to RoboMitra"
          >
            <ArrowLeft size={18} />
            <span>RoboMitra</span>
          </button>
          <div className="nimbu-header-brand">
            <span className="nimbu-header-lemon">🍋</span>
            <span className="nimbu-header-title">NIMBU BOT</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nimbu-header-cta">
            <ShoppingBag size={16} />
            Order Now
          </a>
        </div>
      </header>

      <main>
        <section className="nimbu-hero-section" aria-label="Nimbu Bot hero banners">
          <div className="nimbu-slider-shell">
            <div className="nimbu-slider-track" style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}>
              {banners.map((banner, i) => (
                <a
                  key={banner.alt}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`nimbu-slider-slide ${i === currentSlide ? "is-active" : ""}`}
                  aria-label={`Nimbu Bot banner ${i + 1}`}
                >
                  <img src={banner.src} alt={banner.alt} className="nimbu-slider-img" />
                </a>
              ))}
            </div>

            <div className="nimbu-slider-dots">
              {banners.map((banner, i) => (
                <button
                  key={banner.alt}
                  type="button"
                  className={`nimbu-dot ${i === currentSlide ? "is-active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="nimbu-arrow nimbu-arrow-left"
              aria-label="Previous banner"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
            >
              ←
            </button>
            <button
              type="button"
              className="nimbu-arrow nimbu-arrow-right"
              aria-label="Next banner"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
            >
              →
            </button>
          </div>
        </section>

        <div className="nimbu-tagline-strip">
          <span>🍋 Fresh</span>
          <span className="nimbu-strip-dot" />
          <span>⚡ Smart</span>
          <span className="nimbu-strip-dot" />
          <span>🌿 Full of Zest</span>
          <span className="nimbu-strip-dot" />
          <span>🇮🇳 Made in India</span>
          <span className="nimbu-strip-dot" />
          <span>💛 Starting ₹899 Only!</span>
        </div>

        <section className="nimbu-features-section">
          <div className="nimbu-features-inner">
            <p className="nimbu-section-label">Why Nimbu Bot?</p>
            <h2 className="nimbu-section-heading">Your Zesty Little Companion 🍋</h2>
            <div className="nimbu-features-grid">
              {nimbuFeatures.map(({ icon: Icon, label }) => (
                <div className="nimbu-feat-card" key={label}>
                  <div className="nimbu-feat-icon">
                    <Icon size={22} />
                  </div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="nimbu-products-section" id="nimbu-products">
          <div className="nimbu-products-inner">
            <p className="nimbu-section-label">Shop Nimbu Bot</p>
            <h2 className="nimbu-section-heading">Starting ₹899 🎉</h2>
            <p className="nimbu-products-sub">Cheaper than Alex — your zesty little smart buddy awaits!</p>

            <div className="nimbu-products-grid">
              {nimbuProducts.map((product) => (
                <article key={product.id} className="nimbu-product-card">
                  <div className="nimbu-product-img-wrap">
                    <img src={nimbuProduct} alt={`${product.name} ${product.nameHighlight}`} />
                    <span className="nimbu-product-tag">{product.tag}</span>
                    <div className="nimbu-product-emoji">{product.emoji}</div>
                  </div>

                  <div className="nimbu-product-info">
                    <h3 className="nimbu-product-name">
                      {product.name} <span>{product.nameHighlight}</span>
                    </h3>
                    <p className="nimbu-product-tagline">{product.tagline}</p>
                    <p className="nimbu-product-desc">{product.description}</p>

                    <div className="nimbu-product-price-row">
                      <s className="nimbu-product-orig">{product.originalPrice}</s>
                      <span className="nimbu-product-price">{product.price}</span>
                      <span className="nimbu-product-discount">50% OFF</span>
                    </div>

                    <ul className="nimbu-highlights-list">
                      {product.highlights.map((h) => (
                        <li key={h}>
                          <span className="nimbu-check">✓</span> {h}
                        </li>
                      ))}
                    </ul>

                    <div className="nimbu-product-actions">
                      <button
                        type="button"
                        className="nimbu-buy-btn"
                        onClick={() =>
                          onAddToCart({
                            ...product,
                            image: nimbuProduct,
                            tag: product.tag,
                            description: product.description,
                            longDescription: product.description,
                            specs: ["Gift Edition", "Compact", "Premium Look", "Best for Gifting"],
                          })
                        }
                      >
                        Add to Cart
                      </button>
                      <a
                        href={`${whatsappUrl}?text=${encodeURIComponent(product.whatsappMsg)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="nimbu-wa-btn"
                      >
                        WhatsApp
                      </a>
                    </div>

                    <p className="nimbu-single-note">📦 Made for Makers · Built for Fun · RoboMitra</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nimbu-trust-strip">
          <div className="nimbu-trust-inner">
            {trustItems.map(({ icon: Icon, text }) => (
              <div className="nimbu-trust-item" key={text}>
                <Icon size={18} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="nimbu-cta-section">
          <div className="nimbu-cta-inner">
            <div className="nimbu-cta-lemon">🍋</div>
            <h2>Fresh Deal Alert!</h2>
            <p>Get your Nimbu Bot starting at just <strong>₹899</strong> — Limited stock!</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nimbu-cta-btn">
              Order on WhatsApp 📲
            </a>
            <p className="nimbu-cta-note">Tap to chat directly with us on WhatsApp</p>
          </div>
        </section>
      </main>

      <footer className="nimbu-footer">
        <p>🍋 Nimbu Bot — A RoboMitra Product</p>
        <button type="button" className="nimbu-footer-back" onClick={() => onNavigate("/")}>
          ← Back to RoboMitra
        </button>
      </footer>
    </div>
  );
}
