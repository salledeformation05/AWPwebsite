import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`font-heading font-bold text-white tracking-wider ${className}`}>
            AW<span className="text-brand-accent">P</span>
        </div>
    );
};
