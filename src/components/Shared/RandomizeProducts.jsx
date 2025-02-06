import { Link } from "react-router-dom";

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
                  <li className="span3">
                    <div className="product-box">
                      <img alt="" src={`/${product.photoURL}`}/>
                      <br />
                      <Link to={`/product/${product.name}`} className="title">{product.name}</Link>
                      <br />
                      <a href="#" className="category">{product.category}</a>
                      <p className="price">${product.price}</p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}