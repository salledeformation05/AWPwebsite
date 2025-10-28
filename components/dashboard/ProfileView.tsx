import React, { useState, useContext } from 'react';
import { User, AuthContext } from '../../types';
import { useToast } from '../../contexts/ToastContext';

interface ProfileViewProps {
    user: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: user.name, email: user.email, company: user.company });
    const { login } = useContext(AuthContext);
    const { showToast } = useToast();
    
    const handleSave = () => {
        // In a real app, this would be an API call. Here we update the context.
        const updatedUser = { ...user, ...formData };
        login(updatedUser);
        setIsEditing(false);
        showToast('Profil mis à jour avec succès !');
    };

    const handleCancel = () => {
        setFormData({ name: user.name, email: user.email, company: user.company });
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white font-heading">Profil Client</h2>
                {!isEditing && (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="bg-brand-primary text-brand-text font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                    >
                        Modifier
                    </button>
                )}
            </div>
            <div className="bg-brand-primary p-6 rounded-lg text-white space-y-4">
                <div>
                    <label className="text-sm text-brand-text">Nom</label>
                    {isEditing ? (
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"/>
                    ) : (
                        <p className="text-lg">{user.name}</p>
                    )}
                </div>
                <div>
                    <label className="text-sm text-brand-text">Email</label>
                     {isEditing ? (
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"/>
                    ) : (
                        <p className="text-lg">{user.email}</p>
                    )}
                </div>
                <div>
                    <label className="text-sm text-brand-text">Entreprise</label>
                     {isEditing ? (
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full bg-brand-secondary border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"/>
                    ) : (
                        <p className="text-lg">{user.company}</p>
                    )}
                </div>
                {isEditing && (
                    <div className="flex justify-end space-x-4 pt-4">
                        <button onClick={handleCancel} className="bg-brand-secondary text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            Annuler
                        </button>
                        <button onClick={handleSave} className="bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-md hover:bg-brand-accent-hover transition-colors">
                            Sauvegarder
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileView;