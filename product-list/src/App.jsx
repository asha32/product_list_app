import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import products from './data/products';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    }

    if (sortBy === 'price-high') {
      return b.price - a.price;
    }

    if (sortBy === 'rating-high') {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <>
      <Navbar />

      <main>
        <Header />

        <section className="controls">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterBar
            category={category}
            setCategory={setCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
          />
        </section>

        <ProductList products={filteredProducts} />
      </main>
    </>
  );
}

export default App;
