import React from 'react';
import { Link } from 'react-router-dom';
import { useActivePage } from '../context/ActivePageContext';
import '../styles/header.css';

const Header: React.FC = () => {
    const { activePage, setActivePage } = useActivePage();

    const handlePageClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={() => handlePageClick('dashboard')} className={activePage === 'dashboard' ? 'active' : ''}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/data" onClick={() => handlePageClick('data')} className={activePage === 'data' ? 'active' : ''}>Data Input</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
