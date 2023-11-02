import { useEffect, useState } from 'react';
import './WeWillSee.css';

export default function WeWillSee() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/api/quote/getSingleQuote')
            .then((x) => x.json())
            .then((x) => setQuote(x[0]))
            .catch((err) => console.log(err));
    }, []);
    console.log(quote.imageUrl);
    return (
        <div className='hero'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-5'>
                        <div className='intro-excerpt'>
                            <h1>
                                <span className='d-block'>{quote.quote}</span>
                            </h1>
                            <p className='mb-4'>{quote.value}</p>
                            <p>
                                <a href='' className='btn btn-secondary me-2'>
                                    Shop Now
                                </a>
                                <a href='#' className='btn btn-white-outline'>
                                    Explore
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='hero-img-wrap'>
                            <img src={`images/${quote.imageUrl}.png`} className='img-fluid' />
                            {/* <img src='images/12.png' className='img-fluid' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
