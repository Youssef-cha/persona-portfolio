import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/mock';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        (prev + 1) % portfolioData.testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % portfolioData.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? portfolioData.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Quote Symbols */}
        {['"', '"', '❝', '❞', '„', '"'].map((quote, index) => (
          <div
            key={index}
            className="absolute text-6xl text-gray-200 font-bold select-none opacity-20"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              animation: `float ${3 + (index * 0.4)}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {quote}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ce que disent mes collègues, élèves et leur parents de mon travail
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className={`relative bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed italic mb-6 min-h-[6rem] flex items-center justify-center">
                "{portfolioData.testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={portfolioData.testimonials[currentIndex].avatar}
                  alt={portfolioData.testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-emerald-400 to-blue-400 hover:scale-110 transition-transform duration-300"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-800">
                    {portfolioData.testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {portfolioData.testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="interactive w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                disabled={portfolioData.testimonials.length <= 1}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="interactive w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                disabled={portfolioData.testimonials.length <= 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {portfolioData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`interactive w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Additional Stats */}
          <div className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Années d'Expérience</h3>
              <p className="text-gray-600">D'enseignement passionné</p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">200+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Élèves Accompagnés</h3>
              <p className="text-gray-600">Vers la réussite</p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">95%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Taux de Réussite</h3>
              <p className="text-gray-600">Résultats excellents</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;