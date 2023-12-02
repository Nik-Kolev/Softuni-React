import './CategoryListCard.css';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useStoreContext } from '../../../context/StoreContext';
import { useUserContext } from '../../../context/UserContext';
import { currentLike, likedProducts } from '../../../services/product';
import { postStoredProducts } from '../../../services/user';
import { discountPrice } from '../../../utils/calculatePriceAfterDiscount';

export default function CategoryListCard({ imageUrl, productType, price, name, _id, discount }) {
    const [isLiked, setIsLiked] = useState();
    const { user } = useUserContext();
    const { addToBasket } = useStoreContext();
    const navigateTo = useNavigate();

    useEffect(() => {
        currentLike(_id)
            .then((x) => {
                setIsLiked(x);
            })
            .catch((err) => toast(err.message));
    }, [_id]);

    const handleLikeClick = async (e) => {
        e.preventDefault();
        setIsLiked(!isLiked);
        if (user) {
            const response = await likedProducts({ isLiked, _id, userId: user._id });
            toast(response);
        }
    };

    const handleSell = async (e) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (user._id) {
            toast(`Артикул ${name} е добавен в количката.`);
            addToBasket({ itemId: _id, price: discountPrice(price, discount) });
            await postStoredProducts({ productId: _id, price: discountPrice(price, discount), action: 'added' });
            navigateTo('/cart');
        } else {
            toast('Трябва да се логнете преди да продължите.');
            navigateTo(`/login?redirect=${currentPath}/${_id}`);
        }
    };

    //TODO: Research Slug for better URLs
    return (
        <div className='col-12 col-md-4 col-lg-4 mb-5'>
            <Link to={`${_id}`} className='product-link'>
                <div className='product-framework'>
                    <div className='product-item-card'>
                        <div className='image-container'>
                            <img src={imageUrl} className='img-card-fluid product-card-thumbnail' alt={name} />
                            <div className='labels'>
                                <div className='label-promo'> - {discount}%</div>
                            </div>
                            <div className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
                                <div className='heart-container'>
                                    <div className='heart'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='details'>
                        <div className='name'>{name}</div>
                        <div className='type'>{productType}</div>
                    </div>
                    <div className='bottom'>
                        <div className='options'>
                            <div className='prices'>
                                <div className='promo-price'>{discountPrice(price, discount)} лв.</div>
                                <div className='regular-price'>{price} лв.</div>
                            </div>
                            <div className='delivery'>
                                Безплатна доставка до <strong>7 дни</strong>
                            </div>
                        </div>
                        <div className='purchase-button-wrapper'>
                            <div className='purchase-icon-container' onClick={handleSell}>
                                <img
                                    src='/src/images/catalog/CategoryList/shopping_cart.png'
                                    alt='shopping_cart_icon'
                                    className='purchase-icon'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
