import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useSpinner } from '../../../hooks/useSpinner';
import { getProductByCategory } from '../../../services/product';
import Spinner from '../../Home/Spinner/Spinner';
import Pagination from '../../Pagination/Pagination';
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
                    {totalPages != 1 && data.length > 0 && <Pagination page={page} numberOfPages={numberOfPages} totalPages={totalPages} />}
                </div>
            )}
        </>
    );
}
