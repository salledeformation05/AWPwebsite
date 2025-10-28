import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../App';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface HeroCarouselProps {
    navigate: (page: Page) => void;
}

const slides = [
    {
        imageUrl: 'https://picsum.photos/seed/hero1/1920/1080',
        title: 'Forger l\'Excellence Industrielle',
        subtitle: 'Solutions de soudure et de fabrication métallique de pointe pour l\'Afrique.',
    },
    {
        imageUrl: 'https://picsum.photos/seed/hero2/1920/1080',
        title: 'Précision et Puissance',
        subtitle: 'De la charpente métallique monumentale aux pièces usinées complexes.',
    },
    {
        imageUrl: 'https://picsum.photos/seed/hero3/1920/1080',
        title: 'Votre Vision, Notre Mission',
        subtitle: 'Nous transformons vos projets les plus ambitieux en réalité.',
    },
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ navigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden text-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}
            
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                 <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading drop-shadow-lg leading-tight">
                       {slides[currentIndex].title}
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 text-brand-text drop-shadow-md">
                        {slides[currentIndex].subtitle}
                    </p>
                    <button
                        onClick={() => navigate('contact')}
                        className="bg-brand-accent text-brand-primary text-lg font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Demander un devis
                    </button>
                 </div>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute top-1/2 left-4 z-20 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                <ChevronLeftIcon className="w-6 h-6"/>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 z-20 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                <ChevronRightIcon className="w-6 h-6"/>
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-brand-accent scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
