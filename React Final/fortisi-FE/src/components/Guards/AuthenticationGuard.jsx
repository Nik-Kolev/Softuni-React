import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';

export default function AuthenticationGuard() {
    const { isAuthenticated } = useUserContext();

    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
}
