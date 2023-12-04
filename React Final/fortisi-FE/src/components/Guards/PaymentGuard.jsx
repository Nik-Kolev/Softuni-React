import { Navigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useStoreContext } from '../../context/StoreContext';

export default function PaymentGuard(props) {
    const { products } = useStoreContext();

    if (products.length == 0) {
        toast('Вашата количка е празна.');
        return <Navigate to='/catalog' />;
    }
    return <>{props.children}</>;
}
