import ProductCard from "../Cards/ProductCard/ProductCard";

export default function ProductCarousel({ title, products, carouselId }) {
  return (
    <>
      <h4 className="title">
        <span className="pull-left">
          <span className="text">
            <span className="line">
              {title} <strong>Products</strong>
            </span>
          </span>
        </span>
        <span className="pull-right">
          <a className="left button" href={`#${carouselId}`} data-slide="prev" />
          <a className="right button" href={`#${carouselId}`} data-slide="next" />
        </span>
      </h4>
      <div id={carouselId} className="myCarousel carousel slide">
        <div className="carousel-inner">
          {products.map((group, groupIndex) => (
            <div key={groupIndex} className={`item ${groupIndex === 0 ? "active" : ""}`}>
              <ul className="thumbnails">
                {group.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  photoURL={`/${product.photoURL}`}
                  category={product.category}
                  price={product.price}
                />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
