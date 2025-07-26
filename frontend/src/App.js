import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MathGamesSection from "./components/MathGamesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { MobileNavigation, MobileHeroSection } from "./components/MobileDesign";
import { MathShapesBackground } from "./components/MathShapes";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #10b981, #3b82f6);
      z-index: 10000;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;