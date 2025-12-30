import { Project, Translation, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hispanus Group',
    description: 'E-commerce platform developed in WordPress for high-capacity power generators and solar energy solutions.',
    image: 'https://tocanto.dev/images/portfolio/hispanus.png',
    tags: ['WORDPRESS', 'WOOCOMMERCE', 'PHP'],
    demoUrl: 'https://hispanus-group.com/',
    codeUrl: 'https://#'
  },
  {
    id: '2',
    title: 'Molifer',
    description: 'WordPress e-commerce platform for specialized bell automation systems and liturgical electronic equipment.',
    image: 'https://tocanto.dev/images/portfolio/molifer.png',
    tags: ['WORDPRESS', 'WOOCOMMERCE', 'PHP'],
    demoUrl: 'https://molifer.com/',
    codeUrl: 'https://#'
  },
  {
    id: '3',
    title: 'FlutGPT',
    description: 'Cross-platform AI assistant built with Flutter and OpenAI API, featuring AdMob monetization and Firebase integration.',
    image: 'https://tocanto.dev/images/portfolio/FlutGPT.png',
    tags: ['FLUTTER', 'DART', 'CHATGPT API'],
    demoUrl: 'https://github.com/tocanto/FlutGPT-Flutter-2.2',
    codeUrl: 'https://#'
  },
  {
    id: '4',
    title: 'Waves Blockchain App',
    description: 'Decentralized application integrated with Waves protocol for secure asset management.',
    image: 'https://tocanto.dev/images/portfolio/withdraw-vested.png',
    tags: ['IONIC', 'REACT', 'TYPESCRIPT', 'WEB3'],
    demoUrl: 'https://tocanto.dev/WithdrawVested/',
    codeUrl: 'https://#'
  },
  {
    id: '5',
    title: 'Classic Games',
    description: 'Cross-platform gaming app built with Ionic React and Tailwind CSS, featuring classic arcade logic and interactive puzzles.',
    image: 'https://tocanto.dev/images/portfolio/sliding-puzzle.png',
    tags: ['IONIC', 'REACT', 'TAILWIND CSS'],
    demoUrl: 'https://classic-games.tocanto.dev/',
    codeUrl: 'https://#'
  },
  {
    id: '6',
    title: 'Clínica Dental Valle',
    description: "SEO-optimized corporate website built with WordPress and Elementor, strictly following Spain’s 'Kit Digital' technical compliance and visibility standards.",
    image: 'https://tocanto.dev/images/portfolio/clinica-dental-valle.png',
    tags: ['WORDPRESS', 'ELEMENTOR', 'SEO'],
    demoUrl: 'https://clinicadentalvalle.site/',
    codeUrl: 'https://#'
  }
];

export const SERVICES: Service[] = [
  { id: 'bespoke', icon: 'terminal', accent: 'text-primary' },
  { id: 'wordpress', icon: 'code', accent: 'text-accent-violet' },
  { id: 'performance', icon: 'speed', accent: 'text-accent-blue' }
];

