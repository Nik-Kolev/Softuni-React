import './App.css';
import { Routes, Route } from 'react-router-dom';
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

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route
                    path='/'
                    element={
                        <>
                            <WeWillSee />
                            <GameArea />
                        </>
                    }
                />
                {/* <Route path='/we-will-see' element={} /> */}
                <Route path='/game-area' element={<GameArea />} />
                <Route path='/why-us' element={<WhyUs />} />
                <Route path='/we-help' element={<WeHelp />} />
                <Route path='/popular-products' element={<PopularProducts />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='*' element={<SomethingWentWrong />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
