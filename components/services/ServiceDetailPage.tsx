import React from 'react';
import { Service } from '../../types';
import { Page } from '../../App';

interface ServicePageProps {
  service: Service;
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const ServiceDetailPage: React.FC<ServicePageProps> = ({ service, navigate }) => {
  return (
    <div className="bg-brand-primary">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary p-4 rounded-full mb-4">
                {service.icon}
            </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{service.title}</h1>
          <p className="text-brand-text mt-4 max-w-2xl mx-auto">{service.description}</p>
        </div>

        <div className="bg-brand-secondary p-8 rounded-lg shadow-lg text-center min-h-[200px] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white font-heading">Contenu Bientôt Disponible</h2>
            <p className="text-brand-text mt-2">Nous préparons les informations détaillées pour ce service. Revenez bientôt !</p>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center bg-brand-primary p-10 rounded-lg border border-brand-secondary">
            <h2 className="text-2xl font-bold text-white mb-4">Intéressé par ce service ?</h2>
            <p className="text-brand-text mb-6 max-w-xl mx-auto">N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques. Notre équipe est à votre disposition.</p>
            <button
                onClick={() => navigate('contact')}
                className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
                Contactez-nous
            </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;