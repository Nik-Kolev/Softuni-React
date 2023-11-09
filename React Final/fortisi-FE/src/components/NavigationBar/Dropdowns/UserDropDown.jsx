import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDropDown.css';
export default function UserDropDown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (
        <li className='user-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='images/user.svg' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu'>
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
