import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardDropDown.css';
export default function CartDropDown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        //TODO: Add a summery of the cart if possible
        <li className='user-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={'/cart'} className='nav-link'>
                <img src='images/cart.svg' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu'>
                    <div>Card information such as products or perhaps number of products and total price</div>
                </div>
            )}
        </li>
    );
}
