import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavigationBar/NavigationBar';
import Carousel from './Components/Carousel/Carousel';
import Blog from './Components/Blog/Blog';
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login';
import SomethingWentWrong from './Components/404/404';
import PopularProducts from './components/CatalogOld/PopularProducts/PopularProducts';
import Toasty from './components/ToastNotifications/Toasty';
import { NotificationProvider } from './context/NotificationContext';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import Catalog from './components/Catalog/Catalog';
import CreateProduct from './components/Products/CreateProducts/CreateProduct';
function App() {
    return (
        <>
            <NotificationProvider>
                <UserProvider>
                    <ProductProvider>
                        <NavBar />
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    <>
                                        <CreateProduct />
                                        <Carousel />
                                        <PopularProducts />
                                    </>
                                }
                            />
                            <Route path='/catalog' element={<Catalog />} />
                            {/* <Route path='/createProduct' element={<CreateProduct />} /> */}
                            {/* <Route path='/about-us' element={<AboutUs />} /> */}
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            {/* <Route path='/profile' element={<Profile />} /> */}
                            {/* <Route path='/shop' element={<ShopCart />} /> */}
                            <Route path='*' element={<SomethingWentWrong />} />
                        </Routes>
                        <Toasty />
                    </ProductProvider>
                </UserProvider>
            </NotificationProvider>
            <Footer />
        </>
    );
}

export default App;
