import React, { FC, ReactNode } from 'react';

export interface IButton {
    icon?: ReactNode;
    children?: ReactNode;
    color?: "red" | "green" | "orange" | "blue";
}

export const Button: FC<IButton> = ({ icon, children, color }) => {
    let buttonColor = color ? color : "";

    if(icon) {
        return (
            <button type="button" className={`button icon ${buttonColor}`}>
                {icon}
                {children}
            </button>
        )
    }
    
    return (
        <button type="button" className={`button ${buttonColor}`}>
            {children}
        </button>
    )
} 