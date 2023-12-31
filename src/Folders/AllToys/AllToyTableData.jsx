import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTableData = ({data}) => {
  const {
    name,_id,
    url,quantity,price,rating,cate,seller_name
  }=data
  return (
    <tbody className='border-2'>
      {/* row 1 */}
      <tr>
       
        <td>
          <div >
            <div >
              
                <img src={url} className='w-28 h-28 rounded' alt="car" />
             
            </div>
            
          </div>
        </td>
        <td>
         <span className='font-medium text-lg text-red-600'>{name}</span>
          <br/>
          <span className="badge badge-warning badge-sm ">Seller: {seller_name}</span>
        </td>
        <td>
       <span className='font-medium text-lg text-red-600'>{cate}</span>   
        </td>
        <td>
        <span className='font-medium text-lg text-red-600'> ${price}</span> 
        </td>
        <td>
        <div className="badge badge-secondary py-2">{rating} <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" class="w-5 h-5 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
 </div>
        </td>
        <td>
          
                <span className='font-medium text-lg text-center text-red-600'>{quantity}</span>
         

        </td>
        <th>
          <Link to={`/viewdetail/${_id}`}><button className="btn btn-outline btn-xs">Veiw Detail <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
</button></Link>
        </th>
      </tr>
    
    </tbody>
  );
};

export default AllToyTableData;