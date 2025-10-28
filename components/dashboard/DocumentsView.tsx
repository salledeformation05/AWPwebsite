import React, { useContext } from 'react';
import { DownloadIcon } from '../icons/DownloadIcon';
import { useToast } from '../../contexts/ToastContext';
import { allDocuments } from '../../data/documents';
import { AuthContext } from '../../types';

const DocumentsView: React.FC = () => {
    const { showToast } = useToast();
    const { user } = useContext(AuthContext);

    const userDocuments = user ? allDocuments.filter(doc => doc.clientId === user.id) : [];

    const handleDownload = (docName: string) => {
        showToast(`Le téléchargement de "${docName}" a commencé.`);
        // In a real app, this would trigger an actual file download.
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Documents du Projet</h2>
            <div className="bg-brand-primary p-6 rounded-lg">
                {userDocuments.length > 0 ? (
                    <ul className="space-y-3">
                        {userDocuments.map((doc) => (
                            <li key={doc.id} className="flex justify-between items-center bg-brand-secondary p-3 rounded-md hover:bg-brand-primary/50 transition-colors">
                                <div>
                                    <p className="font-semibold text-white">{doc.name}</p>
                                    <p className="text-sm text-brand-text">{doc.date} - {doc.size}</p>
                                </div>
                                <button onClick={() => handleDownload(doc.name)} className="text-brand-accent hover:text-white p-2 rounded-full hover:bg-brand-secondary transition-colors" aria-label={`Télécharger ${doc.name}`}>
                                    <DownloadIcon className="w-5 h-5" />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-brand-text text-center py-4">Aucun document disponible pour le moment.</p>
                )}
            </div>
        </div>
    );
};

export default DocumentsView;