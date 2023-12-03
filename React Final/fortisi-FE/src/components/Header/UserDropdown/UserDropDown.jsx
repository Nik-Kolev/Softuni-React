import './UserDropDown.css';

import { Link } from 'react-router-dom';

import { useUserContext } from '../../../context/UserContext';
import { DropdownMenu } from '../../../hooks/useDropdownMenu';
import Logout from '../../Authentication/Logout/Logout';
import Profile from '../../Profile/Profile';

export default function UserDropDown() {
    const { showDropdown, hideDropdown, isDropdownVisible } = DropdownMenu();
    const { isAuthenticated, user } = useUserContext();

    return (
        <li className='user-container' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='/src/images/home/user.svg' alt='User icon' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu' onClick={hideDropdown}>
                    {isAuthenticated ? (
                        <>
                            <Profile />
                            {user.admin && (
                                <Link to={'/create-product'} className='dropdown-link'>
                                    Създай Продукт
                                </Link>
                            )}
                            <Logout />
                        </>
                    ) : (
                        <>
                            <Link to={'/login'} className='dropdown-link'>
                                Вход
                            </Link>
                            <Link to={'/register'} className='dropdown-link'>
                                Регистрация
                            </Link>
                        </>
                    )}
                </div>
            )}
        </li>
    );
}
