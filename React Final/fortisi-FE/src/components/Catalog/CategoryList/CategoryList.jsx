import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useSpinner } from '../../../hooks/useSpinner';
import { getProductByCategory } from '../../../services/product';
import Spinner from '../../Home/Spinner/Spinner';
import CategoryListCard from './CategoryListCard';

export default function CategoryList() {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const { isLoading, handleIsLoading } = useSpinner();
    const [data, setData] = useState();
    const [totalPages, setTotalPages] = useState(0);
    const navigateTo = useNavigate();
    const page = parseInt(searchParams.get('page'), 10) || 1;

    useEffect(() => {
        handleIsLoading(async () => {
            const result = await getProductByCategory(category, page);
            setData(result.products);
            setTotalPages(result.totalPages);
            if (page > result.totalPages) {
                navigateTo(`?page=${result.totalPages}`);
            }
        }).catch((err) => {
            toast(err.message);
        });
    }, [category, handleIsLoading, page, navigateTo]);

    const numberOfPages = [...Array(totalPages + 1).keys()].slice(1);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='main-content'>
                    <div className='product-card'>
                        <div className='container'>
                            <div className='row'>{data && data.map((x) => <CategoryListCard key={x._id} {...x} />)}</div>
                        </div>
                    </div>
                    {totalPages != 1 && (
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
                    )}
                </div>
            )}
        </>
    );
}
