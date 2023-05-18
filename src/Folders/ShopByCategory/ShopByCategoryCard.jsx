import React from 'react';

const ShopByCategoryCard = ({data}) => {
  const {name,price,rating,url}=data
  return (
    <div>
   <div className="card w-80 h-80 bg-lime-100 shadow-xl">
  <figure><img src={url} alt="car" /></figure>
  <div className="card-body flex justify-between">
  <h2 className="card-title my-2 justify-between">
  <span className='text-2xl' > {name}</span>
      <div className="badge badge-secondary py-2">{rating} <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" class="w-5 h-5 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
 </div>
    </h2>
    <div className="card-actions  flex justify-end">
      <div className="badge badge-outline font-semibold p-3">$ {price}</div>
      <div className="badge badge-outline bg-lime-300 font-medium p-3 cursor-pointer">Veiw Detail</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ShopByCategoryCard;