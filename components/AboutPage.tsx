
import React from 'react';

const AboutPage: React.FC = () => {
    const teamMembers = [
        { name: 'Jean-Luc Koffi', role: 'Fondateur & Ingénieur en Chef', imageUrl: 'https://picsum.photos/seed/team1/300/300' },
        { name: 'Amina Traoré', role: 'Chef de Projet', imageUrl: 'https://picsum.photos/seed/team2/300/300' },
        { name: 'Moussa Diop', role: 'Maître Soudeur', imageUrl: 'https://picsum.photos/seed/team3/300/300' },
    ];

    return (
        <div className="bg-brand-primary text-brand-text">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">À Propos d'AWP</h1>
                    <p className="max-w-3xl mx-auto text-lg">African Workshops and Pioneers est plus qu'une entreprise. C'est une vision pour une Afrique industrielle, autonome et innovante.</p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/about/800/600" alt="Atelier AWP" className="rounded-lg shadow-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-accent font-heading mb-4">Notre Histoire</h2>
                        <p className="mb-4">Fondée en 2010, AWP a commencé comme un petit atelier de soudure avec une grande ambition : offrir des services de métallurgie de classe mondiale avec une touche purement africaine. Au fil des ans, nous avons grandi, diversifié nos compétences et sommes devenus un partenaire de confiance pour les plus grands projets industriels de la région.</p>
                        <p>Notre engagement envers la qualité, la sécurité et la formation de la prochaine génération d'artisans est le fondement de notre succès.</p>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-white font-heading mb-12">Notre Équipe Dirigeante</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name} className="bg-brand-secondary p-6 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-accent" />
                                <h3 className="text-xl font-bold text-white font-heading">{member.name}</h3>
                                <p className="text-brand-accent">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
