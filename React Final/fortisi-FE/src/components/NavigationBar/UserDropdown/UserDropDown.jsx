import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';
import { DropdownMenu } from '../../../hooks/useDropdownMenu';
import Logout from '../../Authentication/Logout/Logout';
import './UserDropDown.css';

export default function UserDropDown() {
    const { showDropdown, hideDropdown, isDropdownVisible } = DropdownMenu();
    const { isAuthenticated } = useUserContext();

    return (
        <li className='user-container' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='images/user.svg' alt='User icon' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu' onClick={hideDropdown}>
                    {isAuthenticated ? (
                        <Logout />
                    ) : (
                        <>
                            <Link to={'/login'} className='dropdown-link'>
                                Login
                            </Link>
                            <Link to={'/register'} className='dropdown-link'>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </li>
    );
}
