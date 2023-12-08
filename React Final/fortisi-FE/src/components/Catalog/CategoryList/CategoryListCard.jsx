import './CategoryListCard.css';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useStoreContext } from '../../../context/StoreContext';
import { useUserContext } from '../../../context/UserContext';
import { likeOrDislikeProduct, postStoredProducts, productStatus } from '../../../services/user';
import { discountPrice } from '../../../utils/calculatePriceAfterDiscount';
import { sellProduct } from '../../../utils/sellProduct';

export default function CategoryListCard({ imageUrl, productType, price, name, _id, discount, category, updateLikedProducts }) {
    const navigateTo = useNavigate();
    const [isLiked, setIsLiked] = useState();
    const { user } = useUserContext();
    const { addToBasket } = useStoreContext();

    useEffect(() => {
        productStatus(_id)
            .then((x) => {
                setIsLiked(x);
            })
            .catch((err) => toast(err.message));
    }, [_id]);
    const handleLikeClick = async (e) => {
        e.preventDefault();
        if (user?._id) {
            setIsLiked(!isLiked);
            const response = await likeOrDislikeProduct({ isLiked, _id, userId: user._id });
            toast(response);
            updateLikedProducts(_id, !isLiked);
        }
    };

    const handleSell = async (e) => {
        e.preventDefault();
        sellProduct(user, _id, price, discount, name, postStoredProducts, addToBasket, discountPrice, navigateTo, toast);
    };
    //TODO: Research Slug for better URLs
    return (
        <div className='col-12 col-md-4 col-lg-4 mb-5'>
            <Link to={`/catalog/${category}/${_id}`} className='product-link'>
                <div className='product-framework'>
                    <div className='product-item-card'>
                        <div className='image-container'>
                            <img src={imageUrl} className='img-card-fluid product-card-thumbnail' alt={name} />

                            {discount > 0 && (
                                <div className='labels'>
                                    <div className='label-promo'> - {discount}%</div>
                                </div>
                            )}
                            {user?._id && (
                                <div className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
                                    <div className='heart-container'>
                                        <div className='heart'></div>
                                    </div>
                                </div>
                            )}
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
