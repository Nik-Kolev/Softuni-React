import './Profile.css';

import { useState } from 'react';

import { useUserContext } from '../../context/UserContext';
import Address from './User/Address/Address';
import ChangePassword from './User/ChangePassword/ChangePassword';
import UserProfile from './User/UserProfile/UserProfile';

export default function Profile() {
    const [currentComponent, setCurrentComponent] = useState('Admin');

    const { user } = useUserContext();
    console.log(user);
    const renderComponent = () => {
        switch (currentComponent) {
            case 'changePassword':
                return <ChangePassword />;
            case 'address':
                return <Address />;
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
                            <div onClick={(e) => handleClick(e, 'address')}>Адрес за доставка</div>
                        </li>
                    </ul>
                </nav>
                <div className='container-right'>{renderComponent()}</div>
            </div>
        </div>
    );
}
