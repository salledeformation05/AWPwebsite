import React from 'react';
import BarChart from './BarChart';
import { DollarSignIcon } from '../icons/DollarSignIcon';
import { BriefcaseIcon } from '../icons/BriefcaseIcon';
import { UsersIcon } from '../icons/UsersIcon';

const kpiData = [
    { title: "Chiffre d'affaires (Mois)", value: "€45,231", icon: <DollarSignIcon className="w-8 h-8"/>, change: "+12.5%" },
    { title: "Nouveaux Devis", value: "24", icon: <BriefcaseIcon className="w-8 h-8"/>, change: "+5" },
    { title: "Clients Actifs", value: "12", icon: <UsersIcon className="w-8 h-8"/>, change: "+1" },
];

const revenueData = [
    { label: "Jan", value: 32000 }, { label: "Fév", value: 41000 }, { label: "Mar", value: 38000 },
    { label: "Avr", value: 52000 }, { label: "Mai", value: 48000 }, { label: "Juin", value: 45231 },
];

const recentActivities = [
    "Nouveau client ajouté : Summit Mining",
    "Projet 'Structure Hangar' marqué comme terminé",
    "Nouvel article publié : 'Lancement centre de formation'",
    "Facture #2024-031 payée par JD Industries",
];

const AdminDashboardView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white font-heading mb-6">Tableau de bord</h2>
            
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {kpiData.map(kpi => (
                    <div key={kpi.title} className="bg-brand-primary p-6 rounded-lg flex items-start justify-between">
                       <div>
                           <p className="text-sm text-brand-text">{kpi.title}</p>
                           <p className="text-3xl font-bold text-white mt-1">{kpi.value}</p>
                           <p className="text-sm text-green-400 mt-2">{kpi.change}</p>
                       </div>
                       <div className="text-brand-accent bg-brand-secondary p-3 rounded-full">
                           {kpi.icon}
                       </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-brand-primary p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Revenus Mensuels</h3>
                    <div className="h-64">
                         <BarChart data={revenueData} />
                    </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-brand-primary p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Activité Récente</h3>
                    <ul className="space-y-3">
                       {recentActivities.map((activity, index) => (
                           <li key={index} className="text-sm text-brand-text border-l-2 border-brand-accent pl-3">{activity}</li>
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardView;