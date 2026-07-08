import {
  ArrowRight,
  BadgeCheck,
  Box,
  MessageCircle,
  MousePointerClick,
  Orbit,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import FadeIn from "../components/FadeIn";
import GalleryCard from "../components/GalleryCard";
import Header from "../components/Header";
import ModelViewerModal from "../components/ModelViewerModal";
import ProductDetailsModal from "../components/ProductDetailsModal";
import heroReferenceDarkShot from "../../bec4568b-9ea5-4b72-844e-27d7d9d113f7.png";
import heroReferenceLightShot from "../../ChatGPT Image May 28, 2026, 01_25_30 PM.png";
import img1599 from "../assets/1599rs.jpeg";
import img199 from "../assets/199rs.jpeg";
import keychainBlack from "../assets/robomitra-keychain-black.jpeg";
import keychainWhite from "../assets/robomitra-keychain-white.jpeg";
import {
  boxContents,
  featureCards,
  galleryShots,
  highlights,
  instagramUrl,
  productFeatures,
  productImages,
} from "../content";

const products = [
  {
    name: "RoboMitra Keychain White",
    image: keychainWhite,
    price: "Rs. 999",
    tag: "New Launch",
    description: "A pocket-sized white RoboMitra keychain with glowing expressive eyes.",
    longDescription:
      "RoboMitra Keychain White brings the companion robot look into a pocket-sized collectible form. It is designed for bags, keys, desks, and gifting with a glossy white body, rechargeable design, and animated blue display.",
    highlights: [
      "Pocket-sized keychain design",
      "Animated blue display",
      "Rechargeable build",
      "Premium white finish",
    ],
    specs: ["Keychain Form", "Animated Display", "Rechargeable", "Interactive", "Pocket-Sized"],
  },
  {
    name: "RoboMitra Keychain Black",
    image: keychainBlack,
    price: "Rs. 999",
    tag: "New Variant",
    description: "A stealth black RoboMitra keychain with a cyber-style animated screen.",
    longDescription:
      "RoboMitra Keychain Black is the darker pocket companion variant with a textured black body, bright blue animated screen, rechargeable power, and a compact keyring form that is easy to carry anywhere.",
    highlights: [
      "Stealth black textured body",
      "Animated blue screen",
      "Portable keyring form",
      "Rechargeable everyday carry",
    ],
    specs: ["Keychain Form", "Animated Display", "Rechargeable", "Portable", "Black Finish"],
  },
  {
    name: "RoboMitra R1",
    image: img1599,
    price: "Rs. 1,599",
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
    name: "Head Set",
    image: img199,
    price: "Rs. 199",
    tag: "Accessory",
    description: "A snap-on personality upgrade for your RoboMitra buddy.",
    longDescription:
      "The RoboMitra Head Set clips onto compatible models for a sharper, more characterful look without blocking the robot's core interaction points.",
    highlights: [
      "Universal clip-on fit",
      "Lightweight material",
      "Photo-ready style",
      "Easy to apply",
    ],
    specs: ["Universal Fit", "Lightweight", "Multiple Colors", "Easy Clip-On"],
  },
];

const sampleReviews = [
  {
    name: "Aarav Sharma",
    city: "Pune",
    rating: 5,
    photo: "https://i.pravatar.cc/120?img=12",
    text: "Very cute product for my desk setup. The expressions and look are the best part for me.",
  },
  {
    name: "Priya Patel",
    city: "Ahmedabad",
    rating: 5,
    photo: "https://i.pravatar.cc/120?img=32",
    text: "Looks premium in hand and the animations feel fun. I liked the compact size and finish.",
  },
  {
    name: "Rohan Verma",
    city: "Delhi",
    rating: 4,
    photo: "https://i.pravatar.cc/120?img=14",
    text: "Nice gift option and looks different from normal toys. Feels good on a shelf or table.",
  },
  {
    name: "Sneha Iyer",
    city: "Bengaluru",
    rating: 5,
    photo: "https://i.pravatar.cc/120?img=25",
    text: "The mini motions make it fun to keep near my workspace during the day.",
  },
  {
    name: "Kunal Joshi",
    city: "Mumbai",
    rating: 3,
    photo: "https://i.pravatar.cc/120?img=15",
    text: "Design is lovely and the robot looks premium. I would like even more features in the future.",
  },
  {
    name: "Meera Nair",
    city: "Kochi",
    rating: 4,
    photo: "https://i.pravatar.cc/120?img=47",
    text: "Small, unique, and easy to place anywhere. The packaging and presentation felt nice.",
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    rating: 5,
    photo: "https://i.pravatar.cc/120?img=68",
    text: "One of the most eye-catching desk items I have bought recently. Great for gifting too.",
  },
  {
    name: "Ananya Rao",
    city: "Hyderabad",
    rating: 2,
    photo: "https://i.pravatar.cc/120?img=45",
    text: "Cute concept and good styling. I personally wanted a little bigger body size.",
  },
];

const heroStats = [
  { value: "2-4 hrs", label: "battery backup" },
  { value: "USB-C", label: "simple charging" },
  { value: "2x", label: "robot interaction" },
];

const whatsappUrl = "https://wa.me/917977473538";

function HomePage({ onNavigate, theme, onToggleTheme }) {
  const { dualRobotsImage, fullKitImage, pouchImage } = productImages;
  const heroReferenceShot =
    theme === "light" ? heroReferenceLightShot : heroReferenceDarkShot;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [is3dOpen, setIs3dOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState("all");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const modelSrc = useMemo(() => "/models/lets-goo.stl", []);

  const filteredReviews = sampleReviews.filter((review) => {
    return selectedRating === "all" || review.rating === Number(selectedRating);
  });
  const visibleReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 4);

  return (
    <div className="page-shell future-shell">
      <ProductDetailsModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        instagramUrl={whatsappUrl}
        theme={theme}
      />

      <Header
        ariaLabel="Primary"
        onNavigate={onNavigate}
        theme={theme}
        onToggleTheme={onToggleTheme}
        isHome
        promoText="Launch offer: use code ROBO50 for Rs. 50 off"
        tagline="Your Smart Desk Buddy"
        links={[
          { href: "#home", label: "Home" },
          { href: "#products", label: "Products" },
          { href: "#features", label: "Features" },
          { href: "#gallery", label: "Gallery" },
          { href: "/support", label: "FAQ" },
          { href: whatsappUrl, label: "WhatsApp", external: true },
        ]}
      />

      <main>
        <ModelViewerModal
          open={is3dOpen}
          title="RoboMitra 3D Model"
          src={modelSrc}
          onClose={() => setIs3dOpen(false)}
        />

        <section className="future-hero full-photo-hero" id="home">
          <FadeIn className="future-hero-stage" delay={0.04}>
            <div className="hero-device-card">
              <div className="scan-line" />
              <img
                className="hero-product-photo hero-reference-photo"
                src={heroReferenceShot}
                alt="RoboMitra landing hero design"
              />
            </div>
          </FadeIn>

          <FadeIn className="future-hero-copy" delay={0.08}>
            <p className="section-tag">RoboMitra companion robot</p>
            <h2>Your desk just got a little smarter.</h2>
            <p className="hero-text">
              A compact expressive robot with smooth eyes, playful reactions,
              portable variants, and a premium look made for workspaces,
              shelves, gifts, and daily tiny moments of delight.
            </p>

            <div className="cta-row">
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Message on WhatsApp
                <ArrowRight size={18} />
              </a>
              <button className="secondary-button" type="button" onClick={() => setIs3dOpen(true)}>
                <Orbit size={18} />
                View 3D Model
              </button>
            </div>

            <div className="stat-grid hero-stat-grid">
              {heroStats.map((stat) => (
                <div className="stat-card future-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="future-products" id="products">
          <FadeIn className="section-heading" delay={0.04}>
            <p className="section-tag">Choose your RoboMitra</p>
            <h2>New keychain drops plus the flagship desk buddy.</h2>
          </FadeIn>
          <div className="product-grid future-product-grid">
            {products.map((product, index) => (
              <FadeIn
                as="article"
                className="future-product-card"
                delay={0.08 * (index + 1)}
                key={product.name}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image-frame">
                  <img src={product.image} alt={product.name} />
                  <span>{product.tag}</span>
                </div>
                <div className="future-product-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card-foot">
                    <strong>{product.price}</strong>
                    <a
                      className="primary-button product-buy-button"
                      href={`${whatsappUrl}?text=${encodeURIComponent(`I want to buy ${product.name}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Message on WhatsApp
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="highlights future-highlights">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <FadeIn as="article" className="highlight-card" delay={0.08 * (index + 1)} key={title}>
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
            <p className="section-tag">Inside the experience</p>
            <h2>Small body. Big personality. Built to feel alive.</h2>
            <p>
              RoboMitra combines expressive visual feedback, touch interaction,
              portable design, and charming animations so it feels like a tiny
              companion instead of just another desk object.
            </p>
          </FadeIn>

          <div className="feature-grid">
            {productFeatures.map(({ icon: Icon, title, text }, index) => (
              <FadeIn
                as="article"
                className="feature-spotlight-card"
                delay={0.05 * (index + 1)}
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

        <section className="future-split-section" id="details">
          <FadeIn className="details-copy" delay={0.06}>
            <p className="section-tag">Product details</p>
            <h2>A compact robot designed to look premium and feel expressive.</h2>
            <p>
              Built for desks, shelves, bedside tables, gifting, and collecting,
              RoboMitra keeps the setup simple while adding a more animated,
              personal feel to everyday spaces.
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
                    <Box size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </FadeIn>

          <FadeIn className="media-column future-media-column" delay={0.14}>
            <div className="media-card media-large">
              <img className="media-photo" src={fullKitImage} alt="Full RoboMitra box contents" />
            </div>
            <div className="media-row">
              <div className="media-card">
                <img className="media-photo" src={dualRobotsImage} alt="Two RoboMitra units together" />
              </div>
              <div className="media-card accent-card">
                <img className="media-photo" src={pouchImage} alt="RoboMitra branded pouch" />
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="gallery-section" id="gallery">
          <FadeIn className="gallery-intro" delay={0.06}>
            <p className="section-tag">Product gallery</p>
            <h2>Real product photos, packaging, accessories, and a 3D view.</h2>
            <p>
              See RoboMitra from multiple angles: the robot body, charging cable,
              pouch, manual, box contents, and interactive model preview.
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
                onClick={shot.is3d ? () => setIs3dOpen(true) : undefined}
              />
            ))}
          </div>
        </section>

        <section className="reviews-section" id="trust">
          <FadeIn className="reviews-intro" delay={0.05}>
            <p className="section-tag">Customer signal</p>
            <h2>Early desk owners are already giving RoboMitra a spot.</h2>
            <p>
              Demo review cards show how customer feedback can look on the page
              while keeping the product story social and easy to scan.
            </p>
          </FadeIn>

          <div className="reviews-toolbar">
            <div className="reviews-summary">
              <strong>8 sample reviews</strong>
              <span>Filter by rating to preview the review layout.</span>
            </div>
            <div className="reviews-filters" aria-label="Sample review filters">
              <button
                type="button"
                className={`review-filter ${selectedRating === "all" ? "review-filter-active" : ""}`}
                onClick={() => {
                  setSelectedRating("all");
                  setShowAllReviews(false);
                }}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`review-filter ${selectedRating === String(rating) ? "review-filter-active" : ""}`}
                  onClick={() => {
                    setSelectedRating(String(rating));
                    setShowAllReviews(false);
                  }}
                >
                  {rating} Star
                </button>
              ))}
            </div>
          </div>

          <div className="reviews-grid">
            {visibleReviews.map((review, index) => (
              <FadeIn
                as="article"
                className="review-card"
                delay={0.05 * (index + 1)}
                key={`${review.name}-${review.city}`}
              >
                <div className="review-head">
                  <img className="review-avatar" src={review.photo} alt={`${review.name} sample profile`} />
                  <div>
                    <h3>{review.name}</h3>
                    <p className="review-city">{review.city}</p>
                  </div>
                </div>
                <div className="review-stars" aria-label={`${review.rating} star sample review`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill={starIndex < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
              </FadeIn>
            ))}
          </div>

          <div className="reviews-footer">
            <button
              type="button"
              className="secondary-button reviews-more-button"
              onClick={() => setShowAllReviews((open) => !open)}
            >
              {showAllReviews ? "Show fewer reviews" : "See all reviews"}
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <FadeIn as="section" className="cta-banner future-cta" delay={0.1}>
          <div>
            <p className="section-tag">Order on WhatsApp</p>
            <h2>Bring RoboMitra to your desk today.</h2>
            <p>
              Message us on WhatsApp at 7977473538 for orders, colors, availability, and product questions.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
            <button className="secondary-button" type="button" onClick={() => setIs3dOpen(true)}>
              <MousePointerClick size={18} />
              Try 3D View
            </button>
          </div>
        </FadeIn>

        <section className="trust-strip" aria-label="RoboMitra product promises">
          {[
            [BadgeCheck, "Premium finish"],
            [ShieldCheck, "Handmade with care"],
            [Zap, "Quick setup"],
            [Sparkles, "Gift-ready design"],
          ].map(([Icon, label]) => (
            <div className="trust-item" key={label}>
              <Icon size={18} />
              <span>{label}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
