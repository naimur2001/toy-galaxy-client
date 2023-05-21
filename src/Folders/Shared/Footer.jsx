
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10'>
    <footer className="footer footer-center p-2 bg-green-200 rounded-lg ">
  <div>
 <img src="/tg.png" className='w-26 h-24' alt="" />
    <p className="font-bold">
     Toy Galaxy. <br/>Providing reliable Toy Car since 2010
    </p> 
    <p className='font-medium'>Contact: 0101010 & lorem@gmail.com</p>
    <p>Copyright © 2023 - All right reserved</p>
    
  </div> 
  <div>
    <div className="grid grid-cols-3 gap-4">
      <a><img src="/Google__G__Logo.svg.webp" className='w-10 h-10' alt="" /></a> 
      <a><img src="/facebook_circle_color-512.webp" className='w-10 h-10' alt="" /></a> 
      <a><img src="/Instagram_icon.png.webp" className='w-10 h-10' alt="" /></a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;