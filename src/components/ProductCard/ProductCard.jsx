import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
    const getGradeColor = (grade) => {
        if (!grade) return 'var(--gray-600)';

        const gradeColors = {
            'a': 'var(--grade-a)',
            'b': 'var(--grade-b)',
            'c': 'var(--grade-c)',
            'd': 'var(--grade-d)',
            'e': 'var(--grade-e)',
        };

        return gradeColors[grade.toLowerCase()] || 'var(--gray-600)';
    };

    const formatCategory = (category) => {
        if (!category) return 'Uncategorized';

        // Get the first category if multiple exist
        const firstCategory = category.split(',')[0].trim();

        // Clean up the category name
        return firstCategory
            .replace(/^en:/, '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .substring(0, 30);
    };

    const hasImage = product.image_url || product.image_small_url || product.image_thumb_url;
    const imageUrl = product.image_small_url || product.image_url || product.image_thumb_url;

    return (
        <article className="product-card" onClick={onClick}>
            <div className="product-image-wrapper">
                {hasImage ? (
                    <img
                        src={imageUrl}
                        alt={product.product_name || 'Product'}
                        className="product-image"
                        loading="lazy"
                        onError={(e) => {
                            e.target.src = '/food-placeholder.png';
                            e.target.classList.add('placeholder-fallback');
                        }}
                    />
                ) : (
                    <img
                        src="/food-placeholder.png"
                        alt="Product placeholder"
                        className="product-image placeholder-fallback"
                    />
                )}

                {product.nutrition_grades && (
                    <div
                        className="nutrition-badge"
                        style={{
                            background: getGradeColor(product.nutrition_grades),
                            boxShadow: `0 4px 12px ${getGradeColor(product.nutrition_grades)}40`
                        }}
                    >
                        <span className="grade-label">Nutri-Score</span>
                        <span className="grade-value">{product.nutrition_grades.toUpperCase()}</span>
                    </div>
                )}
            </div>

            <div className="product-content">
                <div className="product-header">
                    <h3 className="product-name">
                        {product.product_name || 'Unknown Product'}
                    </h3>
                    {product.brands && (
                        <p className="product-brand">{product.brands}</p>
                    )}
                </div>

                <div className="product-meta">
                    <span className="product-category">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5z" fill="currentColor" />
                        </svg>
                        {formatCategory(product.categories)}
                    </span>
                </div>

                {product.ingredients_text && (
                    <p className="product-ingredients">
                        {product.ingredients_text.substring(0, 80)}
                        {product.ingredients_text.length > 80 ? '...' : ''}
                    </p>
                )}

                <button className="view-details-btn">
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </article>
    );
};

export default ProductCard;
