import { useEffect, useState } from "react";

export default function useProducts(fetchFunction) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [activeFilter, setActiveFilter] = useState({ category: null, brand: null });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await fetchFunction();
      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = [...new Set(data.map((product) => product.category))];
      const uniqueBrands = [...new Set(data.map((product) => product.brand))];

      setCategories(uniqueCategories);
      setBrands(uniqueBrands);

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryFilter = (category) => {
    setActiveFilter({ category, brand: null });
    setFilteredProducts(products.filter((product) => product.category === category));
  };

  const handleBrandFilter = (brand) => {
    setActiveFilter({ category: null, brand });
    setFilteredProducts(products.filter((product) => product.brand === brand));
  };

  const handleResetFilter = () => {
    setActiveFilter({ category: null, brand: null });
    setFilteredProducts(products);
  };

  return {
    products,
    filteredProducts,
    setFilteredProducts,
    categories,
    brands,
    activeFilter,
    handleCategoryFilter,
    handleBrandFilter,
    handleResetFilter,
  };
}
