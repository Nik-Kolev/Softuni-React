import { Navigate } from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';

export default function NoProfileAdmin(props) {
    const { user } = useUserContext();

    if (user.admin) {
        return <Navigate to='/' />;
    }
    return <>{props.children}</>;
}
