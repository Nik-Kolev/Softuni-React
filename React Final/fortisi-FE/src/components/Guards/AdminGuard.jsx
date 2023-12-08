import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';

export default function AdminGuard() {
    const { user } = useUserContext();
    if (!user.admin) {
        return <Navigate to='/' />;
    }
    return <Outlet />;
}
