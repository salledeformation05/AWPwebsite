import React, { useState } from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { useToast } from '../contexts/ToastContext';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const { showToast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        showToast('Merci ! Votre message a été envoyé.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-brand-secondary py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Contactez-nous</h1>
                    <p className="text-brand-text mt-2">Une question ? Un projet ? Nous sommes à votre écoute.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 bg-brand-primary p-8 rounded-lg shadow-2xl">
                    {/* Contact Info */}
                    <div className="space-y-8 text-brand-text">
                        <h2 className="text-2xl font-bold text-white font-heading">Informations de Contact</h2>
                        <div className="flex items-start space-x-4">
                            <MapPinIcon className="w-6 h-6 text-brand-accent mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-white">Adresse</h3>
                                <p>Îlot : 8, Parcelle : J, ATLANTIQUE, ABOMEY-CALAVI, HEVIE, ZOUNGO<br/>Bénin</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <PhoneIcon className="w-6 h-6 text-brand-accent mt-1" />
                            <div>
                                <h3 className="font-semibold text-white">Téléphone</h3>
                                <a href="https://wa.me/2290195429807" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">+229 01 95 42 98 07</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MailIcon className="w-6 h-6 text-brand-accent mt-1" />
                            <div>
                                <h3 className="font-semibold text-white">Email</h3>
                                <a href="mailto:africanworkshopsandpartners@gmail.com" className="hover:text-brand-accent transition-colors duration-300">africanworkshopsandpartners@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Nom complet</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent" required />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium">Adresse Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent" required />
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium">Sujet</label>
                            <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea id="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent" required></textarea>
                        </div>
                        <div>
                             <button type="submit" className="w-full justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-brand-primary bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300">
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;