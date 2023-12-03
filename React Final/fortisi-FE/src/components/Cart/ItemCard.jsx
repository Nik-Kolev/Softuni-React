import toast from 'react-simple-toasts';

import { postStoredProducts } from '../../services/user';

export default function ItemCard({ name, price, productType, imageUrl, removeFromBasket, _id }) {
    const handleRemoveItem = async () => {
        try {
            await postStoredProducts({ action: 'remove', productId: _id });
            removeFromBasket(_id);
        } catch (err) {
            toast(err.message);
        }
    };
    return (
        <tr>
            <td className='cart-thumbnail'>
                <img src={imageUrl} alt='Image' className='img-fluid' />
            </td>
            <td className='cart-name'>
                <h2 className='h5 text-black'>
                    {productType} - {name}
                </h2>
            </td>
            <td className='cart-price'>{price} лв.</td>
            <td className='cart-quantity'>
                <div className='quantity-container d-flex align-items-center justify-content-center'>
                    <button className='cart-button decrease' type='button'>
                        -
                    </button>
                    <input
                        type='text'
                        className='form-control text-center quantity-amount'
                        placeholder='0'
                        aria-label='Example text with button addon'
                        aria-describedby='button-addon1'
                    />
                    <button className='cart-button increase' type='button'>
                        +
                    </button>
                </div>
            </td>
            <td className='cart-total'>{price} лв.</td>
            <td className='cart-remove'>
                <button className='cart-button' type='button' onClick={handleRemoveItem}>
                    Премахни
                </button>
            </td>
        </tr>
    );
}
