import React, { FC, ReactNode } from 'react';

export interface IButton {
    icon?: ReactNode;
    children?: ReactNode;
    color?: "red" | "green" | "orange" | "blue";
    onClick?: () => void;
    size?: "small" | "medium" | "large";
}

export const Button: FC<IButton> = ({ icon, children, color, size, onClick }) => {
    let buttonColor = color ? color : "";
    let buttonSize = size ? size : ""; 

    if(icon) {
        return (
            <button
                type="button" 
                className={`button icon ${buttonColor} ${buttonSize}`}
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
            className={`button ${buttonColor} ${buttonSize}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
} 