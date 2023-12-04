import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';

export default function LoggedUserGuard() {
    const { isAuthenticated } = useUserContext();

    if (isAuthenticated) {
        return <Navigate to='/' />;
    }
    return <Outlet />;
}
