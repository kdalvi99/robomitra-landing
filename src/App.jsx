import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import AIAssistant from "./components/AIAssistant";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ContactFloat from "./components/ContactFloat";
import { firebaseReady, fetchUserProfile, subscribeToAuth } from "./lib/firebase";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  // Cart state loaded from localStorage if exists
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("robomitra_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
  const [showIntroSplash, setShowIntroSplash] = useState(() => window.innerWidth > 768);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("robomitra_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (firebaseReady) {
      const unsubscribe = subscribeToAuth(async (authUser) => {
        if (!authUser) {
          setUser(null);
          return;
        }

        try {
          const profile = await fetchUserProfile(authUser.uid);
          setUser({
            uid: authUser.uid,
            name: profile?.name || authUser.displayName || "",
            email: profile?.email || authUser.email || "",
            address: profile?.address || "",
          });
        } catch {
          setUser({
            uid: authUser.uid,
            name: authUser.displayName || "",
            email: authUser.email || "",
            address: "",
          });
        }
      });

      return () => unsubscribe();
    }

    try {
      const saved = localStorage.getItem("robomitra_customer");
      setUser(saved ? JSON.parse(saved) : null);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (!firebaseReady) {
      if (user) {
        localStorage.setItem("robomitra_customer", JSON.stringify(user));
      } else {
        localStorage.removeItem("robomitra_customer");
      }
    }
  }, [user]);

  const handleSaveUser = (userData) => {
    setUser(userData);
    if (userData) setIsLoginOpen(false);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowIntroSplash(false);
      return undefined;
    }

    const splashTimer = window.setTimeout(() => {
      setShowIntroSplash(false);
    }, 2100);

    return () => window.clearTimeout(splashTimer);
  }, []);

  const navigateTo = (href) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
        setPathname("/");
        requestAnimationFrame(() => {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (href === window.location.pathname) return;

    window.history.pushState({}, "", href);
    setPathname(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const sharedProps = {
    onNavigate: navigateTo,
    cartCount: totalCartCount,
    onCartClick: () => setIsCartOpen(true),
    onLoginClick: () => setIsLoginOpen(true),
    user,
    searchQuery,
    onSearchChange: setSearchQuery,
  };

  let pageContent;
  if (pathname === "/support") {
    pageContent = <SupportPage {...sharedProps} />;
  } else if (pathname === "/about" || pathname === "/aboutus") {
    pageContent = <AboutPage {...sharedProps} />;
  } else {
    pageContent = <HomePage {...sharedProps} onAddToCart={addToCart} />;
  }

  const whatsappUrl = "https://wa.me/917977473538";

  return (
    <>
      {showIntroSplash && (
        <div className="intro-splash" aria-label="RoboMitra intro animation">
          <div className="intro-splash-glow" />
          <div className="intro-splash-card">
            <div className="intro-splash-logo">
              <div className="intro-splash-text-brand">
                <span className="intro-splash-title">RoboMitra</span>
                <span className="intro-splash-subtitle">Always Ready to Play</span>
              </div>
            </div>
            <div className="intro-splash-loader" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}

      {pageContent}
      <AIAssistant />
      <ContactFloat />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        user={user}
        onSaveUser={handleSaveUser}
      />
      {isOfferPopupOpen && pathname === "/" && (
        <div className="offer-popup-backdrop" onClick={() => setIsOfferPopupOpen(false)}>
          <div className="offer-popup-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Limited time offer">
            <button
              type="button"
              className="offer-popup-close"
              aria-label="Close offer popup"
              onClick={() => setIsOfferPopupOpen(false)}
            >
              ×
            </button>
            <span className="offer-popup-badge">Limited Time Offer</span>
            <h2>Get 50% Off Your Order</h2>
            <p className="offer-popup-copy">
              Use the special code below at checkout and unlock your discount instantly.
            </p>
            <div className="offer-popup-code-box">50%ROBMIT</div>
            <p className="offer-popup-note">Works in capital or small letters.</p>
            <div className="offer-popup-actions">
              <button
                type="button"
                className="offer-popup-secondary"
                onClick={() => setIsOfferPopupOpen(false)}
              >
                Maybe later
              </button>
              <button
                type="button"
                className="offer-popup-primary"
                onClick={() => {
                  setIsOfferPopupOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      )}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        whatsappUrl={whatsappUrl}
        user={user}
        onLoginClick={() => setIsLoginOpen(true)}
      />
    </>
  );
}

export default App;


