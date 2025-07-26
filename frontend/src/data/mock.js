// Mock data pour le portfolio de Karim El Mansouri
export const portfolioData = {
  personal: {
    name: "Karim El Mansouri",
    age: 29,
    location: "Casablanca, Maroc",
    email: "karim.elmansouri@gmail.com",
    phone: "+212 6 12 34 56 78",
    title: "Professeur de Mathématiques",
    heroDescription: "Passionné par l'enseignement des mathématiques, je transforme les concepts abstraits en expériences d'apprentissage concrètes et engageantes.",
    cvLink: "/Karim_CV.pdf"
  },
  
  education: [
    {
      id: 1,
      degree: "Master MEEF (Métiers de l'Enseignement, de l'Éducation et de la Formation)",
      institution: "Faculté des Sciences de l'Éducation, Rabat",
      year: "2020",
      description: "Formation approfondie en pédagogie et didactique des mathématiques",
      color: "emerald"
    },
    {
      id: 2,
      degree: "Licence en Mathématiques Fondamentales",
      institution: "Université Hassan II de Casablanca",
      year: "2018",
      description: "Solide formation en analyse, algèbre, géométrie et statistiques",
      color: "blue"
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "Professeur de Mathématiques",
      institution: "Collège Al Amal, Casablanca",
      years: "2020 - 2024",
      details: [
        "Enseignement des mathématiques (collège)",
        "Utilisation de GeoGebra, Desmos",
        "Évaluations continues et cours différenciés",
        "Participation aux conseils de classe",
        "Animation de club de mathématiques"
      ],
      color: "orange",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 2,
      role: "Professeur stagiaire",
      institution: "École Primaire Al Qods, Casablanca",
      years: "2020",
      details: [
        "Encadrement pédagogique CM2",
        "Activités logiques et ludiques",
        "Adaptation pédagogique au primaire"
      ],
      color: "teal",
      image: "https://picsum.photos/300/200?random=3"
    }
  ],
  
  skills: {
    techniques: [
      { name: "Explication claire des notions abstraites", level: 95, color: "emerald" },
      { name: "Maîtrise des outils numériques (GeoGebra, Desmos)", level: 90, color: "blue" },
      { name: "Création de supports pédagogiques", level: 88, color: "purple" },
      { name: "Gestion de classe", level: 92, color: "orange" }
    ],
    soft: [
      { name: "Pédagogie et patience", level: 98, color: "rose" },
      { name: "Dynamisme et motivation", level: 95, color: "yellow" },
      { name: "Esprit d'équipe", level: 90, color: "green" },
      { name: "Sens de l'organisation", level: 93, color: "indigo" }
    ]
  },
  
  languages: {
    français: { level: "Courant", percentage: 90, color: "blue" },
    arabe: { level: "Langue maternelle", percentage: 100, color: "emerald" },
    anglais: { level: "Intermédiaire", percentage: 70, color: "orange" }
  },
  
  socials: {
    linkedin: "https://www.linkedin.com/in/karim-elmansouri",
    instagram: "https://www.instagram.com/karim.elmansouri",
    github: "https://github.com/karim-elmansouri"
  },
  
  testimonials: [
    {
      id: 1,
      name: "Directeur Ahmed Benali",
      role: "Collège Al Amal",
      text: "Karim est un enseignant exceptionnel qui sait motiver ses élèves et les faire progresser de manière remarquable.",
      avatar: "https://picsum.photos/80/80?random=4"
    },
    {
      id: 2,
      name: "Parent d'élève",
      role: "Mme Fatima Zahra",
      text: "Grâce à M. El Mansouri, mon fils a développé une véritable passion pour les mathématiques.",
      avatar: "https://picsum.photos/80/80?random=5"
    }
  ],
  
  mathTools: [
    {
      name: "GeoGebra",
      description: "Géométrie dynamique et visualisation",
      icon: "📐",
      color: "blue"
    },
    {
      name: "Desmos",
      description: "Calculatrice graphique interactive",
      icon: "📊",
      color: "green"
    },
    {
      name: "LaTeX",
      description: "Rédaction de documents mathématiques",
      icon: "📝",
      color: "purple"
    }
  ]
};