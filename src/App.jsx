import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import AIAssistant from "./components/AIAssistant";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

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

  let pageContent;
  if (pathname === "/support") {
    pageContent = (
      <SupportPage
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  } else if (pathname === "/about" || pathname === "/aboutus") {
    pageContent = (
      <AboutPage
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  } else {
    pageContent = (
      <HomePage
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <>
      {pageContent}
      <AIAssistant />
    </>
  );
}


export default App;
