import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';
import { deleteProductById, getSingleProductById } from '../../../services/product';
import { discountPrice, discountSave } from '../../../utils/calculatePriceAfterDiscount';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails() {
    const [itemDetails, setItemDetails] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigateTo = useNavigate();
    const { user } = useUserContext();
    const { category, id } = useParams();

    useEffect(() => {
        getSingleProductById(id)
            .then((data) => {
                setItemDetails(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    let regularPrice = false;
    let isLiked = false;

    const handleDelete = async () => {
        await deleteProductById(id);
        navigateTo(`/catalog/${category}`);
    };

    return (
        <div className='product-card'>
            <div className='container'>
                <div className='col-12 col-md-12 col-lg-12 mb-4'>
                    <div className='framework'>
                        <div className='product-image'>
                            <div className='product-item-card'>
                                <div className='image-container'>
                                    <img
                                        src={itemDetails?.imageUrl}
                                        className='img-card-fluid product-card-thumbnail'
                                        alt={itemDetails?.name}
                                        style={{ margin: '0px' }}
                                    />
                                    <div className='labels'>
                                        <div className='label-promo'> - {itemDetails?.discount}%</div>
                                    </div>
                                    <div className={`like-button ${isLiked ? 'liked' : ''}`}>
                                        <div className='heart-container'>
                                            <div className='heart'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-info'>
                            <div className='details'>
                                <div className='details-name'>{itemDetails?.name}</div>
                                <div className='details-type'>{itemDetails?.productType}</div>
                                <div className='details-color'>
                                    <img src='/src/images/catalog/ProductDetails/color.png' className='color-icon' alt='Color icon' />
                                    <span className='color-text'>{itemDetails?.details.color}</span>
                                </div>
                                {/* <div className='details-total-likes'>В любими: 5</div> */}
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
                                                <h2>Описание и размери</h2>
                                                <p>Предимства: {itemDetails?.details.advantages}</p>
                                                <p>Описание: {itemDetails?.details.description}</p>
                                                <p>Размери: {itemDetails?.details.size}</p>
                                                <p>Материали: {itemDetails?.details.materials}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='details-bottom'>
                                <div className='details-prices'>
                                    {regularPrice ? (
                                        <div className='details-regular-price'>{itemDetails?.price * 2} лв.</div>
                                    ) : (
                                        <div className='details-promo-price'>
                                            {discountPrice(itemDetails?.price, itemDetails?.discount)} лв.
                                        </div>
                                    )}
                                    <div className='old-prices'>
                                        <div className='details-before'>преди {itemDetails?.price} лв.</div>
                                        <div className='details-you-save'>
                                            спестяваш {discountSave(itemDetails?.price, itemDetails?.discount)} лв.
                                        </div>
                                    </div>
                                </div>
                                <div className='details-delivery'>
                                    Безплатна доставка до <strong>7 дни</strong>
                                </div>

                                <div className='details-purchase-button-wrapper'>
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
            {user.admin && (
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
    );
}
