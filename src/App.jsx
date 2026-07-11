import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import AIAssistant from "./components/AIAssistant";
import Cart from "./components/Cart";

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
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("robomitra_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Find if item already exists
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise add new item
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Open cart drawer immediately for visual feedback
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

    if (href === window.location.pathname) {
      return;
    }

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

  let pageContent;
  if (pathname === "/support") {
    pageContent = (
      <SupportPage
        onNavigate={navigateTo}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
    );
  } else if (pathname === "/about" || pathname === "/aboutus") {
    pageContent = (
      <AboutPage
        onNavigate={navigateTo}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
    );
  } else {
    pageContent = (
      <HomePage
        onNavigate={navigateTo}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        onAddToCart={addToCart}
      />
    );
  }

  // The base WhatsApp contact number used across the site
  const whatsappUrl = "https://wa.me/917977473538";

  return (
    <>
      {pageContent}
      <AIAssistant />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}

export default App;
