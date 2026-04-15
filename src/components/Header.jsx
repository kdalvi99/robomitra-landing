import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import ProductName from "./ProductName";

function Header({ links, ariaLabel, onNavigate, isHome = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [ariaLabel]);

  const handleInternalNavigation = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const homeHref = isHome ? "#home" : "/";

  return (
    <header className="topbar">
      <div className="navbar">
        <div className="navbar-row">
          <a
            className="brand-lockup"
            href={homeHref}
            aria-label="RoboMitra home"
            onClick={(event) => handleInternalNavigation(event, "/")}
          >
            <div className="brand-mark">
              <Sparkles size={18} />
            </div>
            <div className="brand-copy">
              <h1>
                <ProductName />
              </h1>
            </div>
          </a>

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

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label={ariaLabel}
        >
          {links.map(({ href, label, external }) => (
            <a
              key={`${href}-${label}`}
              className={external ? "nav-link nav-link-cta" : "nav-link"}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              onClick={
                external
                  ? handleLinkClick
                  : (event) => handleInternalNavigation(event, href)
              }
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
