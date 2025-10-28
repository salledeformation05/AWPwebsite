import React, { useState, useEffect } from 'react';
import { XIcon } from './icons/XIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const toastConfig = {
    success: {
        icon: <CheckCircleIcon className="w-6 h-6 text-green-400" />,
        bg: 'bg-green-500',
    },
    error: {
        icon: <AlertTriangleIcon className="w-6 h-6 text-red-400" />,
        bg: 'bg-red-500',
    }
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onClose, 300);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
      setExiting(true);
      setTimeout(onClose, 300);
  }

  const config = toastConfig[type];

  return (
    <div 
        className={`relative flex items-center p-4 min-w-[300px] max-w-sm rounded-lg shadow-lg bg-brand-secondary text-white overflow-hidden transform transition-all duration-300 ${exiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}`}
        role="alert"
    >
       <div className={`absolute left-0 top-0 bottom-0 w-2 ${config.bg}`}></div>
       <div className="pl-4 pr-8 flex items-center">
            <div className="flex-shrink-0">
                {config.icon}
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium">{message}</p>
            </div>
       </div>
      <button onClick={handleClose} className="absolute top-1/2 -translate-y-1/2 right-2 p-1 rounded-full hover:bg-brand-primary">
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
