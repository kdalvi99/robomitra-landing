import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Gamepad2,
  Hand,
  Package,
  Play,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Sparkles,
  Truck,
  Volume2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Header from "../components/Header";
import ModelViewerModal from "../components/ModelViewerModal";
import ProductDetailsModal from "../components/ProductDetailsModal";
import img1599 from "../assets/1599rs.jpeg";
import keychainWhite from "../assets/robomitra-keychain-white.jpeg";
import keychainBlack from "../assets/robomitra-keychain-black.jpeg";
import dualRobotsImg from "../assets/dual-robots.jpg";
import heroImg from "../assets/heroma1in.jpeg";
import mainsecondImg from "../assets/mainsecond.jpeg";

const whatsappUrl = "https://wa.me/917977473538";

const heroFeatures = [
  { icon: Hand, label: "Touch\nControl" },
  { icon: Smile, label: "Animated\nEyes" },
  { icon: Volume2, label: "Sound &\nEmotions" },
  { icon: BatteryCharging, label: "2-4 Hours\nBattery" },
];

const smartFeatures = [
  {
    icon: Hand,
    title: "Touch Interaction",
    desc: "Tap to change emotions and interact with your RoboMitra.",
  },
  {
    icon: Smile,
    title: "Cute Animated Eyes",
    desc: "Expressive digital eyes that show feelings like a real friend.",
  },
  {
    icon: Volume2,
    title: "Sound & Talking",
    desc: "Built-in buzzer for sounds, beeps and robot talking.",
  },
  {
    icon: Gamepad2,
    title: "Mini Games",
    desc: "Play fun mini games like Flappy, Dino and more on OLED.",
  },
  {
    icon: BatteryCharging,
    title: "Rechargeable Battery",
    desc: "2-4 Hours backup with Type-C fast charging support.",
  },
  {
    icon: Radio,
    title: "Robot Communication",
    desc: "Robots talk to each other using smart BLE technology.",
  },
];

const bannerBullets = [
  "ESP32 Powered",
  "OLED Display",
  "Compact & Portable",
  "Proudly Made in India",
];

const shopProducts = [
  {
    id: "r1",
    name: "RoboMitra",
    nameHighlight: "R1",
    tagline: "Smart Interactive Robot",
    price: "₹1,599",
    image: img1599,
    whatsappMsg: "I want to buy RoboMitra R1",
    tag: "Flagship",
    description: "The premium portable model with battery backup and richer reactions.",
    longDescription:
      "RoboMitra R1 is the flagship companion with internal battery backup, polished finishing, expressive animations, and a more portable feel for people who want the full experience.",
    highlights: [
      "Built-in 500mAh battery",
      "USB-C charging",
      "Advanced expression set",
      "Premium matte finish",
    ],
    specs: ["Built-in Battery", "2-4 Hours Backup", "Interactive Eyes", "USB-C Charging"],
  },
  {
    id: "keychain-white",
    name: "RoboMitra",
    nameHighlight: "Keychain White",
    tagline: "Pocket-Sized Companion Robot",
    price: "₹999",
    image: keychainWhite,
    whatsappMsg: "I want to buy RoboMitra Mini Companion White keychain",
    tag: "New Launch",
    description: "A pocket-sized white RoboMitra companion with glowing expressive eyes.",
    longDescription:
      "RoboMitra Mini Companion White brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",
    highlights: [
      "Pocket-sized keychain design",
      "Animated blue display",
      "Rechargeable build",
      "Premium white finish",
    ],
    specs: ["Keychain Form", "Animated Display", "Rechargeable", "Interactive", "Pocket-Sized"],
  },
  {
    id: "keychain-black",
    name: "RoboMitra",
    nameHighlight: "Keychain Black",
    tagline: "Pocket-Sized Companion Robot",
    price: "₹999",
    image: keychainBlack,
    whatsappMsg: "I want to buy RoboMitra Bag Keychain Black",
    tag: "New Variant",
    description: "A stealth black RoboMitra bag keychain with a cyber-style animated screen.",
    longDescription:
      "RoboMitra Bag Keychain Black is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",
    highlights: [
      "Stealth black textured body",
      "Animated blue screen",
      "Portable keyring form",
      "Rechargeable everyday carry",
    ],
    specs: ["Keychain Form", "Animated Display", "Rechargeable", "Portable", "Black Finish"],
  },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Proudly Made in India",
    desc: "Designed and built with pride",
  },
  {
    icon: Zap,
    title: "Secure Payments",
    desc: "100% safe and secure checkout",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick delivery across India",
  },
  {
    icon: Package,
    title: "1 Year Warranty",
    desc: "We've got you covered",
  },
];

