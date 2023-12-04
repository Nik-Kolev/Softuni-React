import './CatalogOptions.css';

import { Link } from 'react-router-dom';

export default function Catalog() {
    return (
        <div className='main-content'>
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
                            <Link to={'/catalog/livingroom'} className='product-item'>
                                <img
                                    src='src/images/catalog/CatalogOptions/livingRoomCatalog.jpg'
                                    className='img-fluid product-thumbnail'
                                />
                                <h3 className='product-title'>Дневна</h3>
                            </Link>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4 mb-5'>
                            <Link to={'/catalog/kitchen'} className='product-item'>
                                <img src='src/images/catalog/CatalogOptions/kitchenCatalog.jpg' className='img-fluid product-thumbnail' />
                                <h3 className='product-title'>Кухня</h3>
                            </Link>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4 mb-5'>
                            <Link to={'/catalog/children'} className='product-item'>
                                <img src='src/images/catalog/CatalogOptions/kidsRoomCatalog.jpg' className='img-fluid product-thumbnail' />
                                <h3 className='product-title'>Детска Стая</h3>
                            </Link>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4 mb-5'>
                            <Link to={'/catalog/entranceHall'} className='product-item'>
                                <img
                                    src='src/images/catalog/CatalogOptions/entranceHallCatalog.jpg'
                                    className='img-fluid product-thumbnail'
                                />
                                <h3 className='product-title'>Антре</h3>
                            </Link>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4 mb-5'>
                            <Link to={'/catalog/office'} className='product-item' href='#'>
                                <img
                                    src='src/images/catalog/CatalogOptions/officeRoomCatalog.jpg'
                                    className='img-fluid product-thumbnail'
                                />
                                <h3 className='product-title'>Офис</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
