import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { XIcon } from './icons/XIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
    const [sliderValue, setSliderValue] = useState(50);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    const shareUrl = window.location.href;
    const shareTitle = `Découvrez le projet AWP : ${project.title}`;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-brand-secondary rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-text hover:text-white transition-colors z-20 p-2 bg-black/30 rounded-full"
                    aria-label="Fermer"
                >
                    <XIcon className="w-6 h-6" />
                </button>
                
                {project.imageBeforeUrl ? (
                     <div className="relative w-full aspect-video select-none group flex-shrink-0">
                        <img
                            src={project.imageBeforeUrl}
                            alt="Avant les travaux"
                            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                        />
                        <div
                            className="absolute inset-0 w-full h-full overflow-hidden rounded-t-lg"
                            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                        >
                            <img
                                src={project.imageUrl}
                                alt="Après les travaux"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                         <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">AVANT</div>
                         <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded" style={{ opacity: sliderValue > 90 ? 1 : 0, transition: 'opacity 0.3s' }}>APRÈS</div>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                            aria-label="Comparer avant et après"
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 h-full w-1 bg-white/50 pointer-events-none" style={{ left: `${sliderValue}%` }}>
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/80 grid place-items-center text-black font-bold text-lg">&harr;</div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full aspect-video flex-shrink-0">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                )}
                
                <div className="p-8">
                    <p className="text-sm text-brand-accent font-semibold">{project.category}</p>
                    <h2 className="text-3xl font-bold text-white font-heading mt-1">{project.title}</h2>
                    <p className="text-brand-text mt-4">{project.description}</p>
                    
                    {project.testimonial && (
                        <blockquote className="mt-8 p-6 bg-brand-primary rounded-lg border-l-4 border-brand-accent">
                            <p className="text-lg italic text-white">"{project.testimonial.text}"</p>
                            <footer className="mt-4 text-right text-brand-accent font-semibold">&mdash; {project.testimonial.author}</footer>
                        </blockquote>
                    )}
                    
                    <div className="mt-8 pt-6 border-t border-brand-primary flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-white">Partager ce projet</h3>
                        <div className="flex space-x-4">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(project.description)}`} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
                            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}: ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
                .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
        </div>
    );
};

export default ProjectDetailModal;