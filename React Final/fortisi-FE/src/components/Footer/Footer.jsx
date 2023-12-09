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
                            <a
                                href='https://www.facebook.com/mebelmag.bg/'
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='fa fa-brands fa-facebook-f'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/mebelmag.bg/'
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='fa fa-brands fa-instagram'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.youtube.com/@MebelMagBG/videos'
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='fa fa-brands fa-youtube'></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-nav'>
                    <ul className='footer-links'>
                        <li>
                            <Link to={'/catalog'}>Каталог</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Блог</Link>
                        </li>
                        <li>
                            <Link to={'/about-us'}>За Нас</Link>
                        </li>
                        <li>
                            <div style={{ cursor: 'pointer' }}>0892 90 90 92</div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
