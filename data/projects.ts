import { Project } from '../types';

export const allProjects: Project[] = [
    {
        id: '1',
        title: 'Structure Métallique pour Hangar Industriel',
        category: 'Charpente Métallique',
        description: 'Conception, fabrication et montage d\'une charpente métallique de 3000m² pour un nouveau centre logistique.',
        imageUrl: 'https://picsum.photos/seed/project1/800/600',
        isFeatured: true,
        testimonial: {
            text: "L'équipe AWP a livré une structure d'une qualité exceptionnelle en avance sur le calendrier. Leur professionnalisme est inégalé.",
            author: 'John Doe, JD Industries'
        }
    },
    {
        id: '2',
        title: 'Ensemble de Cuves en Inox pour l\'Agroalimentaire',
        category: 'Soudure Avancée',
        description: 'Soudure TIG de haute précision pour un ensemble de cuves alimentaires en acier inoxydable 316L, respectant les normes sanitaires les plus strictes.',
        imageUrl: 'https://picsum.photos/seed/project2/800/600',
        imageBeforeUrl: 'https://picsum.photos/seed/project2before/800/600',
    },
    {
        id: '3',
        title: 'Escalier et Garde-corps Design',
        category: 'Menuiserie Métallique',
        description: 'Création d\'un escalier monumental et de garde-corps sur mesure pour le siège social d\'une entreprise, alliant acier brut et bois noble.',
        imageUrl: 'https://picsum.photos/seed/project3/800/600',
    },
    {
        id: '4',
        title: 'Réparation de Châssis de Camion Minier',
        category: 'Maintenance Industrielle',
        description: 'Intervention sur site pour la réparation et le renforcement par soudure d\'un châssis de camion-benne de 100 tonnes.',
        imageUrl: 'https://picsum.photos/seed/project4/800/600',
        isFeatured: true,
    },
    {
        id: '5',
        title: 'Découpe Plasma de Pièces Complexes',
        category: 'Tôlerie & Découpe',
        description: 'Production en série de pièces métalliques complexes pour le secteur automobile avec une tolérance de 0.5mm.',
        imageUrl: 'https://picsum.photos/seed/project5/800/600',
    },
     {
        id: '6',
        title: 'Pipeline Soudé pour le Secteur Pétrolier',
        category: 'Soudure Avancée',
        description: 'Réalisation de soudures orbitales sur un pipeline de 12km, avec contrôles radiographiques sur 100% des joints.',
        imageUrl: 'https://picsum.photos/seed/project6/800/600',
        testimonial: {
            text: "Un travail méticuleux qui a passé toutes nos inspections avec brio. AWP est un partenaire de confiance pour nos projets critiques.",
            author: "Responsable Qualité, Summit Mining"
        }
    }
];
