import React, { useState, useEffect } from 'react';
import { User } from '../../types';
import { XIcon } from '../icons/XIcon';

interface ClientFormModalProps {
    client: User | null;
    onClose: () => void;
    onSave: (client: User) => void;
}

const ClientFormModal: React.FC<ClientFormModalProps> = ({ client, onClose, onSave }) => {
    const [formData, setFormData] = useState<Omit<User, 'id'>>({
        name: '',
        email: '',
        company: '',
    });

    useEffect(() => {
        if (client) {
            setFormData(client);
        }
    }, [client]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: client?.id || Date.now().toString()
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
                    <h2 className="text-2xl font-bold text-white font-heading mb-6">{client ? 'Modifier' : 'Ajouter'} un client</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-text">Nom complet</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
                        </div>
                         <div>
                            <label htmlFor="company" className="block text-sm font-medium text-brand-text">Entreprise</label>
                             <input type="text" name="company" value={formData.company} onChange={handleChange} className="mt-1 w-full bg-brand-primary rounded-md p-2 text-white border border-brand-primary focus:ring-brand-accent focus:border-brand-accent" required/>
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

export default ClientFormModal;
