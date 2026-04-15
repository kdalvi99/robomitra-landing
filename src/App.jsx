import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

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

  if (pathname === "/support") {
    return <SupportPage onNavigate={navigateTo} />;
  }

  if (pathname === "/about" || pathname === "/aboutus") {
    return <AboutPage onNavigate={navigateTo} />;
  }

  return <HomePage onNavigate={navigateTo} />;
}

export default App;
