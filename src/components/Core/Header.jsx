import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { clearCart } from "../../store/cartSlice";

export default function Header() {

  const totalItems = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  const { username, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  return (
    <>
      <div id="top-bar" className="container">
        <div className="row">
          <div className="span4">
            <form method="POST" className="search_form">
              <input
                type="text"
                className="input-block-level search-query"
                placeholder="eg. T-sirt"
              />
            </form>
          </div>
          <div className="span8">
            <div className="account pull-right">
              <ul className="user-menu">

                {!isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/profile">{username}'s Profile</Link>
                    </li>
                    <li><a style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a></li>
                  </>
                )}
                <li>
                  <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
                    Your Cart
                    {totalItems > 0 && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-10px',
                          backgroundColor: 'red',
                          color: 'white',
                          borderRadius: '50%',
                          width: '18px',  // Прави го кръгло
                          height: '18px', // Същата стойност като width
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          lineHeight: '18px'
                        }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper" className="container">
        <section className="navbar main-menu">
          <div className="navbar-inner main-menu">
            <Link to="/" className="logo pull-left">
              <img src="/images/G_STYLE.png" className="site_logo" alt="" />
            </Link>
            <nav id="menu" className="pull-right">
              <ul>
                <li>
                  <Link to="/woman">Woman</Link>
                  <ul>
                    <li>
                      <a href="./products.html">Lacinia nibh</a>
                    </li>
                    <li>
                      <a href="./products.html">Eget molestie</a>
                    </li>
                    <li>
                      <a href="./products.html">Varius purus</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/man">Man</Link>
                </li>
                <li>
                  <Link to="/fitness">Fitness</Link>
                </li>
                <li>
                  <Link to="/boxing">Boxing</Link>
                </li>
                <li>
                  <Link to="/best-seller">Best Seller</Link>
                </li>
                <li>
                  <Link to="/top-seller">Top Seller</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>


    </>
  );
}