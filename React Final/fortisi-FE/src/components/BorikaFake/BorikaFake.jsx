import './BorikaFake.css';

import { useStoreContext } from '../../context/StoreContext';

export default function BorikaFake() {
    const { total } = useStoreContext();
    return (
        <div className='borika-payment-mockup'>
            <div className='payment-form'>
                <h2>Плащане чрез БОРИКА</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor='cardNumber'>Номер на карта:</label>
                        <input type='text' id='cardNumber' name='cardNumber' placeholder='XXXX XXXX XXXX XXXX' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cardExpiry'>Валидност:</label>
                        <input type='text' id='cardExpiry' name='cardExpiry' placeholder='MM/YY' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cardCVC'>CVC:</label>
                        <input type='text' id='cardCVC' name='cardCVC' placeholder='CVC' />
                    </div>
                    <div className='total'>
                        <p>Сума за плащане: {total} лв.</p>
                    </div>
                    <button type='button' className='submit-btn'>
                        Плати
                    </button>
                </form>
            </div>
        </div>
    );
}
