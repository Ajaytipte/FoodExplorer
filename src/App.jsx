import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import Filters from './components/Filters/Filters';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductDetail from './components/ProductDetail/ProductDetail';
import LoadMore from './components/LoadMore/LoadMore';
import Features from './components/Features/Features';
import About from './components/About/About';
import {
  fetchProducts,
  searchProducts,
  fetchProductByBarcode,
  fetchProductsByCategory,
  fetchCategories,
  sortProducts,
} from './services/api';
import './App.css';

function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('foodexplorer-theme');
    return savedTheme || 'dark';
  });

  // State management
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('name'); // 'name' or 'barcode'
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('foodexplorer-theme', theme);
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Filter function to remove products with invalid/missing data
  const filterValidProducts = (products) => {
    if (!products || !Array.isArray(products)) return [];

    return products.filter(product => {
      // Check if product has a valid name (not empty, not 'Unknown Product', not just whitespace)
      const hasValidName = product.product_name &&
        product.product_name.trim() !== '' &&
        product.product_name.trim().toLowerCase() !== 'unknown' &&
        product.product_name.trim().toLowerCase() !== 'unknown product' &&
        product.product_name.length > 2;

      // Optional: Check if product has some basic information
      // At least should have a code/id and either an image or category
      const hasBasicInfo = (product.code || product.id || product._id) &&
        (product.image_url || product.categories || product.brands);

      return hasValidName && hasBasicInfo;
    });
  };

  // Fetch initial products and categories
  useEffect(() => {
    loadInitialData();
    loadCategories();
  }, []);

  const loadInitialData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProducts(1, 24);
      const validProducts = filterValidProducts(data.products || []);
      setProducts(validProducts);
      setFilteredProducts(validProducts);
      setHasMore(validProducts.length === 24);
    } catch (err) {
      setError('Failed to load products. The server might be temporarily unavailable. Please try again later.');
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCategories = async () => {
    setIsLoadingCategories(true);
    try {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData || []);
    } catch (err) {
      console.error('Error loading categories:', err);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  // Handle search by name
  const handleSearch = async (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    setSelectedCategory('');
    setSortBy('');

    if (!term.trim()) {
      loadInitialData();
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const data = await searchProducts(term, 1, 24);
      const validProducts = filterValidProducts(data.products || []);
      setProducts(validProducts);
      setFilteredProducts(validProducts);
      setHasMore(validProducts.length === 24);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Error searching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle barcode search
  const handleBarcodeSearch = async (barcode) => {
    setSearchTerm(barcode);
    setCurrentPage(1);
    setSelectedCategory('');
    setSortBy('');

    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProductByBarcode(barcode);
      if (data && data.product) {
        setProducts([data.product]);
        setFilteredProducts([data.product]);
        setHasMore(false);
      } else {
        setProducts([]);
        setFilteredProducts([]);
        setHasMore(false);
        setError('Product not found. Please check the barcode and try again.');
      }
    } catch (err) {
      setProducts([]);
      setFilteredProducts([]);
      setHasMore(false);
      setError('Product not found. Please check the barcode and try again.');
      console.error('Error fetching product by barcode:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle category filter
  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchTerm('');

    if (!category) {
      loadInitialData();
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProductsByCategory(category, 1, 24);
      const validProducts = filterValidProducts(data.products || []);
      setProducts(validProducts);
      setFilteredProducts(validProducts);
      setHasMore(validProducts.length === 24);
    } catch (err) {
      setError('Failed to load category products. Please try again.');
      console.error('Error fetching category products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sort
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    if (sortOption) {
      const sorted = sortProducts(products, sortOption);
      setFilteredProducts(sorted);
    } else {
      setFilteredProducts([...products]);
    }
  };

  // Handle load more
  const handleLoadMore = async () => {
    const nextPage = currentPage + 1;
    setIsLoading(true);
    setError(null);

    try {
      let data;
      if (searchTerm && searchMode === 'name') {
        data = await searchProducts(searchTerm, nextPage, 24);
      } else if (selectedCategory) {
        data = await fetchProductsByCategory(selectedCategory, nextPage, 24);
      } else {
        data = await fetchProducts(nextPage, 24);
      }

      const newProducts = data.products || [];
      const validNewProducts = filterValidProducts(newProducts);

      if (validNewProducts.length > 0) {
        const updatedProducts = [...products, ...validNewProducts];
        setProducts(updatedProducts);

        const sorted = sortBy ? sortProducts(updatedProducts, sortBy) : updatedProducts;
        setFilteredProducts(sorted);
        setCurrentPage(nextPage);
        setHasMore(validNewProducts.length >= 20); // Adjusted threshold
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError('Failed to load more products. Please try again.');
      console.error('Error loading more products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <div className="container">
          <SearchBar
            onSearch={handleSearch}
            onBarcodeSearch={handleBarcodeSearch}
            searchMode={searchMode}
            setSearchMode={setSearchMode}
          />

          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
            isLoadingCategories={isLoadingCategories}
          />

          {error && (
            <div className="error-banner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p>{error}</p>
            </div>
          )}

          <ProductGrid
            products={filteredProducts}
            onProductClick={handleProductClick}
            isLoading={isLoading && currentPage === 1}
          />

          {filteredProducts.length > 0 && searchMode !== 'barcode' && (
            <LoadMore
              onLoadMore={handleLoadMore}
              isLoading={isLoading && currentPage > 1}
              hasMore={hasMore}
            />
          )}
        </div>
      </main>

      <Features />

      <About />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title gradient-text">FoodExplorer</h4>
              <p className="footer-text">
                Explore detailed nutritional information for thousands of food products worldwide.
              </p>
            </div>

            <div className="footer-section">
              <h5 className="footer-heading">Powered By</h5>
              <a
                href="https://world.openfoodfacts.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Open Food Facts API
              </a>
            </div>

            <div className="footer-section">
              <h5 className="footer-heading">About</h5>
              <p className="footer-text-small">
                This app uses the Open Food Facts database, a free and open database of food products from around the world.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 FoodExplorer. Built with React & Open Food Facts API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
