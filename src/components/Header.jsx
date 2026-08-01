import { Menu, ShoppingCart, User, X, Search, ArrowRight, Home, Zap, ShoppingBag, Info, Headphones, Phone, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { fuzzySearch } from "../utils/fuzzySearch";

function Header({
  links,
  ariaLabel,
  onNavigate,
  isHome = false,
  cartCount = 0,
  onCartClick,
  searchQuery = "",
  onSearchChange,
  user,
  onLoginClick,
  products = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [ariaLabel]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Scroll-aware header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInternalNavigation = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  const homeHref = isHome ? "#home" : "/";

  const navLinks = [
    { href: "#home",     label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#products", label: "Shop" },
    { href: "/about",    label: "About Us" },
    { href: "/support",  label: "Support" },
  ];

  const navLinksWithIcons = [
    { href: "#home", label: "Home", Icon: Home },
    { href: "#features", label: "Features", Icon: Zap },
    { href: "#products", label: "Shop", Icon: ShoppingBag },
    { href: "/about", label: "About Us", Icon: Info },
    { href: "/support", label: "Support", Icon: Headphones },
  ];
  const { exact, fuzzy, didYouMean } = fuzzySearch(products, searchQuery);
  const dropdownResults = [...exact, ...fuzzy].slice(0, 5);
  const isFuzzyOnly = exact.length === 0 && fuzzy.length > 0;
  const showDropdown = dropdownOpen && searchQuery.trim().length > 0;

  function handleProductClick(product) {
    setDropdownOpen(false);
    setSearchExpanded(false);
    onSearchChange("");
    // Scroll to products section if on home
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleDidYouMean(word) {
    onSearchChange(word);
  }

  // Announcement marquee items
  const announcements = [
    { emoji: "🚀", text: "Proudly Made in India" },
    { emoji: "⚡", text: "Smart Robots for a Smarter Tomorrow" },
    { emoji: "🤖", text: "RoboMitra R1 — Starting at ₹3,199" },
    { emoji: "🎮", text: "Play Mini Games on Your Robot's Screen" },
    { emoji: "🔋", text: "2-4 Hours Battery with Type-C Charging" },
    { emoji: "📦", text: "Fast Delivery Across India" },
  ];

  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`}>
      {/* Animated Announcement Bar */}
      <div className="announcement-bar" role="marquee" aria-label="Announcements">
        <div className="announcement-track">
          {[...announcements, ...announcements].map((item, i) => (
            <span className="announcement-segment" key={i}>
              <span className="announcement-pill">{item.emoji} {item.text}</span>
              <span className="dot-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        {/* Logo */}
        <a
          className="brand-lockup"
          href={homeHref}
          aria-label="RoboMitra home"
          onClick={(e) => handleInternalNavigation(e, "/")}
        >
          <span className="brand-text-logo">
            Robo<span>Mitra</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="desktop-nav-links" aria-label="Desktop navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={`desktop-${href}-${label}`}
              className="nav-link"
              href={href}
              onClick={(e) => handleInternalNavigation(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile full-screen menu */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label={ariaLabel}
        >
          <div className="mobile-menu-header">
            <button
              type="button"
              className="mobile-menu-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="mobile-menu-links">
            {navLinksWithIcons.map(({ href, label, Icon }) => (
              <a
                key={`${href}-${label}`}
                className="nav-link"
                href={href}
                onClick={(e) => handleInternalNavigation(e, href)}
              >
                <span className="nav-link-icon"><Icon size={18} /></span>
                {label}
                <ArrowRight size={14} className="nav-link-arrow" />
              </a>
            ))}
          </div>

          {/* Social Footer */}
          <div className="mobile-menu-footer">
            <p className="mobile-menu-footer-label">Get in touch</p>
            <div className="mobile-menu-socials">
              <a
                href="https://wa.me/917977473538"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn mobile-social-wa"
              >
                <Phone size={16} /> WhatsApp
              </a>
              <a
                href="https://instagram.com/Robomitra.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn mobile-social-ig"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </nav>

        {/* Right Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {/* Search with Dropdown */}
          <div ref={searchRef} className="nav-search-root">
            {searchExpanded ? (
              <div className="nav-search-expanded">
                <div className="nav-search-bar">
                  <Search size={14} className="nav-search-icon" />
                  <input
                    type="text"
                    placeholder="Search robots…"
                    value={searchQuery}
                    onChange={(e) => {
                      onSearchChange(e.target.value);
                      setDropdownOpen(true);
                    }}
                    onFocus={() => setDropdownOpen(true)}
                    className="nav-search-input"
                    autoFocus
                    aria-label="Search products"
                  />
                  <button
                    className="nav-search-clear"
                    onClick={() => {
                      setSearchExpanded(false);
                      setDropdownOpen(false);
                      onSearchChange("");
                    }}
                    aria-label="Close search"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Dropdown Results */}
                {showDropdown && (
                  <div className="search-dropdown" role="listbox" aria-label="Search results">
                    {dropdownResults.length > 0 ? (
                      <>
                        {isFuzzyOnly && (
                          <p className="search-dropdown-notice">
                            🔍 Showing closest matches
                          </p>
                        )}
                        {dropdownResults.map((product) => (
                          <button
                            key={product.id}
                            className="search-dropdown-item"
                            role="option"
                            onClick={() => handleProductClick(product)}
                          >
                            <img
                              src={product.image}
                              alt={product.nameHighlight}
                              className="search-dropdown-img"
                            />
                            <div className="search-dropdown-info">
                              <span className="search-dropdown-name">
                                {product.name} <strong>{product.nameHighlight}</strong>
                              </span>
                              <span className="search-dropdown-tag">{product.tagline}</span>
                            </div>
                            <span className="search-dropdown-price">{product.price}</span>
                            <ArrowRight size={14} className="search-dropdown-arrow" />
                          </button>
                        ))}
                        {didYouMean && exact.length === 0 && (
                          <div className="search-dropdown-dym">
                            Did you mean&nbsp;
                            <button
                              className="search-dym-btn"
                              onClick={() => handleDidYouMean(didYouMean)}
                            >
                              "{didYouMean}"
                            </button>
                            ?
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="search-dropdown-empty">
                        <p className="search-dropdown-empty-title">No robots found for "{searchQuery}"</p>
                        {didYouMean && (
                          <p className="search-dropdown-empty-dym">
                            Did you mean&nbsp;
                            <button
                              className="search-dym-btn"
                              onClick={() => handleDidYouMean(didYouMean)}
                            >
                              "{didYouMean}"
                            </button>
                            ?
                          </p>
                        )}
                        <p className="search-dropdown-hint">Try "Alex", "Andy" or "R1"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button
                className="navbar-icon-btn"
                aria-label="Search"
                type="button"
                onClick={() => setSearchExpanded(true)}
              >
                <Search size={18} />
              </button>
            )}
          </div>

          <div className="navbar-icons">
            <button
              className="navbar-icon-btn"
              aria-label={user ? `Logged in as ${user.name}` : "Login / Account"}
              type="button"
              onClick={onLoginClick}
              style={{ position: "relative" }}
            >
              <User size={18} />
              {user && <span className="user-indicator-dot" />}
            </button>
          </div>

          <button
            className="navbar-icon-btn"
            aria-label="Cart"
            type="button"
            style={{ position: "relative" }}
            onClick={onCartClick}
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
