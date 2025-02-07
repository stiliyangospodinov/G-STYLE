import usePagination from "../../hooks/usePagination";
import useProducts from "../../hooks/useProduct";
import ProductCard from "../Cards/ProductCard/ProductCard";
import BestProducts from "./BestProducts";
import CategoriesAndBrands from "./CategoriesAndBrands";
import PageBanner from "./PageBanner";
import Pagination from "./Pagination";
import RandomizeProducts from "./RandomizeProducts";


export default function ProductPageLayout({ pageTitle, fetchFunction }) {
  const { 
    products, filteredProducts, setFilteredProducts, 
    categories, brands, activeFilter, 
    handleCategoryFilter, handleBrandFilter, handleResetFilter 
  } = useProducts(fetchFunction);

  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(filteredProducts, 9);

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName={pageTitle} />
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
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
          <div className="span3 col">
            <CategoriesAndBrands 
              categories={categories}
              brands={brands}
              activeFilter={activeFilter}
              handleCategoryFilter={handleCategoryFilter}
              handleBrandFilter={handleBrandFilter}
              handleResetFilter={handleResetFilter}
            />
            <RandomizeProducts index={3} />
            <BestProducts/>
          </div>
        </div>
      </section>
    </div>
  );
}
