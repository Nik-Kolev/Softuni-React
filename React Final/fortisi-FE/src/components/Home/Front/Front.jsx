import './Front.css';

import { useEffect, useState } from 'react';

import { getSingleQuote } from '../../../services/quote';
export default function Front() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        getSingleQuote()
            .then((x) => setQuote(x[0]))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className='home' id='home'>
            <div className='we-help-section'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-7 mb-5 mb-lg-0'>
                            <div className='imgs-grid'>
                                <div className='grid grid-1'>
                                    <img src='/src/images/home/front3.jpg' alt='Untree.co' />
                                </div>
                                <div className='grid grid-2'>
                                    <img src='/src/images/home/front2.jpg' alt='Untree.co' />
                                </div>
                                <div className='grid grid-3'>
                                    <img src='/src/images/home/front1.jpg' alt='Untree.co' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 ps-lg-5 quote'>
                            <h2 className='section-title mb-4'>{quote.title}</h2>
                            <p className='text-quote-body'>{quote.text}</p>

                            <ul className='list-unstyled custom-list my-4'>
                                <li>Открийте вечни парчета, създадени от нас за вашия модерен дом.</li>
                                <li>Разгледайте нашата подбрана селекция от качествени мебели.</li>
                                <li>Освежете вашия дом с мебели, които придават характер и индивидуалност.</li>
                                <li>Всяко парче мебел от нас е приказка за уют и изтънченост във вашия дом.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
