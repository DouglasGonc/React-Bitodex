import React from 'react';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* Cabeça (circulo com borda branca e centro transparente) */}
        <circle cx="12" cy="8" r="4" fill="none" stroke="white" strokeWidth="2" />
        
        {/* Ombros (contorno branco) */}
        <path
            d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
        />
    </svg>
);

export default UserIcon;