
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  link?: string;
  role?: string;
  period?: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialLink?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  image: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}