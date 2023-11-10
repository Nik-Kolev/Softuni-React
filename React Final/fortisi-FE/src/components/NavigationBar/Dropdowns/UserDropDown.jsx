import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDropDown.css';
export default function UserDropDown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const showDropdownHandler = () => {
        setDropdownVisible(true);
    };

    const hideDropdownHandler = () => {
        setDropdownVisible(false);
    };
    return (
        <li className='user-container' onMouseEnter={showDropdownHandler} onMouseLeave={hideDropdownHandler}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='images/user.svg' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu' onClick={hideDropdownHandler}>
                    <Link to={'/login'} className='dropdown-link'>
                        Login
                    </Link>
                    <Link to={'/register'} className='dropdown-link'>
                        Register
                    </Link>
                    <Link to={'/logout'} className='dropdown-link'>
                        Logout
                    </Link>
                </div>
            )}
        </li>
    );
}
