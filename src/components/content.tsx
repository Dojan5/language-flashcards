import React, { FC } from 'react';

export interface IContent {
    children?: React.ReactNode;
}

export const Content: FC<IContent> = ({ children }) => {

    return (
        <main>
            {children}
        </main>
    )
}