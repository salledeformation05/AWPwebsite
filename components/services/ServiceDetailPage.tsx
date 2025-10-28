import React, { useState } from 'react';
import { Service, Project } from '../../types';
import { Page } from '../../App';
import { allProjects } from '../../data/projects';
import ProjectCard from '../ProjectCard';
import ProjectDetailModal from '../ProjectDetailModal';
import { ServiceIcon } from '../ServiceIcon';

interface ServicePageProps {
  service: Service;
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const ServiceDetailPage: React.FC<ServicePageProps> = ({ service, navigate }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // This is a generic filter, may not be perfect for all services
    const relatedProjects = allProjects.filter(p => 
        p.category.toLowerCase().includes(service.title.split(' ')[0].toLowerCase())
    ).slice(0, 3);

    return (
        <>
            <div className="bg-brand-primary">
                <div className="container mx-auto px-6 py-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-brand-secondary p-4 rounded-full mb-4">
                            <ServiceIcon icon={service.icon} className="w-10 h-10 mx-auto text-brand-accent" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{service.title}</h1>
                        <p className="text-brand-text mt-4 max-w-2xl mx-auto">{service.description}</p>
                    </div>

                    {/* Generic Content Section */}
                     <div className="bg-brand-secondary p-8 rounded-lg shadow-lg mb-16">
                        <h2 className="text-3xl font-bold text-white font-heading mb-8 text-center">Notre Approche</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-brand-text">
                           <p>Chez AWP, notre service de <strong>{service.title}</strong> est fondé sur une expertise technique approfondie et une compréhension claire des besoins de nos clients. Nous utilisons des équipements de pointe et suivons des protocoles stricts pour garantir des résultats qui dépassent les attentes en termes de qualité, de durabilité et de conformité.</p>
                           <p>Chaque projet est unique. C'est pourquoi nous commençons toujours par une phase d'écoute et d'analyse pour proposer des solutions sur mesure. De la conception à la réalisation, notre équipe dédiée vous accompagne pour assurer le succès de votre projet.</p>
                        </div>
                    </div>


                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold text-white font-heading mb-8 text-center">Projets Similaires</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProjects.map(project => <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />)}
                            </div>
                        </div>
                    )}
                    
                    {/* CTA */}
                    <div className="mt-16 text-center bg-brand-secondary p-10 rounded-lg">
                        <h2 className="text-2xl font-bold text-white mb-4">Un besoin en {service.title} ?</h2>
                        <p className="text-brand-text mb-6 max-w-xl mx-auto">Discutons de votre projet. Notre équipe est prête à vous fournir une solution adaptée et un devis compétitif.</p>
                        <button
                            onClick={() => navigate('contact')}
                            className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Demander un devis
                        </button>
                    </div>

                </div>
            </div>
            {selectedProject && (
                <ProjectDetailModal 
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

export default ServiceDetailPage;
