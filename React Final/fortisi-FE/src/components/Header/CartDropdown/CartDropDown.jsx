import './CartDropDown.css';

import { Link } from 'react-router-dom';

import { useStoreContext } from '../../../context/StoreContext';

export default function CartDropDown() {
    const { products } = useStoreContext();

    return (
        //TODO: Add a summery of the cart if possible
        <li className='user-container' >
            <div className='wrapper'>
                <Link to={'/cart'} className='nav-link'>
                    <img src='/src/images/home/cart.svg' />
                </Link>
                <span className='total-products'>{products.length == undefined ? 0 : products.length}</span>
            </div>
        </li>
    );
}
