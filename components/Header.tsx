import React, { useContext } from 'react';
// Fix: Update AuthContext import path to fix circular dependency
import { View, Page } from '../App';
import { AuthContext } from '../types';
import { UserIcon } from './icons/UserIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { Logo } from './Logo';

interface HeaderProps {
    currentView: View;
    navigate: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentView: View;
    navigate: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentView, navigate, children }) => (
    <button 
        onClick={() => navigate(page)}
        className={`text-sm font-medium ${currentView.current === page || (page === 'news' && currentView.current === 'newsArticle') ? 'text-brand-accent' : 'text-brand-text'} hover:text-brand-accent transition-colors duration-300`}
    >
        {children}
    </button>
);

const Header: React.FC<HeaderProps> = ({ currentView, navigate }) => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="bg-brand-primary/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
            <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
                <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate('home')}
                >
                    <Logo className="text-3xl" />
                </div>
                <div className="flex items-center space-x-6">
                     <div className="hidden md:flex items-center space-x-6">
                        <NavLink page="home" currentView={currentView} navigate={navigate}>ACCUEIL</NavLink>
                        <NavLink page="services" currentView={currentView} navigate={navigate}>SERVICES</NavLink>
                        <NavLink page="projects" currentView={currentView} navigate={navigate}>PROJETS</NavLink>
                        <NavLink page="news" currentView={currentView} navigate={navigate}>ACTUALITÉS</NavLink>
                        <NavLink page="about" currentView={currentView} navigate={navigate}>À PROPOS</NavLink>
                        <NavLink page="contact" currentView={currentView} navigate={navigate}>CONTACT</NavLink>
                    </div>
                    
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <UserIcon className="w-5 h-5 text-brand-text" />
                                <span className="hidden sm:inline text-sm text-brand-text">{user.name}</span>
                            </div>
                            <button onClick={logout} className="p-2 rounded-full hover:bg-brand-secondary transition-colors duration-300" aria-label="Logout">
                                <LogoutIcon className="w-5 h-5 text-brand-accent" />
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={() => navigate('portal')}
                            className="bg-brand-accent text-brand-primary text-sm font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105"
                        >
                            Espace Client
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;