import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/HeaderNav/Header';
import GameArea from './Components/GameArea/GameArea';
import WeWillSee from './Components/WeWillSee/WeWillSee';
import WhyUs from './Components/WhyUs/WhyUs';
import WeHelp from './Components/WeHelp/WeHelp';
import PopularProducts from './Components/PopularProducts/PopularProducts';
import Testimonials from './Components/Testimonials/Testimonials';
import Blog from './Components/Blog/Blog';

function App() {
    return (
        <>
            <Header />
            <WeWillSee />
            <GameArea />
            <WhyUs />
            <WeHelp />
            <PopularProducts />
            <Testimonials />
            <Blog />
            <Footer />
        </>
    );
}

export default App;
