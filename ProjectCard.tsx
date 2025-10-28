
import React from 'react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-brand-secondary rounded-lg overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-56">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <p className="text-sm text-brand-accent font-semibold">{project.category}</p>
        <h3 className="text-xl font-bold mt-1 mb-2 text-white font-heading">{project.title}</h3>
        <p className="text-brand-text text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;