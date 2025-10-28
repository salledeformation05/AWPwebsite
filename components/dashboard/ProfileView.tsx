import React from 'react';
import { User } from '../../types';

interface ProfileViewProps {
    user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Profil Client</h2>
            <div className="bg-brand-primary p-6 rounded-lg text-white space-y-4">
                <div>
                    <label className="text-sm text-brand-text">Nom</label>
                    <p className="text-lg">{user.name}</p>
                </div>
                <div>
                    <label className="text-sm text-brand-text">Email</label>
                    <p className="text-lg">{user.email}</p>
                </div>
                <div>
                    <label className="text-sm text-brand-text">Entreprise</label>
                    <p className="text-lg">{user.company}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
