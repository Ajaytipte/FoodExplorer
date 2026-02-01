import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Smart Search',
            description: 'Search products by name or barcode number. Get instant results with detailed product information from the OpenFoodFacts database.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="2" height="14" fill="currentColor" />
                    <rect x="7" y="5" width="1" height="14" fill="currentColor" />
                    <rect x="10" y="5" width="2" height="14" fill="currentColor" />
                    <rect x="14" y="5" width="1" height="14" fill="currentColor" />
                    <rect x="17" y="5" width="2" height="14" fill="currentColor" />
                    <rect x="21" y="5" width="1" height="14" fill="currentColor" />
                </svg>
            ),
            title: 'Barcode Scanner',
            description: 'Enter any product barcode to instantly retrieve comprehensive nutritional information and ingredient details.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Category Filters',
            description: 'Browse products by category including beverages, dairy, snacks, and more. Filter from 50+ categories with product counts.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Nutrition Info',
            description: 'Access detailed nutritional values including energy, fats, carbs, proteins, and more. View Nutri-Score grades from A to E.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18M7 12h14M11 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Advanced Sorting',
            description: 'Sort products alphabetically or by nutrition grade. Find the healthiest options or organize by name from A-Z or Z-A.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Responsive Design',
            description: 'Seamless experience across all devices. Fully optimized for mobile, tablet, and desktop with adaptive layouts.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="7" cy="7" r="1" fill="currentColor" />
                </svg>
            ),
            title: 'Labels & Certifications',
            description: 'View product labels including vegan, gluten-free, organic, and more. Make informed choices based on certifications.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Allergen Alerts',
            description: 'Instantly identify potential allergens in products. Stay safe with clear allergen information and warnings.'
        }
    ];

    return (
        <section id="features" className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-title gradient-text">Powerful Features</h2>
                    <p className="features-subtitle">
                        Everything you need to make informed food choices
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
