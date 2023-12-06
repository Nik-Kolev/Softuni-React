import './Profile.css';

import { useState } from 'react';

import { useUserContext } from '../../context/UserContext';
import ChangePassword from './User/ChangePassword/ChangePassword';
import UserProfile from './User/MyProfile/UserProfile';

export default function Profile() {
    const [currentComponent, setCurrentComponent] = useState('Admin');

    const { user } = useUserContext();
    console.log(user);
    const renderComponent = () => {
        switch (currentComponent) {
            case 'changePassword':
                return <ChangePassword />;
            default:
                return <UserProfile />;
        }
    };

    const handleClick = (e, componentName) => {
        e.preventDefault();
        setCurrentComponent(componentName);
    };

    return (
        <div className='main-content'>
            <div className='profile-container'>
                <nav className='profile-navbar'>
                    <ul>
                        <li>
                            <div onClick={(e) => handleClick(e, 'userProfile')}>Моят профил</div>
                        </li>
                        <li>
                            <div onClick={(e) => handleClick(e, 'changePassword')}>Смяна на парола</div>
                        </li>
                        <li>
                            <div onClick={(e) => handleClick(e, 'Test')}>Адрес за доставка</div>
                        </li>
                    </ul>
                </nav>
                <div className='container-right'>{renderComponent()}</div>
            </div>
        </div>
    );
}
