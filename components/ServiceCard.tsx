import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-brand-primary p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50 w-full"
    >
      <div className="mb-4 inline-block">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white font-heading">{service.title}</h3>
      <p className="text-brand-text text-sm">{service.description}</p>
    </button>
  );
};

export default ServiceCard;