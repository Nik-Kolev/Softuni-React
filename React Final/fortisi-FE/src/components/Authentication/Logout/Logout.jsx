import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';
import { useUserContext } from '../../../context/UserContext';

export default function Logout() {
    const { onLogoutHandler } = useUserContext();

    const onSubmitHandler = async () => {
        try {
            const user = await onLogoutHandler();
            toast(user);
        } catch (err) {
            toast(err.message);
        }
    };

    return (
        <Link to={'/'} className='dropdown-link' onClick={onSubmitHandler}>
            Излез
        </Link>
    );
}
