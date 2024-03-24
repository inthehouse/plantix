import React, { ReactNode, createContext, useContext } from 'react';
import ApiService from '../services/api';

interface ApiServiceProviderProps {
    children: ReactNode;
}

export const ApiServiceContext = createContext<ApiService | undefined>(undefined);

export const useApiService = (): ApiService => {
    const apiService = useContext(ApiServiceContext);
    if (!apiService) {
        throw new Error('useApiService must be used within an ApiServiceProvider');
    }
    return apiService;
};

export const ApiServiceProvider: React.FC<ApiServiceProviderProps> = ({ children }) => {
    const apiService = new ApiService();

    return (
        <ApiServiceContext.Provider value={apiService}>
            {children}
        </ApiServiceContext.Provider>
    );
};

