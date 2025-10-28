import React, { useState } from 'react';
import { allTrainings as initialTrainings } from '../../data/trainings';
import { Training } from '../../types';
import { PlusIcon } from '../icons/PlusIcon';
import { EditIcon } from '../icons/EditIcon';
import { TrashIcon } from '../icons/TrashIcon';
import TrainingFormModal from './TrainingFormModal';
import { useToast } from '../../contexts/ToastContext';

const AdminTrainingView: React.FC = () => {
    const [trainings, setTrainings] = useState<Training[]>(initialTrainings);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTraining, setEditingTraining] = useState<Training | null>(null);
    const { showToast } = useToast();

    const handleOpenModal = (training?: Training) => {
        setEditingTraining(training || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingTraining(null);
    };

    const handleSave = (trainingToSave: Training) => {
        if (editingTraining) {
            setTrainings(trainings.map(t => t.id === trainingToSave.id ? trainingToSave : t));
            showToast('Formation modifiée avec succès !');
        } else {
            setTrainings([...trainings, { ...trainingToSave, id: (trainings.length + 1).toString(), slug: trainingToSave.title.toLowerCase().replace(/\s+/g, '-') }]);
            showToast('Formation ajoutée avec succès !');
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette formation ?")) {
            setTrainings(trainings.filter(t => t.id !== id));
            showToast('Formation supprimée avec succès !', 'error');
        }
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white font-heading">Gestion des Formations</h2>
                    <button 
                        onClick={() => handleOpenModal()}
                        className="flex items-center space-x-2 bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-colors duration-300"
                    >
                        <PlusIcon className="w-5 h-5" />
                        <span>Ajouter une formation</span>
                    </button>
                </div>

                <div className="bg-brand-primary p-6 rounded-lg overflow-x-auto">
                    <table className="w-full text-left text-sm text-brand-text">
                        <thead className="border-b border-brand-secondary">
                            <tr>
                                <th className="p-4">Titre</th>
                                <th className="p-4">Durée</th>
                                <th className="p-4">Prix</th>
                                <th className="p-4">Instructeur</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainings.map((training) => (
                                <tr key={training.id} className="border-b border-brand-secondary hover:bg-brand-secondary/50">
                                    <td className="p-4 font-medium text-white">{training.title}</td>
                                    <td className="p-4">{training.duration}</td>
                                    <td className="p-4">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(training.price)}</td>
                                    <td className="p-4">{training.instructor}</td>
                                    <td className="p-4 flex justify-end space-x-2">
                                        <button onClick={() => handleOpenModal(training)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Modifier">
                                            <EditIcon className="w-4 h-4 text-blue-400" />
                                        </button>
                                        <button onClick={() => handleDelete(training.id)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Supprimer">
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
                <TrainingFormModal
                    training={editingTraining}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                />
            )}
        </>
    );
};

export default AdminTrainingView;
