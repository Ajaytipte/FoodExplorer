import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, onProductClick, isLoading }) => {
    if (isLoading) {
        return (
            <div className="product-grid">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="product-skeleton">
                        <div className="skeleton-image skeleton"></div>
                        <div className="skeleton-content">
                            <div className="skeleton-title skeleton"></div>
                            <div className="skeleton-brand skeleton"></div>
                            <div className="skeleton-category skeleton"></div>
                            <div className="skeleton-text skeleton"></div>
                            <div className="skeleton-text skeleton"></div>
                            <div className="skeleton-button skeleton"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <h3 className="empty-title">No Products Found</h3>
                <p className="empty-description">
                    We couldn't find any products matching your search. Try adjusting your filters or search terms.
                </p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id || product.code || product._id || index}
                    product={product}
                    onClick={() => onProductClick(product)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
