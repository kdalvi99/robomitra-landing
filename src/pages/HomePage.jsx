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
  Tag,
  Truck,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import Header from "../components/Header";
import ModelViewerModal from "../components/ModelViewerModal";
import ProductDetailsModal from "../components/ProductDetailsModal";
import AddReviewForm from "../components/AddReviewForm";
import { createReview, fetchReviews } from "../lib/firebase";
import img1599 from "../assets/1599rs.jpeg";
import helloProductImg from "../assets/hello.jpeg";
import keychainWhite from "../assets/robomitra-keychain-white.jpeg";
import keychainBlack from "../assets/robomitra-keychain-black.jpeg";
import dualRobotsImg from "../assets/dual-robots.jpg";
import mainsecondImg from "../assets/mainsecond.jpeg";
import mouseProductImg from "../assets/mouse.jpeg";
import nimbuProductImg from "../assets/nimbu-product.jpeg";
import printProductSkeleton from "../assets/print-product-skeleton.jpg";
import heroSlideOne from "../assets/50-off-1.jpg";
import heroSlideTwo from "../assets/50-off-2.jpg";
import heroSlideThree from "../assets/50-off-4.jpg";
import heroSlideOneMobile from "../assets/50-off-1for phone.jpeg";
import heroSlideTwoMobile from "../assets/50-off-2for phone.jpeg";
import heroSlideThreeMobile from "../assets/50-off-3for phone.jpeg";
import robotVideo360 from "../assets/360ROBOTVIEW.mp4";
import robotVideo360_2 from "../assets/360ROBOTVIEW2.mp4";

const whatsappUrl = "https://wa.me/917977473538";

const initialReviews = [];

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
    id: "mouse-2699",
    name: "PRISM X",
    nameHighlight: "Mouse",
    tagline: "Ultra Slim Wireless Mouse",
    price: "₹2,699",
    originalPrice: "₹5,398",
    image: mouseProductImg,
    whatsappMsg: "I want to buy PRISM X Mouse",
    tag: "New Product",
    description: "A premium ultra-slim wireless mouse with a futuristic folded design.",
    longDescription:
      "PRISM X is a sleek ultra-slim wireless mouse built for a modern desk setup. It features a folded, pocketable body, 2.4GHz wireless connectivity, and a premium matte finish.",
    highlights: [
      "Ultra slim folded design",
      "2.4GHz wireless connection",
      "Portable desk-friendly form",
      "Premium matte finish",
    ],
    specs: ["Wireless", "Ultra Slim", "Portable", "Premium Finish"],
  },
  {
    id: "nimbu-bot-gift",
    name: "Nimbu",
    nameHighlight: "Bot Gift",
    tagline: "Cute Gift Edition",
    price: "₹949",
    originalPrice: "₹1,898",
    image: nimbuProductImg,
    whatsappMsg: "I want to buy Nimbu Bot Gift",
    tag: "Gift Pick",
    description: "A fun gift-ready RoboMitra special edition for a sweet surprise.",
    longDescription:
      "Nimbu Bot Gift is a playful special-edition RoboMitra gift product designed for gifting and desk display. It brings a cute presentation with a premium look and a compact footprint.",
    highlights: [
      "Gift-ready special edition",
      "Cute premium presentation",
      "Compact desk display",
      "Great for surprise gifting",
    ],
    specs: ["Gift Edition", "Compact", "Premium Look", "Best for Gifting"],
  },
  {
    id: "hello-1699",
    name: "RoboMitra",
    nameHighlight: "Hello",
    tagline: "New Interactive Robot",
    price: "₹3,399",
    originalPrice: "₹6,798",
    image: helloProductImg,
    whatsappMsg: "I want to buy RoboMitra Hello",
    tag: "New Product",
    description: "A fresh RoboMitra variant with a premium look and playful robot personality.",
    longDescription:
      "RoboMitra Hello is a new companion robot variant with a clean premium look, expressive screen, and a fun personality built for gifting and everyday desk use.",
    highlights: [
      "Premium new design",
      "Expressive animated screen",
      "Pocket-friendly form",
      "Great for gifting",
    ],
    specs: ["Interactive", "Animated Eyes", "Compact", "Premium Finish"],
  },
  {
    id: "r1",
    name: "RoboMitra",
    nameHighlight: "R1",
    tagline: "Smart Interactive Robot",
    price: "₹3,199",
    originalPrice: "₹6,798",
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
    nameHighlight: "Alex",
    tagline: "Pocket-Sized Companion Robot (White)",
    price: "₹1,999",
    originalPrice: "₹3,998",
    image: keychainWhite,
    whatsappMsg: "I want to buy RoboMitra Alex",
    tag: "New Launch",
    description: "A pocket-sized white RoboMitra companion (Alex) with glowing expressive eyes.",
    longDescription:
      "RoboMitra Alex brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",
    highlights: [
      "Pocket-sized keychain design (Alex)",
      "Animated blue display",
      "Rechargeable build",
      "Premium white finish",
    ],
    specs: ["Keychain Form", "Animated Display", "Rechargeable", "Interactive", "Pocket-Sized"],
  },
  {
    id: "keychain-black",
    name: "RoboMitra",
    nameHighlight: "Andy",
    tagline: "Pocket-Sized Companion Robot (Black)",
    price: "₹1,999",
    originalPrice: "₹3,998",
    image: keychainBlack,
    whatsappMsg: "I want to buy RoboMitra Andy",
    tag: "New Variant",
    description: "A stealth black RoboMitra bag keychain (Andy) with a cyber-style animated screen.",
    longDescription:
      "RoboMitra Andy is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",
    highlights: [
      "Stealth black textured body (Andy)",
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
    title: "24/7 Support",
    desc: "We're always here to help",
  },
];

