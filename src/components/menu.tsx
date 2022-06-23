import React from 'react';

interface IMenu {
    children?: React.ReactNode;
}

export const Menu:React.FC<IMenu> = ({ children }) => {
    
    return (
        <section className="menu">
            {children}
        </section>
    );
}