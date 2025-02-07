import { Link } from "react-router-dom";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { getRandomProducts } from "../../service/service";

export default function RandomizeProducts () {
    const [products, setProducts] = useState([]);
        useEffect(() => {
            fetchProducts();
        }, []); 
    
        const fetchProducts = async () => {
            try {
                const data = await getRandomProducts(3);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
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
            {products.map((product, index) => (
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