import { DropdownMenu } from '../../../hooks/useDropdownMenu';
import { Link } from 'react-router-dom';
import './CardDropDown.css';
export default function CartDropDown() {
    const { showDropdown, hideDropdown, isDropdownVisible } = DropdownMenu();

    return (
        //TODO: Add a summery of the cart if possible
        <li className='user-container' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <Link to={'/cart'} className='nav-link'>
                <img src='/src/images/home/cart.svg' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu'>
                    <div>Card information such as products or perhaps number of products and total price</div>
                </div>
            )}
        </li>
    );
}
