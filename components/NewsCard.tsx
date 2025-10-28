import React from 'react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const categoryColors = {
    'Promotion': 'bg-green-500',
    'Nouveau Projet': 'bg-blue-500',
    'Formation': 'bg-yellow-500'
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-brand-secondary rounded-lg overflow-hidden shadow-lg group flex flex-col">
      <div className="relative h-56">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className={`absolute top-4 left-4 text-xs font-bold text-white px-2 py-1 rounded ${categoryColors[article.category]}`}>
            {article.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mt-1 mb-2 text-white font-heading">{article.title}</h3>
        <p className="text-xs text-brand-text mb-4">{article.date}</p>
        <p className="text-brand-text text-sm mb-4 flex-grow">{article.excerpt}</p>
        <a href="#" className="text-brand-accent font-semibold hover:underline self-start">Lire la suite &rarr;</a>
      </div>
    </div>
  );
};

export default NewsCard;
