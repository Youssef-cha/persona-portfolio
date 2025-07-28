import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: portfolioData.socials.linkedin, name: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: portfolioData.socials.instagram, name: 'Instagram', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Math symbols */}
        {['∫', '∑', '∞', '∆', 'π'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-4xl text-white/5 font-bold select-none"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${15 + (index * 8)}%`,
              animation: `float ${4 + (index * 0.3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.4}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xl text-emerald-400 font-medium mb-4">
                  {portfolioData.personal.title}
                </p>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionné par l'enseignement des mathématiques et l'innovation pédagogique. 
                  Je m'efforce de rendre les mathématiques accessibles et captivantes pour tous mes élèves.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-emerald-400" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="interactive hover:text-emerald-400 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-blue-400" />
                  <a href={`tel:${portfolioData.personal.phone}`} className="interactive hover:text-blue-400 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-orange-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Navigation Rapide</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="interactive text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Tools */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Outils & Compétences</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">GeoGebra</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">Desmos</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">LaTeX</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">Pédagogie Numérique</span>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-white">Langues</h5>
                <div className="space-y-2">
                  {Object.entries(portfolioData.languages).map(([lang, info]) => (
                    <div key={lang} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 capitalize">{lang}</span>
                      <span className="text-gray-400">{info.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">Suivez-moi :</span>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`interactive w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 hover:shadow-lg hover:bg-gray-700`}
                        title={social.name}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-gray-400 text-sm">
                <p className="flex items-center gap-2 justify-center">
                  © {currentYear} {portfolioData.personal.name}. Fait avec{' '}
                  <Heart size={16} className="text-red-400 animate-pulse" />{' '}
                  pour l'éducation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(10deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;