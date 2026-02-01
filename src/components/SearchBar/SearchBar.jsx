import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onBarcodeSearch, searchMode, setSearchMode }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            if (searchMode === 'barcode') {
                onBarcodeSearch(searchTerm.trim());
            } else {
                onSearch(searchTerm.trim());
            }
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="search-section">
            <div className="search-header">
                <h2 className="search-title">Discover Food Products</h2>
                <p className="search-subtitle">
                    Search by product name or scan a barcode to explore nutritional information
                </p>
            </div>

            <div className="search-mode-toggle">
                <button
                    className={`mode-btn ${searchMode === 'name' ? 'active' : ''}`}
                    onClick={() => setSearchMode('name')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Search by Name
                </button>

                <button
                    className={`mode-btn ${searchMode === 'barcode' ? 'active' : ''}`}
                    onClick={() => setSearchMode('barcode')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="5" width="2" height="14" fill="currentColor" />
                        <rect x="7" y="5" width="1" height="14" fill="currentColor" />
                        <rect x="10" y="5" width="2" height="14" fill="currentColor" />
                        <rect x="14" y="5" width="1" height="14" fill="currentColor" />
                        <rect x="17" y="5" width="2" height="14" fill="currentColor" />
                        <rect x="21" y="5" width="1" height="14" fill="currentColor" />
                    </svg>
                    Search by Barcode
                </button>
            </div>

            <form className="search-bar-wrapper" onSubmit={handleSubmit}>
                <div className="search-input-group">
                    <div className="search-icon">
                        {searchMode === 'barcode' ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="5" width="2" height="14" fill="currentColor" />
                                <rect x="7" y="5" width="1" height="14" fill="currentColor" />
                                <rect x="10" y="5" width="2" height="14" fill="currentColor" />
                                <rect x="14" y="5" width="1" height="14" fill="currentColor" />
                                <rect x="17" y="5" width="2" height="14" fill="currentColor" />
                                <rect x="21" y="5" width="1" height="14" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </div>

                    <input
                        type={searchMode === 'barcode' ? 'number' : 'text'}
                        className="search-input"
                        placeholder={searchMode === 'barcode' ? 'Enter barcode number (e.g., 737628064502)' : 'Search for products (e.g., chocolate, milk, bread)'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {searchTerm && (
                        <button type="button" className="clear-btn" onClick={handleClear} aria-label="Clear search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    )}

                    <button type="submit" className="search-btn">
                        <span className="btn-text">Search</span>
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </form>

            {searchMode === 'barcode' && (
                <div className="search-hint">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Try: 737628064502 or 3017620422003</span>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
