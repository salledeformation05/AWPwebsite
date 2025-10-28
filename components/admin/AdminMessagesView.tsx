import React, { useState, useEffect, useRef } from 'react';
import { allClients } from '../../data/clients';
import { conversations } from '../../data/messages';
import { User, Message } from '../../types';
import { SendIcon } from '../icons/SendIcon';
import { useToast } from '../../contexts/ToastContext';

const AdminMessagesView: React.FC = () => {
    const [selectedClient, setSelectedClient] = useState<User | null>(null);
    const [newMessage, setNewMessage] = useState('');
    const { showToast } = useToast();
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Keep a local copy of messages for the selected client to trigger re-renders
    const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (selectedClient) {
            setCurrentMessages(conversations[selectedClient.id] || []);
        } else {
            setCurrentMessages([]);
        }
    }, [selectedClient]);

    useEffect(scrollToBottom, [currentMessages]);

    const handleClientSelect = (client: User) => {
        setSelectedClient(client);
    };

    const handleSend = () => {
        if (!newMessage.trim() || !selectedClient) return;

        const messageToSend: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'agent',
            name: 'Support AWP'
        };

        const updatedMessages = [...(conversations[selectedClient.id] || []), messageToSend];
        conversations[selectedClient.id] = updatedMessages; // Update shared state
        setCurrentMessages(updatedMessages); // Update local state to re-render
        setNewMessage('');
        showToast(`Message envoyé à ${selectedClient.name}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-250px)]">
            {/* Client List */}
            <div className="md:w-1/3 bg-brand-primary p-4 rounded-lg flex-shrink-0 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">Conversations</h3>
                <ul className="space-y-2 overflow-y-auto">
                    {allClients.map(client => (
                        <li key={client.id}>
                            <button
                                onClick={() => handleClientSelect(client)}
                                className={`w-full text-left p-3 rounded-md transition-colors text-sm ${selectedClient?.id === client.id ? 'bg-brand-accent text-brand-primary font-bold' : 'text-white hover:bg-brand-secondary'}`}
                            >
                                {client.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat Window */}
            <div className="flex-1 bg-brand-primary p-4 rounded-lg flex flex-col">
                {selectedClient ? (
                    <>
                        <div className="border-b border-brand-secondary pb-3 mb-4">
                            <h3 className="text-lg font-bold text-white">Discussion avec {selectedClient.name}</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                             {currentMessages.map(msg => (
                                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.sender === 'agent' ? 'bg-brand-accent text-brand-primary' : 'bg-brand-secondary text-white'}`}>
                                    <p className="font-bold text-sm mb-1">{msg.name}</p>
                                    <p>{msg.text}</p>
                                </div>
                                </div>
                            ))}
                             <div ref={messagesEndRef} />
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Répondre..."
                                className="flex-1 bg-brand-secondary border border-brand-secondary rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            />
                            <button onClick={handleSend} className="bg-brand-accent text-brand-primary p-3 rounded-md hover:bg-brand-accent-hover transition-colors disabled:opacity-50" disabled={!newMessage.trim()}>
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-brand-text">Sélectionnez une conversation pour commencer.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminMessagesView;