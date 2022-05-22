import React, { FC, ReactNode } from 'react';

export interface IButton {
    icon?: ReactNode;
    children?: ReactNode;
    color?: "red" | "green" | "orange" | "blue";
    onClick?: () => void;
}

export const Button: FC<IButton> = ({ icon, children, color, onClick }) => {
    let buttonColor = color ? color : "";

    if(icon) {
        return (
            <button
                type="button" 
                className={`button icon ${buttonColor}`}
                onClick={onClick}
            >
                {icon}
                {children}
            </button>
        )
    }
    
    return (
        <button 
            type="button" 
            className={`button ${buttonColor}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
} 