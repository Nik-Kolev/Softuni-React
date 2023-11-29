import { Link } from 'react-router-dom';
import { useNotificationContext } from '../../../context/NotificationContext';
import { useUserContext } from '../../../context/UserContext';

export default function Logout() {
    const { onLogoutHandler } = useUserContext();
    const { setNotification } = useNotificationContext();

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
            Излез
        </Link>
    );
}
