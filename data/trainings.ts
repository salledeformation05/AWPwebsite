import { Training } from '../types';

export const allTrainings: Training[] = [
    {
        id: '1',
        slug: 'soudeur-certifie-tig',
        title: 'Soudeur Certifié TIG - Niveau 1',
        description: 'Maîtrisez les techniques de soudage TIG sur acier et inox. Idéal pour les travaux de haute précision et de finition.',
        duration: '4 semaines',
        price: 1800,
        instructor: 'Moussa Diop',
    },
    {
        id: '2',
        slug: 'maintenance-preventive-industrielle',
        title: 'Maintenance Préventive Industrielle',
        description: 'Apprenez à diagnostiquer, planifier et exécuter des programmes de maintenance préventive pour minimiser les temps d\'arrêt.',
        duration: '2 semaines',
        price: 1200,
        instructor: 'Amina Traoré',
    },
    {
        id: '3',
        slug: 'lecture-de-plans-techniques',
        title: 'Lecture de Plans et Schémas Techniques',
        description: 'Une compétence essentielle pour tout technicien. Interprétez avec aisance les plans de fabrication et de montage.',
        duration: '1 semaine',
        price: 750,
        instructor: 'Ephrem Adam DOSSOU-YOVO',
    },
    {
        id: '4',
        slug: 'securite-chantier-industriel',
        title: 'Sécurité sur Chantier Industriel',
        description: 'Formation sur les normes de sécurité, la prévention des risques et les premiers secours en milieu industriel.',
        duration: '3 jours',
        price: 500,
        instructor: 'Amina Traoré',
    }
];
