import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './UserDropDown.css';
import { NotificationContext } from '../../../context/NotificationContext';
import { UserContext } from '../../../context/UserContext';
import { DropdownMenu } from '../../../hooks/useDropdownMenu';
export default function UserDropDown() {
    const { showDropdown, hideDropdown, isVisible } = DropdownMenu();

    const { setNotification } = useContext(NotificationContext);
    const { onLogoutHandler, isAuthenticated } = useContext(UserContext);

    const onSubmitHandler = async () => {
        try {
            const user = await onLogoutHandler();
            setNotification(user);
        } catch (err) {
            setNotification(err.message);
        }
    };
    console.log(isAuthenticated);
    //TODO: Make Logout component with useEffect to logout on mount
    return (
        <li className='user-container' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='images/user.svg' />
            </Link>
            {isVisible && (
                <div className='dropdown-menu' onClick={hideDropdown}>
                    {isAuthenticated ? (
                        <Link to={'/'} className='dropdown-link' onClick={onSubmitHandler}>
                            Logout
                        </Link>
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
