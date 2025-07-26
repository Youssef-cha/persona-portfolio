import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <CustomCursor />
      <HeroSection />
      
      {/* About Section Placeholder */}
      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
          <p className="text-xl text-gray-600">Plus de contenu à venir...</p>
        </div>
      </section>
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