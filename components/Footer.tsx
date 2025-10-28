import React from 'react';
import { Page } from '../App';
import { Logo } from './Logo';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FooterProps {
    navigate: (page: Page, params?: Record<string, any>) => void;
}

const FooterLink: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
}> = ({ onClick, children }) => (
    <li>
        <button onClick={onClick} className="hover:text-brand-accent transition-colors duration-200">
            {children}
        </button>
    </li>
);

const Footer: React.FC<FooterProps> = ({ navigate }) => {
    return (
        <footer className="bg-black/50 border-t border-brand-secondary">
            <div className="container mx-auto px-6 pt-16 pb-8 text-brand-text">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-left">
                    {/* Column 1: Logo & Socials */}
                    <div className="md:col-span-1">
                        <Logo className="text-3xl mb-4" />
                        <p className="mb-4">Forger l'avenir de l'industrie africaine avec précision et passion.</p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-brand-accent transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-brand-accent transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
                            <a href="https://wa.me/2290195429807" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-brand-accent transition-colors"><WhatsAppIcon className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="font-bold text-white mb-4 font-heading">Navigation</h4>
                        <ul className="space-y-2">
                            <FooterLink onClick={() => navigate('home')}>Accueil</FooterLink>
                            <FooterLink onClick={() => navigate('projects')}>Projets</FooterLink>
                            <FooterLink onClick={() => navigate('news')}>Actualités</FooterLink>
                            <FooterLink onClick={() => navigate('about')}>À Propos</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                     <div>
                        <h4 className="font-bold text-white mb-4 font-heading">Nos Services</h4>
                        <ul className="space-y-2">
                            <FooterLink onClick={() => navigate('services', { slug: 'soudure-avancee' })}>Soudure Avancée</FooterLink>
                            <FooterLink onClick={() => navigate('services', { slug: 'fabrication-metallique' })}>Fabrication Métallique</FooterLink>
                            <FooterLink onClick={() => navigate('services', { slug: 'charpente-metallique' })}>Charpente Métallique</FooterLink>
                            <FooterLink onClick={() => navigate('services')}>Voir tous les services</FooterLink>
                        </ul>
                    </div>
                    
                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-bold text-white mb-4 font-heading">Ressources</h4>
                        <ul className="space-y-2">
                            <FooterLink onClick={() => navigate('training')}>Formations</FooterLink>
                            <FooterLink onClick={() => navigate('contact')}>Contact</FooterLink>
                            <FooterLink onClick={() => navigate('portal')}>Espace Client</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-secondary/50 text-center text-xs">
                    <button 
                      onClick={() => navigate('admin')}
                      className="cursor-pointer hover:text-white transition-colors"
                    >
                        &copy; {new Date().getFullYear()} AWP. Tous droits réservés.
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;