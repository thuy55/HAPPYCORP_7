import React, { useState } from 'react';
import { f7 } from 'framework7-react';

const PageTransition = ({ 
  href, 
  children, 
  transition = 'f7-cover-h', 
  logo = '../image/happy-corp-logo.png',
  loadingMessage = 'Đang chuyển trang...',
  duration = 1200,
  className = '',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Hiển thị loading
    setTimeout(() => {
      f7.views.main.router.navigate(href, {
        transition: transition,
        animate: true,
        pushState: true,
        animatePages: true
      });
      
      // Ẩn loading sau khi navigate
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, duration);
  };

  return (
    <>
      <div 
        className={`page-transition-trigger ${className} ${isLoading ? 'loading' : ''}`}
        onClick={handleNavigation}
        style={{ 
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isLoading ? 'scale(0.95)' : 'scale(1)',
          opacity: isLoading ? 0.7 : 1
        }}
        {...props}
      >
        {children}
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="page-loader-overlay">
          <div className="page-loader-content">
            <div className="logo-container">
              <img 
                src={logo} 
                alt="Loading Logo" 
                className="loading-logo"
              />
            </div>
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <div className="loading-message">
              {loadingMessage}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageTransition;