import { useState } from 'react';
// import './UserIcon.css'; // Assuming you have a separate CSS file

export default function DropDownMenu() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleIconHover = () => {
        setDropdownVisible(true);
    };

    const handleIconLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div className='custom-navbar custom-navbar-cta'>
            <li className='user-icon-container' onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
                <div className='user-icon'>
                    <li>
                        <a className='nav-link' href='#'>
                            <img src='images/user.svg' />
                        </a>
                    </li>
                </div>
                {isDropdownVisible && (
                    <div className='dropdown-menu'>
                        {/* Your dropdown menu content goes here */}
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                )}
            </li>
        </div>
    );
}
