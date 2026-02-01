import React from 'react';
import './Filters.css';

const Filters = ({
    categories,
    selectedCategory,
    onCategoryChange,
    sortBy,
    onSortChange,
    isLoadingCategories
}) => {
    const sortOptions = [
        { value: '', label: 'Default' },
        { value: 'name-asc', label: 'Name (A-Z)' },
        { value: 'name-desc', label: 'Name (Z-A)' },
        { value: 'grade-asc', label: 'Grade (Best First)' },
        { value: 'grade-desc', label: 'Grade (Worst First)' },
    ];

    return (
        <div className="filters-section">
            <div className="filter-group">
                <label className="filter-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Category
                </label>
                <div className="select-wrapper">
                    <select
                        className="filter-select"
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        disabled={isLoadingCategories}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name} ({category.products})
                            </option>
                        ))}
                    </select>
                    <svg className="select-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="filter-group">
                <label className="filter-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M7 12h14M11 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Sort By
                </label>
                <div className="select-wrapper">
                    <select
                        className="filter-select"
                        value={sortBy}
                        onChange={(e) => onSortChange(e.target.value)}
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <svg className="select-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {(selectedCategory || sortBy) && (
                <button
                    className="reset-filters-btn"
                    onClick={() => {
                        onCategoryChange('');
                        onSortChange('');
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Reset Filters
                </button>
            )}
        </div>
    );
};

export default Filters;
