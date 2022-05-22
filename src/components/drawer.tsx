import React, { useState } from 'react';

export interface IDrawer {
    children?: React.ReactNode;
}

export const Drawer:React.FC<IDrawer> = ({children}) => {
    const [active, setActive] = useState(false);
    const drawerClasses = active
    ? 'drawer active'
    : 'drawer';

    const contentClasses = active
    ? 'drawer-contents active'
    : 'drawer-contents'

    return (
        <section className={drawerClasses}>
            <div className={contentClasses}>
                <button 
                    className="mobile-toggle" 
                    type="button"
                    onClick={() => setActive(!active)}
                    >
                        {active 
                            ? (<span className="material-symbols-outlined">close</span>) 
                            : (<span className="material-symbols-outlined">menu</span>)}
                    </button>
                {children}
            </div>
        </section>
    )
}