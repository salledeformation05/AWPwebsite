import React, { useState, createContext, useMemo } from 'react';
import { User } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ClientPortal from './components/ClientPortal';
import SoudurePage from './components/services/SoudurePage';
import ServiceDetailPage from './components/services/ServiceDetailPage';
import { allServices } from './data/services';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'portal';

export interface View {
    current: Page;
    params?: Record<string, any>;
}

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>({ current: 'home' });
    const [user, setUser] = useState<User | null>(null);

    const navigate = (page: Page, params?: Record<string, any>) => {
        setCurrentView({ current: page, params });
        window.scrollTo(0, 0);
    };
    
    const authContextValue = useMemo(() => ({
        user,
        login: (userData: User) => setUser(userData),
        logout: () => setUser(null),
    }), [user]);

    const renderContent = () => {
        const { current, params } = currentView;
        switch (current) {
            case 'home':
                return <HomePage navigate={navigate} />;
            case 'about':
                return <AboutPage />;
            case 'services':
                if (params?.slug) {
                    const service = allServices.find(s => s.slug === params.slug);
                    if (service) {
                        if (service.slug === 'soudure-avancee') {
                             return <SoudurePage service={service} navigate={navigate} />;
                        }
                        return <ServiceDetailPage service={service} navigate={navigate} />;
                    }
                }
                return <ServicesPage navigate={navigate} />;
            case 'projects':
                return <ProjectsPage />;
            case 'contact':
                return <ContactPage />;
            case 'portal':
                return <ClientPortal />;
            default:
                return <HomePage navigate={navigate} />;
        }
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <div className="bg-brand-primary min-h-screen flex flex-col">
                <Header currentView={currentView} navigate={navigate} />
                <main className="flex-grow">
                    {renderContent()}
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
};

export default App;
