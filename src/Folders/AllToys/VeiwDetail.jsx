import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useLoaderData } from 'react-router-dom';

const VeiwDetail = () => {
const datas=useLoaderData();
const {
  name,_id,
  url,quantity,price,rating,cate,detail,seller_email,seller_name
}=datas
  return (
  <>
  <Navbar></Navbar>
    <div className='my-6 '>
      <div className='bg-rose-100 rounded-lg h-28 relative'>
<img src={url} className='w-44 h-44 border-4 border-white   rounded-full absolute top-8 left-2'  alt="" />

      </div>
    <div className='my-2 relative w-2/3 h-28'>  <h1 className='text-3xl text-slate-500 font-mono 
    absolute right-10  font-semibold  '>{name}</h1></div>

  <div className='grid grid-cols-3 gap-7'>
 <div className='tbi border-r-2 border-gray-600' >
  <h1 className='text-center text-2xl text-lime-500 font-mono font-medium'>Toy Basic Info</h1>
 <div className=' grid grid-cols-1'>
      <h1 className=' font-medium  text-center text-lg text-gray-500'>Price: <span className='badge
      badge-secondary m-1'>{price} <span className='mx-2'>US Dollar</span></span></h1>
      <h1 className='  font-medium   text-lg text-gray-500 flex justify-center items-center' >
        Rating: <span className='badge badge-secondary mx-1'>{rating} <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" class="w-5 h-5 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg></span></h1>
<h1 className='font-semibold text-center text-lg text-gray-500' > Item: <span className='
badge badge-secondary'>{quantity} left</span></h1>
    </div>
 </div>
    <div className='td border-r-2 border-gray-600'>
      <h1 className='text-center text-2xl text-lime-500 font-mono font-medium'>Toy Description</h1>
      <p className='px-2 font-medium  text-center text-gray-500'>{detail}</p>
    </div>
    <div className='si'>
      <h1 className='text-center text-2xl text-lime-500 font-mono font-medium'>Seller Info</h1>
      <div>
<h1 className=' font-medium  text-center text-gray-500'>{seller_name}</h1>
<h1 className=' font-medium  text-center text-gray-500'>{seller_email}</h1>
      </div>      
    </div>
  </div>
      </div>
      <Footer></Footer>
  </>
  );
};

export default VeiwDetail;