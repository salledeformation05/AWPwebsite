import React, { useState, useEffect } from 'react';
import { NewsArticle } from '../../types';
import { XIcon } from '../icons/XIcon';

interface NewsArticleFormModalProps {
    article: NewsArticle | null;
    onClose: () => void;
    onSave: (article: NewsArticle) => void;
}

const NewsArticleFormModal: React.FC<NewsArticleFormModalProps> = ({ article, onClose, onSave }) => {
    // Fix: Added missing `slug` and `content` properties to satisfy the Omit<NewsArticle, 'id'> type.
    const [formData, setFormData] = useState<Omit<NewsArticle, 'id'>>({
        title: '',
        excerpt: '',
        date: new Date().toISOString().split('T')[0],
        imageUrl: 'https://picsum.photos/seed/new-news/600/400',
        category: 'Nouveau Projet',
        slug: '',
        content: '',
    });

    useEffect(() => {
        if (article) {
            setFormData(article);
        }
    }, [article]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: article?.id || Date.now().toString()
        });
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-brand-secondary rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative">
                 <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-text hover:text-white transition-colors z-20 p-2 bg-black/30 rounded-full"
                    aria-label="Fermer"
                >
                    <XIcon className="w-6 h-6" />
                </button>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-white font-heading mb-6">{article ? 'Modifier' : 'Ajouter'} un article</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-brand-text">Titre</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-brand-text">Catégorie</label>
                            <select name="category" value={formData.category} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent">
                                <option>Nouveau Projet</option>
                                <option>Formation</option>
                                <option>Promotion</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="excerpt" className="block text-sm font-medium text-brand-text">Extrait</label>
                            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={4} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required></textarea>
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-brand-text">Contenu</label>
                            <textarea name="content" value={formData.content} onChange={handleChange} rows={8} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required></textarea>
                        </div>
                         <div className="flex justify-end space-x-4 pt-4">
                            <button type="button" onClick={onClose} className="py-2 px-4 rounded-md bg-brand-primary text-white hover:bg-gray-700 transition-colors">Annuler</button>
                            <button type="submit" className="py-2 px-4 rounded-md bg-brand-accent text-brand-primary font-bold hover:bg-brand-accent-hover transition-colors">Sauvegarder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsArticleFormModal;
