import React from 'react';

interface BarChartProps {
    data: { label: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    
    return (
        <div className="w-full h-full flex items-end justify-around space-x-2">
            {data.map(item => (
                <div key={item.label} className="flex-1 flex flex-col items-center">
                     <div className="relative w-full h-full flex items-end">
                        <div
                            className="w-full bg-brand-accent rounded-t-sm hover:bg-brand-accent-hover transition-colors group"
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                        >
                             <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-md mb-2 whitespace-nowrap">
                                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(item.value)}
                            </div>
                        </div>
                    </div>
                    <span className="text-xs text-brand-text mt-2">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default BarChart;