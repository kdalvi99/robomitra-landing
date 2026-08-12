import { useEffect, useState } from "react";
import { ArrowLeft, Box, Shield, Heart, Truck, Sparkles, Star, Zap, ShoppingBag } from "lucide-react";
import ProductDetailsModal from "../components/ProductDetailsModal";
import printBanner1 from "../assets/print-banner-1.jpg";
import printBanner2 from "../assets/print-banner-2.jpg";
import printBanner3 from "../assets/print-banner-3.jpg";
import printProductCrystal from "../assets/print-product-crystal.jpg";
import printProductPixel from "../assets/print-product-pixel.jpg";
import printProductSkeleton from "../assets/print-product-skeleton.jpg";
import printProductLantern from "../assets/print-product-lantern.jpg";
import printProductFigurine from "../assets/print-product-figurine.jpg";

const whatsappUrl = "https://wa.me/917977473538";

const printFeatures = [
  { icon: Sparkles, label: "Premium Finish" },
  { icon: Box, label: "Custom Designs" },
  { icon: Shield, label: "Durable Materials" },
  { icon: Heart, label: "Perfect for Gifting" },
  { icon: Zap, label: "Lightweight & Tough" },
  { icon: Truck, label: "Fast Indian Delivery" },
];

const printProducts = [
  {
    id: "print-skeleton-keychain",
    name: "Skeleton",
    nameHighlight: "Keychain",
    tagline: "Moveable Joints. Endless Fun. 💀",
    price: "₹349",
    originalPrice: "₹699",
    whatsappMsg: "Hi! I want to buy 3D Printed Skeleton Keychain",
    tag: "Best Seller",
    emoji: "💀",
    image: printProductSkeleton,
    highlights: [
      "Articulating joints for poseable fun",
      "Durable, lightweight design",
      "Unique skull-and-bones detail",
      "Includes standard metal keyring",
      "Perfect backpack or key accessory"
    ],
    description: "A fun and pocket-sized articulating skeleton toy. The joints are fully poseable, making it a super cool accessory for keys, backpacks, or desk decoration."
  },
  {
    id: "print-pixel-keychains",
    name: "Pixel Tool",
    nameHighlight: "Keychains",
    tagline: "Retro 8-Bit Gaming Vibes ⚔️",
    price: "₹349",
    originalPrice: "₹699",
    whatsappMsg: "Hi! I want to buy 3D Printed Pixel Tool Keychains",
    tag: "Gaming Special",
    emoji: "⚔️",
    image: printProductPixel,
    highlights: [
      "Inspired by classic 8-bit games",
      "Set of vibrant retro designs",
      "High-density plastic construction",
      "Fitted with secure metal keyrings",
      "Awesome gift for retro gaming fans"
    ],
    description: "Take the pixelated world with you! These custom-colored retro pixel swords and tools add a vibrant 8-bit touch to your keys and gaming setups."
  },
  {
    id: "print-controller-stand",
    name: "Crystal Controller",
    nameHighlight: "Stand",
    tagline: "Level Up Your Gaming Setup. 🎮",
    price: "₹600",
    originalPrice: "₹1,199",
    whatsappMsg: "Hi! I want to buy 3D Printed Crystal Controller Stand",
    tag: "Hot Release",
    emoji: "🎮",
    image: printProductCrystal,
    highlights: [
      "Unique geometric crystal formation design",
      "Holds gaming controllers securely",
      "Sturdy, non-slip desk base",
      "Perfect for PS, Xbox & all controllers",
      "Available in vibrant ruby red and neon blue"
    ],
    description: "A stunning, heavy-duty 3D printed controller stand styled like a cluster of growing crystals. Keeps your gaming controller organized and displayed like a piece of art on your desk."
  },
  {
    id: "print-custom-figurine",
    name: "Divine Meditative",
    nameHighlight: "Figurine",
    tagline: "Intricate Details & Premium Finish 🕉️",
    price: "₹699",
    originalPrice: "₹1,399",
    whatsappMsg: "Hi! I want to buy 3D Printed Divine Meditative Figurine",
    tag: "Premium Decor",
    emoji: "🕉️",
    image: printProductFigurine,
    highlights: [
      "Beautifully detailed Lord Shiva sculpt",
      "Premium dual-tone finish options",
      "Sturdy tabletop display base",
      "Excellent for study desks or car dashboards",
      "Perfect gift for positive energy"
    ],
    description: "A gorgeous, high-detail meditative figurine of Lord Shiva. Features smooth layer lines, premium colors, and stands out as a unique piece of desk decor or devotional display."
  },
  {
    id: "print-glow-lantern",
    name: "Geometric Glow",
    nameHighlight: "Lantern",
    tagline: "Warm Ambiance & Modern Geometry 🏮",
    price: "₹499",
    originalPrice: "₹999",
    whatsappMsg: "Hi! I want to buy 3D Printed Geometric Glow Lantern",
    tag: "Trending Now",
    emoji: "🏮",
    image: printProductLantern,
    highlights: [
      "Intricate geometric hollow pattern",
      "Built-in warm LED light source",
      "Fascinating shadow pattern projection",
      "Energy efficient & battery powered",
      "Cozy addition to bedroom or living space"
    ],
    description: "A modern cubic lantern designed with an intricate geometric pattern. Emits a warm, comforting glow and projects fascinating, beautiful patterns onto surrounding surfaces."
  }
];

