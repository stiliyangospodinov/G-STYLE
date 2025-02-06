import { useEffect, useState } from "react";
import PageBanner from "../../Shared/PageBanner";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { getTopOrBestSellers } from "../../../service/service";
import RandomizeProducts from "../../Shared/RandomizeProducts";
import Pagination from "../../Shared/Pagination";
import usePagination from "../../../hooks/usePagination";
import useRandomProducts from "../../../hooks/useRandomProucts";

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getTopOrBestSellers(12);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(products, 9);
  const randomProducts = useRandomProducts(products, 3);

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="Best products" />
      <section className="main-content">
        <div className="row">
          <div className="span9">
            <ul className="thumbnails listing-products">
              {paginatedItems.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  photoURL={product.photoURL}
                  category={product.category}
                  price={product.price}
                />
              ))}
            </ul>
            <hr />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="span3 col">
            <RandomizeProducts randomProducts={randomProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}
