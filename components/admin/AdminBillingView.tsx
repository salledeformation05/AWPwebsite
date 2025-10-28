import React, { useState } from 'react';
import { allInvoices } from '../../data/billing';
import { allQuotes } from '../../data/billing';
import { Invoice, Quote } from '../../types';

type BillingView = 'invoices' | 'quotes';

const statusStyles: { [key: string]: string } = {
    'Payée': 'bg-green-500/20 text-green-400',
    'En retard': 'bg-red-500/20 text-red-400',
    'En attente': 'bg-yellow-500/20 text-yellow-400',
    'Accepté': 'bg-green-500/20 text-green-400',
    'Envoyé': 'bg-blue-500/20 text-blue-400',
    'Refusé': 'bg-red-500/20 text-red-400',
};

const BillingTable: React.FC<{ data: (Invoice | Quote)[] }> = ({ data }) => {
    const isInvoice = (item: any): item is Invoice => 'dueDate' in item;
    
    return (
        <div className="bg-brand-primary p-6 rounded-lg overflow-x-auto">
            <table className="w-full text-left text-sm text-brand-text">
                <thead className="border-b border-brand-secondary">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Client</th>
                        <th className="p-4">Montant</th>
                        <th className="p-4">Date d'émission</th>
                        <th className="p-4">{isInvoice(data[0]) ? "Date d'échéance" : "Date d'expiration"}</th>
                        <th className="p-4">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b border-brand-secondary hover:bg-brand-secondary/50">
                            <td className="p-4 font-mono text-xs">{item.id}</td>
                            <td className="p-4 font-medium text-white">{item.client}</td>
                            <td className="p-4">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.amount)}</td>
                            <td className="p-4">{item.issueDate}</td>
                            <td className="p-4">{isInvoice(item) ? item.dueDate : item.expiryDate}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[item.status]}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const AdminBillingView: React.FC = () => {
    const [view, setView] = useState<BillingView>('invoices');

    return (
        <div>
            <h2 className="text-3xl font-bold text-white font-heading mb-6">Facturation et Devis</h2>
            
            <div className="mb-6 flex space-x-2 border-b border-brand-secondary">
                <button 
                    onClick={() => setView('invoices')}
                    className={`py-2 px-4 font-semibold transition-colors ${view === 'invoices' ? 'border-b-2 border-brand-accent text-white' : 'text-brand-text'}`}
                >
                    Factures
                </button>
                 <button 
                    onClick={() => setView('quotes')}
                    className={`py-2 px-4 font-semibold transition-colors ${view === 'quotes' ? 'border-b-2 border-brand-accent text-white' : 'text-brand-text'}`}
                >
                    Devis
                </button>
            </div>

            {view === 'invoices' && <BillingTable data={allInvoices} />}
            {view === 'quotes' && <BillingTable data={allQuotes} />}

        </div>
    );
};

export default AdminBillingView;