import './Cart.css';

import { useNavigate } from 'react-router-dom';

import { useStoreContext } from '../../context/StoreContext';
import ItemCard from './ItemCard';

export default function Cart() {
    const { removeFromBasket, total, products } = useStoreContext();
    const navigateTo = useNavigate();

    return (
        <div className='main-content'>
            <div className='cart-section before-footer-section'>
                <div className='container'>
                    <div className='cart-row-table'>
                        <form className='col-md-12' method='post'>
                            <div className='cart-table'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th className='cart-thumbnail'>Продукт</th>
                                            <th className='cart-name'>Име</th>
                                            <th className='cart-price'>Цена</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products &&
                                            products.map((x) => <ItemCard key={x._id} {...x} removeFromBasket={removeFromBasket} />)}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className='no-products-container' style={{ height: products.length === 0 ? '200px' : '50px' }}>
                        {products.length === 0 && <div className='no-products'>Вашата количка е празна.</div>}
                    </div>
                    <div className='cart-row-wrapper'>
                        <div className='col-md-7'>
                            <div className='col-md-6'>
                                <label className='text-black h4' htmlFor='coupon'>
                                    Добави ваучер
                                </label>
                            </div>
                            <div className='col-md-8 mb-3 mb-md-0'>
                                <input type='text' className='form-control py-3' id='coupon' placeholder='Въведи ваучер тук' />
                            </div>
                            <div className='col-md-4'>
                                <button className='cart-button apply-coupon' type='button'>
                                    Приложи ваучер
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6 pl-5 cart-totals'>
                            <div className='col-md-7'>
                                <div className='cart-row'>
                                    <div className='col-md-12 text-right border-bottom mb-5'>
                                        <h3 className='text-black h6 text-uppercase'>
                                            Общо: <strong className='text-black'>{total} лв.</strong>
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-md-12 cart-buttons'>
                                    <button
                                        className='cart-button checkout'
                                        type='button'
                                        onClick={() => {
                                            navigateTo('/catalog');
                                            window.scrollTo(0, 0);
                                        }}>
                                        Продължи с пазаруването
                                    </button>
                                    <span>или</span>
                                    <button
                                        className='cart-button checkout'
                                        type='button'
                                        onClick={() => {
                                            navigateTo('/BorikaFake');
                                            window.scrollTo(0, 0);
                                        }}>
                                        Завърши поръчката
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
