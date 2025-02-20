import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <>
        <div id="top-bar" className="container">
        <section id="footer-bar">
  <div className="row">
    <div className="span3">
      <h4>Navigation</h4>
      <ul className="nav">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contac Us</Link>
        </li>
        <li>
          <Link to="/cart">Your Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
    <div className="span4">
      <h4>My Account</h4>
      <ul className="nav">
        <li>
          <a href="#">My Account</a>
        </li>
        <li>
          <a href="#">Order History</a>
        </li>
        <li>
          <a href="#">Wish List</a>
        </li>
        <li>
          <a href="#">Newsletter</a>
        </li>
      </ul>
    </div>
    <div className="span5">
      <p className="logo">
        <img src="/images/G_STYLE.png" className="site_logo" alt="" />
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. the Lorem Ipsum has been the industry's standard dummy text
        ever since the you.
      </p>
      <br />
      <span className="social_icons">
        <a className="facebook" href="www.facebook.com">
          Facebook
        </a>
        <a className="twitter" href="www.twitter.com">
          Twitter
        </a>
        <a className="skype" href="www.skype.com">
          Skype
        </a>
        <a className="vimeo" href="#">
          Vimeo
        </a>
      </span>
    </div>
  </div>
</section>
<section id="copyright">
  <span>Copyright 2013 bootstrappage template All right reserved.</span>
</section>
</div>
</>


    )
}