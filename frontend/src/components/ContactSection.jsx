import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Instagram, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialIcons = [
    { icon: Linkedin, url: portfolioData.socials.linkedin, color: 'from-blue-600 to-blue-800', name: 'LinkedIn' },
    { icon: Github, url: portfolioData.socials.github, color: 'from-gray-700 to-gray-900', name: 'GitHub' },
    { icon: Instagram, url: portfolioData.socials.instagram, color: 'from-pink-500 to-purple-600', name: 'Instagram' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Math Symbols */}
        {['∮', '∇', '∀', '∃', '⊕', '⊗', '∂', '∝'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-2xl text-white/5 font-bold select-none"
            style={{
              left: `${15 + (index * 10)}%`,
              top: `${10 + (index * 8)}%`,
              animation: `float ${4 + (index * 0.3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Restons en Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            N'hésitez pas à me contacter pour discuter de projets éducatifs, de collaborations ou simplement pour échanger sur les mathématiques !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="text-emerald-400" size={28} />
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group interactive">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">{portfolioData.personal.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group interactive">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Téléphone</p>
                    <p className="text-white font-medium">{portfolioData.personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group interactive">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Localisation</p>
                    <p className="text-white font-medium">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* CV Download */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <button className="interactive w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                  <Download size={18} />
                  Télécharger mon CV
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-gray-300 text-sm mb-4">Suivez-moi sur :</p>
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`interactive w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                        title={social.name}
                      >
                        <Icon className="text-white" size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-bold mb-4">Langues Parlées</h4>
              <div className="space-y-3">
                {Object.entries(portfolioData.languages).map(([lang, info], index) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="capitalize font-medium">{lang}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${info.color === 'blue' ? 'from-blue-400 to-blue-600' : info.color === 'emerald' ? 'from-emerald-400 to-emerald-600' : 'from-orange-400 to-orange-600'} rounded-full transition-all duration-1000`}
                          style={{ 
                            width: isVisible ? `${info.percentage}%` : '0%',
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-300">{info.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="text-blue-400" size={28} />
                Envoyez-moi un Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-green-400 mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-green-400 mb-2">Message Envoyé !</h4>
                  <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="interactive w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;