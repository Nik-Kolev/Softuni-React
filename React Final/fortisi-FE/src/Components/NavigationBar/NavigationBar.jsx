import './NavigationBar.css';
import { Link } from 'react-router-dom';
import UserDropDown from './Dropdowns/UserDropDown';
import CartDropDown from './Dropdowns/CardDropDown';
export default function NavBar() {
    return (
        //arial-label='Furni navigation bar'//
        <nav className='custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
                <Link to={'/'} className='brand-name'>
                    <p>Fortisi</p>
                    <img src='images/ftslogo.png' className='small-logo' />
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarsFurni'
                    aria-controls='navbarsFurni'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarsFurni'>
                    <ul className='custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0'>
                        {/* <li className='nav-item active'>
                            <Link to={'/'} className='nav-link'>
                                Home
                            </Link>
                        </li> */}
                        <li>
                            <Link to={'/catalog'} className='nav-link'>
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link to={'/about-us'} className='nav-link'>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className='nav-link'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='nav-link'>
                                Contact us
                            </Link>
                        </li>
                        {/* <li>
                            <Link to={'/login'} className='nav-link'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to={'/register'} className='nav-link'>
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to={'/logout'} className='nav-link'>
                                Logout
                            </Link>
                        </li> */}
                    </ul>

                    <ul className='custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5'>
                        <UserDropDown />
                        <CartDropDown />
                        {/* <li>
                            <a className='nav-link' href='#'>
                                <img src='images/user.svg' />
                            </a>
                        </li> */}
                        {/* <li>
                            <a className='nav-link' href='cart.html'>
                                <img src='images/cart.svg' />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
