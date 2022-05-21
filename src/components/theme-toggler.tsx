import React from 'react';

export const ThemeToggler = () => {
    const [dark, setDark] = React.useState(false);

    const handleToggleTheme = () => {
        setDark(!dark);
        let theme = dark
        ? 'dark'
        : 'light';

        document.querySelector('body')?.setAttribute('data-theme', theme);
    }
    return (
        <div 
            className="theme switch"
            onClick={() => handleToggleTheme()}>
            <input
                type="checkbox" 
                checked={dark}
            />
            <label>
                {dark ? (<span className="material-symbols-outlined">light_mode</span>) : (<span className="material-symbols-outlined">dark_mode</span>)}
            </label>
        </div>
    )
}