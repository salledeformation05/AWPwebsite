import React, { useState, useEffect } from 'react';
import { Service, ServiceIconType } from '../../types';
import { XIcon } from '../icons/XIcon';
import { ServiceIcon } from '../ServiceIcon';

interface ServiceFormModalProps {
    service: Service | null;
    onClose: () => void;
    onSave: (service: Service) => void;
}

const iconOptions: ServiceIconType[] = ['weld', 'briefcase', 'maintenance', 'cutting', 'metalwork', 'paint', 'construction', 'training'];

const ServiceFormModal: React.FC<ServiceFormModalProps> = ({ service, onClose, onSave }) => {
    const [formData, setFormData] = useState<Omit<Service, 'id'>>({
        title: '',
        slug: '',
        description: '',
        icon: 'weld',
    });

    useEffect(() => {
        if (service) {
            setFormData(service);
        }
    }, [service]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'title') {
            const slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            setFormData(prev => ({ ...prev, title: value, slug }));
        } else {
            setFormData(prev => ({...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: service?.id || Date.now().toString()
        });
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-brand-secondary rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col relative">
                 <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-text hover:text-white transition-colors z-20 p-2 bg-black/30 rounded-full"
                    aria-label="Fermer"
                >
                    <XIcon className="w-6 h-6" />
                </button>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-white font-heading mb-6">{service ? 'Modifier' : 'Ajouter'} un service</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-brand-text">Titre</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-brand-text">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required></textarea>
                        </div>
                        <div>
                            <label htmlFor="icon" className="block text-sm font-medium text-brand-text">Icône</label>
                            <select name="icon" value={formData.icon} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent">
                                {iconOptions.map(icon => (
                                    <option key={icon} value={icon}>{icon}</option>
                                ))}
                            </select>
                            <div className="mt-2 text-center p-2 bg-brand-primary rounded">
                                <ServiceIcon icon={formData.icon} className="w-8 h-8 text-brand-accent mx-auto" />
                            </div>
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

export default ServiceFormModal;
