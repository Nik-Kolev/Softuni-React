import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Search />
            </main>
            <Footer />
        </>
    );
}

export default App;
