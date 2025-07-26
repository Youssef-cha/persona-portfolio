import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Accueil', href: '#home' },
    { id: 'about', label: 'À Propos', href: '#about' },
    { id: 'games', label: 'Jeux Math', href: '#games' },
    { id: 'testimonials', label: 'Témoignages', href: '#testimonials' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">{portfolioData.personal.name.split(' ')[0]}</h1>
              <p className="text-emerald-400 text-xs">Prof. Mathématiques</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20"
          >
            {isOpen ? <X className="text-white" size={20} /> : <Menu className="text-white" size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-20 px-6">
            {/* Contact Info */}
            <div className="mb-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-white">{portfolioData.personal.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-blue-400" />
                  </div>
                  <span className="text-white text-xs">{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <MapPin size={16} className="text-orange-400" />
                  </div>
                  <span className="text-white">{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left p-4 rounded-xl text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="font-medium">{item.label}</span>
                  <ChevronDown className="transform -rotate-90 text-gray-400 group-hover:text-white transition-colors" size={16} />
                </button>
              ))}
            </nav>

            {/* Math Shapes Decoration */}
            <div className="mt-8 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-2 border-emerald-400/30 rotate-45 animate-spin-slow"></div>
              <div className="absolute top-4 right-8 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-blue-400/30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-purple-400/30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileHeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const animatedTexts = [
    "Prof. Mathématiques",
    "Pédagogue Passionné", 
    "Expert GeoGebra"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden pt-20">
      {/* Unique Mobile Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-4 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full animate-float-mobile"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-purple-400/30 rotate-45 animate-spin-mobile"></div>
        <div className="absolute bottom-1/3 left-8 w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-orange-400/30 animate-pulse"></div>
        
        {/* Mobile-specific math symbols */}
        {['π', '∑', '∫', '√', '∞', '∆'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-2xl text-white/5 font-bold select-none animate-float-symbols"
            style={{
              left: `${20 + (index * 12)}%`,
              top: `${30 + (index * 8)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + (index * 0.3)}s`
            }}
          >
            {symbol}
          </div>
        ))}

        {/* Interactive particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-particles-mobile"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6 py-8 text-center">
        {/* Profile Section */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="relative inline-block mb-6">
            {/* Animated rings around profile */}
            <div className="absolute inset-0 animate-ring-mobile">
              <div className="w-32 h-32 border-2 border-emerald-400/50 rounded-full"></div>
            </div>
            <div className="absolute inset-2 animate-ring-mobile-reverse">
              <div className="w-28 h-28 border-2 border-blue-400/30 rounded-full"></div>
            </div>
            
            <img
              src={portfolioData.personal.profileImage}
              alt={portfolioData.personal.name}
              className="relative z-10 w-32 h-32 object-cover rounded-full border-4 border-white/20"
            />
            
            {/* Floating math symbols around profile */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              π
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
              ∑
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {portfolioData.personal.name}
          </h1>
          
          {/* Animated title with mobile-specific animation */}
          <div className="h-8 mb-4 overflow-hidden">
            <div 
              className="transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${currentTextIndex * 2}rem)` }}
            >
              {animatedTexts.map((text, index) => (
                <div key={index} className="h-8 flex items-center justify-center">
                  <span className="text-xl font-semibold text-emerald-400">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-specific content layout */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg text-gray-300 leading-relaxed px-4">
            Passionné par l'enseignement des mathématiques au Maroc
          </p>

          {/* Quick stats for mobile */}
          <div className="grid grid-cols-3 gap-4 px-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-400">4+</div>
              <div className="text-xs text-gray-300">Années</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-400">200+</div>
              <div className="text-xs text-gray-300">Élèves</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
              <div className="text-2xl font-bold text-orange-400">95%</div>
              <div className="text-xs text-gray-300">Réussite</div>
            </div>
          </div>

          {/* Mobile CTA buttons */}
          <div className="space-y-3 px-4">
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95"
            >
              Découvrir mon parcours
            </button>
            <button className="w-full border-2 border-white/30 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95">
              Télécharger CV
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/70" size={28} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-mobile {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes spin-mobile {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ring-mobile {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
        }
        
        @keyframes ring-mobile-reverse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-180deg) scale(0.95); }
        }
        
        @keyframes float-symbols {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-20px) translateX(10px) rotate(180deg); 
            opacity: 0.1;
          }
        }
        
        @keyframes particles-mobile {
          0% { 
            transform: translateY(0px) scale(0.5); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-30px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-60px) scale(0.3); 
            opacity: 0; 
          }
        }
        
        .animate-float-mobile {
          animation: float-mobile 4s ease-in-out infinite;
        }
        
        .animate-spin-mobile {
          animation: spin-mobile 8s linear infinite;
        }
        
        .animate-ring-mobile {
          animation: ring-mobile 6s ease-in-out infinite;
        }
        
        .animate-ring-mobile-reverse {
          animation: ring-mobile-reverse 4s ease-in-out infinite;
        }
        
        .animate-float-symbols {
          animation: float-symbols ease-in-out infinite;
        }
        
        .animate-particles-mobile {
          animation: particles-mobile linear infinite;
        }
        
        .border-l-8 { border-left-width: 8px; }
        .border-r-8 { border-right-width: 8px; }
        .border-b-14 { border-bottom-width: 14px; }
      `}</style>
    </section>
  );
};

export { MobileNavigation, MobileHeroSection };