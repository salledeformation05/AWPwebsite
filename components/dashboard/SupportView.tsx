import React from 'react';

const SupportView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Support Technique</h2>
            <div className="bg-brand-primary p-6 rounded-lg">
                <p className="text-brand-text mb-4">Pour toute demande urgente, veuillez contacter directement votre chef de projet, Amina Traoré.</p>
                <p className="text-white"><span className="font-bold">Email :</span> amina.traore@awp.ci</p>
                <p className="text-white"><span className="font-bold">Téléphone :</span> +225 01 02 03 04 06</p>
            </div>
        </div>
    );
};

export default SupportView;
