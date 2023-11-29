import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Header/NavigationBar/NavigationBar';
import Carousel from './components/Home/Carousel/Carousel';
import Blog from './components/Blog/Blog';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import SomethingWentWrong from './components/Home/404/404';
import { NotificationProvider } from './context/NotificationContext';
import { UserProvider } from './context/UserContext';
import CatalogOptions from './components/Catalog/CatalogOptions/CatalogOptions';
import CreateProduct from './components/Products/CreateProducts/CreateProduct';
import CategoryList from './components/Catalog/CategoryList/CategoryList';
import ProductDetails from './components/Catalog/ProductDetails/ProductDetails';
import Toasty from './components/Home/ToastNotifications/Toasty';
import Footer from './Components/Footer/Footer';
function App() {
    return (
        <>
            <NotificationProvider>
                <UserProvider>
                    <NavigationBar />
                    <Routes>
                        <Route path='/' element={<Carousel />} />
                        <Route path='/catalog' element={<CatalogOptions />} />
                        <Route path='/catalog/:category' element={<CategoryList />} />
                        <Route path='/catalog/:category/:item' element={<ProductDetails />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/createProduct' element={<CreateProduct />} />
                        <Route path='*' element={<SomethingWentWrong />} />
                    </Routes>
                    <Toasty />
                </UserProvider>
            </NotificationProvider>
            <Footer />
        </>
    );
}

export default App;
