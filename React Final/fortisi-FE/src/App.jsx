import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Header/NavigationBar/NavigationBar';
import Blog from './components/Blog/Blog';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import SomethingWentWrong from './components/Home/404/404';
import { UserProvider } from './context/UserContext';
import CatalogOptions from './components/Catalog/CatalogOptions/CatalogOptions';
import CreateProduct from './components/Products/CreateProducts/CreateProduct';
import EditProduct from './components/Products/EditProducts/EditProduct';
import CategoryList from './components/Catalog/CategoryList/CategoryList';
import ProductDetails from './components/Catalog/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';
import { toastConfig } from 'react-simple-toasts';
import Front from './components/Home/Front/Front';
import { StoreProvider } from './context/StoreContext';

function App() {
    toastConfig({
        duration: 2000,
        offsetY: 120,
        position: 'top-right',
        maxVisibleToasts: 3,
        render: (message) => <b className='my-toast'>{message}</b>,
    });
    return (
        <>
            <UserProvider>
                <StoreProvider>
                    <NavigationBar />
                    <Routes>
                        <Route path='/' element={<Front />} />
                        <Route path='/catalog' element={<CatalogOptions />} />
                        <Route path='/catalog/:category' element={<CategoryList />} />
                        <Route path='/catalog/:category/:id' element={<ProductDetails />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-product' element={<CreateProduct />} />
                        <Route path='/edit-product/:id' element={<EditProduct />} />
                        <Route path='*' element={<SomethingWentWrong />} />
                    </Routes>
                </StoreProvider>
            </UserProvider>
            <Footer />
        </>
    );
}

export default App;
