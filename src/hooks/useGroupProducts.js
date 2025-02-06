import { useMemo } from "react";
export default function useGroupProducts(products, groupSize) {
  return useMemo(() => {
    return products.reduce((groups, product, index) => {
      const groupIndex = Math.floor(index / groupSize);
      if (!groups[groupIndex]) {
        groups[groupIndex] = [];
      }
      groups[groupIndex].push(product);
      return groups;
    }, []);
  }, [products, groupSize]);
}
