import React, { useState, useMemo } from 'react';
import { allProjects } from './data/projects';
import ProjectCard from './components/ProjectCard';

const categories = ['Tous', ...Array.from(new Set(allProjects.map(p => p.category)))];

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Tous');
    
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'Tous') {
            return allProjects;
        }
        return allProjects.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="bg-brand-primary py-16">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Nos Réalisations</h1>
                    <p className="text-brand-text mt-2 max-w-2xl mx-auto">Découvrez quelques-uns des projets qui illustrent notre engagement envers l'excellence et l'innovation.</p>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 md:space-x-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
                                activeFilter === category
                                ? 'bg-brand-accent text-brand-primary'
                                : 'bg-brand-secondary text-brand-text hover:bg-gray-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;