import React from 'react';
import { NewsArticle } from '../types';
import { Page } from '../App';
import { marked } from 'marked';

interface NewsArticlePageProps {
  article: NewsArticle;
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ article, navigate }) => {
  const getHTMLContent = () => {
    const rawMarkup = marked.parse(article.content || '');
    return { __html: rawMarkup };
  };

  return (
    <div className="bg-brand-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('news')}
            className="text-brand-accent hover:underline mb-8"
          >
            &larr; Retour aux actualités
          </button>

          <article className="bg-brand-primary p-8 rounded-lg shadow-lg">
            <p className="text-sm text-brand-accent font-semibold">{article.category} &bull; {article.date}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-heading my-4">{article.title}</h1>
            <img src={article.imageUrl} alt={article.title} className="w-full rounded-lg mb-8 aspect-video object-cover" />
            
            <div
              className="prose prose-invert prose-lg max-w-none text-brand-text prose-headings:text-white prose-strong:text-white prose-a:text-brand-accent hover:prose-a:text-brand-accent-hover"
              dangerouslySetInnerHTML={getHTMLContent()}
            />
          </article>
        </div>
      </div>
       <style>{`
        .prose h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
        }
       `}</style>
    </div>
  );
};

export default NewsArticlePage;