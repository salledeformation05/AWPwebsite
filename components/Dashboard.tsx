import React, { useState, useContext } from 'react';
// Fix: Update AuthContext import path to fix circular dependency
import { AuthContext } from '../types';
import { User } from '../types';
import OverviewView from './dashboard/OverviewView';
import ProfileView from './dashboard/ProfileView';
import DocumentsView from './dashboard/DocumentsView';
import MessagesView from './dashboard/MessagesView';
import SupportView from './dashboard/SupportView';
import { HomeIcon } from './icons/HomeIcon';
import { UserIcon } from './icons/UserIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { WrenchIcon } from './icons/WrenchIcon';

type DashboardView = 'overview' | 'profile' | 'documents' | 'messages' | 'support';

const Dashboard: React.FC = () => {
    const { user } = useContext(AuthContext);
    const [currentView, setCurrentView] = useState<DashboardView>('overview');

    const renderView = () => {
        switch (currentView) {
            case 'overview':
                return <OverviewView />;
            case 'profile':
                return <ProfileView user={user!} />;
            case 'documents':
                return <DocumentsView />;
            case 'messages':
                return <MessagesView />;
            case 'support':
                return <SupportView />;
            default:
                return <OverviewView />;
        }
    };

    const NavItem: React.FC<{
        view: DashboardView;
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

    if (!user) {
        return <p>Veuillez vous connecter pour voir le tableau de bord.</p>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-200px)]">
            {/* Sidebar */}
            <aside className="md:w-64 bg-brand-primary p-4 rounded-lg flex-shrink-0">
                <div className="space-y-2">
                    <NavItem view="overview" icon={<HomeIcon className="w-5 h-5" />} label="Vue d'ensemble" />
                    <NavItem view="profile" icon={<UserIcon className="w-5 h-5" />} label="Profil" />
                    <NavItem view="documents" icon={<DocumentIcon className="w-5 h-5" />} label="Documents" />
                    <NavItem view="messages" icon={<MessageSquareIcon className="w-5 h-5" />} label="Messagerie" />
                    <NavItem view="support" icon={<WrenchIcon className="w-5 h-5" />} label="Support" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-brand-secondary p-8 rounded-lg">
                {renderView()}
            </main>
        </div>
    );
};

export default Dashboard;
