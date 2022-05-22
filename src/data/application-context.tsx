import React, { FC, createContext, useState, ReactNode } from 'react';
import { DefaultState } from './default-state';

export interface IApplicationContext {
    name: string;
}

export const ApplicationContext = createContext(DefaultState);

interface IAppStateProvider {
    children?: ReactNode;
}

const AppStateProvider:FC<IAppStateProvider> = ({ children }) => {
  
    const [ name, setName ] = useState("Bob Pancakes");

    return (
        <ApplicationContext.Provider
            value={{ name }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export default AppStateProvider;