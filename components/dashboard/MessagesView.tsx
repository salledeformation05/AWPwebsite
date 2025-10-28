import React, { useState, useContext, useRef, useEffect } from 'react';
import { SendIcon } from '../icons/SendIcon';
import { useToast } from '../../contexts/ToastContext';
// Fix: Update AuthContext import path to fix circular dependency
import { AuthContext } from '../../types';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'agent';
    name: string;
}

const MessagesView: React.FC = () => {
    const { user } = useContext(AuthContext);
    const { showToast } = useToast();
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Bonjour, voici le devis mis à jour comme demandé. N'hésitez pas si vous avez des questions.", sender: 'agent', name: 'Amina Traoré' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!newMessage.trim() || !user) return;

        const messageToSend: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'user',
            name: user.name
        };
        setMessages([...messages, messageToSend]);
        setNewMessage('');
        showToast("Message envoyé !");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Messagerie</h2>
            <div className="flex-1 bg-brand-primary p-4 rounded-lg overflow-y-auto mb-4 flex flex-col space-y-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                       <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-brand-accent text-brand-primary' : 'bg-brand-secondary text-white'}`}>
                           <p className="font-bold text-sm mb-1">{msg.name}</p>
                           <p>{msg.text}</p>
                       </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Écrivez votre message..."
                    className="flex-1 bg-brand-primary border border-brand-secondary rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-shadow"
                />
                <button onClick={handleSend} className="bg-brand-accent text-brand-primary p-3 rounded-md hover:bg-brand-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!newMessage.trim()}>
                    <SendIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default MessagesView;
