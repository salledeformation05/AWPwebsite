import React, { useState } from 'react';
import { SendIcon } from '../icons/SendIcon';

const MessagesView: React.FC = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Messagerie</h2>
            <div className="flex-1 bg-brand-primary p-4 rounded-lg overflow-y-auto mb-4">
                {/* Placeholder for messages */}
                <div className="text-center text-brand-text py-10">
                    <p>Aucun nouveau message.</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 bg-brand-primary border border-brand-secondary rounded-md py-2 px-3 text-white focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
                />
                <button className="bg-brand-accent text-brand-primary p-3 rounded-md hover:bg-brand-accent-hover transition-colors">
                    <SendIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default MessagesView;
