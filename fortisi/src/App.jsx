import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/HeaderNav/Header';
import GameArea from './Components/GameArea/GameArea';
import WeWillSee from './Components/WeWillSee/WeWillSee';

function App() {
    return (
        <>
            <Header />
            <WeWillSee />
            <GameArea />
            <Footer />
        </>
    );
}

export default App;
