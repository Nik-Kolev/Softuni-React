import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from './ProductCard';

export default function Category() {
    let { category } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/product/${category}`)
            .then((x) => x.json())
            .then((x) => {
                console.log(x);
                setProducts(x);
            })
            .catch((err) => console.log(err));
    }, [category]);
    console.log(products);
    return <>{products && products.map((x) => <ProductCard key={x._id} {...x} />)}</>;
}
