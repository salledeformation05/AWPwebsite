import { NewsArticle } from '../types';

export const allNews: NewsArticle[] = [
    {
        id: '1',
        slug: 'lancement-centre-formation',
        title: 'AWP lance son nouveau Centre de Formation Technique',
        date: '15 Juin 2024',
        excerpt: 'Pour répondre à la demande croissante de main-d\'œuvre qualifiée, AWP inaugure un centre de formation de pointe dédié aux métiers de la soudure et de la maintenance industrielle.',
        imageUrl: 'https://picsum.photos/seed/news1/600/400',
        category: 'Formation',
        content: `
### Un Investissement pour l'Avenir

Face aux défis du secteur industriel en Afrique, la formation est la clé. C'est pourquoi African Workshops and Pioneers (AWP) est fier d'annoncer l'ouverture officielle de son nouveau Centre de Formation Technique à Abomey-Calavi. Ce centre ultramoderne est équipé des dernières technologies en matière de soudage et de diagnostic de maintenance.

### Des Cursus Adaptés aux Besoins du Marché

Nos programmes de formation ont été conçus en étroite collaboration avec les acteurs majeurs de l'industrie pour garantir une adéquation parfaite avec les compétences recherchées. Nous proposons des certifications en :
- Soudage TIG et MIG/MAG
- Maintenance préventive et curative
- Lecture de plans industriels
- Sécurité sur les chantiers

Les formations sont dispensées par des professionnels expérimentés, combinant théorie et pratique intensive sur des équipements réels. Notre objectif est de former une nouvelle génération de techniciens hautement qualifiés, prêts à relever les défis de l'industrie de demain.
        `
    },
    {
        id: '2',
        slug: 'nouveau-contrat-minier',
        title: 'Nouveau Contrat Stratégique dans le Secteur Minier',
        date: '02 Juin 2024',
        excerpt: 'AWP a remporté un contrat majeur pour la maintenance des équipements de production de Summit Mining, renforçant sa position de leader dans le support à l\'industrie lourde.',
        imageUrl: 'https://picsum.photos/seed/news2/600/400',
        category: 'Nouveau Projet',
        content: `
AWP consolide sa présence dans le secteur minier avec la signature d'un contrat de maintenance pluriannuel avec Summit Mining, un acteur clé de l'extraction de bauxite en Afrique de l'Ouest. Ce partenariat couvre la maintenance préventive et les réparations structurelles de l'ensemble de leur flotte d'engins lourds et de leurs installations de concassage.

"La fiabilité de nos équipements est critique pour notre productivité. L'expertise reconnue d'AWP en matière de soudure et de maintenance industrielle a été un facteur décisif dans notre choix", a déclaré David Ochieng, Directeur des Opérations chez Summit Mining.

Ce contrat va mobiliser une équipe de 15 techniciens spécialisés sur site et confirme la capacité d'AWP à gérer des projets d'envergure.
        `
    },
    {
        id: '3',
        slug: 'certification-iso-9001',
        title: 'AWP Obtient la Certification ISO 9001',
        date: '20 Mai 2024',
        excerpt: 'Cette certification reconnue internationalement atteste de l\'engagement d\'AWP envers la qualité, la satisfaction client et l\'amélioration continue de ses processus.',
        imageUrl: 'https://picsum.photos/seed/news3/600/400',
        category: 'Promotion',
        content: `
Nous sommes fiers d'annoncer que nos processus de gestion de la qualité ont été audités et certifiés conformes à la norme ISO 9001:2015. Cette réussite est le fruit d'un travail collectif et d'une volonté constante d'atteindre l'excellence.

La certification ISO 9001 garantit à nos clients :
- Des services et produits conformes aux exigences les plus strictes.
- Une traçabilité complète à chaque étape du projet.
- Un engagement pour l'amélioration continue et la satisfaction client.

Cette reconnaissance renforce notre positionnement en tant que partenaire fiable et qualitatif pour tous les projets industriels, des plus simples aux plus complexes.
        `
    }
];
