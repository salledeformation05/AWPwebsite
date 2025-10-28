import { Message } from '../types';

// Using 'let' to allow modification for a persistent conversation mock
export let conversations: { [clientId: string]: Message[] } = {
  '1': [
    { id: 1, text: "Bonjour, voici le devis mis à jour comme demandé. N'hésitez pas si vous avez des questions.", sender: 'agent', name: 'Amina Traoré' },
    { id: 2, text: "Parfait, merci Amina. Je regarde ça et je reviens vers vous rapidement.", sender: 'user', name: 'John Doe' }
  ],
  '2': [
    { id: 3, text: "Bonjour Mme Keita, pourriez-vous nous confirmer la réception des plans ?", sender: 'agent', name: 'Amina Traoré' }
  ],
  '3': [],
  '4': [],
  '5': [],
};
