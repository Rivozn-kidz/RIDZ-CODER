export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  url: string;
  buttonText: string;
  imageUrl: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}
