import { DropdownMenu } from '../../../hooks/useDropdownMenu';
import { Link } from 'react-router-dom';
import './CartDropDown.css';
import { useStoreContext } from '../../../context/StoreContext';

export default function CartDropDown() {
    const { showDropdown, hideDropdown, isDropdownVisible } = DropdownMenu();
    const { products } = useStoreContext();

    return (
        //TODO: Add a summery of the cart if possible
        <li className='user-container' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <div className='wrapper'>
                <Link to={'/cart'} className='nav-link'>
                    <img src='/src/images/home/cart.svg' />
                </Link>
                <span className='total-products'>{products.length == undefined ? 0 : products.length}</span>
            </div>
            {isDropdownVisible && (
                <div className='dropdown-menu'>
                    <div>Card information such as products or perhaps number of products and total price</div>
                </div>
            )}
        </li>
    );
}
