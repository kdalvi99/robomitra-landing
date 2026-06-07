import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import FadeIn from "../components/FadeIn";
import GalleryCard from "../components/GalleryCard";
import Header from "../components/Header";
import ModelViewerModal from "../components/ModelViewerModal";
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
  const [is3dOpen, setIs3dOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState("all");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const modelSrc = useMemo(() => "/models/lets-goo.stl", []);
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
      text: "The mini games and cute motions make it fun to keep near my workspace during the day.",
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
      text: "Small, unique, and easy to place anywhere. The packaging and overall presentation felt nice.",
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
      text: "Cute concept and good styling. I personally wanted a little bigger body size, but it still looks nice.",
    },
  ];
  const filteredReviews = sampleReviews.filter((review) => {
    if (selectedRating === "all") {
      return true;
    }

    return review.rating === Number(selectedRating);
  });
  const visibleReviews = showAllReviews
    ? filteredReviews
    : filteredReviews.slice(0, 4);

  return (
    <div className="page-shell">
      <Header
        ariaLabel="Primary"
        onNavigate={onNavigate}
        theme={theme}
        onToggleTheme={onToggleTheme}
        isHome
        promoText="Get 50rs off code ROBO50"
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
        <ModelViewerModal
          open={is3dOpen}
          title="RoboMitra 3D Model"
          src={modelSrc}
          onClose={() => setIs3dOpen(false)}
        />

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

        <section className="reviews-section" id="trust">
          <FadeIn className="reviews-intro" delay={0.05}>
            <p className="section-tag">8 people Reviews</p>
            <h2>Demo review layout showing how RoboMitra feedback can look on the page.</h2>
            <p>
              Demo content for layout preview. These sample reviews are shown to
              help visualize ratings, names, photos, and review filters.
            </p>
          </FadeIn>

          <div className="reviews-toolbar">
            <div className="reviews-summary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
              <strong>8 people Reviews</strong>
              <span>60% better, 37% best, 3% bad</span>
              </div>
              <button
                type="button"
                className="reviews-more-button"
                style={{
                  padding: '12px 32px',
                  borderRadius: '100px',
                  fontWeight: '800',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: theme === 'light' ? '#fff' : '#1a1a1a',
                  border: `1px solid ${theme === 'light' ? '#cbd5e1' : '#404040'}`,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  color: theme === 'light' ? '#0f172a' : '#f8fafc',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  letterSpacing: '0.02em'
                }}
                onClick={() => setShowAllReviews((open) => !open)}
              >
                {showAllReviews ? "Show fewer reviews" : "See all 8 people reviews"}
                <ArrowRight size={16} style={{ transform: showAllReviews ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </button>
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
                delay={0.06 * (index + 1)}
                key={`${review.name}-${review.city}`}
              >
                <div className="review-head">
                  <div>
                    <img
                      className="review-avatar"
                      src={review.photo}
                      alt={`${review.name} sample profile`}
                    />
                  </div>
                  <div>
                    <h3>{review.name}</h3>
                    <p className="review-city">{review.city}</p>
                  </div>
                </div>
                <div className="review-stars" aria-label={`${review.rating} star sample review`}>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="review-text">{review.text}</p>
              </FadeIn>
            ))}
          </div>

          <div className="reviews-footer" style={{ marginTop: '2rem' }}>
            <FadeIn delay={0.1}>
              <div 
                className="add-review-banner" 
                style={{
                  padding: '5.5rem 6rem',
                  borderRadius: '32px',
                  background: theme === 'light' 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(147, 197, 253, 0.85) 40%, rgba(37, 99, 235, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(147, 197, 253, 0.4) 20%, rgba(30, 58, 138, 0.8) 100%)',
                  border: `1px solid ${theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  overflow: 'hidden',
                  textAlign: 'center',
                  maxWidth: '1400px',
                  margin: '0 auto',
                  boxShadow: theme === 'light' ? '0 40px 80px rgba(30, 58, 138, 0.2)' : '0 40px 80px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ marginBottom: '1.25rem', display: 'inline-block', padding: '6px 14px', background: 'rgba(255, 255, 255, 0.2)', color: 'white', backdropFilter: 'blur(4px)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Join the family
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', color: 'white', letterSpacing: '-0.02em' }}>Share Your Experience</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: '1.7', fontSize: '1.1rem', fontWeight: '500' }}>
                  Got a RoboMitra on your desk? We'd love to see it! Send us your review and setup photos via Instagram DM to get featured.
                </p>
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="primary-button" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', color: '#1e3a8a', border: 'none', padding: '1.1rem 3rem', borderRadius: '100px', fontWeight: '800', fontSize: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                >
                  Message @robomitra.tech
                  <ArrowRight size={20} />
                </a>
              </div>
            </FadeIn>
          </div>
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
                onClick={shot.is3d ? () => setIs3dOpen(true) : undefined}
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