const banners = [
  { src: printBanner1, alt: "PrintMitra - Bring Your Ideas to Life Banner 1" },
  { src: printBanner2, alt: "PrintMitra - Custom 3D Printed Toys & Gifts Banner 2" },
  { src: printBanner3, alt: "PrintMitra - Affordable 3D Prints Banner 3" },
];

const trustItems = [
  { icon: Truck, text: "Fast Delivery Across India" },
  { icon: Shield, text: "High-Quality PLA Filament" },
  { icon: Star, text: "Premium Surface Quality" },
  { icon: Box, text: "Secure Tech Packaging" },
];

export default function PrintBotPage({ onNavigate, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="print-page-shell">
      <header className="print-header">
        <div className="print-header-inner">
          <button
            type="button"
            className="print-back-btn"
            onClick={() => onNavigate("/")}
            aria-label="Go back to RoboMitra"
          >
            <ArrowLeft size={18} />
            <span>RoboMitra</span>
          </button>
          <div className="print-header-brand">
            <span className="print-header-icon">💙</span>
            <span className="print-header-title">PRINT BOT</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="print-header-cta">
            <ShoppingBag size={16} />
            Order Custom
          </a>
        </div>
      </header>

      <main>
        <section className="print-hero-section" aria-label="Print Bot hero banners">
          <div className="print-slider-shell">
            <div className="print-slider-track" style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}>
              {banners.map((banner, i) => (
                <a
                  key={banner.alt}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`print-slider-slide ${i === currentSlide ? "is-active" : ""}`}
                  aria-label={`Print Bot banner ${i + 1}`}
                >
                  <img src={banner.src} alt={banner.alt} className="print-slider-img" />
                </a>
              ))}
            </div>

            <div className="print-slider-dots">
              {banners.map((banner, i) => (
                <button
                  key={banner.alt}
                  type="button"
                  className={`print-dot ${i === currentSlide ? "is-active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="print-arrow print-arrow-left"
              aria-label="Previous banner"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
            >
              ←
            </button>
            <button
              type="button"
              className="print-arrow print-arrow-right"
              aria-label="Next banner"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
            >
              →
            </button>
          </div>
        </section>

        <div className="print-tagline-strip">
          <span>💎 Premium Finish</span>
          <span className="print-strip-dot" />
          <span>🛠️ Custom Made</span>
          <span className="print-strip-dot" />
          <span>💪 Durable & Tough</span>
          <span className="print-strip-dot" />
          <span>🎁 Perfect for Gifting</span>
          <span className="print-strip-dot" />
          <span>🇮🇳 Made in India</span>
          <span className="print-strip-dot" />
          <span>🔥 Starting ₹349 Only!</span>
        </div>

        <section className="print-features-section">
          <div className="print-features-inner">
            <p className="print-section-label">Why PrintMitra?</p>
            <h2 className="print-section-heading">Bring Your Ideas to Life in 3D ⚡</h2>
            <div className="print-features-grid">
              {printFeatures.map(({ icon: Icon, label }) => (
                <div className="print-feat-card" key={label}>
                  <div className="print-feat-icon">
                    <Icon size={22} />
                  </div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="print-products-section" id="print-products">
          <div className="print-products-inner">
            <p className="print-section-label">Shop 3D Prints</p>
            <h2 className="print-section-heading">Starting ₹349 🎉</h2>
            <p className="print-products-sub">Custom designed, premium finished, and delivered straight to your door!</p>

            <div className="print-products-grid">
              {printProducts.map((product) => (
                <article
                  key={product.id}
                  className="print-product-card"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedProduct({
                      ...product,
                      image: product.image,
                      specs: ["3D Printed", "Customizable Colors", "Premium Quality PLA", "Made in India"],
                    })
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedProduct({
                        ...product,
                        image: product.image,
                        specs: ["3D Printed", "Customizable Colors", "Premium Quality PLA", "Made in India"],
                      });
                    }
                  }}
                >
                  <div className="print-product-img-wrap">
                    <img src={product.image} alt={`${product.name} ${product.nameHighlight}`} />
                    <span className="print-product-tag">{product.tag}</span>
                    <div className="print-product-emoji">{product.emoji}</div>
                  </div>

                  <div className="print-product-info">
                    <h3 className="print-product-name">
                      {product.name} <span>{product.nameHighlight}</span>
                    </h3>
                    <p className="print-product-tagline">Tap to view details</p>

                    <div className="print-product-price-row">
                      <s className="print-product-orig">{product.originalPrice}</s>
                      <span className="print-product-price">{product.price}</span>
                      <span className="print-product-discount">50% OFF</span>
                    </div>

                    <div className="print-product-actions">
                      <button
                        type="button"
                        className="print-buy-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          onAddToCart({
                            ...product,
                            image: product.image,
                            specs: ["3D Printed", "Customizable Colors", "Premium Quality PLA", "Made in India"],
                          });
                        }}
                      >
                        Add to Cart
                      </button>
                      <a
                        href={`${whatsappUrl}?text=${encodeURIComponent(product.whatsappMsg)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="print-wa-btn"
                        onClick={(event) => event.stopPropagation()}
                      >
                        WhatsApp
                      </a>
                    </div>

                    <p className="print-single-note">Tap anywhere to open details</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProductDetailsModal
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          instagramUrl={whatsappUrl}
          theme="dark"
          onAddToCart={onAddToCart}
        />

        <section className="print-trust-strip">
          <div className="print-trust-inner">
            {trustItems.map(({ icon: Icon, text }) => (
              <div className="print-trust-item" key={text}>
                <Icon size={18} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="print-cta-section">
          <div className="print-cta-inner">
            <div className="print-cta-icon">💡</div>
            <h2>Got a Custom Idea?</h2>
            <p>We print custom designs! Send us your STL files or description on WhatsApp for a custom quote.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="print-cta-btn">
              Chat on WhatsApp 📲
            </a>
            <p className="print-cta-note">Send us your 3D models directly on WhatsApp</p>
          </div>
        </section>
      </main>

      <footer className="print-footer">
        <p>💙 Print Bot — A PrintMitra & RoboMitra Collaboration</p>
        <button type="button" className="print-footer-back" onClick={() => onNavigate("/")}>
          ← Back to RoboMitra
        </button>
      </footer>
    </div>
  );
}
