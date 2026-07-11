import { Menu, ShoppingCart, User, X, Search } from "lucide-react";
import { useEffect, useState } from "react";

function Header({ links, ariaLabel, onNavigate, isHome = false, cartCount = 0, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="navbar-icons">
            <button className="navbar-icon-btn" aria-label="Search" type="button">
              <Search size={18} />
            </button>
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
