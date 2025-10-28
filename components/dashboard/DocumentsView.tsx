import React from 'react';
import { DownloadIcon } from '../icons/DownloadIcon';
import { useToast } from '../../contexts/ToastContext';

const mockDocuments = [
    { name: 'Devis_Initial_v1.2.pdf', date: '12/06/2024', size: '2.3 MB' },
    { name: 'Plans_Techniques_Structure.dwg', date: '15/06/2024', size: '15.8 MB' },
    { name: 'Contrat_Signé.pdf', date: '20/06/2024', size: '1.1 MB' },
    { name: 'Facture_Acompte.pdf', date: '21/06/2024', size: '0.5 MB' },
];

const DocumentsView: React.FC = () => {
    const { showToast } = useToast();

    const handleDownload = (docName: string) => {
        showToast(`Le téléchargement de "${docName}" a commencé.`);
        // In a real app, this would trigger an actual file download.
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Documents du Projet</h2>
            <div className="bg-brand-primary p-6 rounded-lg">
                <ul className="space-y-3">
                    {mockDocuments.map((doc, index) => (
                        <li key={index} className="flex justify-between items-center bg-brand-secondary p-3 rounded-md hover:bg-brand-primary/50 transition-colors">
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
            </div>
        </div>
    );
};

export default DocumentsView;