import { Link } from "react-router-dom";

export default function ProductCard({ id, name, photoURL, category, price }) {
  return (
    <li className="span3">
      <div className="product-box">
      <Link to={`/product/${encodeURIComponent(name)}`}>
          <img alt={name} src={photoURL} />
        </Link>
        <br />
        <Link to={`/product/${encodeURIComponent(name)}`}>
          {name}
        </Link>
        <br />
        <a href="#" className="category">
          {category}
        </a>
        <p className="price">{price} lv</p>
      </div>
    </li>
  );
}
