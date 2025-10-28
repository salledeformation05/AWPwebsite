import React, { useState } from 'react';
import { allClients as initialClients } from '../../data/clients';
import { User } from '../../types';
import { PlusIcon } from '../icons/PlusIcon';
import { EditIcon } from '../icons/EditIcon';
import { TrashIcon } from '../icons/TrashIcon';
import ClientFormModal from './ClientFormModal';
import { useToast } from '../../contexts/ToastContext';

const AdminClientsView: React.FC = () => {
    const [clients, setClients] = useState<User[]>(initialClients);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingClient, setEditingClient] = useState<User | null>(null);
    const { showToast } = useToast();

    const handleOpenModal = (client?: User) => {
        setEditingClient(client || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingClient(null);
    };

    const handleSave = (clientToSave: User) => {
        if (editingClient) {
            setClients(clients.map(c => c.id === clientToSave.id ? clientToSave : c));
            showToast('Client modifié avec succès !');
        } else {
            setClients([...clients, { ...clientToSave, id: (clients.length + 1).toString() }]);
            showToast('Client ajouté avec succès !');
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
            setClients(clients.filter(c => c.id !== id));
            showToast('Client supprimé avec succès !', 'error');
        }
    };
    
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white font-heading">Gestion des Clients</h2>
                    <button 
                        onClick={() => handleOpenModal()}
                        className="flex items-center space-x-2 bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-colors duration-300"
                    >
                        <PlusIcon className="w-5 h-5" />
                        <span>Ajouter un client</span>
                    </button>
                </div>

                <div className="bg-brand-primary p-6 rounded-lg overflow-x-auto">
                    <table className="w-full text-left text-sm text-brand-text">
                        <thead className="border-b border-brand-secondary">
                            <tr>
                                <th className="p-4">Nom</th>
                                <th className="p-4">Entreprise</th>
                                <th className="p-4">Email</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} className="border-b border-brand-secondary hover:bg-brand-secondary/50">
                                    <td className="p-4 font-medium text-white">{client.name}</td>
                                    <td className="p-4">{client.company}</td>
                                    <td className="p-4">{client.email}</td>
                                    <td className="p-4 flex justify-end space-x-2">
                                        <button onClick={() => handleOpenModal(client)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Modifier">
                                            <EditIcon className="w-4 h-4 text-blue-400" />
                                        </button>
                                        <button onClick={() => handleDelete(client.id)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Supprimer">
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
                <ClientFormModal
                    client={editingClient}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
        </>
    );
};

export default AdminClientsView;