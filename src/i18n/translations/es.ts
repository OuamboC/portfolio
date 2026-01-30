export const es = {
  // Navbar
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    services: "Servicios",
    experience: "Experiencia",
    contact: "Contacto",
    language: "Idioma",
  },
  // Hero
  hero: {
    greeting: "Hola, soy",
    title: "Ingeniero de Software Full-Stack",
    description:
      "Desarrollo aplicaciones SaaS y empresariales seguras y escalables con Java, Spring Boot, React y herramientas modernas. Graduado con honores (First-Class) en Ingeniería de Software, apasionado por el código limpio y los sistemas robustos.",
    contactMe: "Contáctame",
    downloadCV: "Descargar CV",
  },
  // About
  about: {
    title: "Sobre",
    titleHighlight: "Mí",
    subtitle: "Ingeniero de Software Full-Stack",
    description1:
      "Soy graduado con honores (First-Class) en Ingeniería de Software por la Universidad Metropolitana de Manchester. Me apasiona construir aplicaciones seguras y escalables, con experiencia en desarrollo full-stack utilizando Java, Spring Boot, React y tecnologías cloud modernas.",
    description2:
      "Disfruto resolviendo problemas complejos y transformando ideas en sistemas robustos listos para producción. Desde plataformas SaaS multi-tenant hasta aplicaciones sociales en tiempo real, me enfoco en el código limpio, el rendimiento y la entrega de valor real.",
    experience: "3+ Años de Experiencia",
    experienceDesc: "En programación",
    projects: "5+ Proyectos",
    projectsDesc: "Completados con éxito",
    users: "100+ Usuarios",
    usersDesc: "En la plataforma WengHR",
    name: "Nombre:",
    location: "Ubicación:",
    email: "Correo:",
    availability: "Disponibilidad:",
    openToWork: "Disponible para trabajar",
  },
  // Skills
  skills: {
    badge: "Mi Expertise",
    title: "Habilidades y",
    titleHighlight: "Stack Tecnológico",
    description:
      "Tecnologías y herramientas que utilizo para dar vida a las ideas",
    languages: "Lenguajes",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de Datos",
    cloudDevops: "Cloud & DevOps",
    testingSecurity: "Testing & Seguridad",
  },
  // Projects
  projects: {
    title: "Proyectos",
    titleHighlight: "Destacados",
    description:
      "Una selección de proyectos que muestran mis habilidades y experiencia",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código",
    liveDemo: "Demo en Vivo",
    viewMoreOnGithub: "Ver más en GitHub",
    items: [
      {
        id: 1,
        title: "WengHR",
        description:
          "Sistema de gestión de RRHH multi-tenant con gestión de empleados, políticas de permisos personalizables y programación de turnos. Incluye RBAC de 4 niveles, autenticación JWT y soporte i18n. Probado en beta con más de 100 usuarios en múltiples organizaciones.",
      },
      {
        id: 2,
        title: "Chirrup",
        description:
          "Plataforma de redes sociales full-stack con perfiles de usuario, publicaciones y me gusta. Consultas backend optimizadas reduciendo el tiempo de carga del feed en un 40%, soportando más de 200 usuarios activos.",
      },
      {
        id: 3,
        title: "LM Global Solutions",
        description:
          "Sitio web profesional para un cliente de importación/exportación. Diseño responsive con soporte bilingüe (francés/inglés), formularios de contacto y catálogo de servicios. Entregado el mismo día.",
      },
      {
        id: 4,
        title: "Portfolio Personal",
        description:
          "Un sitio web de portafolio moderno y responsive con soporte de internacionalización (EN/FR/ES). Construido con React, TypeScript, Tailwind CSS y Framer Motion para animaciones fluidas.",
      },
    ] as { id: number; title: string; description: string }[],
  },

  // Services
  services: {
    title: "Mis",
    titleHighlight: "Servicios",
    description: "Servicios que ofrezco para ayudar a materializar tus ideas",
    webDev: "Desarrollo Web",
    webDevDesc:
      "Construcción de aplicaciones web interactivas y de alto rendimiento utilizando frameworks modernos como React y Next.js con código limpio.",
    webDevFeatures: [
      "React & Vue.js",
      "Diseño Responsivo",
      "Optimización SEO",
      "Alto Rendimiento",
    ],
    backendDev: "Desarrollo Backend",
    backendDevDesc:
      "Creación de aplicaciones robustas con Java, Spring Boot y Node.js. APIs RESTful, microservicios y diseño de bases de datos.",
    backendDevFeatures: [
      "Java & Spring Boot",
      "APIs RESTful",
      "Diseño de DB",
      "Autenticación JWT",
    ],
    cloudServices: "Servicios Cloud",
    cloudServicesDesc:
      "Despliegue y gestión de aplicaciones en AWS y GCP. Pipelines CI/CD, contenerización con Docker y arquitecturas serverless.",
    cloudServicesFeatures: [
      "Plataformas SaaS",
      "Despliegue en la Nube",
      "Docker & CI/CD",
      "Sistemas Multi-tenant",
    ],
    mobileDev: "Desarrollo Móvil",
    mobileDevDesc:
      "Desarrollo de aplicaciones móviles multiplataforma con React Native, ofreciendo experiencias nativas en iOS y Android.",
    apiIntegration: "Integración de APIs",
    apiIntegrationDesc:
      "Integración de servicios de terceros, creación de APIs personalizadas y garantía de intercambio seguro de datos.",
    consulting: "Consultoría Técnica",
    consultingDesc:
      "Orientación técnica en decisiones de arquitectura, revisiones de código y mejores prácticas para el desarrollo escalable.",
    ctaText: "¿Interesado en trabajar juntos?",
    ctaButton: "Hablemos",
  },
  // Experience
  experience: {
    title: "Experiencia",
    titleHighlight: "Laboral",
    description: "Mi trayectoria profesional y puntos clave de mi carrera",
    present: "Actualidad",
    jobs: [
      {
        role: "Pasante de Desarrollo ERP",
        company: "COGENI S.A.",
        duration: "Junio 2025 - Diciembre 2025",
        description: [
          "Mejora de módulos ERP y fortalecimiento del control de acceso basado en roles (RBAC), reduciendo errores del sistema en un 25%",
          "Optimización de la funcionalidad de billetera ERP integrando pagos de Mobile Money, aumentando la tasa de éxito de transacciones en un 30%",
          "Automatización de casos de prueba para mejorar la calidad del código y reducir el trabajo de pruebas manuales",
        ],
      },
      {
        role: "Pasante de Ingeniería de Software",
        company: "COGENI S.A.",
        duration: "Junio 2024 - Septiembre 2024",
        description: [
          "Colaboración con desarrolladores para alinear mejoras del ERP con necesidades de negocio, reduciendo el tiempo de entrega en un 15%",
          "Diseño de propuestas de arquitectura de sistemas integradas en la próxima versión del ERP",
          "Mejora de la escalabilidad para soportar un crecimiento proyectado del 40% en usuarios",
        ],
      },
      {
        role: "Pasante de Marketing Digital",
        company: "COGENI S.A.",
        duration: "Junio 2023 - Septiembre 2023",
        description: [
          "Gestión de redes sociales para aumentar la visibilidad de la marca y el alcance en el mercado",
          "Creación de estrategias de contenido que mejoraron la interacción online",
          "Análisis de tendencias de mercado para apoyar iniciativas de desarrollo de negocio",
        ],
      },
    ],
  },
  // Contact
  contact: {
    title: "Ponte en",
    titleHighlight: "Contacto",
    description:
      "¿Tienes un proyecto en mente? Trabajemos juntos para darle vida.",
    subtitle: "Hablemos de tu proyecto",
    info: "Siempre estoy interesado en nuevos proyectos y oportunidades. ¡No dudes en contactarme!",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    yourName: "Tu Nombre",
    yourEmail: "Tu Correo",
    subject: "Asunto",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    namePlaceholder: "Nombre Completo",
    emailPlaceholder: "tu@email.com",
    subjectPlaceholder: "Oferta de trabajo",
    sending: "Enviando...",
    sendMessage: "Enviar Mensaje",
    successMessage: "¡Mensaje enviado con éxito!",
    errorMessage: "Error al enviar el mensaje. Inténtalo de nuevo.",
  },
  // Footer
  footer: {
    description:
      "Ingeniero de Software Full-Stack construyendo aplicaciones escalables con tecnologías modernas.",
    subtitle: "Ingeniero de Software Full-Stack",
    quickLinks: "Enlaces Rápidos",
    connect: "Conectar",
    rights: "Todos los derechos reservados.",
  },
  // Education
  education: {
    title: "Mi",
    titleHighlight: "Formación",
    description: "Antecedentes académicos y cualificaciones",
    academicHistory: "Historial Académico",
    grade: "Calificación:",
  },
} as const;
