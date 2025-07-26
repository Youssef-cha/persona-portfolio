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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrblqjga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message envoyé avec succès !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ou me contacter directement par email.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Morphing shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full animate-morphing"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-lg animate-morphing-delayed transform rotate-45"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Math Symbols with enhanced animation */}
        {['∮', '∇', '∀', '∃', '⊕', '⊗', '∂', '∝', '∈', '∋', '⊂', '⊃'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-2xl text-white/8 font-bold select-none animate-enhanced-float"
            style={{
              left: `${15 + (index * 7)}%`,
              top: `${10 + (index * 6)}%`,
              animationDelay: `${index * 0.4}s`,
              animationDuration: `${6 + (index * 0.2)}s`
            }}
          >
            {symbol}
          </div>
        ))}
        
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q200,20 400,50 T800,50 T1200,50 T1600,50 T2000,50"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-flow-lines"
          />
          <path
            d="M0,150 Q300,120 600,150 T1200,150 T1800,150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-flow-lines-delayed"
          />
        </svg>
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
                <div className="text-center py-12 animate-fade-in">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                    <CheckCircle className="mx-auto text-green-400 mb-4 relative z-10 animate-bounce-subtle" size={80} />
                  </div>
                  <h4 className="text-3xl font-bold text-green-400 mb-3 animate-slide-up">Message Envoyé !</h4>
                  <p className="text-gray-300 text-lg animate-slide-up-delayed">Je vous répondrai dans les plus brefs délais.</p>
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full animate-expand"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-gray-300 text-sm font-medium transition-colors group-hover:text-emerald-400">
                        Nom complet
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 
                                 focus:border-emerald-400 focus:ring-emerald-400/20 
                                 transition-all duration-300 hover:bg-white/15
                                 focus:bg-white/15 backdrop-blur-sm"
                        placeholder="Votre nom complet"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-gray-300 text-sm font-medium transition-colors group-hover:text-blue-400">
                        Adresse email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 
                                 focus:border-blue-400 focus:ring-blue-400/20 
                                 transition-all duration-300 hover:bg-white/15
                                 focus:bg-white/15 backdrop-blur-sm"
                        placeholder="votre@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="text-gray-300 text-sm font-medium transition-colors group-hover:text-purple-400">
                      Sujet du message
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 
                               focus:border-purple-400 focus:ring-purple-400/20 
                               transition-all duration-300 hover:bg-white/15
                               focus:bg-white/15 backdrop-blur-sm"
                      placeholder="Sujet de votre message"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-gray-300 text-sm font-medium transition-colors group-hover:text-orange-400">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 
                               focus:border-orange-400 focus:ring-orange-400/20 
                               transition-all duration-300 hover:bg-white/15
                               focus:bg-white/15 backdrop-blur-sm resize-none"
                      placeholder="Décrivez votre projet, vos questions ou simplement dites bonjour..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive w-full h-14 bg-gradient-to-r from-emerald-500 to-blue-500 
                             hover:from-emerald-600 hover:to-blue-600 
                             disabled:from-gray-500 disabled:to-gray-600
                             text-white font-semibold text-lg
                             transition-all duration-300 transform hover:scale-[1.02] 
                             hover:shadow-2xl disabled:hover:scale-100
                             disabled:cursor-not-allowed
                             focus:ring-4 focus:ring-emerald-500/30
                             backdrop-blur-sm border-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer le Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-400 text-sm">
                    En soumettant ce formulaire, vous acceptez d'être contacté par email.
                  </p>
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

        @keyframes morphing {
          0% { 
            transform: scale(1) rotate(0deg); 
            border-radius: 50%; 
          }
          25% { 
            transform: scale(1.2) rotate(90deg); 
            border-radius: 30%; 
          }
          50% { 
            transform: scale(0.8) rotate(180deg); 
            border-radius: 10%; 
          }
          75% { 
            transform: scale(1.1) rotate(270deg); 
            border-radius: 60%; 
          }
          100% { 
            transform: scale(1) rotate(360deg); 
            border-radius: 50%; 
          }
        }

        @keyframes morphing-delayed {
          0% { 
            transform: scale(1) rotate(0deg); 
            border-radius: 20%; 
          }
          30% { 
            transform: scale(1.3) rotate(120deg); 
            border-radius: 80%; 
          }
          60% { 
            transform: scale(0.7) rotate(240deg); 
            border-radius: 40%; 
          }
          100% { 
            transform: scale(1) rotate(360deg); 
            border-radius: 20%; 
          }
        }

        @keyframes float-particles {
          0% { 
            transform: translateY(0px) translateX(0px) scale(0.5); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-30px) translateX(20px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-60px) translateX(-10px) scale(0.3); 
            opacity: 0; 
          }
        }

        @keyframes enhanced-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-10px) translateX(-15px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-25px) translateX(5px) rotate(270deg) scale(1.05); 
          }
        }

        @keyframes flow-lines {
          0% { stroke-dasharray: 0 1000; }
          50% { stroke-dasharray: 1000 1000; }
          100% { stroke-dasharray: 1000 0; }
        }

        @keyframes flow-lines-delayed {
          0% { stroke-dasharray: 0 800; }
          60% { stroke-dasharray: 800 800; }
          100% { stroke-dasharray: 800 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 4rem; }
        }

        .animate-morphing {
          animation: morphing 8s ease-in-out infinite;
        }

        .animate-morphing-delayed {
          animation: morphing-delayed 10s ease-in-out infinite;
        }

        .animate-float-particles {
          animation: float-particles linear infinite;
        }

        .animate-enhanced-float {
          animation: enhanced-float ease-in-out infinite;
        }

        .animate-flow-lines {
          animation: flow-lines 4s ease-in-out infinite;
        }

        .animate-flow-lines-delayed {
          animation: flow-lines-delayed 6s ease-in-out infinite 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-out 0.3s both;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;