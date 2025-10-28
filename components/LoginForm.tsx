
import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
import { User } from '../types';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'client@awp.com' && password === 'password') {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: 'client@awp.com',
        company: 'JD Industries',
      };
      login(mockUser);
      setError('');
    } else {
      setError('Identifiants invalides. Utilisez client@awp.com / password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-brand-secondary p-8 rounded-lg shadow-2xl shadow-black/30">
      <h2 className="text-3xl font-bold text-center text-white mb-2 font-heading">Espace Client</h2>
      <p className="text-center text-brand-text mb-8">Accédez à votre tableau de bord de projet.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text">
            Email
          </label>
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
          <label htmlFor="password" className="block text-sm font-medium text-brand-text">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full bg-brand-primary border border-brand-secondary rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            required
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-brand-primary bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
