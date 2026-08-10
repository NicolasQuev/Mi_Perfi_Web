import type { LocalizedText } from "@/i18n/locale";

/**
 * Interface labels — everything the page says that is not profile data.
 * Grouped by the feature that renders it.
 */
export const uiCopy = {
  navigation: {
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Skills", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Formación", en: "Education" },
    contact: { es: "Contacto", en: "Contact" },
    openMenu: { es: "Abrir menú", en: "Open menu" },
    closeMenu: { es: "Cerrar menú", en: "Close menu" },
    switchLanguage: { es: "Cambiar a inglés", en: "Switch to Spanish" },
    skipToContent: { es: "Saltar al contenido", en: "Skip to content" },
  },

  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I'm" },
    primaryAction: { es: "Trabajemos juntos", en: "Let's work together" },
    secondaryAction: { es: "Ver proyectos", en: "View projects" },
    resumeAction: { es: "Descargar CV", en: "Download CV" },
    scrollHint: { es: "Desliza para explorar", en: "Scroll to explore" },
  },

  about: {
    eyebrow: { es: "Sobre mí", en: "About me" },
    title: { es: "Quién hay detrás del código", en: "Who is behind the code" },
  },

  skills: {
    eyebrow: { es: "Stack técnico", en: "Tech stack" },
    title: { es: "Herramientas con las que construyo", en: "Tools I build with" },
    description: {
      es: "Selecciona una categoría para ver el detalle de cada tecnología.",
      en: "Pick a category to see the detail of each technology.",
    },
  },

  projects: {
    eyebrow: { es: "Proyectos", en: "Projects" },
    title: { es: "Trabajo seleccionado", en: "Selected work" },
    description: {
      es: "Filtra por tecnología para encontrar lo que te interesa.",
      en: "Filter by technology to find what interests you.",
    },
    allFilter: { es: "Todos", en: "All" },
    featuredBadge: { es: "Destacado", en: "Featured" },
    viewCode: { es: "Ver código", en: "View code" },
    viewLive: { es: "Ver en vivo", en: "View live" },
    emptyState: {
      es: "No hay proyectos con esa tecnología todavía.",
      en: "No projects with that technology yet.",
    },
  },

  experience: {
    eyebrow: { es: "Trayectoria", en: "Career" },
    title: { es: "Dónde he trabajado", en: "Where I have worked" },
  },

  education: {
    eyebrow: { es: "Formación", en: "Education" },
    title: { es: "Estudios y certificaciones", en: "Studies and certifications" },
    credentialLink: { es: "Ver credencial", en: "View credential" },
  },

  contact: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: { es: "Hablemos de tu proyecto", en: "Let's talk about your project" },
    description: {
      es: "Cuéntame qué necesitas y te respondo en menos de 24 horas.",
      en: "Tell me what you need and I will reply within 24 hours.",
    },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre completo", en: "Your full name" },
    emailLabel: { es: "Email", en: "Email" },
    emailPlaceholder: { es: "tu@correo.com", en: "you@email.com" },
    messageLabel: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Cuéntame en qué puedo ayudarte…",
      en: "Tell me how I can help…",
    },
    submit: { es: "Enviar mensaje", en: "Send message" },
    submitting: { es: "Enviando…", en: "Sending…" },
    successTitle: { es: "¡Mensaje enviado!", en: "Message sent!" },
    successBody: {
      es: "Gracias por escribir. Te respondo muy pronto.",
      en: "Thanks for reaching out. I will reply very soon.",
    },
    errorTitle: { es: "No se pudo enviar", en: "Could not send" },
    directContact: { es: "O escríbeme directamente", en: "Or reach me directly" },
  },

  validation: {
    nameTooShort: { es: "Escribe al menos 2 caracteres.", en: "Enter at least 2 characters." },
    nameTooLong: { es: "Máximo 80 caracteres.", en: "80 characters maximum." },
    emailInvalid: { es: "Introduce un email válido.", en: "Enter a valid email address." },
    messageTooShort: { es: "Escribe al menos 20 caracteres.", en: "Write at least 20 characters." },
    messageTooLong: { es: "Máximo 1500 caracteres.", en: "1500 characters maximum." },
  },

  contactErrors: {
    invalidInput: {
      es: "Revisa los datos del formulario.",
      en: "Please review the form fields.",
    },
    rateLimited: {
      es: "Has enviado demasiados mensajes. Inténtalo en unos minutos.",
      en: "Too many messages sent. Please try again in a few minutes.",
    },
    deliveryFailed: {
      es: "El mensaje no pudo entregarse. Escríbeme por email mientras lo reviso.",
      en: "The message could not be delivered. Please email me directly while I look into it.",
    },
  },

  footer: {
    builtWith: { es: "Construido con", en: "Built with" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    backToTop: { es: "Volver arriba", en: "Back to top" },
  },
} satisfies Record<string, Record<string, LocalizedText>>;
