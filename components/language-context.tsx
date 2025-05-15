"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "We Create Digital Experiences That Break Boundaries",
    "hero.subtitle":
      "Transforming ideas into extraordinary digital solutions with cutting-edge technology and innovative design.",
    "hero.cta.explore": "Explore Our Work",
    "hero.cta.process": "Get to Know Us",

    // About Section
    "about.title": "Redefining Digital",
    "about.paragraph1":
      "We're a collective of digital innovators and creative problem-solvers who thrive on challenges that others shy away from.",
    "about.paragraph2":
      "Our approach combines cutting-edge technology with boundary-pushing design to create digital experiences that don't just meet expectations—they redefine them.",
    "about.innovation": "Innovation",
    "about.innovation.desc": "We embrace emerging technologies to create forward-thinking solutions",
    "about.craftsmanship": "Craftsmanship",
    "about.craftsmanship.desc": "Meticulous attention to detail in every pixel and line of code",
    "about.creativity": "Creativity",
    "about.creativity.desc": "Thinking outside the box to solve complex problems with elegant solutions",
    "about.collaboration": "Collaboration",
    "about.collaboration.desc": "Working together with clients to achieve extraordinary results",

    // Services Section
    "services.title": "Our Expertise",
    "services.subtitle": "We blend technology and creativity to deliver exceptional digital solutions",
    "services.ecommerce.title": "E-commerce Solutions",
    "services.ecommerce.desc": "Conversion-focused online stores with seamless shopping experiences",
    "services.transform.title": "Digital Transformation",
    "services.transform.desc": "Strategic guidance to help businesses evolve in the digital landscape",
    "services.custom.title": "Custom Websites",
    "services.custom.desc": "Tailored web solutions designed to meet your specific business needs",
    "services.brand.title": "Web Brand Identity",
    "services.brand.desc": "Cohesive visual languages that communicate your brand's unique story online",

    // Projects Section
    "projects.title": "Featured Work",
    "projects.subtitle": "Explore our portfolio of innovative digital experiences",
    "projects.cta": "View Case Study",
    "projects.category.web": "Web Development",
    "projects.category.branding": "Branding",
    "projects.category.design": "Web Design",
    "projects.category.app": "App Design",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.marketing": "Marketing",
    "projects.category.ui": "UI/UX Design",
    "projects.title.1": "E-commerce Platform",
    "projects.title.2": "Brand Identity System",
    "projects.title.3": "Corporate Website",
    "projects.title.4": "Mobile App UI/UX",
    "projects.title.5": "Online Store",
    "projects.title.6": "Digital Marketing Campaign",
    "projects.title.7": "Product Landing Page",
    "projects.title.8": "SaaS Dashboard",
    "projects.title.9": "Portfolio Website",

    // Contact Section
    "contact.title": "Let's Create Something Extraordinary",
    "contact.subtitle":
      "Ready to transform your digital presence? We're excited to hear about your project and explore how we can bring your vision to life.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.start": "Start a Conversation",
    "contact.click": "Click to open the contact form",
    "contact.us": "Contact Us",

    // Contact Form
    "form.title": "Let's Talk",
    "form.name": "What's your name?",
    "form.email": "What's your email?",
    "form.message": "How can we help you?",
    "form.continue": "Continue",
    "form.back": "Back",
    "form.send": "Send Message",
    "form.sending": "Sending...",
    "form.success": "Message Sent!",
    "form.success.message": "Thank you for reaching out. We'll get back to you as soon as possible.",
    "form.close": "Close",
    "form.name.placeholder": "Enter your name",
    "form.email.placeholder": "Enter your email",
    "form.message.placeholder": "Tell us about your project...",

    // Misc
    previous: "Previous",
    next: "Next",
    slide: "Go to slide",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Creamos Experiencias Digitales Que Rompen Límites",
    "hero.subtitle":
      "Transformamos ideas en soluciones digitales extraordinarias con tecnología de vanguardia y diseño innovador.",
    "hero.cta.explore": "Explorar Nuestro Trabajo",
    "hero.cta.process": "Conócenos",

    // About Section
    "about.title": "Redefiniendo lo Digital",
    "about.paragraph1":
      "Somos un colectivo de innovadores digitales y solucionadores creativos que prosperan con desafíos que otros evitan.",
    "about.paragraph2":
      "Nuestro enfoque combina tecnología de vanguardia con diseño que rompe límites para crear experiencias digitales que no solo cumplen expectativas, sino que las redefinen.",
    "about.innovation": "Innovación",
    "about.innovation.desc": "Adoptamos tecnologías emergentes para crear soluciones visionarias",
    "about.craftsmanship": "Artesanía",
    "about.craftsmanship.desc": "Atención meticulosa al detalle en cada píxel y línea de código",
    "about.creativity": "Creatividad",
    "about.creativity.desc": "Pensamos fuera de la caja para resolver problemas complejos con soluciones elegantes",
    "about.collaboration": "Colaboración",
    "about.collaboration.desc": "Trabajamos junto con los clientes para lograr resultados extraordinarios",

    // Services Section
    "services.title": "Nuestra Experiencia",
    "services.subtitle": "Combinamos tecnología y creatividad para ofrecer soluciones digitales excepcionales",
    "services.ecommerce.title": "Soluciones de Comercio Electrónico",
    "services.ecommerce.desc": "Tiendas online enfocadas en la conversión con experiencias de compra fluidas",
    "services.transform.title": "Transformación Digital",
    "services.transform.desc":
      "Orientación estratégica para ayudar a las empresas a evolucionar en el panorama digital",
    "services.custom.title": "Sitios Web Personalizados",
    "services.custom.desc":
      "Soluciones web a medida diseñadas para satisfacer las necesidades específicas de su negocio",
    "services.brand.title": "Creación de Identidad de Marca Web",
    "services.brand.desc": "Lenguajes visuales cohesivos que comunican la historia única de tu marca en línea",

    // Projects Section
    "projects.title": "Trabajo Destacado",
    "projects.subtitle": "Explora nuestro portafolio de experiencias digitales innovadoras",
    "projects.cta": "Ver Caso de Estudio",
    "projects.category.web": "Desarrollo Web",
    "projects.category.branding": "Branding",
    "projects.category.design": "Diseño Web",
    "projects.category.app": "Diseño de Apps",
    "projects.category.ecommerce": "Comercio Electrónico",
    "projects.category.marketing": "Marketing",
    "projects.category.ui": "Diseño UI/UX",
    "projects.title.1": "Plataforma de Comercio Electrónico",
    "projects.title.2": "Sistema de Identidad de Marca",
    "projects.title.3": "Sitio Web Corporativo",
    "projects.title.4": "UI/UX de Aplicación Móvil",
    "projects.title.5": "Tienda Online",
    "projects.title.6": "Campaña de Marketing Digital",
    "projects.title.7": "Página de Aterrizaje de Producto",
    "projects.title.8": "Dashboard SaaS",
    "projects.title.9": "Sitio Web de Portafolio",

    // Contact Section
    "contact.title": "Creemos Algo Extraordinario",
    "contact.subtitle":
      "¿Listo para transformar tu presencia digital? Estamos emocionados de conocer tu proyecto y explorar cómo podemos dar vida a tu visión.",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.start": "Iniciar una Conversación",
    "contact.click": "Haz clic para abrir el formulario de contacto",
    "contact.us": "Contáctanos",

    // Contact Form
    "form.title": "Hablemos",
    "form.name": "¿Cuál es tu nombre?",
    "form.email": "¿Cuál es tu correo electrónico?",
    "form.message": "¿Cómo podemos ayudarte?",
    "form.continue": "Continuar",
    "form.back": "Atrás",
    "form.send": "Enviar Mensaje",
    "form.sending": "Enviando...",
    "form.success": "¡Mensaje Enviado!",
    "form.success.message": "Gracias por contactarnos. Te responderemos lo antes posible.",
    "form.close": "Cerrar",
    "form.name.placeholder": "Ingresa tu nombre",
    "form.email.placeholder": "Ingresa tu correo electrónico",
    "form.message.placeholder": "Cuéntanos sobre tu proyecto...",

    // Misc
    previous: "Anterior",
    next: "Siguiente",
    slide: "Ir a diapositiva",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
