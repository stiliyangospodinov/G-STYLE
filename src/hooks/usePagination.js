import { useState } from "react";

export default function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return { currentPage, totalPages, paginatedItems, handlePageChange };
}
