import React, { createContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
}

export type ServiceIconType = 'weld' | 'briefcase' | 'maintenance' | 'cutting' | 'metalwork' | 'paint' | 'construction' | 'training';

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconType;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageBeforeUrl?: string;
  isFeatured?: boolean;
  testimonial?: {
    text: string;
    author: string;
  };
  details?: {
    client: string;
    year: number;
    tasks: string[];
  }
}

export interface NewsArticle {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    category: 'Promotion' | 'Nouveau Projet' | 'Formation';
    content: string;
}

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'Payée' | 'En retard' | 'En attente';
}
export interface Quote {
    id: string;
    client: string;
    amount: number;
    issueDate: string;
    expiryDate: string;
    status: 'Accepté' | 'Envoyé' | 'Refusé';
}

export interface Training {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  instructor: string;
}

// Fix: Moved AuthContext from App.tsx to types.ts to avoid circular dependency
export interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});