const trustStrip = [
  { icon: Sparkles, title: "Premium Quality", desc: "Components" },
  { icon: Hand, title: "Easy to Use", desc: "For Everyone" },
  { icon: Volume2, title: "Great Support", desc: "We are here for you" },
  { icon: Zap, title: "Innovative", desc: "& Fun" },
];

function HomePage({ onNavigate, onAddToCart, cartCount, onCartClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [is3dOpen, setIs3dOpen] = useState(false);

  return (
    <div className="page-shell">
      <ProductDetailsModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        instagramUrl={whatsappUrl}
        theme="light"
        onAddToCart={onAddToCart}
      />

      <ModelViewerModal
        open={is3dOpen}
        title="RoboMitra 3D Model"
        src="/models/lets-goo.stl"
        onClose={() => setIs3dOpen(false)}
      />

      <Header
        ariaLabel="Primary"
        onNavigate={onNavigate}
        theme="light"
        onToggleTheme={() => {}}
        isHome
        links={[]}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />

      <main>
        {/* ── HERO ── */}
        <section className="rm-hero" id="home" style={{ padding: "32px 0 16px 0", background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <FadeIn delay={0.05}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
                <img
                  src={heroImg}
                  alt="Meet RoboMitra R1 - Smart. Cute. Interactive."
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── WHY CHOOSE ROBOMITRA ── */}
        <section className="rm-features-section" id="features">
          <div className="rm-features-inner">
            <FadeIn delay={0.04}>
              <p className="rm-section-label">Why Choose RoboMitra?</p>
              <h2 className="rm-section-heading">Packed with Smart Features</h2>
              <div className="rm-section-divider" />
            </FadeIn>

            <div className="rm-features-grid">
              {smartFeatures.map(({ icon: Icon, title, desc }, i) => (
                <FadeIn as="article" className="rm-feat-card" delay={0.06 * (i + 1)} key={title}>
                  <div className="rm-feat-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── DARK PRODUCT BANNER ── */}
        <section className="rm-product-banner" style={{ background: '#000', padding: 0 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
            <FadeIn delay={0.08}>
              <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                <img
                  src={mainsecondImg}
                  alt="RoboMitra R1 Product Specifications"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <button
                  className="rm-banner-overlay-btn"
                  type="button"
                  onClick={() => onAddToCart(shopProducts[0])}
                  title="Add to Cart - RoboMitra R1"
                  aria-label="Add RoboMitra R1 to Cart"
                  style={{ border: 'none', cursor: 'pointer' }}
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── EXPLORE ROBOTS ── */}
        <section className="rm-explore-section" id="products">
          <div className="rm-explore-inner">
            <FadeIn delay={0.04}>
              <h2 className="rm-explore-heading">Explore Our Robots</h2>
              <div className="rm-explore-divider" />
            </FadeIn>

            <div className="rm-explore-layout">
              {/* Product Cards */}
              <div className="rm-products-row">
                {shopProducts.map((product, i) => (
                  <FadeIn
                    as="article"
                    className="rm-product-card"
                    delay={0.08 * (i + 1)}
                    key={product.nameHighlight}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="rm-product-img-wrap">
                      <img src={product.image} alt={`${product.name} ${product.nameHighlight}`} />
                    </div>
                    <div className="rm-product-info">
                      <p className="rm-product-name">
                        {product.name} <span>{product.nameHighlight}</span>
                      </p>
                      <p className="rm-product-tagline">{product.tagline}</p>
                      <p className="rm-product-price">{product.price}</p>
                      <button
                        className="rm-product-buy-btn"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Trust Badges Column */}
              <FadeIn className="rm-trust-col" delay={0.12}>
                {trustBadges.map(({ icon: Icon, title, desc }) => (
                  <div className="rm-trust-item" key={title}>
                    <div className="rm-trust-icon">
                      <Icon size={20} />
                    </div>
                    <div className="rm-trust-text">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── BLUE TRUST STRIP ── */}
        <section className="rm-trust-strip" aria-label="RoboMitra promises">
          <div className="rm-trust-strip-inner">
            {trustStrip.map(({ icon: Icon, title, desc }) => (
              <div className="rm-strip-item" key={title}>
                <div className="rm-strip-icon">
                  <Icon size={20} />
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
