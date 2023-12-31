import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const MyToysCard = ({data,setDatas,datas}) => {

  const {
    name,_id,
    url,quantity,price,cate,seller_name,rating,
  }=data;
  // delete
  const handleDelete=(_id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then(result=>{
        if (result.isConfirmed) {
          fetch(`https://toy-galaxy-server-five.vercel.app/toycars/${_id}`,{
            method: "DELETE",

          })
          .then(res=> res.json())
          .then(data=> {
            if (data.deletedCount>0) {
              Swal.fire(
                'Deleted!',
                'Your car info has been deleted.',
                'success'
            )
     const remaining=datas.filter(data=> data._id !== _id);
     setDatas(remaining)
            }
          })
        }
      } )
  }
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
      <th className=''>
        <button onClick={()=>handleDelete(_id)} className='btn btn-circle btn-md mx-1'><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
<Link to={`/updatetoy/${_id}`}><button  className='btn btn-circle btn-md'><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</button></Link>
      </th>
    </tr>
  
  </tbody>
  );
};

export default MyToysCard;