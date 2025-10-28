import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { ShieldIcon } from './icons/ShieldIcon';
import { GearIcon } from './icons/GearIcon';

const teamMembers = [
    { name: 'Ephrem Adam DOSSOU-YOVO', role: 'Fondateur & CEO', imageUrl: 'https://picsum.photos/seed/team1/400/400' },
    { name: 'Amina Traoré', role: 'Directrice des Opérations', imageUrl: 'https://picsum.photos/seed/team2/400/400' },
    { name: 'Moussa Diop', role: 'Chef d\'Atelier', imageUrl: 'https://picsum.photos/seed/team3/400/400' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-secondary text-brand-text">
            {/* Hero Section */}
            <section className="relative bg-black/30">
                <img src="https://picsum.photos/seed/about-hero/1600/600" alt="Atelier AWP" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
                <div className="relative container mx-auto px-6 py-24 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">Forger l'Avenir de l'Industrie Africaine</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">Depuis plus de 10 ans, AWP est à la pointe de l'innovation dans les services industriels, avec une passion pour la précision et un engagement indéfectible envers nos partenaires.</p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-brand-primary">
                <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl font-bold text-white font-heading mb-12">Nos Piliers Fondamentaux</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <TargetIcon className="w-12 h-12 text-brand-accent mb-4"/>
                            <h3 className="text-xl font-bold text-white font-heading mb-2">Notre Mission</h3>
                            <p className="text-sm">Être le partenaire industriel de référence en Afrique, en fournissant des solutions innovantes et durables qui soutiennent la croissance du continent.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldIcon className="w-12 h-12 text-brand-accent mb-4"/>
                            <h3 className="text-xl font-bold text-white font-heading mb-2">Nos Valeurs</h3>
                            <p className="text-sm">Qualité, Sécurité, Intégrité. Ces trois piliers guident chacune de nos actions et garantissent l'excellence de nos prestations.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <GearIcon className="w-12 h-12 text-brand-accent mb-4"/>
                            <h3 className="text-xl font-bold text-white font-heading mb-2">Notre Expertise</h3>
                            <p className="text-sm">Plus de 10 ans d'expérience dans la métallurgie de pointe, avec une équipe d'experts certifiés et passionnés par leur métier.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <section className="py-20">
                 <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white font-heading mb-12">Notre Équipe Dirigeante</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map(member => (
                            <div key={member.name} className="bg-brand-primary p-6 rounded-lg">
                                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-accent"/>
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-brand-accent">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
