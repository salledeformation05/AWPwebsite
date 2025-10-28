import React, { useState, useEffect } from 'react';
import { Training } from '../../types';
import { XIcon } from '../icons/XIcon';

interface TrainingFormModalProps {
    training: Training | null;
    onClose: () => void;
    onSave: (training: Training) => void;
}

const TrainingFormModal: React.FC<TrainingFormModalProps> = ({ training, onClose, onSave }) => {
    const [formData, setFormData] = useState<Omit<Training, 'id' | 'slug'>>({
        title: '',
        description: '',
        duration: '',
        price: 0,
        instructor: ''
    });

    useEffect(() => {
        if (training) {
            setFormData(training);
        }
    }, [training]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({...prev, [name]: type === 'number' ? parseFloat(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: training?.id || Date.now().toString(),
            slug: training?.slug || formData.title.toLowerCase().replace(/\s+/g, '-')
        });
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-brand-secondary rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative">
                 <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-text hover:text-white transition-colors z-20 p-2 bg-black/30 rounded-full"
                    aria-label="Fermer"
                >
                    <XIcon className="w-6 h-6" />
                </button>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-white font-heading mb-6">{training ? 'Modifier' : 'Ajouter'} une formation</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-brand-text">Titre de la formation</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-brand-text">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required></textarea>
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="duration" className="block text-sm font-medium text-brand-text">Durée</label>
                                <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" placeholder="ex: 4 semaines" required/>
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-brand-text">Prix (EUR)</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="instructor" className="block text-sm font-medium text-brand-text">Instructeur</label>
                            <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                         <div className="flex justify-end space-x-4 pt-4">
                            <button type="button" onClick={onClose} className="py-2 px-4 rounded-md bg-brand-primary text-white hover:bg-gray-700 transition-colors">Annuler</button>
                            <button type="submit" className="py-2 px-4 rounded-md bg-brand-accent text-brand-primary font-bold hover:bg-brand-accent-hover transition-colors">Sauvegarder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TrainingFormModal;
