import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <Link to={'/profile'} className='dropdown-link'>
            Профил
        </Link>
    );
}
