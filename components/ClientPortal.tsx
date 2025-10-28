
import React, { useContext } from 'react';
import { AuthContext } from '../App';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const ClientPortal: React.FC = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto px-6 py-12">
            {user ? <Dashboard /> : <LoginForm />}
        </div>
    );
};

export default ClientPortal;
