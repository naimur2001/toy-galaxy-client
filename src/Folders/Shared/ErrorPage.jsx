import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='my-10'>
      <Link to='/' className='flex gap-1 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg> <span>Back to Home</span></Link>
      <img src='/public/vecteezy_404-landing-page_6549647.jpg'  alt="" />
      
    </div>
  );
};

export default ErrorPage;