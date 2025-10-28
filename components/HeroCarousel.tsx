import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../App';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface HeroCarouselProps {
    navigate: (page: Page, params?: Record<string, any>) => void;
}

const slides = [
    {
        image: 'https://picsum.photos/seed/carousel1/1920/1080',
        title: 'Précision et Puissance pour l\'Industrie',
        subtitle: 'Solutions de soudure, fabrication et maintenance qui repoussent les limites.',
        cta: 'Découvrir nos services',
        link: 'services' as Page
    },
    {
        image: 'https://picsum.photos/seed/carousel2/1920/1080',
        title: 'Des Projets Ambitieux, Une Réalisation Impeccable',
        subtitle: 'Explorez nos réalisations qui façonnent le paysage industriel africain.',
        cta: 'Voir nos projets',
        link: 'projects' as Page
    },
    {
        image: 'https://picsum.photos/seed/carousel3/1920/1080',
        title: 'Votre Partenaire de Confiance',
        subtitle: 'Contactez-nous pour un devis personnalisé et donnons vie à vos projets.',
        cta: 'Demander un devis',
        link: 'contact' as Page
    }
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ navigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, []);
    
    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden text-white">
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}
            
            <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                 <div className="w-full">
                    {slides.map((slide, index) => (
                         <div
                            key={index}
                            className={`transition-all duration-700 ${index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                         >
                            {index === currentIndex && (
                                <>
                                    <h1 className="text-4xl md:text-6xl font-bold font-heading">{slide.title}</h1>
                                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">{slide.subtitle}</p>
                                    <button
                                        onClick={() => navigate(slide.link)}
                                        className="mt-8 bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
                                    >
                                        {slide.cta}
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                <ChevronLeftIcon className="w-6 h-6"/>
            </button>
             <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                <ChevronRightIcon className="w-6 h-6"/>
            </button>

             {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-brand-accent' : 'bg-white/50'} transition-colors`}></button>
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
