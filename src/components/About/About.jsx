import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title gradient-text">About FoodExplorer</h2>
                        <div className="about-description">
                            <p>
                                FoodExplorer is a modern web application designed to help you make informed food choices by providing comprehensive nutritional information for thousands of products worldwide.
                            </p>
                            <p>
                                Built with cutting-edge technologies including React and powered by the OpenFoodFacts API, we bring you access to one of the world's largest open databases of food products.
                            </p>
                            <p>
                                Whether you're checking nutrition grades, scanning barcodes, or exploring product ingredients, FoodExplorer makes it easy to discover what's really inside your food.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card">
                                <div className="stat-number">1M+</div>
                                <div className="stat-label">Products</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Categories</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Free</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="visual-card">
                            <div className="visual-icon">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Open Data</h3>
                            <p>Powered by OpenFoodFacts, a collaborative, free and open database of food products from around the world.</p>
                        </div>

                        <div className="visual-card">
                            <div className="visual-icon">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Modern Tech</h3>
                            <p>Built with React, Vite, and modern web technologies for a fast, responsive, and beautiful user experience.</p>
                        </div>
                    </div>
                </div>

                <div className="about-footer">
                    <h3>Our Mission</h3>
                    <p>
                        To empower consumers with transparent, accessible nutritional information that helps them make healthier food choices. We believe everyone deserves to know what's in their food.
                    </p>
                    <div className="about-cta">
                        <a href="#" className="cta-button" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            Start Exploring
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="https://world.openfoodfacts.org/" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                            Visit OpenFoodFacts
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
