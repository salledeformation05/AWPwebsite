import React from 'react';
import { Service } from '../../types';
import { Page } from '../../App';
import { allProjects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

interface ServicePageProps {
  service: Service;
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const weldingTypes = [
    { name: 'Soudage MIG/MAG', description: 'Idéal pour les productions en série et les soudures sur acier, inox et aluminium. Rapide et efficace.' },
    { name: 'Soudage TIG', description: 'Offre une finition de très haute qualité et une précision inégalée, parfait pour les soudures fines et les matériaux spéciaux.' },
    { name: 'Soudage à l\'Arc (SMAW)', description: 'Polyvalent et robuste, adapté aux conditions de chantier les plus exigeantes et aux structures épaisses.' },
    { name: 'Soudage Inox & Aluminium', description: 'Maîtrise des procédés spécifiques pour garantir des soudures propres, résistantes à la corrosion et esthétiques.' },
];

const relatedProjects = allProjects.filter(p => p.category === 'Soudure Avancée');

const SoudurePage: React.FC<ServicePageProps> = ({ service, navigate }) => {
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

        {/* Welding Types Section */}
        <div className="bg-brand-secondary p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-white font-heading mb-8 text-center">Nos Techniques de Soudure</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {weldingTypes.map(type => (
                    <div key={type.name} className="bg-brand-primary p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-brand-accent mb-2">{type.name}</h3>
                        <p className="text-brand-text">{type.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Related Projects */}
        <div>
            <h2 className="text-3xl font-bold text-white font-heading mb-8 text-center">Projets de Soudure Réalisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.length > 0 ? (
                    relatedProjects.map(project => <ProjectCard key={project.id} project={project} />)
                ) : (
                    <p className="text-brand-text text-center col-span-full">Aucun projet à afficher pour le moment.</p>
                )}
            </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center bg-brand-secondary p-10 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Vous avez un projet de soudure complexe ?</h2>
            <p className="text-brand-text mb-6 max-w-xl mx-auto">Notre équipe d'experts est prête à relever le défi. Soumettez vos plans et obtenez un devis précis.</p>
            <button
                onClick={() => navigate('contact')}
                className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
                Demander un devis personnalisé
            </button>
        </div>

      </div>
    </div>
  );
};

export default SoudurePage;