import React, { useState } from 'react';
import AdminDashboardView from './admin/AdminDashboardView';
import AdminNewsView from './admin/AdminNewsView';
import AdminClientsView from './admin/AdminClientsView';
import AdminServicesView from './admin/AdminServicesView';
import AdminBillingView from './admin/AdminBillingView';
import AdminTrainingView from './admin/AdminTrainingView';
import AdminDocumentsView from './admin/AdminDocumentsView';
import AdminMessagesView from './admin/AdminMessagesView';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { NewspaperIcon } from './icons/NewspaperIcon';
import { UsersIcon } from './icons/UsersIcon';
import { Page } from '../App';
import { SettingsIcon } from './icons/SettingsIcon';
import { DollarSignIcon } from './icons/DollarSignIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { MessageSquareIcon } from './icons/MessageSquareIcon';

type AdminView = 'dashboard' | 'news' | 'clients' | 'services' | 'billing' | 'training' | 'documents' | 'messages';

interface AdminPortalProps {
    navigate: (page: Page) => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ navigate }) => {
    const [currentView, setCurrentView] = useState<AdminView>('dashboard');

    const renderView = () => {
        switch(currentView) {
            case 'news':
                return <AdminNewsView />;
            case 'clients':
                return <AdminClientsView />;
            case 'services':
                return <AdminServicesView />;
            case 'billing':
                return <AdminBillingView />;
            case 'training':
                return <AdminTrainingView />;
            case 'documents':
                return <AdminDocumentsView />;
            case 'messages':
                return <AdminMessagesView />;
            case 'dashboard':
            default:
                return <AdminDashboardView />;
        }
    };

    const NavItem: React.FC<{
        view: AdminView;
        icon: React.ReactNode;
        label: string;
    }> = ({ view, icon, label }) => (
        <button
            onClick={() => setCurrentView(view)}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                currentView === view
                    ? 'bg-brand-accent text-brand-primary font-bold'
                    : 'text-brand-text hover:bg-brand-secondary'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-white font-heading mb-8">Portail d'Administration</h1>
             <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-200px)]">
                {/* Sidebar */}
                <aside className="md:w-64 bg-brand-primary p-4 rounded-lg flex-shrink-0 border border-brand-secondary">
                    <div className="space-y-2">
                        <NavItem view="dashboard" icon={<ChartBarIcon className="w-5 h-5" />} label="Tableau de bord" />
                        <NavItem view="news" icon={<NewspaperIcon className="w-5 h-5" />} label="Actualités" />
                        <NavItem view="clients" icon={<UsersIcon className="w-5 h-5" />} label="Clients" />
                        <NavItem view="services" icon={<SettingsIcon className="w-5 h-5" />} label="Services" />
                        <NavItem view="billing" icon={<DollarSignIcon className="w-5 h-5" />} label="Facturation" />
                        <NavItem view="documents" icon={<DocumentIcon className="w-5 h-5" />} label="Documents" />
                        <NavItem view="messages" icon={<MessageSquareIcon className="w-5 h-5" />} label="Messagerie" />
                        <NavItem view="training" icon={<BookOpenIcon className="w-5 h-5" />} label="Formations" />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-brand-secondary p-8 rounded-lg">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default AdminPortal;