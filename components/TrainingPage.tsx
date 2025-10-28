import React from 'react';
import { Page } from '../App';
import { allTrainings } from '../data/trainings';
import TrainingCard from './TrainingCard';

interface TrainingPageProps {
  navigate: (page: Page, params?: Record<string, any>) => void;
}

const TrainingPage: React.FC<TrainingPageProps> = ({ navigate }) => {
    return (
        <div className="bg-brand-secondary py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Nos Formations</h1>
                    <p className="text-brand-text mt-2 max-w-2xl mx-auto">Développez vos compétences avec nos formations techniques dispensées par des experts de l'industrie.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allTrainings.map(training => (
                        <TrainingCard 
                            key={training.id} 
                            training={training}
                        />
                    ))}
                </div>
                 <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Une question sur nos formations ?</h2>
                    <button
                        onClick={() => navigate('contact')}
                        className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Contactez notre équipe pédagogique
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
