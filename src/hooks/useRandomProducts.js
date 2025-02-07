import { useEffect, useState } from "react";

export default function useRandomProducts(products, count = 3) {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, count);
      setRandomProducts(shuffled);
    }
  }, [products, count]);

  return randomProducts;
}
