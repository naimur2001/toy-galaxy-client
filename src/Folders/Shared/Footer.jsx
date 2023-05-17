
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10'>
      <div className='bg-green-200 rounded-lg'>
<div className='grid lg:grid-cols-4 gap-4 lg:mx-6  my-4'>
<div className='my-3 mx-auto'>

<img src="/public/tg.png" className='w-36 h-36' alt="" />

    </div>
<div className='my-3 mx-auto'>
      <h3 className="text-xl font-bold text-rose-400 mb-3  lg:text-left text-center">Contact Us</h3>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">123 Hazaribagh Street</p>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">Dhaka, Bangladesh</p>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">555-555-5555</p>
    </div>
<div className='my-3 mx-auto' >
      <h3 className="text-xl font-bold mb-3 text-rose-400 lg:text-left text-center ">Faq</h3>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">How can I contact customer support?</p>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">What is your return policy?</p>
      <p className="text-gray-500 font-medium text-lg lg:text-left text-center">How long does shipping take?</p>
    </div>
    <div className='my-3 mx-auto'>
      <h3 className="text-xl font-bold text-rose-400 mb-3  lg:text-left text-center">Follow Us</h3>
      <div className="flex">
        <a href="#" className="text-gray-400 hover:text-gray-500 lg:text-left text-center transition duration-500 ease-in-out">
    <img src="/public/facebook_circle_color-512.webp" className='w-10 h-10' alt="fb" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500 ml-3 lg:text-left text-center transition duration-500 ease-in-out">
        <img src="/public/Google__G__Logo.svg.webp" className='w-10 h-10' alt="" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500 ml-3 lg:text-left text-center transition duration-500 ease-in-out">
      <img src="/public/Instagram_icon.png.webp"  className='w-10 h-10' alt="" />
        </a>
      </div>
      
    </div>
</div>

<p className="text-black font-semibold text-center ">&copy; 2023 Toy Galaxy. All Rights Reserved.</p>

      </div>
    </div>
  );
};

export default Footer;