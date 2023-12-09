import './404.css';

import { Link } from 'react-router-dom';

export default function SomethingWentWrong() {
    return (
        <div className='main-content'>
            <div className='notFound'>
                <div className='notFound_Left'>
                    <figure>
                        <img src='/src/images/home/image404.png' alt='error404' />
                    </figure>
                </div>
                <div className='notFound_Right'>
                    <p className='notFound_Error'>ERROR 404</p>
                    <p className='notFound_Big'>Нещо Липсва?</p>
                    <p className='notFound_Descr'>Страницата, която се опитвате да достъпите липсва или не е намерена.</p>
                    <Link to={'/'}>Обратно към началната страница.</Link>
                </div>
            </div>
        </div>
    );
}
