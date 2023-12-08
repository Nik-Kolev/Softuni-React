import './Favorites.css';

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useSpinner } from '../../../../hooks/useSpinner';
import { getSingleProductById } from '../../../../services/product';
import { getAllLikedProducts } from '../../../../services/user';
import CategoryListCard from '../../../Catalog/CategoryList/CategoryListCard';
import Spinner from '../../../Home/Spinner/Spinner';
import Pagination from '../../../Pagination/Pagination';

export default function Favorites() {
    const [likedProducts, setLikedProducts] = useState();
    const { isLoading, handleIsLoading } = useSpinner();
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page'), 10) || 1;
    const navigateTo = useNavigate();

    useEffect(() => {
        handleIsLoading(async () => {
            try {
                const result = await getAllLikedProducts();
                setTotalPages(result.totalPages);
                if (page > result.totalPages) {
                    navigateTo(`?page=${result.totalPages}`);
                } else {
                    const productsPromises = result.products.map((productId) => getSingleProductById(productId));
                    const productsDetails = await Promise.all(productsPromises);
                    setLikedProducts(productsDetails);
                }
            } catch (err) {
                toast(err.message);
            }
        });
    }, [handleIsLoading, page, navigateTo]);

    const numberOfPages = [...Array(totalPages + 1).keys()].slice(1);

    const updateLikedProducts = (productId, isLiked) => {
        if (!isLiked) {
            setLikedProducts((prevLikedProducts) => prevLikedProducts.filter((product) => product._id !== productId));
        }
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='main-content'>
                    <div className='product-card'>
                        <div className='container'>
                            <div className='row'>
                                {likedProducts && likedProducts?.length > 0 ? (
                                    likedProducts.map((product) => (
                                        <CategoryListCard key={product._id} {...product} updateLikedProducts={updateLikedProducts} />
                                    ))
                                ) : (
                                    <div className='favorites-container'>
                                        <div className='favorites-no-products-container'>
                                            <div className='favorites-no-products'>Нямате любими продукти все още.</div>
                                        </div>
                                        <button onClick={() => navigateTo('/catalog')} className='favorites-back-button'>
                                            Обратно към каталога
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {totalPages != 1 && likedProducts?.length > 0 && (
                        <Pagination page={page} numberOfPages={numberOfPages} totalPages={totalPages} />
                    )}
                </div>
            )}
        </>
    );
}
