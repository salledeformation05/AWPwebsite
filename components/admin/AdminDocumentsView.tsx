import React, { useState } from 'react';
import { allClients } from '../../data/clients';
import { allDocuments } from '../../data/documents';
import { useToast } from '../../contexts/ToastContext';
import { Document, User } from '../../types';
import { UploadIcon } from '../icons/UploadIcon';
import { TrashIcon } from '../icons/TrashIcon';

const AdminDocumentsView: React.FC = () => {
    const [selectedClient, setSelectedClient] = useState<User | null>(null);
    const [documents, setDocuments] = useState<Document[]>(allDocuments);
    const { showToast } = useToast();

    const handleClientSelect = (client: User) => {
        setSelectedClient(client);
    };

    const handleUpload = () => {
        if (!selectedClient) {
            showToast("Veuillez d'abord sélectionner un client.", "error");
            return;
        }
        const newDoc: Document = {
            id: `doc_${Date.now()}`,
            clientId: selectedClient.id,
            name: `Nouveau_Document_${new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')}.pdf`,
            date: new Date().toLocaleDateString('fr-FR'),
            size: `${(Math.random() * 5 + 0.5).toFixed(1)} MB`
        };
        
        // Mutate the shared array and update state to trigger re-render
        allDocuments.push(newDoc);
        setDocuments([...allDocuments]);
        showToast(`Document ajouté pour ${selectedClient.name}`);
    };

    const handleDelete = (docId: string) => {
        // In a real app, you'd have a confirmation modal
        const docIndex = allDocuments.findIndex(d => d.id === docId);
        if (docIndex > -1) {
            allDocuments.splice(docIndex, 1);
            setDocuments([...allDocuments]);
            showToast('Document supprimé.', 'error');
        }
    };

    const clientDocuments = selectedClient ? documents.filter(doc => doc.clientId === selectedClient.id) : [];

    return (
        <div className="flex flex-col md:flex-row gap-6 h-full">
            {/* Client List */}
            <div className="md:w-1/3 bg-brand-primary p-4 rounded-lg flex-shrink-0">
                <h3 className="text-xl font-bold text-white mb-4">Clients</h3>
                <ul className="space-y-2">
                    {allClients.map(client => (
                        <li key={client.id}>
                            <button 
                                onClick={() => handleClientSelect(client)}
                                className={`w-full text-left p-3 rounded-md transition-colors text-sm ${selectedClient?.id === client.id ? 'bg-brand-accent text-brand-primary font-bold' : 'text-white hover:bg-brand-secondary'}`}
                            >
                                {client.name} <br/>
                                <span className="text-xs opacity-70">{client.company}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Document View */}
            <div className="flex-1 bg-brand-primary p-4 rounded-lg">
                {selectedClient ? (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                             <h3 className="text-xl font-bold text-white">Documents pour {selectedClient.name}</h3>
                             <button
                                onClick={handleUpload} 
                                className="flex items-center space-x-2 bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-colors text-sm">
                                 <UploadIcon className="w-4 h-4" />
                                 <span>Charger</span>
                             </button>
                        </div>
                        {clientDocuments.length > 0 ? (
                            <ul className="space-y-2">
                                {clientDocuments.map(doc => (
                                    <li key={doc.id} className="flex justify-between items-center bg-brand-secondary p-3 rounded-md">
                                        <div>
                                            <p className="font-semibold text-white text-sm">{doc.name}</p>
                                            <p className="text-xs text-brand-text">{doc.date} - {doc.size}</p>
                                        </div>
                                        <button onClick={() => handleDelete(doc.id)} className="p-2 hover:bg-gray-700 rounded-full" aria-label="Supprimer">
                                            <TrashIcon className="w-4 h-4 text-red-400" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-brand-text text-center py-8">Aucun document pour ce client.</p>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-brand-text">Sélectionnez un client pour voir ses documents.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDocumentsView;