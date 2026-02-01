import React, { useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose }) => {
    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!product) return null;

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

    const formatNutrientValue = (value, unit = 'g') => {
        if (value === undefined || value === null) return 'N/A';
        return `${parseFloat(value).toFixed(1)}${unit}`;
    };

    const hasImage = product.image_url || product.image_front_url;
    const imageUrl = product.image_url || product.image_front_url;

    const nutrients = product.nutriments || {};
    const labels = product.labels ? product.labels.split(',').map(l => l.trim()).filter(l => l) : [];
    const allergens = product.allergens ? product.allergens.split(',').map(a => a.trim()).filter(a => a) : [];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="modal-grid">
                    {/* Left Column - Image */}
                    <div className="modal-image-section">
                        {hasImage ? (
                            <img
                                src={imageUrl}
                                alt={product.product_name || 'Product'}
                                className="modal-image"
                            />
                        ) : (
                            <div className="modal-image-placeholder">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>No Image Available</p>
                            </div>
                        )}

                        {product.nutrition_grades && (
                            <div
                                className="modal-nutrition-badge"
                                style={{ background: getGradeColor(product.nutrition_grades) }}
                            >
                                <span className="badge-label">Nutri-Score</span>
                                <span className="badge-value">{product.nutrition_grades.toUpperCase()}</span>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Details */}
                    <div className="modal-details-section">
                        <div className="modal-header">
                            <h2 className="modal-title">{product.product_name || 'Unknown Product'}</h2>
                            {product.brands && (
                                <p className="modal-brand">{product.brands}</p>
                            )}
                            {product.quantity && (
                                <p className="modal-quantity">📦 {product.quantity}</p>
                            )}
                        </div>

                        <div className="modal-body">
                            {/* Ingredients */}
                            <section className="detail-section">
                                <h3 className="section-title">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2v2M15 2v2M9 22v-2M15 22v-2M2 9h2M2 15h2M22 9h-2M22 15h-2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    Ingredients
                                </h3>
                                <p className="section-content">
                                    {product.ingredients_text || 'No ingredient information available'}
                                </p>
                            </section>

                            {/* Nutritional Values */}
                            <section className="detail-section">
                                <h3 className="section-title">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    Nutritional Values (per 100g)
                                </h3>
                                <div className="nutrient-grid">
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Energy</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.energy_100g || nutrients['energy-kcal_100g'], ' kcal')}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Fat</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.fat_100g)}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Saturated Fat</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients['saturated-fat_100g'])}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Carbohydrates</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.carbohydrates_100g)}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Sugars</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.sugars_100g)}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Fiber</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.fiber_100g)}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Proteins</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.proteins_100g)}</span>
                                    </div>
                                    <div className="nutrient-item">
                                        <span className="nutrient-label">Salt</span>
                                        <span className="nutrient-value">{formatNutrientValue(nutrients.salt_100g)}</span>
                                    </div>
                                </div>
                            </section>

                            {/* Labels */}
                            {labels.length > 0 && (
                                <section className="detail-section">
                                    <h3 className="section-title">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="7" cy="7" r="1" fill="currentColor" />
                                        </svg>
                                        Labels & Certifications
                                    </h3>
                                    <div className="labels-grid">
                                        {labels.slice(0, 10).map((label, index) => (
                                            <span key={index} className="label-tag">
                                                {label.replace(/^en:/, '').split('-').map(word =>
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                ).join(' ')}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Allergens */}
                            {allergens.length > 0 && (
                                <section className="detail-section">
                                    <h3 className="section-title warning">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Allergens
                                    </h3>
                                    <div className="allergens-grid">
                                        {allergens.map((allergen, index) => (
                                            <span key={index} className="allergen-tag">
                                                {allergen.replace(/^en:/, '').split('-').map(word =>
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                                ).join(' ')}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Additional Info */}
                            {(product.packaging || product.countries) && (
                                <section className="detail-section">
                                    <h3 className="section-title">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Additional Information
                                    </h3>
                                    <div className="info-grid">
                                        {product.packaging && (
                                            <div className="info-item">
                                                <span className="info-label">Packaging:</span>
                                                <span className="info-value">{product.packaging}</span>
                                            </div>
                                        )}
                                        {product.countries && (
                                            <div className="info-item">
                                                <span className="info-label">Countries:</span>
                                                <span className="info-value">{product.countries}</span>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
