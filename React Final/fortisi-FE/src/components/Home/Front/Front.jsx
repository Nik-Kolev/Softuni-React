import './Front.css';
import { useEffect, useState } from 'react';
export default function Front() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/quote/getSingleQuote')
            .then((x) => x.json())
            .then((x) => setQuote(x[0]))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className='home' id='home'>
            {/* <div className='home-text'>
                <h1>
                    <span>{quote.quote}</span>
                    <p>{quote.value}</p>
                </h1>
            </div> */}
            <div className='we-help-section'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-7 mb-5 mb-lg-0'>
                            <div className='imgs-grid'>
                                <div className='grid grid-1'>
                                    <img src='imagesa/img-grid-1.jpg' alt='Untree.co' />
                                </div>
                                <div className='grid grid-2'>
                                    <img src='/imagesa/img-grid-2.jpg' alt='Untree.co' />
                                </div>
                                <div className='grid grid-3'>
                                    <img src='imagesa/img-grid-3.jpg' alt='Untree.co' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 ps-lg-5 quote'>
                            <h2 className='section-title mb-4'>{quote.quote}</h2>
                            <p className='text-quote-body'>{quote.value}</p>

                            <ul className='list-unstyled custom-list my-4'>
                                <li>Открийте вечни парчета, създадени от нас за вашия модерен дом.</li>
                                <li>Разгледайте нашата подбрана селекция от качествени мебели.</li>
                                <li>Освежете вашия дом с мебели, които придават характер и индивидуалност.</li>
                                <li>Всяко парче мебел от нас е приказка за уют и изтънченост във вашия дом.</li>
                            </ul>
                            {/* <p>
                                <a href='#' className='btn'>
                                    Explore
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
