import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { portfolioData } from '../data/mock';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');
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

  const tabs = [
    { id: 'education', label: 'Formation', icon: GraduationCap, color: 'emerald' },
    { id: 'experience', label: 'Expérience', icon: BookOpen, color: 'blue' },
    { id: 'skills', label: 'Compétences', icon: Award, color: 'orange' },
    { id: 'tools', label: 'Outils', icon: Users, color: 'purple' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-teal-500 border-emerald-400',
      blue: 'from-blue-500 to-indigo-500 border-blue-400',
      orange: 'from-orange-500 to-red-500 border-orange-400',
      purple: 'from-purple-500 to-pink-500 border-purple-400',
      teal: 'from-teal-500 to-cyan-500 border-teal-400',
      rose: 'from-rose-500 to-pink-500 border-rose-400',
      yellow: 'from-yellow-500 to-orange-500 border-yellow-400',
      green: 'from-green-500 to-lime-500 border-green-400',
      indigo: 'from-indigo-500 to-blue-500 border-indigo-400'
    };
    return colors[color] || colors.blue;
  };

  const SkillBar = ({ skill, index }) => (
    <div className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full transition-all duration-1000 delay-${index * 200}`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            animation: isVisible ? 'glow 2s ease-in-out infinite alternate' : 'none'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes compétences et ma passion pour l'enseignement des mathématiques
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`interactive flex items-center gap-2 px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${getColorClasses(tab.color)} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                }`}
                style={{
                  animation: isVisible ? `slideInUp ${0.5 + index * 0.1}s ease-out both` : 'none'
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 ${getColorClasses(edu.color)} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(edu.color)} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">Année: {edu.year}</p>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <img
                        src={exp.image}
                        alt={exp.institution}
                        className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(exp.color)} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <BookOpen className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                          <p className="text-gray-600 font-medium">{exp.institution}</p>
                          <p className="text-gray-500">{exp.years}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-gray-700">
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Award className="text-emerald-500" size={28} />
                  Compétences Techniques
                </h3>
                <div className="space-y-6">
                  {portfolioData.skills.techniques.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Users className="text-purple-500" size={28} />
                  Compétences Humaines
                </h3>
                <div className="space-y-6">
                  {portfolioData.skills.soft.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index + 4} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioData.mathTools.map((tool, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 interactive ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          from {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          to {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;