export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div className="pagination pagination-small pagination-centered">
        <ul>
          <li className={currentPage === 1 ? "disabled" : ""}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
            >
              Prev
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={currentPage === index + 1 ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className={currentPage === totalPages ? "disabled" : ""}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    );
  }
  