import PageBanner from "../Shared/PageBanner";

export default function Cart (){
    return (
<div id="wrapper" className="container">
    <PageBanner pageName="Your Cart" />
        <section className="main-content">
        <div className="row">
            <div className="span9">
            <h4 className="title">
                <span className="text">
                <strong>Your</strong> Cart
                </span>
            </h4>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Remove</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <input type="checkbox" defaultValue="option1" />
                    </td>
                    <td>
                    <a href="product_detail.html">
                        <img alt="" src="themes/images/ladies/9.jpg" />
                    </a>
                    </td>
                    <td>Fusce id molestie massa</td>
                    <td>
                    <input type="text" placeholder={1} className="input-mini" />
                    </td>
                    <td>$2,350.00</td>
                    <td>$2,350.00</td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" defaultValue="option1" />
                    </td>
                    <td>
                    <a href="product_detail.html">
                        <img alt="" src="themes/images/ladies/1.jpg" />
                    </a>
                    </td>
                    <td>Luctus quam ultrices rutrum</td>
                    <td>
                    <input type="text" placeholder={2} className="input-mini" />
                    </td>
                    <td>$1,150.00</td>
                    <td>$2,450.00</td>
                </tr>
                <tr>
                    <td>
                    <input type="checkbox" defaultValue="option1" />
                    </td>
                    <td>
                    <a href="product_detail.html">
                        <img alt="" src="themes/images/ladies/3.jpg" />
                    </a>
                    </td>
                    <td>Wuam ultrices rutrum</td>
                    <td>
                    <input type="text" placeholder={1} className="input-mini" />
                    </td>
                    <td>$1,210.00</td>
                    <td>$1,123.00</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>
                    <strong>$3,600.00</strong>
                    </td>
                </tr>
                </tbody>
            </table>
            <h4>What would you like to do next?</h4>
            <p>
                Choose if you have a discount code or reward points you want to use or
                would like to estimate your delivery cost.
            </p>
            <label className="radio">
                <input
                type="radio"
                name="optionsRadios"
                id="optionsRadios1"
                defaultValue="option1"
                defaultChecked=""
                />
                Use Coupon Code
            </label>
            <label className="radio">
                <input
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                defaultValue="option2"
                />
                Estimate Shipping &amp; Taxes
            </label>
            <hr />
            <p className="cart-total right">
                <strong>Sub-Total</strong>: $100.00
                <br />
                <strong>Eco Tax (-2.00)</strong>: $2.00
                <br />
                <strong>VAT (17.5%)</strong>: $17.50
                <br />
                <strong>Total</strong>: $119.50
                <br />
            </p>
            <hr />
            <p className="buttons center">
                <button className="btn" type="button">
                Update
                </button>
                <button className="btn" type="button">
                Continue
                </button>
                <button className="btn btn-inverse" type="submit" id="checkout">
                Checkout
                </button>
            </p>
            </div>
            <div className="span3 col">
            <div className="block">
                <ul className="nav nav-list">
                <li className="nav-header">SUB CATEGORIES</li>
                <li>
                    <a href="products.html">Nullam semper elementum</a>
                </li>
                <li className="active">
                    <a href="products.html">Phasellus ultricies</a>
                </li>
                <li>
                    <a href="products.html">Donec laoreet dui</a>
                </li>
                <li>
                    <a href="products.html">Nullam semper elementum</a>
                </li>
                <li>
                    <a href="products.html">Phasellus ultricies</a>
                </li>
                <li>
                    <a href="products.html">Donec laoreet dui</a>
                </li>
                </ul>
                <br />
                <ul className="nav nav-list below">
                <li className="nav-header">MANUFACTURES</li>
                <li>
                    <a href="products.html">Adidas</a>
                </li>
                <li>
                    <a href="products.html">Nike</a>
                </li>
                <li>
                    <a href="products.html">Dunlop</a>
                </li>
                <li>
                    <a href="products.html">Yamaha</a>
                </li>
                </ul>
            </div>
            <div className="block">
                <h4 className="title">
                <span className="pull-left">
                    <span className="text">Randomize</span>
                </span>
                <span className="pull-right">
                    <a className="left button" href="#myCarousel" data-slide="prev" />
                    <a className="right button" href="#myCarousel" data-slide="next" />
                </span>
                </h4>
                <div id="myCarousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="active item">
                    <ul className="thumbnails listing-products">
                        <li className="span3">
                        <div className="product-box">
                            <span className="sale_tag" />
                            <a href="product_detail.html">
                            <img alt="" src="themes/images/ladies/2.jpg" />
                            </a>
                            <br />
                            <a href="product_detail.html" className="title">
                            Fusce id molestie massa
                            </a>
                            <br />
                            <a href="#" className="category">
                            Suspendisse aliquet
                            </a>
                            <p className="price">$261</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="item">
                    <ul className="thumbnails listing-products">
                        <li className="span3">
                        <div className="product-box">
                            <a href="product_detail.html">
                            <img alt="" src="themes/images/ladies/4.jpg" />
                            </a>
                            <br />
                            <a href="product_detail.html" className="title">
                            Tempor sem sodales
                            </a>
                            <br />
                            <a href="#" className="category">
                            Urna nec lectus mollis
                            </a>
                            <p className="price">$134</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>

    )
}