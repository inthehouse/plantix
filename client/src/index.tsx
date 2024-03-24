import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiServiceProvider } from './context/ApiServiceContext';
import './styles/global.css';

ReactDOM.render(
    <React.StrictMode>
        <ApiServiceProvider>
            <App />
        </ApiServiceProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
