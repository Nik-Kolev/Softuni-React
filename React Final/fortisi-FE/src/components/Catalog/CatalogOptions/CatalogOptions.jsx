import { Link } from 'react-router-dom';
import './CatalogOptions.css';

export default function Catalog() {
    //TODO - Hyperlinks below product title for different categories - example: standard kitchen, tables, chairs, etc
    return (
        <div className='untree_co-section product-section before-footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <Link to={'/catalog/bedroom'} className='product-item'>
                            <img src='src/images/catalog/CatalogOptions/bedroomCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Спалня</h3>
                        </Link>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/images/catalog/CatalogOptions/livingRoomCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Дневна</h3>
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/images/catalog/CatalogOptions/kitchenCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Кухня</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/images/catalog/CatalogOptions/kidsRoomCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Детска Стая</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/images/catalog/CatalogOptions/entranceHallCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Антре</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/images/catalog/CatalogOptions/officeRoomCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Офис</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
