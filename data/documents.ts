import { Document } from '../types';

// Using 'let' to allow modification for mock uploads
export let allDocuments: Document[] = [
    { id: 'doc1', clientId: '1', name: 'Devis_Initial_v1.2.pdf', date: '12/06/2024', size: '2.3 MB' },
    { id: 'doc2', clientId: '1', name: 'Plans_Techniques_Structure.dwg', date: '15/06/2024', size: '15.8 MB' },
    { id: 'doc3', clientId: '1', name: 'Contrat_Signé.pdf', date: '20/06/2024', size: '1.1 MB' },
    { id: 'doc4', clientId: '1', name: 'Facture_Acompte.pdf', date: '21/06/2024', size: '0.5 MB' },
    { id: 'doc5', clientId: '2', name: 'Bon_de_commande_Logistique.pdf', date: '18/06/2024', size: '0.8 MB' },
];
