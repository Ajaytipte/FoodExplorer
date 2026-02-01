const BASE_URL = 'https://world.openfoodfacts.org';

/**
 * Fetches products with pagination
 * @param {number} page - Page number (1-indexed)
 * @param {number} pageSize - Number of items per page
 * @returns {Promise<Object>} Product data
 */
export const fetchProducts = async (page = 1, pageSize = 24) => {
  try {
    const response = await fetch(
      `${BASE_URL}/cgi/search.pl?search_simple=1&action=process&page=${page}&page_size=${pageSize}&json=true`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Searches products by name
 * @param {string} searchTerm - Search query
 * @param {number} page - Page number
 * @param {number} pageSize - Number of items per page
 * @returns {Promise<Object>} Search results
 */
export const searchProducts = async (searchTerm, page = 1, pageSize = 24) => {
  try {
    const response = await fetch(
      `${BASE_URL}/cgi/search.pl?search_terms=${encodeURIComponent(searchTerm)}&page=${page}&page_size=${pageSize}&json=true`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

/**
 * Fetches product by barcode
 * @param {string} barcode - Product barcode
 * @returns {Promise<Object>} Product data
 */
export const fetchProductByBarcode = async (barcode) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status === 0) {
      throw new Error('Product not found');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching product by barcode:', error);
    throw error;
  }
};

/**
 * Fetches products by category
 * @param {string} category - Category name
 * @param {number} page - Page number
 * @param {number} pageSize - Number of items per page
 * @returns {Promise<Object>} Category products
 */
export const fetchProductsByCategory = async (category, page = 1, pageSize = 24) => {
  try {
    const response = await fetch(
      `${BASE_URL}/category/${encodeURIComponent(category)}/${page}.json?page_size=${pageSize}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

/**
 * Fetches available categories
 * @returns {Promise<Array>} List of categories
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories.json`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter and sort categories by product count
    const categories = data.tags
      .filter(cat => cat.products > 100) // Only categories with significant products
      .sort((a, b) => b.products - a.products)
      .slice(0, 50); // Top 50 categories
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Sorts products by specified criteria
 * @param {Array} products - Array of products
 * @param {string} sortBy - Sort criteria (name-asc, name-desc, grade-asc, grade-desc)
 * @returns {Array} Sorted products
 */
export const sortProducts = (products, sortBy) => {
  if (!products || products.length === 0) return products;
  
  const sorted = [...products];
  
  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => 
        (a.product_name || '').localeCompare(b.product_name || '')
      );
    
    case 'name-desc':
      return sorted.sort((a, b) => 
        (b.product_name || '').localeCompare(a.product_name || '')
      );
    
    case 'grade-asc':
      return sorted.sort((a, b) => {
        const gradeA = a.nutrition_grades || 'z';
        const gradeB = b.nutrition_grades || 'z';
        return gradeA.localeCompare(gradeB);
      });
    
    case 'grade-desc':
      return sorted.sort((a, b) => {
        const gradeA = a.nutrition_grades || '';
        const gradeB = b.nutrition_grades || '';
        return gradeB.localeCompare(gradeA);
      });
    
    default:
      return sorted;
  }
};

/**
 * Formats product data for consistent display
 * @param {Object} product - Raw product data
 * @returns {Object} Formatted product
 */
export const formatProduct = (product) => {
  return {
    id: product.id || product.code || product._id,
    code: product.code,
    name: product.product_name || 'Unknown Product',
    brands: product.brands || 'Unknown Brand',
    image: product.image_url || product.image_front_url || null,
    imageSmall: product.image_small_url || product.image_thumb_url || null,
    category: product.categories || 'Uncategorized',
    ingredients: product.ingredients_text || 'No ingredient information available',
    nutritionGrade: product.nutrition_grades || product.nutrition_grade_fr || null,
    nutriments: product.nutriments || {},
    labels: product.labels || '',
    allergens: product.allergens || '',
    packaging: product.packaging || '',
    quantity: product.quantity || '',
    countries: product.countries || '',
  };
};
