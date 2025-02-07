import { useDispatch, useSelector } from "react-redux";
import PageBanner from "../Shared/PageBanner";
import RandomizeProducts from "../Shared/RandomizeProducts";
import BestProducts from "../Shared/BestProducts";
import { clearCart, removeFromCart, updateQuantity } from "../../store/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((itemId) => itemId !== id)
                : [...prevSelected, id]
        );
    };

    const handleRemoveCheckedItems = () => {
        selectedItems.forEach((id) => dispatch(removeFromCart(id)));
        setSelectedItems([]);
    };
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
                        {cartItems.length === 0 ? (
                            <h4 style={{ textAlign: "center" }}>Your cart is empty.</h4>
                        ) : (
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
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(item.id)}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                />
                                            </td>
                                            <td>
                                                <Link to={`/product/${item.name}`}>
                                                    <img src={`/${item.photoURL}`} alt={item.name} width="150" />
                                                </Link>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min="1"
                                                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))}
                                                />
                                            </td>
                                            <td>{item.price} lv</td>
                                            <td>{(item.price * item.quantity).toFixed(2)} lv</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        {cartItems.length > 0 && (
                            <>
                                <p className="cart-total right">
                                    <strong>Total</strong>: {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} lv
                                    <br />
                                </p>
                                <hr />
                                <p className="buttons center">
                                    <button className="btn" onClick={handleRemoveCheckedItems}>
                                        Remove selected
                                    </button>
                                    <button className="btn" onClick={() => dispatch(clearCart())}>
                                        Clear Cart
                                    </button>
                                    <button className="btn btn-inverse" type="submit" id="checkout">
                                        Checkout
                                    </button>
                                </p>
                            </>
                        )}
                    </div>
                    <div className="span3 col">
                        <RandomizeProducts />
                        <BestProducts />
                    </div>
                </div>
            </section>
        </div>

    )
}