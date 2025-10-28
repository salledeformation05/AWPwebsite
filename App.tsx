import React, { useState, useMemo } from 'react';
// Fix: Import User and AuthContext from types.ts to fix circular dependency
import { User, AuthContext } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ClientPortal from './components/ClientPortal';
import AdminPortal from './components/AdminPortal';
import SoudurePage from './components/services/SoudurePage';
import ServiceDetailPage from './components/services/ServiceDetailPage';
import NewsPage from './components/NewsPage';
import NewsArticlePage from './components/NewsArticlePage';
import TrainingPage from './components/TrainingPage';
import { allServices } from './data/services';
import { allNews } from './data/news';
import { ToastProvider } from './contexts/ToastContext';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'portal' | 'admin' | 'news' | 'newsArticle' | 'training';

export interface View {
    current: Page;
    params?: Record<string, any>;
}

// Fix: Moved AuthContextType and AuthContext to types.ts to fix circular dependency

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
            case 'admin':
                return <AdminPortal navigate={navigate} />;
            case 'news':
                return <NewsPage navigate={navigate} />;
            case 'newsArticle':
                if (params?.slug) {
                    const article = allNews.find(a => a.slug === params.slug);
                    if (article) {
                        return <NewsArticlePage article={article} navigate={navigate} />;
                    }
                }
                return <NewsPage navigate={navigate} />; // Fallback
            case 'training':
                return <TrainingPage navigate={navigate} />;
            default:
                return <HomePage navigate={navigate} />;
        }
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <ToastProvider>
                <div className="bg-brand-primary min-h-screen flex flex-col">
                    <Header currentView={currentView} navigate={navigate} />
                    <main className="flex-grow">
                        {renderContent()}
                    </main>
                    <Footer navigate={navigate} />
                </div>
            </ToastProvider>
        </AuthContext.Provider>
    );
};

export default App;