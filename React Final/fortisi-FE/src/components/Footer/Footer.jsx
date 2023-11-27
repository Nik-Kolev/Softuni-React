import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className='footer-section'>
            <div className='container relative'>
                <div className='sofa-img'>
                    <img src='/images/sofa.png' alt='Image' className='img-fluid' />
                </div>
                <div className='row g-5 mb-5'>
                    <div className='col-lg-4'>
                        <div className='mb-4 footer-logo-wrap'>
                            <Link to={'/'} className='brand-name'>
                                <p>Fortisi</p>
                                <img src='/images/ftslogo.png' className='small-logo' />
                            </Link>
                        </div>
                        <p className='mb-4'>
                            {/* TODO: Add something here */}
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
                        </p>
                        {/* TODO: Add links */}
                        <ul className='list-unstyled custom-social'>
                            <li>
                                <a href='#'>
                                    <span className='fa fa-brands fa-facebook-f'></span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='fa fa-brands fa-twitter'></span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='fa fa-brands fa-instagram'></span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='fa fa-brands fa-linkedin'></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-8'>
                        <div className='row links-wrap'>
                            <div className='col-6 col-sm-6 col-md-3'>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href='#'>About us</a>
                                    </li>
                                    <li>
                                        <a href='#'>Services</a>
                                    </li>
                                    <li>
                                        <a href='#'>Blog</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 col-sm-6 col-md-3'>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href='#'>Jobs</a>
                                    </li>
                                    <li>
                                        <a href='#'>Our team</a>
                                    </li>
                                    <li>
                                        <a href='#'>Leadership</a>
                                    </li>
                                    <li>
                                        <a href='#'>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
