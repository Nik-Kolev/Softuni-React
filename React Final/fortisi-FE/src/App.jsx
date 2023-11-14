import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavigationBar/NavigationBar';
import Carousel from './Components/Carousel/Carousel';
import Blog from './Components/Blog/Blog';
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login';
import SomethingWentWrong from './Components/404/404';
import PopularProducts from './Components/Catalog/PopularProducts/PopularProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Toasty from './components/ToastNotifications/Toasty';
// import { ErrorProvider } from './context/ErrorContext';

function App() {
    return (
        <>
            <NavBar />
            {/* <ErrorProvider> */}
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Carousel />
                            <PopularProducts />
                        </>
                    }
                />
                {/* <Route path='/catalog' element={<Catalog />} /> */}
                {/* <Route path='/about-us' element={<AboutUs />} /> */}
                <Route path='/blog' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* <Route path='/logout' element={<Logout />} /> */}
                {/* <Route path='/profile' element={<Profile />} /> */}
                {/* <Route path='/shop' element={<ShopCart />} /> */}
                <Route path='*' element={<SomethingWentWrong />} />
            </Routes>
            {/* <Toasty /> */}
            {/* </ErrorProvider> */}
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
            <Footer />
        </>
    );
}

export default App;
