import './Pagination.css';

import { Link } from 'react-router-dom';
export default function Pagination({ page, numberOfPages, totalPages }) {
    return (
        <div className='pagination-container'>
            <ul className='pagination'>
                {page !== 1 && (
                    <li>
                        <Link to={`?page=${page - 1}`} style={{ fontSize: '24px' }}>
                            &laquo;
                        </Link>
                    </li>
                )}
                {numberOfPages.map((pageNumber) => (
                    <li key={pageNumber} className={page === pageNumber ? 'active' : ''}>
                        <Link to={`?page=${pageNumber}`}>{pageNumber}</Link>
                    </li>
                ))}
                {totalPages !== page && (
                    <li>
                        <Link to={`?page=${page + 1}`} style={{ fontSize: '24px' }}>
                            &raquo;
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
