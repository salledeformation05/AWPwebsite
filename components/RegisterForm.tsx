import React, { useState } from 'react';
import { Logo } from './Logo';
import { useToast } from '../contexts/ToastContext';

interface RegisterFormProps {
  onNavigateToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onNavigateToLogin }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setError('');
    // In a real app, you would handle registration logic here
    console.log({ name, company, email, password });
    showToast('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
    onNavigateToLogin();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-brand-secondary p-8 rounded-lg shadow-2xl shadow-black/30">
      <div className="text-center mb-6">
        <Logo className="text-4xl mx-auto" />
      </div>
      <h2 className="text-3xl font-bold text-center text-white mb-2 font-heading">Créer un Compte Client</h2>
      <p className="text-center text-brand-text mb-8">Rejoignez la plateforme AWP.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text">Nom complet</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-text">Nom de l'entreprise</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-brand-text">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-text">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-brand-primary bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300 mt-4"
          >
            S'inscrire
          </button>
        </div>
      </form>
      <div className="text-center mt-6 text-sm">
        <p className="text-brand-text">
          Déjà un compte ?{' '}
          <button
            onClick={onNavigateToLogin}
            className="font-semibold text-brand-accent hover:underline focus:outline-none"
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
