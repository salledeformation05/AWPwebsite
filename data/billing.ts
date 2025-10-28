import { Invoice, Quote } from '../types';

export const allInvoices: Invoice[] = [
    { id: 'INV-2024-031', client: 'JD Industries', amount: 12500, issueDate: '20/06/2024', dueDate: '20/07/2024', status: 'Payée' },
    { id: 'INV-2024-030', client: 'Africa Logistics', amount: 45000, issueDate: '15/06/2024', dueDate: '15/07/2024', status: 'En attente' },
    { id: 'INV-2024-029', client: 'Benali Construction', amount: 8200, issueDate: '01/06/2024', dueDate: '01/07/2024', status: 'En attente' },
    { id: 'INV-2024-028', client: 'Green AgriTech', amount: 21000, issueDate: '10/05/2024', dueDate: '10/06/2024', status: 'En retard' },
    { id: 'INV-2024-027', client: 'Summit Mining', amount: 150000, issueDate: '05/05/2024', dueDate: '05/06/2024', status: 'Payée' },
];

export const allQuotes: Quote[] = [
    { id: 'QUO-2024-045', client: 'Summit Mining', amount: 75000, issueDate: '01/07/2024', expiryDate: '31/07/2024', status: 'Envoyé' },
    { id: 'QUO-2024-044', client: 'JD Industries', amount: 9500, issueDate: '25/06/2024', expiryDate: '25/07/2024', status: 'Accepté' },
    { id: 'QUO-2024-043', client: 'Nouveaux Horizons SA', amount: 18000, issueDate: '22/06/2024', expiryDate: '22/07/2024', status: 'Refusé' },
    { id: 'QUO-2024-042', client: 'Benali Construction', amount: 32000, issueDate: '18/06/2024', expiryDate: '18/07/2024', status: 'Envoyé' },
];
