import type { Profile } from "./types";

/**
 * ============================================================================
 *  Contenido del sitio — única fuente de verdad.
 *  Site content — single source of truth.
 * ----------------------------------------------------------------------------
 *  Los datos provienen del CV de Anderson Benites Yupanqui.
 *  Dos cosas son estimaciones y conviene ajustarlas a tu criterio:
 *    · `proficiency` de cada skill (el CV no declara niveles).
 *    · `repositoryUrl` / `liveUrl` de los proyectos: añade los enlaces que
 *      puedas compartir públicamente; sin ellos la tarjeta simplemente no
 *      muestra botones.
 * ============================================================================
 */
export const profile: Profile = {
  fullName: "Anderson Benites Yupanqui",
  shortName: "Anderson Benites",

  headline: {
    es: "Construyo software a medida para empresas reales: sistemas web, aplicaciones de escritorio e inteligencia artificial aplicada.",
    en: "I build custom software for real businesses: web systems, desktop applications, and applied artificial intelligence.",
  },

  rotatingRoles: [
    { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    { es: "Fundador de KoW Development", en: "Founder of KoW Development" },
    { es: "Ingeniería de Sistemas · UPN", en: "Systems Engineering · UPN" },
  ],

  summary: {
    es: "Estudiante de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte (GPA 16/20), con experiencia profesional desarrollando software a medida para empresas y liderando un equipo de 15 desarrolladores.",
    en: "Computer Systems Engineering student at Universidad Privada del Norte (GPA 16/20), with professional experience building custom software for companies and leading a team of 15 developers.",
  },

  location: {
    es: "Trujillo, La Libertad · Perú",
    en: "Trujillo, La Libertad · Peru",
  },

  availability: {
    es: "Disponible para nuevas oportunidades",
    en: "Open to new opportunities",
  },

  email: "andersonbenitesy@gmail.com",

  resumeUrl: "/CV-Anderson-Benites-Yupanqui.pdf",

  aboutParagraphs: [
    {
      es: "Soy estudiante de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte, con un promedio de 16/20 y especialización en programación, modelado de software y análisis de datos. Me mueve la resolución de problemas reales y la mejora continua.",
      en: "I am a Computer Systems Engineering student at Universidad Privada del Norte, with a 16/20 GPA and a focus on programming, software modeling, and data analysis. I am driven by solving real problems and by continuous improvement.",
    },
    {
      es: "Fundé y dirijo KoW Development, un grupo de 15 estudiantes que desarrolla software para empresas reales. Ahí selecciono los proyectos, asigno los roles y superviso la arquitectura, cuidando que el equipo crezca técnicamente en cada entrega.",
      en: "I founded and lead KoW Development, a group of 15 students building software for real companies. There I select the projects, assign roles, and oversee the architecture, making sure the team grows technically with every delivery.",
    },
    {
      es: "Mi experiencia profesional abarca desde una pasantía de 320 horas como Programador de Sistemas en POLYLINE S.A.C. hasta el desarrollo freelance de sistemas de logística, puntos de venta y automatizaciones con inteligencia artificial. Trabajo con C#, Python, Java, JavaScript y SQL, aplicando arquitectura de software a soluciones empresariales.",
      en: "My professional experience ranges from a 320-hour internship as a Systems Programmer at POLYLINE S.A.C. to freelance work on logistics systems, point-of-sale platforms, and AI-driven automation. I work with C#, Python, Java, JavaScript, and SQL, applying software architecture to business solutions.",
    },
  ],

  metrics: [
    { value: "16/20", label: { es: "Promedio académico", en: "Academic GPA" } },
    { value: "15", label: { es: "Desarrolladores liderados", en: "Developers led" } },
    { value: "320 h", label: { es: "Pasantía profesional", en: "Professional internship" } },
    { value: "5", label: { es: "Lenguajes de programación", en: "Programming languages" } },
  ],

  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/AndersonBenitesKoW",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/anderson-benites-06aa2239b/",
    },
    {
      platform: "email",
      label: "andersonbenitesy@gmail.com",
      url: "mailto:andersonbenitesy@gmail.com",
    },
    {
      platform: "whatsapp",
      label: "+51 900 664 591",
      url: "https://wa.me/51900664591",
    },
  ],

  skillCategories: [
    {
      id: "backend",
      icon: "backend",
      name: { es: "Backend", en: "Backend" },
      skills: [
        { name: "C# / ASP.NET Core", proficiency: 88 },
        { name: "Python / FastAPI", proficiency: 85 },
        { name: "Java / Spring Boot", proficiency: 78 },
        { name: ".NET Framework (WinForms/WPF)", proficiency: 80 },
        { name: "APIs REST", proficiency: 85 },
      ],
    },
    {
      id: "frontend",
      icon: "frontend",
      name: { es: "Frontend", en: "Frontend" },
      skills: [
        { name: "JavaScript", proficiency: 85 },
        { name: "Angular", proficiency: 82 },
        { name: "React", proficiency: 80 },
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
      ],
    },
    {
      id: "data",
      icon: "database",
      name: { es: "Datos", en: "Data" },
      skills: [
        { name: "SQL", proficiency: 88 },
        { name: "SQL Server", proficiency: 85 },
        { name: "MySQL", proficiency: 78 },
        { name: "Power BI", proficiency: 70 },
        { name: "Google Colab", proficiency: 72 },
      ],
    },
    {
      id: "tooling",
      icon: "tooling",
      name: { es: "Herramientas", en: "Tooling" },
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "Firebase", proficiency: 75 },
        { name: "VS Code", proficiency: 90 },
        { name: "n8n", proficiency: 70 },
        { name: "Web Scraping", proficiency: 75 },
      ],
    },
  ],

  projects: [
    {
      id: "baldomero-fleet",
      name: "Control de Costos de Flota",
      year: 2026,
      isFeatured: true,
      tagline: {
        es: "Transportes Logísticos Baldomero S.A.C.",
        en: "Transportes Logísticos Baldomero S.A.C.",
      },
      description: {
        es: "Sistema web que optimiza los costos operativos de una flota de camiones comparando el consumo real de combustible por chofer y por ruta contra el promedio esperado, con optimización de rutas y alertas de mantenimiento preventivo y correctivo.",
        en: "Web system that optimizes a truck fleet's operating costs by comparing real fuel consumption per driver and route against the expected average, with route optimization and preventive and corrective maintenance alerts.",
      },
      outcomes: [
        {
          es: "Detecta desviaciones de consumo por chofer y ruta",
          en: "Detects consumption deviations per driver and route",
        },
        {
          es: "Módulo de web scraping que compara precios de combustible por ubicación en tiempo real",
          en: "Web scraping module comparing fuel prices by location in real time",
        },
        {
          es: "Alertas automáticas de mantenimiento preventivo",
          en: "Automatic preventive maintenance alerts",
        },
      ],
      technologies: ["Python", "FastAPI", "React", "Web Scraping"],
    },
    {
      id: "alliker-pos",
      name: "Punto de Venta Alliker",
      year: 2026,
      isFeatured: true,
      tagline: {
        es: "Chifa Pollería Alliker · también proyecto de investigación universitario",
        en: "Chifa Pollería Alliker · also a university research project",
      },
      description: {
        es: "Sistema de Punto de Venta web que digitaliza la gestión de pedidos, ventas e inventario del restaurante, acompañado de una automatización que confirma reservas por teléfono mediante un LLM orquestado con n8n.",
        en: "Web point-of-sale system that digitizes the restaurant's order, sales, and inventory management, together with an automation that confirms reservations by phone through an LLM orchestrated with n8n.",
      },
      outcomes: [
        {
          es: "Gestión digital de pedidos, ventas e inventario",
          en: "Digital management of orders, sales, and inventory",
        },
        {
          es: "Un LLM llama al cliente y confirma la reserva sin intervención humana",
          en: "An LLM calls the customer and confirms the booking with no human involvement",
        },
        {
          es: "Base del proyecto de investigación universitario",
          en: "Foundation of the university research project",
        },
      ],
      technologies: ["Python", "FastAPI", "React", "LLM", "n8n"],
    },
    {
      id: "palta-hass",
      name: "Optimización de Cosecha de Palta Hass",
      year: 2025,
      isFeatured: true,
      tagline: {
        es: "Proyecto propio · Agricultura de precisión",
        en: "Personal project · Precision agriculture",
      },
      description: {
        es: "Sistema de visión por computadora que estima en campo la distribución de calibres de un lote de palta Hass. Recorriendo la hilera en video, detecta y sigue cada fruto para contarlo una sola vez, lo clasifica en las tres categorías comerciales de la NTP 011.018 (Primera ≥180 g, Segunda 120–180 g, Tercera <120 g) y devuelve el reparto porcentual del lote y la recomendación de cosechar o esperar.",
        en: "Computer vision system that estimates the size distribution of a Hass avocado lot directly in the field. Walking the row on video, it detects and tracks each fruit so it is counted only once, classifies it into the three commercial categories of Peru's NTP 011.018 standard (First ≥180 g, Second 120–180 g, Third <120 g), and returns the lot's percentage breakdown along with a harvest-or-wait recommendation.",
      },
      outcomes: [
        {
          es: "Cuenta cada fruto una sola vez gracias al seguimiento multiobjeto en video",
          en: "Counts each fruit only once thanks to multi-object video tracking",
        },
        {
          es: "Clasifica el calibre en las tres categorías comerciales de la NTP 011.018",
          en: "Classifies fruit size into the three commercial categories of the NTP 011.018 standard",
        },
        {
          es: "Devuelve el reparto porcentual del lote y la recomendación de cosechar o esperar",
          en: "Returns the lot's percentage breakdown and a harvest-or-wait recommendation",
        },
        {
          es: "El calibre se infiere del tamaño aparente a distancia de captura controlada, por lo que la resolución de inferencia funciona como parámetro de calibración, no como ajuste de rendimiento",
          en: "Fruit size is inferred from apparent size at a controlled capture distance, so inference resolution acts as a calibration parameter, not a performance setting",
        },
      ],
      technologies: [
        "YOLOv11",
        "BoT-SORT",
        "Python",
        "FastAPI",
        "React",
        "Firestore",
        "Railway",
        "Netlify",
      ],
    },
    {
      id: "kow-website",
      name: "Página Web KoW Development",
      year: 2025,
      isFeatured: false,
      tagline: {
        es: "Director de Proyecto · Publicada en producción",
        en: "Project Director · Live in production",
      },
      description: {
        es: "Lideré el desarrollo del sitio web del grupo KoW Development para presentar los servicios y proyectos del equipo, desde la definición del alcance hasta el despliegue en producción.",
        en: "I led the development of the KoW Development group website to showcase the team's services and projects, from scope definition through production deployment.",
      },
      outcomes: [
        { es: "Publicada y en uso por el equipo", en: "Published and in use by the team" },
        { es: "Dirección técnica del proyecto", en: "Technical direction of the project" },
      ],
      technologies: ["Angular", "Java", "Spring Boot"],
    },
    {
      id: "santa-eulalia",
      name: "Plataforma de Ventas Santa Eulalia",
      year: 2024,
      isFeatured: false,
      tagline: {
        es: "Santa Eulalia del Norte Distribuciones S.A.C.",
        en: "Santa Eulalia del Norte Distribuciones S.A.C.",
      },
      description: {
        es: "Plataforma web de ventas y gestión de pedidos con dos perfiles diferenciados: clientes que compran en línea y empleados que administran ventas y usuarios, sobre una base de datos SQL Server.",
        en: "Web platform for sales and order management with two distinct profiles: customers buying online and employees managing sales and users, on top of a SQL Server database.",
      },
      outcomes: [
        { es: "Compras en línea para clientes", en: "Online purchasing for customers" },
        { es: "Gestión de ventas y usuarios para empleados", en: "Sales and user management for staff" },
      ],
      technologies: ["C#", "ASP.NET Core", "JavaScript", "SQL Server"],
    },
    {
      id: "bodega-andre",
      name: "Sistema de Ventas de Escritorio",
      year: 2024,
      isFeatured: false,
      tagline: {
        es: "Bodega Andre S.A.C. · Aplicación de escritorio",
        en: "Bodega Andre S.A.C. · Desktop application",
      },
      description: {
        es: "Aplicación de escritorio para la gestión de ventas y stock de abarrotes, integrada a una base de datos SQL Server para el control de productos e inventario.",
        en: "Desktop application for grocery sales and stock management, integrated with a SQL Server database for product and inventory control.",
      },
      outcomes: [
        { es: "Control de productos e inventario", en: "Product and inventory control" },
        { es: "Registro de ventas del negocio", en: "Business sales tracking" },
      ],
      technologies: ["C#", ".NET Framework", "SQL Server"],
    },
    {
      id: "esp32-lora",
      name: "Radio-Enlace ESP32-LoRa",
      year: 2025,
      isFeatured: false,
      tagline: {
        es: "Redes Inalámbricas y Telecomunicaciones",
        en: "Wireless Networks and Telecommunications",
      },
      description: {
        es: "Sistema de radioenlace con dispositivos ESP32 y LoRa que permite comunicación por chat entre laptops sin necesidad de internet, con persistencia local de mensajes y un dashboard para monitorear el enlace.",
        en: "Radio link system with ESP32 and LoRa devices enabling chat communication between laptops without internet, with local message persistence and a dashboard to monitor the link.",
      },
      outcomes: [
        { es: "Comunicación sin conexión a internet", en: "Communication with no internet connection" },
        { es: "Persistencia local de los mensajes", en: "Local message persistence" },
        { es: "Dashboard de monitoreo del enlace", en: "Link monitoring dashboard" },
      ],
      technologies: ["ESP32", "LoRa", "Python"],
    },
  ],

  experience: [
    {
      id: "kow-freelance",
      role: {
        es: "Desarrollador de Software / Director de Proyecto",
        en: "Software Developer / Project Director",
      },
      company: "KoW Development (Freelance)",
      period: { es: "Ene. 2026 — Jul. 2026", en: "Jan. 2026 — Jul. 2026" },
      location: { es: "Trujillo, Perú", en: "Trujillo, Peru" },
      summary: {
        es: "Desarrollo de software a medida para empresas, trabajando en equipo y asumiendo la dirección técnica de los proyectos.",
        en: "Custom software development for companies, working as a team and taking technical ownership of the projects.",
      },
      achievements: [
        {
          es: "Construí para Transportes Logísticos Baldomero S.A.C. un sistema web en Python/FastAPI y React que optimiza costos de flota comparando el consumo real de combustible por chofer y ruta contra el promedio esperado.",
          en: "Built a Python/FastAPI and React web system for Transportes Logísticos Baldomero S.A.C. that optimizes fleet costs by comparing real fuel consumption per driver and route against the expected average.",
        },
        {
          es: "Desarrollé un módulo de web scraping que consulta precios de combustible de distintos proveedores según la ubicación y ruta del camión, identificando el mejor precio en tiempo real.",
          en: "Developed a web scraping module that queries fuel prices from different providers based on the truck's location and route, identifying the best available price in real time.",
        },
        {
          es: "Entregué a Chifa Pollería Alliker un sistema de Punto de Venta web para digitalizar la gestión de pedidos, ventas e inventario.",
          en: "Delivered a web point-of-sale system to Chifa Pollería Alliker to digitize order, sales, and inventory management.",
        },
        {
          es: "Automaticé la confirmación de reservas mediante un LLM que llama por teléfono al cliente, orquestado con n8n.",
          en: "Automated reservation confirmation through an LLM that phones the customer, orchestrated with n8n.",
        },
      ],
      technologies: ["Python", "FastAPI", "React", "LLM", "n8n", "Web Scraping"],
    },
    {
      id: "polyline",
      role: { es: "Programador de Sistemas", en: "Systems Programmer" },
      company: "POLYLINE S.A.C.",
      period: { es: "Ago. 2025 — Nov. 2025", en: "Aug. 2025 — Nov. 2025" },
      location: {
        es: "Departamento de Sistemas · Pasantía de 320 horas",
        en: "Systems Department · 320-hour internship",
      },
      summary: {
        es: "Pasantía profesional en el área de Sistemas, cubriendo frontend, backend, integración de APIs e inteligencia artificial aplicada al negocio.",
        en: "Professional internship in the Systems area, covering frontend, backend, API integration, and AI applied to the business.",
      },
      achievements: [
        {
          es: "Implementé botones interactivos en el portal web corporativo integrando APIs REST internas y de terceros, con su front-end (HTML/CSS/JavaScript/Angular) y el backend asociado.",
          en: "Implemented interactive controls on the corporate web portal integrating internal and third-party REST APIs, with their front-end (HTML/CSS/JavaScript/Angular) and associated backend.",
        },
        {
          es: "Desarrollé un panel informativo de noticias con filtros por categoría, búsqueda en tiempo real y scroll infinito, integrando APIs externas para la obtención y normalización de datos.",
          en: "Built a news panel with category filters, real-time search, and infinite scroll, integrating external APIs for data retrieval and normalization.",
        },
        {
          es: "Integré el modelo de inteligencia artificial DeepSeek al chatbot de la empresa, configurando flujos de conversación, mapeo de intenciones y contexto persistente.",
          en: "Integrated the DeepSeek AI model into the company chatbot, configuring conversation flows, intent mapping, and persistent context.",
        },
        {
          es: "Construí en Angular una aplicación web comercial para la venta de páginas web, chatbots, CRM y marketing con IA, integrando APIs de terceros para pagos y gestión de clientes.",
          en: "Built an Angular commercial web application selling websites, chatbots, CRM, and AI marketing, integrating third-party APIs for payments and customer management.",
        },
        {
          es: "Desarrollé el backend empresarial con Spring Boot (Java) y Firebase, implementando servicios REST, endpoints seguros y pruebas de integración.",
          en: "Developed the enterprise backend with Spring Boot (Java) and Firebase, implementing REST services, secured endpoints, and integration tests.",
        },
        {
          es: "Automaticé el sistema de agenda de citas vía chatbot y web, con registro en Google Sheets y notificaciones automáticas por correo.",
          en: "Automated the appointment scheduling system via chatbot and web, with Google Sheets logging and automatic email notifications.",
        },
      ],
      technologies: [
        "Angular",
        "Java",
        "Spring Boot",
        "JavaScript",
        "Firebase",
        "APIs REST",
      ],
    },
    {
      id: "kow-founder",
      role: { es: "Fundador y Director de Proyecto", en: "Founder and Project Director" },
      company: "KoW Development · Universidad Privada del Norte",
      period: { es: "Feb. 2025 — Presente", en: "Feb. 2025 — Present" },
      location: { es: "Trujillo, Perú", en: "Trujillo, Peru" },
      summary: {
        es: "Fundé y lidero un grupo de 15 estudiantes universitarios dedicado al desarrollo de software, promoviendo el trabajo colaborativo y el aprendizaje de nuevas tecnologías.",
        en: "I founded and lead a group of 15 university students devoted to software development, fostering collaborative work and learning new technologies.",
      },
      achievements: [
        {
          es: "Gestiono la selección de proyectos internos, incluidos proyectos para empresas reales.",
          en: "I manage the selection of internal projects, including work for real companies.",
        },
        {
          es: "Asigno los roles del equipo fomentando el crecimiento técnico de cada integrante.",
          en: "I assign team roles, fostering each member's technical growth.",
        },
        {
          es: "Lideré el desarrollo y despliegue de la página web del grupo con Angular y Spring Boot.",
          en: "I led the development and deployment of the group's website with Angular and Spring Boot.",
        },
      ],
      technologies: ["Liderazgo", "Angular", "Spring Boot", "Gestión de proyectos"],
    },
  ],

  education: [
    {
      id: "upn-degree",
      title: {
        es: "Ingeniería de Sistemas Computacionales · GPA 16/20",
        en: "Computer Systems Engineering · GPA 16/20",
      },
      institution: "Universidad Privada del Norte",
      period: { es: "2022 — 2027", en: "2022 — 2027" },
    },
    {
      id: "ccna",
      title: {
        es: "CCNA: Conmutación, Enrutamiento y Redes Inalámbricas",
        en: "CCNA: Switching, Routing and Wireless Essentials",
      },
      institution: "MTPE / Grupo Romero",
      period: { es: "Dic. 2025", en: "Dec. 2025" },
    },
    {
      id: "english-a2",
      title: { es: "Inglés nivel A2", en: "English level A2" },
      institution: "Universidad Privada del Norte / WeTalk",
      period: { es: "2026", en: "2026" },
    },
    {
      id: "analisis-financiero",
      title: { es: "Análisis Financiero", en: "Financial Analysis" },
      institution: "MTPE / Grupo Romero",
      period: { es: "Jul. 2025", en: "Jul. 2025" },
    },
    {
      id: "cisco-data-science",
      title: {
        es: "Introducción a la Ciencia de Datos",
        en: "Introduction to Data Science",
      },
      institution: "Cisco Networking Academy",
      period: { es: "Nov. 2024", en: "Nov. 2024" },
    },
    {
      id: "cisco-iot",
      title: {
        es: "Introducción al Internet de las Cosas",
        en: "Introduction to the Internet of Things",
      },
      institution: "Cisco Networking Academy",
      period: { es: "Nov. 2024", en: "Nov. 2024" },
    },
    {
      id: "cisco-digital-awareness",
      title: { es: "Conciencia Digital", en: "Digital Awareness" },
      institution: "Cisco Networking Academy",
      period: { es: "Nov. 2024", en: "Nov. 2024" },
    },
    {
      id: "excel-intermedio",
      title: { es: "Excel Intermedio", en: "Intermediate Excel" },
      institution: "MTPE / Grupo Romero",
      period: { es: "Feb. 2024", en: "Feb. 2024" },
    },
    {
      id: "cisco-cybersecurity",
      title: {
        es: "Introducción a la Ciberseguridad",
        en: "Introduction to Cybersecurity",
      },
      institution: "Cisco Networking Academy",
      period: { es: "Jun. 2022", en: "Jun. 2022" },
    },
  ],
};
