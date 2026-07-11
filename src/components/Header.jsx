import { Menu, ShoppingCart, User, X, Search } from "lucide-react";
import { useEffect, useState } from "react";

function Header({ links, ariaLabel, onNavigate, isHome = false, cartCount = 0, onCartClick, searchQuery = "", onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [ariaLabel]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
          {searchExpanded ? (
            <div className="nav-search-wrapper" style={{ display: "flex", alignItems: "center", background: "#f1f5f9", borderRadius: "20px", padding: "4px 12px", border: "1px solid #e2e8f0" }}>
              <Search size={14} style={{ color: "#64748b", marginRight: "6px" }} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", fontSize: "0.85rem", width: "90px", color: "var(--text)" }}
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchExpanded(false);
                  onSearchChange("");
                }}
                style={{ border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", color: "#64748b", padding: "2px" }}
              >
                <X size={14} />
              </button>
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

          <div className="navbar-icons">
            <button className="navbar-icon-btn" aria-label="Account" type="button">
              <User size={18} />
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
