
import React from 'react';
import { WeldIcon } from './components/icons/WeldIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/50 border-t border-brand-secondary">
            <div className="container mx-auto px-6 py-8 text-center text-brand-text">
                <div className="flex justify-center items-center space-x-3 mb-4">
                    <WeldIcon className="w-7 h-7 text-brand-accent" />
                    <h3 className="text-lg font-bold font-heading text-white">African Workshops and Pioneers</h3>
                </div>
                <p className="text-sm">Forging the Future of African Industry.</p>
                <p className="text-xs mt-4">&copy; {new Date().getFullYear()} AWP. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;