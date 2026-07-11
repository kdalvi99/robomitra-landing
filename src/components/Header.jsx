import { Menu, ShoppingCart, User, X, Search, ArrowRight } from "lucide-react";
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
  const searchRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [ariaLabel]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#products", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/support", label: "Support" },
    { href: "#products", label: "Contact" },
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

  return (
    <header className="topbar">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🚀 Proudly Made in India</span>
        <span className="dot-sep" />
        <span>Smart Robots for a Smarter Tomorrow</span>
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

        {/* Nav Links */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label={ariaLabel}
        >
          {menuOpen && (
            <button
              type="button"
              className="menu-toggle"
              style={{ position: "absolute", top: 20, right: 20 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          )}
          {navLinks.map(({ href, label }) => (
            <a
              key={`${href}-${label}`}
              className="nav-link"
              href={href}
              onClick={(e) => handleInternalNavigation(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
