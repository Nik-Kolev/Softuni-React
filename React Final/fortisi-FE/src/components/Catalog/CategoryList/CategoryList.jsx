import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useSpinner } from '../../../hooks/useSpinner';
import { getProductByCategory } from '../../../services/product';
import Spinner from '../../Home/Spinner/Spinner';
import CategoryListCard from './CategoryListCard';

export default function CategoryList() {
    const { category } = useParams();
    const [data, setData] = useState();
    const { isLoading, handleIsLoading } = useSpinner();

    useEffect(() => {
        handleIsLoading(async () => {
            const result = await getProductByCategory(category);
            setData(result);
        }).catch((err) => {
            toast(err.message);
        });
    }, [category, handleIsLoading]);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='product-card'>
                    <div className='container'>
                        <div className='row'>{data && data.map((x) => <CategoryListCard key={x._id} {...x} />)}</div>
                    </div>
                </div>
            )}
        </>
    );
}
