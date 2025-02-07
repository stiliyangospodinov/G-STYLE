import { useDispatch, useSelector } from "react-redux";
import PageBanner from "../Shared/PageBanner";
import RandomizeProducts from "../Shared/RandomizeProducts";
import BestProducts from "../Shared/BestProducts";

export default function Cart (){
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
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

                </tbody>
            </table>
            <p className="cart-total right">
                <strong>Total</strong>: $119.50
                <br />
            </p>
            <hr />
            <p className="buttons center">
                <button className="btn" type="button">
                Update
                </button>
                <button className="btn" type="button">
                Clear Cart
                </button>
                <button className="btn btn-inverse" type="submit" id="checkout">
                Checkout
                </button>
            </p>
            </div>
            <div className="span3 col">
                <RandomizeProducts randomProducts={randomProducts} />
                <BestProducts/>
            </div>
        </div>
        </section>
        </div>

    )
}