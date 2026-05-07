import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HUDOverlay from "./components/HUDOverlay";
import Scanline from "./components/Scanline";
import BackgroundEffects from "./components/BackgroundEffects";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
  
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
<div className="bg-background dark:bg-zinc-950 text-on-surface dark:text-slate-200 font-body-standard selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden transition-theme">      <Scanline />
      <HUDOverlay />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="relative pcb-grid transition-theme min-h-screen">
        <BackgroundEffects />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
