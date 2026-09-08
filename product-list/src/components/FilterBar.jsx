function FilterBar({
  category,
  setCategory,
  sortBy,
  setSortBy,
  categories,
}) {
  return (
    <div className="filter-bar">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating-high">Rating: High to Low</option>
      </select>
    </div>
  );
}

export default FilterBar;