export const TRANSLATIONS: Record<'EN' | 'ES', Translation> = {
  EN: {
    nav: { home: 'Home', about: 'About', services: 'Services', work: 'Work', contact: 'Contact' },
    hero: {
      status: 'AVAILABLE FOR FREELANCE',
      tagline: 'Frontend Specialist & Creative Technologist crafting immersive digital experiences at the intersection of cyberpunk aesthetics and clean code.',
      viewProjects: 'VIEW PROJECTS',
      contactMe: 'CONTACT ME'
    },
    about: {
      badge: 'About Me',
      title1: 'Building the future,',
      title2: 'one line of code at a time.',
      bio: 'I am a Frontend Specialist with a passion for cyberpunk aesthetics and high-performance web architecture. With over 10 years of experience, I specialize in crafting advanced WordPress solutions and immersive interfaces, focusing on technical SEO and speed optimization to turn complex code into seamless user experiences.',
      tech: 'Core Technologies'
    },
    services: {
      badge: 'CORE EXPERTISE',
      title: 'Services',
      items: {
        bespoke: {
          title: 'Bespoke Web Development',
          desc: 'Landings, E-commerce (Dokan/WooCommerce), and Corporate sites built for scale and aesthetics.'
        },
        wordpress: {
          title: 'WordPress Architecture',
          desc: 'Custom themes, plugins, and safe migrations following best practices in enterprise security.'
        },
        performance: {
          title: 'Performance Optimization',
          desc: 'Blazing speed (Lighthouse 90+), SEO-ready indexing, and conversion-focused UX engineering.'
        }
      }
    },
    portfolio: {
      badge: 'PORTFOLIO',
      title: 'Selected Works',
      viewGithub: 'View GitHub',
      projects: {
        '1': {
          title: 'Hispanus Group',
          description: 'E-commerce platform developed in WordPress for high-capacity power generators and solar energy solutions.'
        },
        '2': {
          title: 'Molifer',
          description: 'WordPress e-commerce platform for specialized bell automation systems and liturgical electronic equipment.'
        },
        '3': {
          title: 'FlutGPT',
          description: 'Cross-platform AI assistant built with Flutter and OpenAI API, featuring AdMob monetization and Firebase integration.'
        },
        '4': {
          title: 'Waves Blockchain App',
          description: 'Decentralized application integrated with Waves protocol for secure asset management.'
        },
        '5': {
          title: 'Classic Games',
          description: 'Cross-platform gaming app built with Ionic React and Tailwind CSS, featuring classic arcade logic and interactive puzzles.'
        },
        '6': {
          title: 'Clínica Dental Valle',
          description: "SEO-optimized corporate website built with WordPress and Elementor, strictly following Spain’s 'Kit Digital' technical compliance."
        }
      }
    },
    contact: {
      title: 'Let\'s Interface',
      subtitle: 'Ready to start your next project? Fill out the terminal inputs to establish a connection.',
      email: 'Email',
      socials: 'Socials',
      ident: 'Ident',
      comms: 'Comms Channel',
      transmission: 'Transmission',
      transmissionPlaceholder: 'Encrypted message content...',
      btn: 'Initialize Uplink'
    }
  },
  ES: {
    nav: { home: 'Inicio', about: 'Sobre mí', services: 'Servicios', work: 'Trabajos', contact: 'Contacto' },
    hero: {
      status: 'DISPONIBLE PARA FREELANCE',
      tagline: 'Especialista en frontend y tecnólogo creativo que crea experiencias digitales inmersivas en la intersección entre la estética cyberpunk y el código limpio.',
      viewProjects: 'VER PROYECTOS',
      contactMe: 'CONTÁCTAME'
    },
    about: {
      badge: 'Sobre Mí',
      title1: 'Construyendo el futuro,',
      title2: 'una línea de código a la vez.',
      bio: 'Soy un especialista en frontend apasionado por la estética cyberpunk y la arquitectura web de alto rendimiento. Con más de 10 años de experiencia, me especializo en crear soluciones avanzadas de WordPress e interfaces inmersivas, centrándome en el SEO técnico y la optimización de la velocidad para convertir código complejo en experiencias de usuario fluidas.',
      tech: 'Tecnologías Principales'
    },
    services: {
      badge: 'CONOCIMIENTO CENTRAL',
      title: 'Servicios',
      items: {
        bespoke: {
          title: 'Desarrollo Web a Medida',
          desc: 'Landings, E-commerce (Dokan/WooCommerce) y sitios corporativos creados para la escala y la estética.'
        },
        wordpress: {
          title: 'Arquitectura WordPress',
          desc: 'Temas personalizados, plugins y migraciones seguras siguiendo las mejores prácticas en seguridad empresarial.'
        },
        performance: {
          title: 'Optimización de Rendimiento',
          desc: 'Velocidad asombrosa (Lighthouse 90+), indexación lista para SEO e ingeniería de UX centrada en la conversión.'
        }
      }
    },
    portfolio: {
      badge: 'PORTAFOLIO',
      title: 'Trabajos Seleccionados',
      viewGithub: 'Ver GitHub',
      projects: {
        '1': {
          title: 'Hispanus Group',
          description: 'Plataforma e-commerce desarrollada en WordPress para generadores de energía de alta capacidad y soluciones solares.'
        },
        '2': {
          title: 'Molifer',
          description: 'Plataforma WordPress e-commerce para sistemas de automatización de campanas y equipos electrónicos litúrgicos.'
        },
        '3': {
          title: 'FlutGPT',
          description: 'Asistente de IA multiplataforma creado con Flutter y OpenAI API, con monetización AdMob e integración con Firebase.'
        },
        '4': {
          title: 'Waves Blockchain App',
          description: 'Aplicación descentralizada integrada con el protocolo Waves para la gestión segura de activos.'
        },
        '5': {
          title: 'Classic Games',
          description: 'App de juegos multiplataforma con Ionic React y Tailwind CSS, con lógica de arcade clásica y rompecabezas interactivos.'
        },
        '6': {
          title: 'Clínica Dental Valle',
          description: 'Sitio corporativo optimizado para SEO con WordPress y Elementor, siguiendo el cumplimiento técnico del Kit Digital.'
        }
      }
    },
    contact: {
      title: 'Vamos a Conectarnos',
      subtitle: '¿Listo para empezar tu próximo proyecto? Completa las entradas para establecer una conexión.',
      email: 'Correo',
      socials: 'Redes',
      ident: 'Nombre',
      comms: 'Canal de Comunicación',
      transmission: 'Transmisión',
      transmissionPlaceholder: 'Contenido del mensaje cifrado...',
      btn: 'Iniciar Enlace'
    }
  }
};