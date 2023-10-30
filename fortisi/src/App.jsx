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
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login';
import SomethingWentWrong from './Components/404/404';

function App() {
    return (
        <>
            <Header />
            <SomethingWentWrong />
            <Register />
            <Login />
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
