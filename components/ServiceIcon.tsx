import React from 'react';
import { ServiceIconType } from '../types';
import { WeldIcon } from './icons/WeldIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { WrenchIcon } from './icons/WrenchIcon';
import { CuttingIcon } from './icons/CuttingIcon';
import { MetalworkIcon } from './icons/MetalworkIcon';
import { PaintBrushIcon } from './icons/PaintBrushIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';

const iconMap: { [key in ServiceIconType]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    weld: WeldIcon,
    briefcase: BriefcaseIcon,
    maintenance: WrenchIcon,
    cutting: CuttingIcon,
    metalwork: MetalworkIcon,
    paint: PaintBrushIcon,
    construction: BuildingIcon,
    training: BookOpenIcon,
};

interface ServiceIconProps {
    icon: ServiceIconType;
    className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, className }) => {
    const IconComponent = iconMap[icon];
    if (!IconComponent) return null; // or a default icon
    return <IconComponent className={className} />;
};
