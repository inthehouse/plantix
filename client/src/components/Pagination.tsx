/** 
 * NOTE:
 *  was created but not implemented
 *  */

import React from 'react';
import '../styles/pagination.css'

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPages: number;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, totalPages }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? 'active' : ''}>
                    <button onClick={() => onPageChange(i)}>{i}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav>
            <ul className="pagination">
                {renderPageNumbers()}
            </ul>
        </nav>
    );
};

export default Pagination;
