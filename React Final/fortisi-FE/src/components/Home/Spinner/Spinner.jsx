import './Spinner.css';

export default function Spinner() {
    return (
        <div className='main-content-spinner'>
            <div className='spinner-container'>
                <div className='loading-spinner'></div>
                <div className='lds-spinner'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className='msg'>Зареждане, моля изчакайте !</p>
            </div>
        </div>
    );
}
