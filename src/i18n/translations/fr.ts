export const fr = {
  // Navbar
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    services: "Services",
    experience: "Expérience",
    contact: "Contact",
    language: "Langue",
  },
  // Hero
  hero: {
    greeting: "Bonjour, je suis",
    title: "Ingénieur Logiciel Full-Stack",
    description:
      "Développement d'applications SaaS et d'entreprise sécurisées et évolutives avec Java, Spring Boot, React et les outils modernes. Diplômé en génie logiciel avec la distinction First-Class Honours, passionné par le code propre et les systèmes robustes.",
    contactMe: "Me contacter",
    downloadCV: "Télécharger CV",
  },
  // About
  about: {
    title: "À propos de",
    titleHighlight: "Moi",
    subtitle: "Ingénieur Logiciel Full-Stack",
    description1:
      "Je suis diplômé en génie logiciel avec la distinction First-Class Honours de l'Université Métropolitaine de Manchester. Passionné par la création d'applications sécurisées et évolutives, mon expertise couvre le développement full-stack avec Java, Spring Boot, React et les technologies cloud modernes.",
    description2:
      "J'aime résoudre des problèmes complexes et transformer des idées en systèmes robustes. Des plateformes SaaS multi-tenants aux applications sociales en temps réel, je me concentre sur la qualité du code, la performance et la création de valeur réelle pour les utilisateurs.",
    experience: "3+ Ans d'Expérience",
    experienceDesc: "En développement",
    projects: "5+ Projets",
    projectsDesc: "Réalisés avec succès",
    users: "100+ Utilisateurs",
    usersDesc: "Sur la plateforme WengHR",
    name: "Nom :",
    location: "Lieu :",
    email: "Email :",
    availability: "Disponibilité :",
    openToWork: "Ouvert aux opportunités",
  },
  // Skills
  skills: {
    badge: "Mon Expertise",
    title: "Compétences &",
    titleHighlight: "Stack Technique",
    description:
      "Technologies et outils que j'utilise pour donner vie aux idées",
    languages: "Langages",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de données",
    cloudDevops: "Cloud & DevOps",
    testingSecurity: "Tests & Sécurité",
  },
  // Projects
  projects: {
    title: "Projets",
    titleHighlight: "Phares",
    description:
      "Une sélection de projets qui mettent en valeur mes compétences et mon expérience",
    viewProject: "Voir le projet",
    viewCode: "Voir le code",
    liveDemo: "Démo en direct",
    viewMoreOnGithub: "Voir plus sur GitHub",
    items: [
      {
        id: 1,
        title: "WengHR",
        description:
          "Système de gestion RH multi-tenant avec gestion des employés, politiques de congés personnalisables et planification des horaires. Comprend un RBAC à 4 niveaux, l'authentification JWT et le support i18n. Testé en version bêta avec plus de 100 utilisateurs dans plusieurs organisations.",
      },
      {
        id: 2,
        title: "Chirrup",
        description:
          "Plateforme de médias sociaux full-stack avec profils d'utilisateurs, publications et mentions j'aime. Requêtes backend optimisées réduisant le temps de chargement du flux de 40%, supportant plus de 200 utilisateurs actifs.",
      },
      {
        id: 3,
        title: "LM Global Solutions",
        description:
          "Site web professionnel pour un client en import/export. Design responsive avec support bilingue (français/anglais), formulaires de contact et vitrine de services. Livré le jour même.",
      },
      {
        id: 4,
        title: "Portfolio Personnel",
        description:
          "Un site portfolio moderne et responsive avec support d'internationalisation (EN/FR/ES). Construit avec React, TypeScript, Tailwind CSS et Framer Motion pour des animations fluides.",
      },
    ] as { id: number; title: string; description: string }[],
  },

  // Services
  services: {
    title: "Mes",
    titleHighlight: "Services",
    description: "Des solutions sur mesure pour vos projets technologiques",
    webDev: "Développement Web",
    webDevDesc:
      "Création d'applications web réactives et performantes avec React et Next.js, centrées sur un code propre et maintenable.",
    webDevFeatures: [
      "React & Vue.js",
      "Design Réactif",
      "Optimisation SEO",
      "Haute Performance",
    ],
    backendDev: "Développement Backend",
    backendDevDesc:
      "Conception de serveurs robustes avec Java, Spring Boot et Node.js. APIs REST, microservices et architecture de données.",
    backendDevFeatures: [
      "Java & Spring Boot",
      "APIs RESTful",
      "Design de Bases de Données",
      "Authentification JWT",
    ],
    cloudServices: "Services Cloud",
    cloudServicesDesc:
      "Déploiement sur AWS/GCP, mise en place de pipelines CI/CD et conteneurisation avec Docker.",
    cloudServicesFeatures: [
      "Plateformes SaaS",
      "Déploiement Cloud",
      "Docker & CI/CD",
      "Systèmes Multi-tenants",
    ],
    mobileDev: "Développement Mobile",
    mobileDevDesc:
      "Applications mobiles multiplateformes avec React Native pour une expérience native sur iOS et Android.",
    apiIntegration: "Intégration d'API",
    apiIntegrationDesc:
      "Connexion de services tiers et sécurisation des échanges de données entre systèmes.",
    consulting: "Conseil Technique",
    consultingDesc:
      "Accompagnement sur l'architecture logicielle, les revues de code et les bonnes pratiques de développement.",
    ctaText: "Intéressé par une collaboration ?",
    ctaButton: "Discutons-en",
  },
  // Experience
  experience: {
    title: "Expérience",
    titleHighlight: "Professionnelle",
    description: "Mon parcours et mes réalisations marquantes",
    present: "Aujourd'hui",
    jobs: [
      {
        role: "Stagiaire Développeur ERP",
        company: "COGENI S.A.",
        duration: "Juin 2025 - Décembre 2025",
        description: [
          `Amélioration des modules ERP et renforcement du contrôle d'accès (RBAC), réduisant les erreurs système de 25%`,
          `Optimisation du module portefeuille ERP via l'intégration des paiements Mobile Money, augmentant le succès des transactions de 30%`,
          `Automatisation des tests pour garantir la qualité du code et réduire les tests manuels`,
        ],
      },
      {
        role: "Stagiaire en Génie Logiciel",
        company: "COGENI S.A.",
        duration: "Juin 2024 - Septembre 2024",
        description: [
          `Collaboration étroite pour aligner les évolutions ERP sur les besoins métier, réduisant les délais de livraison de 15%`,
          `Conception de propositions d'architecture intégrées dans la nouvelle version de l'ERP`,
          `Amélioration de l'évolutivité pour supporter une croissance prévue de 40% des utilisateurs`,
        ],
      },
      {
        role: "Stagiaire en Marketing Digital",
        company: "COGENI S.A.",
        duration: "Juin 2023 - Septembre 2023",
        description: [
          `Gestion des réseaux sociaux pour accroître la visibilité de la marque et la portée sur le marché`,
          `Création de stratégies de contenu ayant boosté l'engagement en ligne`,
          `Analyse des tendances du marché pour soutenir le développement commercial`,
        ],
      },
    ],
  },
  // Contact
  contact: {
    title: "Me",
    titleHighlight: "Contacter",
    description:
      "Un projet en tête ? Travaillons ensemble pour concrétiser vos idées.",
    subtitle: "Discutons de votre projet",
    info: "Disponible pour de nouveaux défis. N'hésitez pas à me contacter par email ou via le formulaire !",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    yourName: "Votre Nom",
    yourEmail: "Votre Email",
    subject: "Objet",
    message: "Message",
    messagePlaceholder: "Parlez-moi de votre projet...",
    namePlaceholder: "Nom Complet",
    emailPlaceholder: "votre@email.com",
    subjectPlaceholder: "Offre d'emploi / Projet",
    sending: "Envoi en cours...",
    sendMessage: "Envoyer le message",
    successMessage: "Message envoyé avec succès !",
    errorMessage: "Échec de l'envoi. Veuillez réessayer.",
  },
  // Footer
  footer: {
    description:
      "Ingénieur Logiciel Full-Stack spécialisé dans les applications évolutives et sécurisées.",
    subtitle: "Ingénieur Logiciel Full-Stack",
    quickLinks: "Liens Rapides",
    connect: "Réseaux",
    rights: "Tous droits réservés.",
  },
  // Education
  education: {
    title: "Ma",
    titleHighlight: "Formation",
    description: "Parcours académique et diplômes",
    academicHistory: "Parcours Académique",
    grade: "Note :",
  },
} as const;
