import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { NotificationContext } from '../../../context/NotificationContext';

export default function Logout() {
    const { onLogoutHandler } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const onSubmitHandler = async () => {
        try {
            const user = await onLogoutHandler();
            setNotification(user);
        } catch (err) {
            setNotification(err.message);
        }
    };

    return (
        <Link to={'/'} className='dropdown-link' onClick={onSubmitHandler}>
            Logout
        </Link>
    );
}
