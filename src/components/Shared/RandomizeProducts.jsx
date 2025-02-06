import { Link } from "react-router-dom";
import ProductCard from "../Cards/ProductCard/ProductCard";

export default function RandomizeProducts ({randomProducts}) {
    return (
        <div className="block">
        <h4 className="title">
          <span className="pull-left"><span className="text">Randomize</span></span>
          <span className="pull-right">
            <a className="left button" href="#myCarousel" data-slide="prev" />
            <a className="right button" href="#myCarousel" data-slide="next" />
          </span>
        </h4>
        <div id="myCarousel" className="carousel slide">
          <div className="carousel-inner">
            {randomProducts.map((product, index) => (
              <div key={product.id} className={`item ${index === 0 ? "active" : ""}`}>
                <ul className="thumbnails listing-products">
                <ProductCard
                  key={product.id}
                  name={product.name}
                  photoURL={`/${product.photoURL}`}
                  category={product.category}
                  price={product.price}
                />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}