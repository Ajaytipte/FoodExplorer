# FoodExplorer 🍎

A modern, feature-rich web application for exploring food products and their nutritional information using the OpenFoodFacts API. Built with React and Vite, featuring a stunning dark UI with glassmorphism effects and smooth animations.

![FoodExplorer](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.3-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Functionality
- ✅ **Product Search by Name** - Search for products using keywords
- ✅ **Barcode Search** - Search for specific products using their barcode
- ✅ **Category Filtering** - Browse products by category (beverages, dairy, snacks, etc.)
- ✅ **Advanced Sorting** - Sort by product name (A-Z, Z-A) or nutrition grade
- ✅ **Pagination** - Load more products with smooth "Load More" functionality
- ✅ **Product Details Modal** - View comprehensive product information
- ✅ **Responsive Design** - Fully responsive for mobile, tablet, and desktop

### Product Information Displayed
- Product name, brand, and image
- Category classification
- Ingredients list
- Nutrition Grade (A-E scale)
- Detailed nutritional values (energy, fat, carbs, proteins, etc.)
- Labels and certifications (vegan, gluten-free, etc.)
- Allergen information
- Packaging and country information

### UI/UX Highlights
- 🎨 **Modern Dark Theme** - Eye-friendly dark mode with vibrant accent colors
- 🪟 **Glassmorphism Effects** - Frosted glass aesthetic with backdrop blur
- ✨ **Smooth Animations** - Micro-interactions and transitions throughout
- 🎯 **Accessible** - Proper focus states, ARIA labels, and semantic HTML
- 📱 **Mobile-First** - Responsive grid layout that adapts to all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Assesment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📖 How to Use

### Search by Product Name
1. Ensure "Search by Name" mode is selected (default)
2. Type a product name in the search bar (e.g., "chocolate", "milk", "bread")
3. Click "Search" or press Enter
4. Browse the results in the grid below

### Search by Barcode
1. Click "Search by Barcode" to switch modes
2. Enter a valid barcode number (e.g., `737628064502` or `3017620422003`)
3. Click "Search" to find the specific product
4. View the product details

### Filter by Category
1. Use the "Category" dropdown to select a category
2. Products will automatically filter to show only items in that category
3. Click "Reset Filters" to clear

### Sort Products
1. Use the "Sort By" dropdown to select a sorting option:
   - **Name (A-Z)** - Alphabetical order
   - **Name (Z-A)** - Reverse alphabetical
   - **Grade (Best First)** - Nutrition grade A to E
   - **Grade (Worst First)** - Nutrition grade E to A

### View Product Details
1. Click on any product card
2. A modal will open showing:
   - Full product image
   - Complete ingredients list
   - Nutritional values per 100g
   - Labels and certifications
   - Allergen warnings
   - Additional information
3. Click the X button or outside the modal to close

### Load More Products
1. Scroll to the bottom of the product grid
2. Click "Load More Products" to fetch the next page
3. Continue until you reach the end

## 🏗️ Project Structure

```
Assesment/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── Filters/
│   │   │   ├── Filters.jsx
│   │   │   └── Filters.css
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   ├── ProductGrid/
│   │   │   ├── ProductGrid.jsx
│   │   │   └── ProductGrid.css
│   │   ├── ProductDetail/
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ProductDetail.css
│   │   └── LoadMore/
│   │       ├── LoadMore.jsx
│   │       └── LoadMore.css
│   ├── services/        # API service layer
│   │   └── api.js       # OpenFoodFacts API integration
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles & design system
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue HSL scale (220, 100%, 55%)
- **Accent Colors**:
  - Emerald: `hsl(160, 84%, 39%)`
  - Amber: `hsl(38, 92%, 50%)`
  - Rose: `hsl(350, 89%, 60%)`
  - Violet: `hsl(263, 70%, 60%)`
  - Cyan: `hsl(189, 94%, 43%)`

### Nutrition Grade Colors
- **Grade A**: Green `hsl(142, 76%, 36%)`
- **Grade B**: Light Green `hsl(88, 50%, 53%)`
- **Grade C**: Yellow `hsl(45, 100%, 51%)`
- **Grade D**: Orange `hsl(25, 95%, 53%)`
- **Grade E**: Red `hsl(0, 84%, 60%)`

### Typography
- **Primary Font**: Inter (body text)
- **Display Font**: Outfit (headings, logos)
- **Font Weights**: 300-800

### Spacing Scale
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)

## 🔌 API Integration

### OpenFoodFacts API Endpoints

**Base URL**: `https://world.openfoodfacts.org/`

1. **Get Products** (with pagination)
   ```
   GET /cgi/search.pl?search_simple=1&action=process&page={page}&page_size={size}&json=true
   ```

2. **Search by Name**
   ```
   GET /cgi/search.pl?search_terms={query}&page={page}&page_size={size}&json=true
   ```

3. **Search by Barcode**
   ```
   GET /api/v0/product/{barcode}.json
   ```

4. **Get by Category**
   ```
   GET /category/{category}/{page}.json?page_size={size}
   ```

5. **Get Categories**
   ```
   GET /categories.json
   ```

### Error Handling
- Network errors are caught and displayed to users
- Server unavailability is handled gracefully
- Product not found scenarios show appropriate messages
- Loading states prevent multiple simultaneous requests

## 🧪 Code Quality

### Architecture
- **Component-Based**: Modular React components
- **Separation of Concerns**: API logic isolated in services layer
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Performance**: Lazy loading, optimized re-renders
- **Clean Code**: Consistent naming, proper commenting

### Best Practices
- ✅ Semantic HTML5 elements
- ✅ Accessible ARIA labels
- ✅ Responsive images with lazy loading
- ✅ Error boundaries and null checks
- ✅ Proper key props in lists
- ✅ CSS custom properties (CSS variables)
- ✅ Mobile-first responsive design
- ✅ Cross-browser compatibility

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## ⚠️ Known Limitations

1. **API Server**: OpenFoodFacts is maintained by a non-profit and may experience downtime. If the server is not responding, please wait and try again later.

2. **Data Quality**: Some products may have incomplete information (missing images, ingredients, or nutritional values).

3. **CORS**: The API supports CORS, but some network configurations may cause issues.

## 🚧 Future Enhancements

Potential features for future versions:
- [ ] Infinite scroll instead of "Load More"
- [ ] Advanced filters (allergens, labels, nutrition scores)
- [ ] Product comparison feature
- [ ] Favorites/Wishlist with localStorage
- [ ] Shopping cart functionality
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Export product data to PDF/CSV
- [ ] QR code scanner for barcode search
- [ ] Product recommendations

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Open Food Facts** - For providing the comprehensive food database API
- **Google Fonts** - For Inter and Outfit typefaces
- **React Team** - For the amazing React framework
- **Vite Team** - For the blazing-fast build tool

## 📞 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Verify your internet connection
3. Ensure the OpenFoodFacts API is accessible
4. Try refreshing the page

---

**Built with ❤️ using React, Vite, and Open Food Facts API**

*Discover what's inside your food!* 🍎🥗🍞
