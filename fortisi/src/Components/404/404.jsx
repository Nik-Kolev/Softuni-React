import './404.css';
export default function SomethingWentWrong() {
    return (
        <div className='notFound'>
            <div className='notFound_Left'>
                <figure>
                    <img src='https://ikeabulgaria.akamaized.net/files/image404.png' alt='' />
                </figure>
            </div>
            <div className='notFound_Right'>
                <p className='notFound_Error'>ERROR 404</p>
                <p className='notFound_Big'>Something is missing?</p>
                <p className='notFound_Descr'>The page you are looking for is not found or the product is out of stock.</p>
                <a id='asd' href='/'>
                    Back to Home Page
                </a>
            </div>
        </div>
    );
}
