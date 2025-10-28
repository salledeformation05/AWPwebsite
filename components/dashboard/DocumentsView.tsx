import React from 'react';
import { DownloadIcon } from '../icons/DownloadIcon';

const mockDocuments = [
    { name: 'Devis_Initial_v1.2.pdf', date: '12/06/2024', size: '2.3 MB' },
    { name: 'Plans_Techniques_Structure.dwg', date: '15/06/2024', size: '15.8 MB' },
    { name: 'Contrat_Signé.pdf', date: '20/06/2024', size: '1.1 MB' },
    { name: 'Facture_Acompte.pdf', date: '21/06/2024', size: '0.5 MB' },
];

const DocumentsView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Documents du Projet</h2>
            <div className="bg-brand-primary p-6 rounded-lg">
                <ul className="space-y-3">
                    {mockDocuments.map((doc, index) => (
                        <li key={index} className="flex justify-between items-center bg-brand-secondary p-3 rounded-md">
                            <div>
                                <p className="font-semibold text-white">{doc.name}</p>
                                <p className="text-sm text-brand-text">{doc.date} - {doc.size}</p>
                            </div>
                            <button className="text-brand-accent hover:text-white p-2">
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
