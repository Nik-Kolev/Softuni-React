import './Footer.css';

import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className='footer-section'>
            <div className='container'>
                <div className='footer-content'>
                    <p>
                        Открийте елегантността с ексклузивната колекция мебели на <span className='brand-text'> Fortisi</span>. Изработени
                        за комфорт, проектирани за живот.
                    </p>
                    <ul className='footer-social-links'>
                        <li>
                            <a href='#' className='social-link'>
                                <span className='fa fa-brands fa-facebook-f'></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='social-link'>
                                <span className='fa fa-brands fa-twitter'></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='social-link'>
                                <span className='fa fa-brands fa-instagram'></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='social-link'>
                                <span className='fa fa-brands fa-linkedin'></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-nav'>
                    <ul className='footer-links'>
                        <li>
                            <a href='#'>About us</a>
                        </li>
                        <li>
                            <a href='#'>Catalog</a>
                        </li>
                        <li>
                            <a href='#'>Blog</a>
                        </li>
                        <li>
                            <a href='#'>Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
