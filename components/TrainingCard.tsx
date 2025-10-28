import React from 'react';
import { Training } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface TrainingCardProps {
  training: Training;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training }) => {
  return (
    <div className="bg-brand-primary p-8 rounded-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/50">
        <div className="flex justify-between items-start mb-4">
            <BookOpenIcon className="w-8 h-8 text-brand-accent" />
            <div className="text-right">
                <div className="text-2xl font-bold text-white font-heading">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(training.price)}</div>
                <div className="text-sm text-brand-text">{training.duration}</div>
            </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white font-heading flex-grow">{training.title}</h3>
        <p className="text-brand-text text-sm mb-4">{training.description}</p>
        <div className="text-xs text-brand-text mt-auto pt-4 border-t border-brand-secondary">
            <span className="font-semibold text-brand-accent">Instructeur :</span> {training.instructor}
        </div>
    </div>
  );
};

export default TrainingCard;
