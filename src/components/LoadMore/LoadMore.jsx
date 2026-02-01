import React from 'react';
import './LoadMore.css';

const LoadMore = ({ onLoadMore, isLoading, hasMore }) => {
    if (!hasMore) {
        return (
            <div className="load-more-container">
                <div className="end-message">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>You've reached the end!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="load-more-container">
            <button
                className={`load-more-btn ${isLoading ? 'loading' : ''}`}
                onClick={onLoadMore}
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <div className="spinner"></div>
                        <span>Loading...</span>
                    </>
                ) : (
                    <>
                        <span>Load More Products</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </>
                )}
            </button>
        </div>
    );
};

export default LoadMore;
