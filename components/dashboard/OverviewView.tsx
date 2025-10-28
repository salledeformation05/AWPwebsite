import React from 'react';

const OverviewView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 font-heading">Vue d'ensemble du Projet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        <div className="bg-brand-primary p-6 rounded-lg">
          <h3 className="font-bold text-lg text-brand-accent">Statut du Projet Actif</h3>
          <p className="text-3xl font-bold mt-2">En Cours</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-brand-text mt-2">Prochaine étape : Installation sur site</p>
        </div>
        <div className="bg-brand-primary p-6 rounded-lg">
          <h3 className="font-bold text-lg text-brand-accent">Dernier Message</h3>
          <p className="text-brand-text mt-2 italic">"Bonjour, voici le devis mis à jour comme demandé. N'hésitez pas si vous avez des questions."</p>
          <p className="text-sm text-gray-400 mt-2">- Amina Traoré, il y a 2 jours</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
