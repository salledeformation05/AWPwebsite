import { NewsArticle } from '../types';

export const allNews: NewsArticle[] = [
  { 
    id: '1', 
    title: 'Lancement de notre nouveau centre de formation en soudure', 
    date: '15 Juillet 2024', 
    excerpt: 'Nous sommes fiers d\'annoncer l\'ouverture de notre centre de formation ultramoderne pour la prochaine génération de soudeurs professionnels.',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    category: 'Formation'
  },
  { 
    id: '2', 
    title: 'AWP signe un contrat pour la charpente du futur stade national', 
    date: '02 Juillet 2024', 
    excerpt: 'Un projet d\'envergure qui confirme notre position de leader dans la fabrication de charpentes métalliques complexes en Afrique de l\'Ouest.',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    category: 'Nouveau Projet'
  },
  { 
    id: '3', 
    title: 'Promotion estivale : -15% sur tous les revêtements anti-corrosion', 
    date: '20 Juin 2024', 
    excerpt: 'Protégez vos installations industrielles cet été avec notre offre spéciale sur les traitements de surface de haute performance.',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    category: 'Promotion'
  },
];