const trustStrip = [
  { icon: Sparkles, title: "Premium Quality", desc: "Components" },
  { icon: Hand, title: "Easy to Use", desc: "For Everyone" },
  { icon: Volume2, title: "Great Support", desc: "We are here for you" },
  { icon: Zap, title: "Innovative", desc: "& Fun" },
];

function formatReviewDate(createdAt) {
  if (createdAt?.toDate) return createdAt.toDate().toLocaleDateString();
  if (typeof createdAt === "number") return new Date(createdAt).toLocaleDateString();
  if (typeof createdAt === "string") {
    const parsed = new Date(createdAt);
    if (!Number.isNaN(parsed.getTime())) return parsed.toLocaleDateString();
  }
  return "New";
}

function HomePage({ onNavigate, onAddToCart, cartCount, onCartClick, searchQuery = "", onSearchChange, user, onLoginClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [is3dOpen, setIs3dOpen] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const popupTimerRef = useRef(null);

  const heroSlides = [
    {
      image: heroSlideOne,
      mobileImage: heroSlideOneMobile,
      alt: "RoboMitra 50 percent off banner 1",
      badge: "Special Offer",
    },
    {
      image: heroSlideTwo,
      mobileImage: heroSlideTwoMobile,
      alt: "RoboMitra 50 percent off banner 2",
      badge: "Limited Time",
    },
    {
      image: heroSlideThree,
      mobileImage: heroSlideThreeMobile,
      alt: "RoboMitra 50 percent off banner 3",
      badge: "Best Deal",
    },
  ];

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      setReviewsLoading(true);
      try {
        const remoteReviews = await fetchReviews();
        if (!cancelled && remoteReviews.length > 0) {
          setReviews(
            remoteReviews.map((review) => ({
              id: review.id,
              name: review.name || "Anonymous",
              rating: Number(review.rating) || 5,
              comment: review.comment || "",
              date: formatReviewDate(review.createdAt),
              avatar:
                review.avatar ||
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(review.name || "Anonymous")}`,
            }))
          );
        }
      } catch {
      } finally {
        if (!cancelled) setReviewsLoading(false);
      }
    }

    loadReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show 50% off popup after a short delay on desktop only
  useEffect(() => {
    if (isMobile) return undefined;

    popupTimerRef.current = window.setTimeout(() => {
      setShowOfferPopup(true);
    }, 800);

    return () => window.clearTimeout(popupTimerRef.current);
  }, [isMobile]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, isMobile ? 7000 : 4200);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length, isMobile]);

  const filteredProducts = shopProducts.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.nameHighlight.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="page-shell">
      {/* ── 50% OFF POPUP ── */}
      {showOfferPopup && (
        <div
          className="rm-offer-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Special 50% off offer"
          onClick={() => setShowOfferPopup(false)}
        >
          <div
            className="rm-offer-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="rm-offer-popup-close"
              type="button"
              aria-label="Close offer popup"
              onClick={() => setShowOfferPopup(false)}
            >
              <X size={18} />
            </button>

            <div className="rm-offer-popup-badge">
              <Tag size={14} />
              Limited Time Deal
            </div>

            <div className="rm-offer-popup-pct">50% OFF</div>

            <h2 className="rm-offer-popup-title">Mega Sale is Live! 🎉</h2>
            <p className="rm-offer-popup-sub">
              Get all RoboMitra products at <strong>50% off</strong> for a limited time.
              Grab yours before the offer ends!
            </p>

            <div className="rm-offer-popup-products">
              <div className="rm-offer-popup-row">
                <span>PRISM X Mouse</span>
                <span><s className="rm-offer-orig">₹5,398</s> <strong className="rm-offer-new">₹2,699</strong></span>
              </div>
              <div className="rm-offer-popup-row">
                <span>RoboMitra Hello</span>
                <span><s className="rm-offer-orig">₹6,798</s> <strong className="rm-offer-new">₹3,399</strong></span>
              </div>
              <div className="rm-offer-popup-row">
                <span>RoboMitra R1</span>
                <span><s className="rm-offer-orig">₹6,398</s> <strong className="rm-offer-new">₹3,199</strong></span>
              </div>
              <div className="rm-offer-popup-row">
                <span>RoboMitra Alex</span>
                <span><s className="rm-offer-orig">₹3,998</s> <strong className="rm-offer-new">₹1,999</strong></span>
              </div>
              <div className="rm-offer-popup-row">
                <span>RoboMitra Andy</span>
                <span><s className="rm-offer-orig">₹3,998</s> <strong className="rm-offer-new">₹1,999</strong></span>
              </div>
            </div>

            <div className="rm-offer-popup-coupon">
              <span className="rm-offer-coupon-label">Use code at checkout:</span>
              <div className="rm-offer-coupon-box">
                <span className="rm-offer-coupon-code">50%ROBMIT</span>
              </div>
            </div>

            <button
              type="button"
              className="rm-offer-popup-cta"
              onClick={() => {
                setShowOfferPopup(false);
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Order Now 🛒
            </button>

            <p className="rm-offer-popup-note">Limited stock · Offer ends soon</p>
          </div>
        </div>
      )}

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
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        user={user}
        onLoginClick={onLoginClick}
        products={shopProducts}
      />

      <main>
        {/* ── HERO ── */}
        <section className="rm-hero" id="home" style={{ padding: 0, background: '#fff', width: '100%' }}>
          <FadeIn delay={0.05}>
            <div className="rm-hero-slider-shell">
              <div className="rm-hero-image-anim-wrap">
                <div
                  className="rm-hero-slider-track"
                  style={{ transform: `translate3d(-${currentHeroSlide * 100}%, 0, 0)` }}
                >
                  {heroSlides.map((slide, index) => (
                    <a
                      key={slide.image}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`rm-hero-image-link ${index === currentHeroSlide ? "is-active" : ""}`}
                      aria-label={`Open RoboMitra offer slide ${index + 1}`}
                    >
                      <picture>
                        <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                        <img
                          className="rm-hero-animated-img"
                          src={slide.image}
                          alt={slide.alt}
                        />
                      </picture>
                    </a>
                  ))}
                </div>

                <div className="rm-hero-slider-topbar">
                  <span className="rm-hero-slider-badge">{heroSlides[currentHeroSlide].badge}</span>
                  <div className="rm-hero-slider-controls" aria-label="Hero banner controls">
                    <button
                      type="button"
                      className="rm-hero-slider-arrow"
                      aria-label="Previous slide"
                      onClick={() =>
                        setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                      }
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="rm-hero-slider-arrow"
                      aria-label="Next slide"
                      onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="rm-hero-slider-dots" aria-label="Hero banner pagination">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.badge}
                      type="button"
                      className={`rm-hero-slider-dot ${index === currentHeroSlide ? "is-active" : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setCurrentHeroSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
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

        {/* ── 360° ROBOT VIEW VIDEO ── */}
        <section className="rm-360-showcase" aria-label="RoboMitra 360 degree view">
          <FadeIn delay={0.06}>
            <div className="rm-360-container">
              <div className="rm-360-header">
                <span className="rm-360-tag">
                  <Sparkles size={14} className="rm-360-tag-icon" /> 360° View
                </span>
                <h2>
                  Experience <span className="rm-text-gradient">Every Angle</span>
                </h2>
                <p>Discover the sleek curves and premium finish of RoboMitra in full 360 degrees. Crafted for perfection.</p>
              </div>
              
              <div className="rm-360-video-wrapper-outer">
                <div className="rm-360-glow-bg"></div>
                <div className="rm-360-grid">
                  <div className="rm-360-video-box">
                    <div className="rm-360-interactive-hint">
                      <span className="rm-hint-dot"></span> Auto-Rotating
                    </div>
                    <video
                      className="rm-360-vid"
                      src={robotVideo360}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={isMobile ? "metadata" : "auto"}
                      aria-label="RoboMitra 360 degree rotating view"
                    />
                  </div>
                  <div className="rm-360-video-box">
                    <div className="rm-360-interactive-hint">
                      <span className="rm-hint-dot"></span> Auto-Rotating
                    </div>
                    <video
                      className="rm-360-vid"
                      src={robotVideo360_2}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={isMobile ? "metadata" : "auto"}
                      aria-label="RoboMitra second 360 degree rotating view"
                    />
                  </div>
                </div>
              </div>
              {isMobile && <p className="rm-360-mobile-cue">Scroll for products below</p>}
            </div>
          </FadeIn>
        </section>

        {/* ── DARK PRODUCT BANNER ── */}
        <section className="rm-product-banner" aria-label="RoboMitra specifications" style={{ padding: 0 }}>
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
                {filteredProducts.length === 0 ? (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px 24px', color: 'var(--text-secondary)' }}>
                    <p style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>No robots found matching "{searchQuery}"</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', marginBottom: 0 }}>
                      Try searching for "Alex" (white) or "Andy" (black)!
                    </p>
                  </div>
                ) : (
                  filteredProducts.map((product, i) => (
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
                        <div className="rm-product-name-row">
                          <p className="rm-product-name">
                            {product.name} <span>{product.nameHighlight}</span>
                          </p>
                          <span className="rm-product-discount-badge">50% OFF</span>
                        </div>
                        <p className="rm-product-tagline">{product.tagline}</p>
                        <div className="rm-product-price-row">
                          <s className="rm-product-original-price">{product.originalPrice}</s>
                          <p className="rm-product-price">{product.price}</p>
                        </div>
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
                  ))
                )}
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

        {/* ── NIMBU BOT PROMO CARD ── */}
        <section className="rm-nimbu-promo-section" aria-label="Nimbu Bot - New Product">
          <FadeIn delay={0.06}>
            <div
              className="rm-nimbu-promo-card rm-nimbu-promo-card-premium"
              role="button"
              tabIndex={0}
              onClick={() => onNavigate("/nimbubot")}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate("/nimbubot")}
              aria-label="Explore Nimbu Bot - Starting from Rs 949"
            >
              <div className="rm-nimbu-promo-left">
                <div className="rm-nimbu-promo-image-shell">
                  <img
                    src={nimbuProductImg}
                    alt="Nimbu Bot Gift robot"
                    className="rm-nimbu-promo-img"
                  />
                  <span className="rm-nimbu-float-tag">Gift Edition</span>
                </div>
              </div>
              <div className="rm-nimbu-promo-right">
                <span className="rm-nimbu-promo-badge">🍋 New Product</span>
                <h2 className="rm-nimbu-promo-title">
                  <span className="rm-nimbu-yellow">NIMBU</span>{" "}BOT
                </h2>
                <p className="rm-nimbu-promo-sub">Fresh. Smart. Full of Zest!</p>
                <p className="rm-nimbu-promo-desc">
                  Your zesty little companion — Touch responsive, animated eyes,
                  beep talk & 2+ hours battery. Starting from just ₹949!
                </p>
                <div className="rm-nimbu-promo-highlight-row">
                  <span className="rm-nimbu-promo-note-pill">50% coupon not on Nimbu Bot</span>
                  <span className="rm-nimbu-promo-note-pill is-soft">₹949 gift special</span>
                  <span className="rm-nimbu-promo-note-pill is-dark">Pocket sized</span>
                </div>
                <div className="rm-nimbu-promo-price">
                  <span className="rm-nimbu-price-tag">Starting ₹949 Only!</span>
                  <span className="rm-nimbu-price-note">Gift-ready and budget friendly!</span>
                </div>
                <div className="rm-nimbu-promo-spec-strip">
                  <span>Touch</span>
                  <span>Games</span>
                  <span>Animated Eyes</span>
                  <span>Battery</span>
                </div>
                <button
                  type="button"
                  className="rm-nimbu-explore-btn"
                  onClick={(e) => { e.stopPropagation(); onNavigate("/nimbubot"); }}
                >
                  Explore Nimbu Bot →
                </button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── PRINT BOT PROMO CARD ── */}
        <section className="rm-print-promo-section" aria-label="Print Bot - 3D Printing Service">
          <FadeIn delay={0.06}>
            <div
              className="rm-print-promo-card rm-print-promo-card-premium"
              role="button"
              tabIndex={0}
              onClick={() => onNavigate("/printbot")}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate("/printbot")}
              aria-label="Explore Print Bot - 3D prints starting from Rs 349"
            >
              <div className="rm-print-promo-left">
                <div className="rm-print-promo-image-shell">
                  <img
                    src={printProductSkeleton}
                    alt="Print Bot 3D prints"
                    className="rm-print-promo-img"
                  />
                  <span className="rm-print-float-tag">3D Printed</span>
                </div>
              </div>
              <div className="rm-print-promo-right">
                <span className="rm-print-promo-badge">💎 New Service</span>
                <h2 className="rm-print-promo-title">
                  <span className="rm-print-blue">PRINT</span>{" "}BOT
                </h2>
                <p className="rm-print-promo-sub">Bring Your Ideas to Life in 3D!</p>
                <p className="rm-print-promo-desc">
                  High-quality custom 3D prints. From articulating keychains and gaming gear to divine home decor and custom lanterns. Sturdy, beautiful, and personalized.
                </p>
                <div className="rm-print-promo-highlight-row">
                  <span className="rm-print-promo-note-pill">50% coupon not on Print Bot</span>
                  <span className="rm-print-promo-note-pill is-soft">₹349 keychain special</span>
                  <span className="rm-print-promo-note-pill is-dark">Custom orders</span>
                </div>
                <div className="rm-print-promo-price">
                  <span className="rm-print-price-tag">Starting ₹349 Only!</span>
                  <span className="rm-print-price-note">Unique gifts and custom prints!</span>
                </div>
                <div className="rm-print-promo-spec-strip">
                  <span>Custom Made</span>
                  <span>PLA Filament</span>
                  <span>Premium Finish</span>
                  <span>Durable</span>
                </div>
                <button
                  type="button"
                  className="rm-print-explore-btn"
                  onClick={(e) => { e.stopPropagation(); onNavigate("/printbot"); }}
                >
                  Explore Print Bot →
                </button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── REVIEWS ── */}
        <section className="rm-reviews-section" id="reviews">
          <div className="rm-reviews-inner">
            <FadeIn delay={0.05}>
              <p className="rm-section-label">Reviews</p>
              <h2 className="rm-section-heading">What Customers Are Saying</h2>
              <div className="rm-section-divider" />
            </FadeIn>

            {reviews.length > 0 ? (
              <div className="rm-reviews-grid">
                {reviews.map((review, index) => (
                  <FadeIn as="article" className="rm-review-card" delay={0.06 * (index + 1)} key={review.id}>
                    <div className="rm-review-head">
                      <img className="rm-review-avatar" src={review.avatar} alt={review.name} />
                      <div>
                        <h3>{review.name}</h3>
                        <div className="rm-review-stars" aria-label={`${review.rating} out of 5 stars`}>
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                          ))}
                        </div>
                      </div>
                      <span className="rm-review-date">{review.date}</span>
                    </div>
                    <p className="rm-review-comment">{review.comment}</p>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <FadeIn className="rm-review-empty" delay={0.08}>
                <div className="rm-review-empty-icon">★</div>
                <h3>No reviews yet</h3>
                <p>Be the first to share your RoboMitra experience.</p>
              </FadeIn>
            )}

            <FadeIn className="rm-review-cta" delay={0.2}>
              <p>Share your experience and help other buyers learn more about RoboMitra.</p>
              <button className="rm-btn-primary" type="button" onClick={() => setIsReviewFormOpen(true)}>
                Write a Review
              </button>
            </FadeIn>

            {reviewsLoading && <p className="rm-reviews-status">Loading reviews...</p>}

            {isReviewFormOpen && (
              <div className="rm-review-form-overlay" role="dialog" aria-modal="true">
                <div className="rm-review-form-shell">
                  <AddReviewForm
                    onClose={() => setIsReviewFormOpen(false)}
                    onReviewAdded={async (newReview) => {
                      const reviewPayload = {
                        name: newReview.name,
                        rating: Number(newReview.rating),
                        comment: newReview.comment,
                        avatar: newReview.avatar,
                      };

                      await createReview(reviewPayload);
                      const refreshed = await fetchReviews();
                      setReviews(
                        refreshed.map((review) => ({
                          id: review.id,
                          name: review.name || "Anonymous",
                          rating: Number(review.rating) || 5,
                          comment: review.comment || "",
                          date: formatReviewDate(review.createdAt),
                          avatar:
                            review.avatar ||
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(review.name || "Anonymous")}`,
                        }))
                      );
                    }}
                  />
                </div>
              </div>
            )}
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
