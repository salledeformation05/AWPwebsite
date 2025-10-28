import React, { useContext, useState } from 'react';
// Fix: Update AuthContext import path to fix circular dependency
import { AuthContext } from '../types';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import RegisterForm from './RegisterForm';

const ClientPortal: React.FC = () => {
    const { user } = useContext(AuthContext);
    const [view, setView] = useState<'login' | 'register'>('login');

    return (
        <div className="container mx-auto px-6 py-12">
            {user ? (
                <Dashboard />
            ) : (
                <>
                    {view === 'login' && <LoginForm onNavigateToRegister={() => setView('register')} />}
                    {view === 'register' && <RegisterForm onNavigateToLogin={() => setView('login')} />}
                </>
            )}
        </div>
    );
};

export default ClientPortal;