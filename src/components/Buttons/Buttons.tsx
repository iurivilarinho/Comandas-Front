import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}

        >  {label}
        </button>
    );
};

export default Button;