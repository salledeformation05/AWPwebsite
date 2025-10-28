import React from 'react';
import { allNews } from '../data/news';
import NewsCard from './NewsCard';
import { Page } from '../App';

interface NewsPageProps {
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ navigate }) => {
  return (
    <div className="bg-brand-primary py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Nos Actualités</h1>
          <p className="text-brand-text mt-2 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles, des projets passionnants et des innovations chez AWP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map(article => (
            <NewsCard 
              key={article.id} 
              article={article} 
              navigate={navigate} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;