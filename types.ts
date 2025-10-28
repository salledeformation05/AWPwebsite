import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  details?: {
    client: string;
    year: number;
    tasks: string[];
    images: string[];
  }
}

export interface NewsArticle {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    category: 'Promotion' | 'Nouveau Projet' | 'Formation';
}
