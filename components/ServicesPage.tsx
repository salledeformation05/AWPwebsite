import React from 'react';
import { Page } from '../App';
import ServiceCard from './ServiceCard';
import { allServices } from '../data/services';

interface ServicesPageProps {
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
    return (
        <div className="bg-brand-secondary py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Notre Expertise</h1>
                    <p className="text-brand-text mt-2 max-w-2xl mx-auto">Nous offrons une gamme complète de services industriels, alliant savoir-faire traditionnel et technologies de pointe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map(service => (
                        <ServiceCard 
                            key={service.id} 
                            service={service} 
                            onClick={() => navigate('services', { slug: service.slug })}
                        />
                    ))}
                </div>
                 <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Prêt à démarrer un projet ?</h2>
                    <button
                        onClick={() => navigate('contact')}
                        className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Demander un devis
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;