import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDropDown.css';
import { NotificationContext } from '../../../context/NotificationContext';
import { UserContext } from '../../../context/UserContext';
export default function UserDropDown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const { setNotification } = useContext(NotificationContext);
    const { onLogoutHandler, isAuthenticated } = useContext(UserContext);

    const showDropdownHandler = () => {
        setDropdownVisible(true);
    };

    const hideDropdownHandler = () => {
        setDropdownVisible(false);
    };

    const onSubmitHandler = async () => {
        try {
            const user = await onLogoutHandler();
            console.log(user);
            setNotification(user);
        } catch (err) {
            console.log(err);
            setNotification(err.message);
        }
    };
    console.log(isAuthenticated);
    return (
        <li className='user-container' onMouseEnter={showDropdownHandler} onMouseLeave={hideDropdownHandler}>
            <Link to={'/profile'} className='nav-link user-icon'>
                <img src='images/user.svg' />
            </Link>
            {isDropdownVisible && (
                <div className='dropdown-menu' onClick={hideDropdownHandler}>
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
