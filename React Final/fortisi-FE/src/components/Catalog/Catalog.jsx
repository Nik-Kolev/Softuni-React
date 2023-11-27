import { Link } from 'react-router-dom';
import './Catalog.css';

export default function Catalog() {
    //TODO - Hyperlinks below product title for different categories - example: standard kitchen, tables, chairs, etc
    return (
        <div className='untree_co-section product-section before-footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <Link to={'/catalog/bedroom'} className='product-item'>
                            <img src='src/components/Catalog/CategoryPictures/bedroomCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Bedroom</h3>
                        </Link>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img
                                src='src/components/Catalog/CategoryPictures/livingRoomCatalog.jpg'
                                className='img-fluid product-thumbnail'
                            />
                            <h3 className='product-title'>Living Room</h3>
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img src='src/components/Catalog/CategoryPictures/kitchenCatalog.jpg' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Kitchen</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img
                                src='src/components/Catalog/CategoryPictures/kidsRoomCatalog.jpg'
                                className='img-fluid product-thumbnail'
                            />
                            <h3 className='product-title'>Children`s room</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img
                                src='src/components/Catalog/CategoryPictures/entranceHallCatalog.jpg'
                                className='img-fluid product-thumbnail'
                            />
                            <h3 className='product-title'>Entrance Hall</h3>
                            {/* <strong className='product-price'>$50.00</strong> */}
                        </a>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 mb-5'>
                        <a className='product-item' href='#'>
                            <img
                                src='src/components/Catalog/CategoryPictures/officeRoomCatalog.jpg'
                                className='img-fluid product-thumbnail'
                            />
                            <h3 className='product-title'>Office</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
