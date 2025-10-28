import React, { useState } from 'react';
import { Page } from '../App';
import ServiceCard from './ServiceCard';
import ProjectCard from './ProjectCard';
import NewsCard from './NewsCard';
import HeroCarousel from './HeroCarousel';
import { allServices } from '../data/services';
import { allProjects } from '../data/projects';
import { allNews } from '../data/news';
import { TargetIcon } from './icons/TargetIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { GearIcon } from './icons/GearIcon';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

interface HomePageProps {
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const mockServices = allServices.slice(1, 4);
const mockProjects = allProjects.slice(0, 3);
const mockNews = allNews.slice(0, 3);
const weldingService = allServices.find(s => s.slug === 'soudure-avancee');

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="bg-brand-primary">
        {/* Hero Section */}
        <HeroCarousel navigate={navigate} />

        {/* Quick Presentation Section */}
        <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-6 text-center">
              <div className="grid md:grid-cols-3 gap-10">
                  <div className="flex flex-col items-center">
                      <TargetIcon className="w-12 h-12 text-brand-accent mb-4"/>
                      <h3 className="text-xl font-bold text-white font-heading mb-2">Notre Mission</h3>
                      <p className="text-brand-text text-sm">Être le partenaire industriel de référence en Afrique, en fournissant des solutions innovantes et durables qui soutiennent la croissance du continent.</p>
                  </div>
                   <div className="flex flex-col items-center">
                      <ShieldIcon className="w-12 h-12 text-brand-accent mb-4"/>
                      <h3 className="text-xl font-bold text-white font-heading mb-2">Nos Valeurs</h3>
                      <p className="text-brand-text text-sm">Qualité, Sécurité, Intégrité. Ces trois piliers guident chacune de nos actions et garantissent l'excellence de nos prestations.</p>
                  </div>
                   <div className="flex flex-col items-center">
                      <GearIcon className="w-12 h-12 text-brand-accent mb-4"/>
                      <h3 className="text-xl font-bold text-white font-heading mb-2">Notre Expertise</h3>
                      <p className="text-brand-text text-sm">Plus de 10 ans d'expérience dans la métallurgie de pointe, avec une équipe d'experts certifiés et passionnés par leur métier.</p>
                  </div>
              </div>
              <div className="mt-12 flex justify-center items-center flex-wrap gap-4">
                   <button 
                      onClick={() => navigate('contact')}
                      className="bg-transparent border-2 border-brand-accent text-brand-accent text-md font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                    >
                      Nous Contacter
                    </button>
                    <button 
                      onClick={() => navigate('projects')}
                      className="bg-brand-accent text-brand-primary text-md font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105"
                    >
                      Découvrir nos réalisations
                    </button>
              </div>
          </div>
        </section>

        {/* Main Activity Section: Welding */}
         {weldingService && (
          <section id="main-activity" className="py-20 bg-black/20">
              <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="text-center md:text-left">
                          <p className="text-brand-accent font-semibold">Cœur de métier</p>
                          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white font-heading">Soudure Avancée</h2>
                          <p className="text-brand-text mt-4 max-w-lg mx-auto md:mx-0">Notre expertise première. Nous maîtrisons les techniques les plus complexes (MIG, TIG, Arc) pour des résultats d'une fiabilité et d'une précision exceptionnelles sur tous types de métaux.</p>
                          <button
                            onClick={() => navigate('services', { slug: 'soudure-avancee' })}
                            className="mt-6 border border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                          >
                            En savoir plus sur la soudure
                          </button>
                      </div>
                       <div>
                          <img src="https://picsum.photos/seed/welding-focus/800/600" alt="Soudure de précision" className="rounded-lg shadow-xl object-cover w-full h-full" />
                      </div>
                  </div>
              </div>
          </section>
        )}

        {/* Other Services Section */}
        <section id="services" className="py-20 bg-brand-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white font-heading">Nos Autres Métiers</h2>
            <p className="text-brand-text mb-12 max-w-2xl mx-auto">Une gamme complète de services pour répondre à tous vos besoins industriels.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockServices.map(service => <ServiceCard key={service.id} service={service} onClick={() => navigate('services', { slug: service.slug })} />)}
            </div>
             <div className="mt-12">
              <button
                onClick={() => navigate('services')}
                className="border border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
              >
                Voir tous les services
              </button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-brand-primary">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-heading">Actualités</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockNews.map(article => <NewsCard key={article.id} article={article} navigate={navigate} />)}
             </div>
             <div className="mt-12 text-center">
              <button
                onClick={() => navigate('news')}
                className="border border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
              >
                Voir toutes les actualités
              </button>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-brand-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-heading">Nos Réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProjects.map(project => <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />)}
            </div>
             <div className="mt-12 text-center">
              <button
                onClick={() => navigate('projects')}
                className="border border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
              >
                Voir toutes nos réalisations
              </button>
            </div>
          </div>
        </section>
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

export default HomePage;
