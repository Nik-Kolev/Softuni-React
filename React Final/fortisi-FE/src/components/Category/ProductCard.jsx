export default function ProductCard({ imageUrl, productType, price }) {
    return (
        <div className='untree_co-section product-section before-footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='component-product'>
                        <div className='col-12 col-md-4 col-lg-4 mb-5'>
                            <a className='product-item' href='#'>
                                <img src={imageUrl} className='img-fluid product-thumbnail' />
                                <h3 className='product-title'>{productType}</h3>
                                <strong className='product-price'>${price}</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
