import './ProductDetails.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useStoreContext } from '../../../context/StoreContext';
import { useUserContext } from '../../../context/UserContext';
import { useSpinner } from '../../../hooks/useSpinner';
import { currentLike, deleteProductById, getSingleProductById, likedProducts } from '../../../services/product';
import { postStoredProducts } from '../../../services/user';
import { discountPrice, discountSave } from '../../../utils/calculatePriceAfterDiscount';
import Spinner from '../../Home/Spinner/Spinner';

export default function ProductDetails() {
    const [itemDetails, setItemDetails] = useState();
    const [isLiked, setIsLiked] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigateTo = useNavigate();
    const { user } = useUserContext();
    const { category, id } = useParams();
    const { isLoading, handleIsLoading } = useSpinner();
    const { addToBasket } = useStoreContext();

    const handleSell = async (e) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (user?._id) {
            toast(`Артикул ${itemDetails.name} е добавен в количката.`);
            const result = await postStoredProducts({
                action: 'added',
                productId: itemDetails._id,
                price: discountPrice(itemDetails.price, itemDetails.discount),
            });
            const data = {
                itemId: result.item,
                price: result.price,
                imageUrl: result.imageUrl,
                productType: result.productType,
                name: result.name,
                _id: result._id,
            };
            addToBasket(data);
            navigateTo('/cart');
        } else {
            toast('Трябва да се логнете преди да продължите.');
            navigateTo(`/login?redirect=${currentPath}`);
        }
    };

    useEffect(() => {
        handleIsLoading(async () => {
            const [result, like] = await Promise.all([getSingleProductById(id), currentLike(id)]);
            setItemDetails(result);
            setIsLiked(like);
        }).catch((err) => {
            toast(err.message);
        });
    }, [id, handleIsLoading]);

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleLikeClick = async (e) => {
        e.preventDefault();
        if (user?._id) {
            setIsLiked(!isLiked);
            const response = await likedProducts({ isLiked, _id: itemDetails._id, userId: user._id });
            toast(response);
        }
    };

    const handleDelete = async () => {
        await deleteProductById(id);
        navigateTo(`/catalog/${category}`);
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='main-content'>
                    <div className='product-card'>
                        <div className='container'>
                            <div className='col-12 col-md-12 col-lg-12 mb-4'>
                                <div className='framework'>
                                    <div className='product-image'>
                                        <div className='product-item-card'>
                                            <div className='image-container'>
                                                <img
                                                    src={itemDetails.imageUrl}
                                                    className='img-card-fluid product-card-thumbnail'
                                                    alt={itemDetails.name}
                                                    style={{ margin: '0px' }}
                                                />
                                                {itemDetails.discount > 0 && (
                                                    <div className='labels'>
                                                        <div className='label-promo'> - {itemDetails.discount}%</div>
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
                                    </div>
                                    <div className='product-info'>
                                        <div className='details'>
                                            <div className='details-name'>{itemDetails.name}</div>
                                            <div className='details-type'>{itemDetails.productType}</div>
                                            <div className='details-color'>
                                                <img
                                                    src='/src/images/catalog/ProductDetails/color.png'
                                                    className='color-icon'
                                                    alt='Color icon'
                                                />
                                                <span className='color-text'>{itemDetails.details.color}</span>
                                            </div>
                                            <div className='details-more-info'>
                                                <div className='modal-more-info' onClick={modalHandler}>
                                                    Описание и размери
                                                </div>
                                                {isModalOpen && (
                                                    <div className='modal-overlay' onClick={modalHandler}>
                                                        <button type='button' className='modal-close'>
                                                            X
                                                        </button>
                                                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                                                            <h2 className='modal-header'>Описание и размери</h2>
                                                            <p>
                                                                <span>Предимства:</span> {itemDetails.details.advantages}
                                                            </p>
                                                            <p>
                                                                <span>Описание:</span> {itemDetails.details.description}
                                                            </p>
                                                            <p>
                                                                <span>Размери:</span> {itemDetails.details.size}
                                                            </p>
                                                            <p>
                                                                <span>Материали:</span> {itemDetails.details.materials}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='details-bottom'>
                                            {itemDetails.discount == 0 ? (
                                                <div className='details-regular-price'>{itemDetails.price} лв.</div>
                                            ) : (
                                                <div className='details-prices'>
                                                    <div className='details-promo-price'>
                                                        {discountPrice(itemDetails?.price, itemDetails.discount)} лв.
                                                    </div>
                                                    <div className='old-prices'>
                                                        <div className='details-before'>преди {itemDetails.price} лв.</div>
                                                        <div className='details-you-save'>
                                                            спестяваш {discountSave(itemDetails.price, itemDetails.discount)} лв.
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className='details-delivery'>
                                                Безплатна доставка до <strong>7 дни</strong>
                                            </div>

                                            <div className='details-purchase-button-wrapper' onClick={handleSell}>
                                                <img
                                                    src='/src/images/catalog/CategoryList/shopping_cart.png'
                                                    alt='shopping_cart_icon'
                                                    className='details-purchase-icon'
                                                />
                                                <span>Добави в количка</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {user?.admin && (
                            <div className='admin-control'>
                                <Link to={`/edit-product/${id}`} className='admin-edit-link'>
                                    <button className='admin-edit'>Edit</button>
                                </Link>

                                <button className='admin-delete' onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
