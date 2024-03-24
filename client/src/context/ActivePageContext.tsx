import React, { createContext, useState, useContext } from 'react';

interface ActivePageContextType {
    activePage: string;
    setActivePage: (page: string) => void;
}

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const ActivePageProvider: React.FC = ({ children }) => {
    const [activePage, setActivePage] = useState<string>('dashboard');

    const setActive = (page: string) => {
        setActivePage(page);
        localStorage.setItem('activePage', page);
    };

    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage: setActive }}>
            {children}
        </ActivePageContext.Provider>
    );
};

export const useActivePage = (): ActivePageContextType => {
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error('useActivePage must be used within an ActivePageProvider');
    }
    return context;
};
