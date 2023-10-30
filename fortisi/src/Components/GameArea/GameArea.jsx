export default function Main() {
    return (
        <div className='product-section'>
            <div className='container'>
                <div className='row'>
                    {/* <!-- Start Column 1 --> */}
                    <div className='col-md-12 col-lg-3 mb-5 mb-lg-0'>
                        <h2 className='mb-4 section-title'>Crafted with excellent material.</h2>
                        <p className='mb-4'>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
                            tempor tristique.
                        </p>
                        <p>
                            <a href='shop.html' className='btn'>
                                Explore
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 1 -->

                    <!-- Start Column 2 --> */}
                    <div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
                        <a className='product-item' href='cart.html'>
                            <img src='images/product-1.png' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Nordic Chair</h3>
                            <strong className='product-price'>$50.00</strong>

                            <span className='icon-cross'>
                                <img src='images/cross.svg' className='img-fluid' />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 2 -->

                    <!-- Start Column 3 --> */}
                    <div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
                        <a className='product-item' href='cart.html'>
                            <img src='images/product-2.png' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Kruzo Aero Chair</h3>
                            <strong className='product-price'>$78.00</strong>

                            <span className='icon-cross'>
                                <img src='images/cross.svg' className='img-fluid' />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 3 -->

                    <!-- Start Column 4 --> */}
                    <div className='col-12 col-md-4 col-lg-3 mb-5 mb-md-0'>
                        <a className='product-item' href='cart.html'>
                            <img src='images/product-3.png' className='img-fluid product-thumbnail' />
                            <h3 className='product-title'>Ergonomic Chair</h3>
                            <strong className='product-price'>$43.00</strong>

                            <span className='icon-cross'>
                                <img src='images/cross.svg' className='img-fluid' />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 4 --> */}
                </div>
            </div>
        </div>
    );
}
