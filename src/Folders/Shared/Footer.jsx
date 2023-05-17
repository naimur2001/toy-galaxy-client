import { faFaceAngry, faFaceMehBlank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10'>
      <div className='bg-slate-800'>
<div className='grid lg:grid-cols-3 gap-4 lg: mx-6  my-4 md:'>
<div className='my-3 mx-auto'>
      <h3 className="text-xl font-bold text-rose-400 mb-3  lg:text-left text-center">Contact Us</h3>
      <p className="text-white font-medium text-lg lg:text-left text-center">123 Main Street</p>
      <p className="text-white font-medium text-lg lg:text-left text-center">Dhaka, Bangladesh</p>
      <p className="text-white font-medium text-lg lg:text-left text-center">555-555-5555</p>
    </div>
<div className='my-3 mx-auto' >
      <h3 className="text-xl font-bold mb-3 text-rose-400 lg:text-left text-center ">Faq</h3>
      <p className="text-white font-medium text-lg lg:text-left text-center">Lorem ipsum dolor sit amet.</p>
      <p className="text-white font-medium text-lg lg:text-left text-center"> ipsum dolor sit gitam.</p>
      <p className="text-white font-medium text-lg lg:text-left text-center">Feras,sedesn ipsum dolor.</p>
    </div>
    <div className='my-3 mx-auto'>
      <h3 className="text-xl font-bold text-rose-400 mb-3  lg:text-left text-center">Follow Us</h3>
      <div className="flex">
        <a href="#" className="text-gray-400 hover:text-white lg:text-left text-center transition duration-500 ease-in-out">
    <img src="./facebook_circle_color-512.webp" className='w-10 h-10' alt="" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white ml-3 lg:text-left text-center transition duration-500 ease-in-out">
        <img src="./2018_social_media_popular_app_logo_youtube-512.webp" className='w-10 h-10' alt="" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white ml-3 lg:text-left text-center transition duration-500 ease-in-out">
      <img src="./Instagram_icon.png.webp"  className='w-10 h-10' alt="" />
        </a>
      </div>
      
    </div>
</div>

<p className="text-cyan-300 font-semibold text-center ">&copy; 2023 Food Bliss. All Rights Reserved.</p>

      </div>
    </div>
  );
};

export default Footer;