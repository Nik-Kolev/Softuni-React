import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useStoreContext } from '../../../context/StoreContext';
import { useUserContext } from '../../../context/UserContext';

export default function Logout() {
    const { onLogoutHandler } = useUserContext();
    const { emptyBasket } = useStoreContext();

    const onSubmitHandler = async () => {
        try {
            await onLogoutHandler();
            emptyBasket();
            toast('Излизането успешно.');
        } catch (err) {
            toast(err.message);
        }
    };

    return (
        <Link to={'/'} className='dropdown-link' onClick={onSubmitHandler}>
            Изход
        </Link>
    );
}
