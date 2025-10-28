import React from 'react';
import { Service } from '../types';
import { WeldIcon } from '../components/icons/WeldIcon';
import { BriefcaseIcon } from '../components/icons/BriefcaseIcon';

export const allServices: Service[] = [
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '1', slug: 'soudure-avancee', title: 'Soudure Avancée', description: 'Soudure MIG, TIG, et à l\'arc pour acier, aluminium, et alliages exotiques avec une précision certifiée.', icon: React.createElement(WeldIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '2', slug: 'fabrication-metallique', title: 'Fabrication Métallique sur Mesure', description: 'De la conception à la réalité. Nous créons des structures, pièces et installations artistiques personnalisées.', icon: React.createElement(BriefcaseIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '3', slug: 'maintenance-industrielle', title: 'Maintenance Industrielle', description: 'Services de réparation et maintenance sur site pour garder vos opérations fluides et sécurisées.', icon: React.createElement(WeldIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '4', slug: 'tolerie-decoupe', title: 'Tôlerie & Découpe', description: 'Découpe plasma, pliage, et usinage de précision pour des pièces complexes et des assemblages.', icon: React.createElement(BriefcaseIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '5', slug: 'menuiserie-metallique', title: 'Menuiserie Métallique', description: 'Création de portes, fenêtres, garde-corps et autres éléments architecturaux en métal et bois.', icon: React.createElement(WeldIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '6', slug: 'peinture-revetement', title: 'Peinture & Revêtement', description: 'Application de revêtements protecteurs et esthétiques, incluant le thermolaquage et les traitements anti-corrosion.', icon: React.createElement(BriefcaseIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '7', slug: 'charpente-metallique', title: 'Charpente Métallique', description: 'Études, fabrication et montage de charpentes métalliques pour des bâtiments industriels et commerciaux.', icon: React.createElement(BriefcaseIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
    // Fix: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    { id: '8', slug: 'formation-technique', title: 'Formation Technique', description: 'Formations certifiantes pour soudeurs et techniciens industriels, animées par des experts du secteur.', icon: React.createElement(WeldIcon, { className: "w-10 h-10 mx-auto text-brand-accent" }) },
];
