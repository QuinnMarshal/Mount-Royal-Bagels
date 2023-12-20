// NotFoundPage.js

import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className='not-found-background-image'>
        <div className="not-found-container">
            <h1 className='not-found-h1'>404 - Page Not Found</h1>
            <p className='not-found-p'>Oops! The page you're looking for does not exist.</p>
        </div>
    </div>
  );
};

export default NotFoundPage;
