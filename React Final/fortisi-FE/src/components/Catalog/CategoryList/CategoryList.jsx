import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryListCard from './CategoryListCard';

export default function CategoryList() {
    let { category } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/product/${category}`)
            .then((x) => x.json())
            .then((x) => {
                setProducts(x);
            })
            .catch((err) => console.log(err));
    }, [category]);

    return (
        <div className='product-card'>
            <div className='container'>
                <div className='row'>{products && products.map((x) => <CategoryListCard key={x._id} {...x} />)}</div>
            </div>
        </div>
    );
}
