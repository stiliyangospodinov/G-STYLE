import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/userSlice";

export default function Header() {

  const { username, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
              <Link to="/cart">Your Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>{username}'s Profile</li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </>
          )}
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
          <ul>
            <li>
              <a href="./products.html">Gifts and Tech</a>
            </li>
            <li>
              <a href="./products.html">Ties and Hats</a>
            </li>
            <li>
              <a href="./products.html">Cold Weather</a>
            </li>
          </ul>
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