import React, { useState } from 'react';
import { allServices as initialServices } from '../../data/services';
import { Service } from '../../types';
import { PlusIcon } from '../icons/PlusIcon';
import { EditIcon } from '../icons/EditIcon';
import { TrashIcon } from '../icons/TrashIcon';
import ServiceFormModal from './ServiceFormModal';
import { useToast } from '../../contexts/ToastContext';
import { ServiceIcon } from '../ServiceIcon';

const AdminServicesView: React.FC = () => {
    const [services, setServices] = useState<Service[]>(initialServices);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const { showToast } = useToast();

    const handleOpenModal = (service?: Service) => {
        setEditingService(service || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingService(null);
    };

    const handleSave = (serviceToSave: Service) => {
        if (editingService) {
            setServices(services.map(s => s.id === serviceToSave.id ? serviceToSave : s));
            showToast('Service modifié avec succès !');
        } else {
            setServices([...services, { ...serviceToSave, id: (services.length + 1).toString() }]);
            showToast('Service ajouté avec succès !');
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce service ?")) {
            setServices(services.filter(s => s.id !== id));
            showToast('Service supprimé avec succès !', 'error');
        }
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white font-heading">Gestion des Services</h2>
                    <button 
                        onClick={() => handleOpenModal()}
                        className="flex items-center space-x-2 bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-colors duration-300"
                    >
                        <PlusIcon className="w-5 h-5" />
                        <span>Ajouter un service</span>
                    </button>
                </div>

                <div className="bg-brand-primary p-6 rounded-lg overflow-x-auto">
                    <table className="w-full text-left text-sm text-brand-text">
                        <thead className="border-b border-brand-secondary">
                            <tr>
                                <th className="p-4">Icône</th>
                                <th className="p-4">Titre</th>
                                <th className="p-4">Description</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id} className="border-b border-brand-secondary hover:bg-brand-secondary/50">
                                    <td className="p-4"><ServiceIcon icon={service.icon} className="w-6 h-6 text-brand-accent"/></td>
                                    <td className="p-4 font-medium text-white">{service.title}</td>
                                    <td className="p-4 max-w-sm truncate">{service.description}</td>
                                    <td className="p-4 flex justify-end space-x-2">
                                        <button onClick={() => handleOpenModal(service)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Modifier">
                                            <EditIcon className="w-4 h-4 text-blue-400" />
                                        </button>
                                        <button onClick={() => handleDelete(service.id)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Supprimer">
                                            <TrashIcon className="w-4 h-4 text-red-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <ServiceFormModal
                    service={editingService}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
        </>
    );
};

export default AdminServicesView;