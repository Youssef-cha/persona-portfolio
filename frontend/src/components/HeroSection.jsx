import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const animatedTexts = [
    "Professeur de Mathématiques",
    "Passionné d'Éducation",
    "Expert en Pédagogie Numérique"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-orange-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/25 to-red-500/25 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Math Symbols Floating Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {['∑', '∫', 'π', '∞', '√', '∆', 'Ω', 'α', 'β', 'θ'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-4xl text-white/10 font-bold select-none"
            style={{
              left: `${10 + (index * 8)}%`,
              top: `${20 + (index * 6)}%`,
              animation: `float ${3 + (index * 0.5)}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className={`lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="mb-6">
            <h2 className="text-lg font-mono text-emerald-400 mb-2 tracking-wide">
              👋 Marhaba, je suis
            </h2>
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0]}
              <br />
              <span className="text-4xl lg:text-5xl">
                {portfolioData.personal.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>

          {/* Animated Title */}
          <div className="h-16 mb-6 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentTextIndex * 4}rem)` }}
            >
              {animatedTexts.map((text, index) => (
                <div key={index} className="h-16 flex items-center">
                  <span className="text-3xl font-semibold text-orange-400">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            {portfolioData.personal.heroDescription}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={16} className="text-emerald-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Mail size={16} className="text-blue-400" />
              <span>{portfolioData.personal.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur-sm">
              <Phone size={16} className="text-orange-400" />
              <span>{portfolioData.personal.phone}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="interactive bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Découvrir mon parcours
            </button>
            <button className="interactive flex items-center gap-2 border-2 border-white/30 hover:border-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Download size={18} />
              Télécharger CV
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className={`lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="relative">
            {/* Animated Rings */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-80 h-80 border-4 border-gradient-to-r from-emerald-400/30 to-transparent rounded-full"></div>
            </div>
            <div className="absolute inset-4 animate-spin-reverse">
              <div className="w-72 h-72 border-4 border-gradient-to-r from-blue-400/30 to-transparent rounded-full"></div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-blue-500 p-2">
              <img
                src="/karim-portrait.jpg"
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Math Elements */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce delay-500">
              π
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse">
              ∑
            </div>
            <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-yellow-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold animate-ping">
              √
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer interactive" onClick={scrollToContent}>
        <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;