import { useState } from 'react';
import './ProductCard.css';
export default function ProductCard({ imageUrl, productType, price, name }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className='col-12 col-md-4 col-lg-4 mb-5'>
            <div className='framework'>
                <div className='product-item-card' href='#'>
                    <div className='image-container'>
                        <img src={imageUrl} className='img-card-fluid product-card-thumbnail' />
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
                            <div className='promo-price'>{price} $</div>
                            <div className='regular-price'>{price * 2} $</div>
                        </div>
                        <div className='delivery'>
                            Free delivery in <strong>7 days</strong>
                        </div>
                    </div>
                    <div className='purchase-button-wrapper'>
                        <div className='purchase-icon-container'>
                            <img src='/images/shopping_cart.png' alt='shopping_cart_icon' className='purchase-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
