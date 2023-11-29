import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../../services/product';
import CategoryListCard from './CategoryListCard';

export default function CategoryList() {
    let { category } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProductByCategory(category)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    return (
        <div className='product-card'>
            <div className='container'>
                <div className='row'>{products && products.map((x) => <CategoryListCard key={x._id} {...x} />)}</div>
            </div>
        </div>
    );
}
