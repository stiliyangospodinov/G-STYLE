export default function CategoriesAndBrands({  
    categories, 
    brands, 
    activeFilter, 
    handleCategoryFilter, 
    handleBrandFilter, 
    handleResetFilter
}) {
    return (
    <div className="block">
    <ul className="nav nav-list">
      <li className="nav-header">SUB CATEGORIES</li>
      {categories.map((category) => (
        <li key={category}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryFilter(category);
            }}
            className={activeFilter.category === category ? "active" : ""}
          >
            {category}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleResetFilter();
          }}
        >
          All
        </a>
      </li>
    </ul>
    <br />
    <ul className="nav nav-list below">
      <li className="nav-header">BRANDS</li>
      {brands.map((brand) => (
        <li key={brand}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleBrandFilter(brand);
            }}
            className={activeFilter.brand === brand ? "active" : ""}
          >
            {brand}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleResetFilter();
          }}
        >
          All
        </a>
      </li>
    </ul>
  </div>
    )
}