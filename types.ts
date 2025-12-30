export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface Service {
  id: string;
  icon: string;
  accent: string;
}

export type Language = 'EN' | 'ES';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    contact: string;
  };
  hero: {
    status: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    badge: string;
    title1: string;
    title2: string;
    bio: string;
    tech: string;
  };
  services: {
    badge: string;
    title: string;
    items: {
      bespoke: { title: string; desc: string };
      wordpress: { title: string; desc: string };
      performance: { title: string; desc: string };
    };
  };
  portfolio: {
    badge: string;
    title: string;
    viewGithub: string;
    projects: {
      [key: string]: {
        title: string;
        description: string;
      }
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    socials: string;
    ident: string;
    comms: string;
    transmission: string;
    transmissionPlaceholder: string;
    btn: string;
  };
}