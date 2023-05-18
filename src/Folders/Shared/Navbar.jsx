
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
const {user,logOut}=useContext(AuthContext);


  
  const handleSignOut=()=>{
    logOut()
  .then(result=>{
// console.log('');
  })
  .catch(error=>{
    console.log(error);
  })
  }

const conditionalElement= <>
  <li className='text-black font-mono'><Link to='/addatoy'>Add A Toy</Link></li>
  <li className='text-black font-mono'><Link to='/mytoys' >My Toys</Link></li>
  <li className='text-black font-mono' ><Link to='/' onClick={handleSignOut}>Logout</Link></li>
</>

  return (
    <div>
      <div className="navbar bg-green-200  rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
            <li ><Link to='/'>Home</Link></li>
            <li ><Link to='/alltoys'>All Toys</Link></li>
            <li >
              <Link to='/blogs' className="justify-between">
                Blogs
              </Link>
            </li>
            {user ? 
          <>
            {conditionalElement}</>
             : 
              <>
                <li className='text-black font-mono'><Link to='/login'>Login</Link></li>
                <li className='text-black font-mono' ><Link to='/signup'>Register</Link></li>
              </>
            }
            <li><Link to='/about'>About Us</Link></li>
          </ul>
        </div>

     <h1 className='font-mono text-center sm:text-center md:text-center lg:text-start text-xl font-semibold'>Toy Galaxy</h1>
     
   

      </div>
  <div className="navbar-center hidden lg:flex lg:mr-22">

        <ul className="menu menu-horizontal px-1 font-semibold text-rose-400 text-lg">
          <li>  <Link to='/'><img src="/public/tg.png" className='w-24 h-16' alt="" /></Link></li>
          <li className='text-black font-mono'><Link to='/'>Home</Link></li>
          <li className='text-black font-mono'><Link to='/alltoys'>All Toys</Link></li>
          <li className='text-black font-mono'>
            <Link to='/blogs' className="justify-between">
              Blogs
            </Link>
          </li>
          {user ? <>
            {conditionalElement}
          </>: (
            <>
              <li className='text-black font-mono'><Link to='/login'>Login</Link></li>
              <li className='text-black font-mono'><Link to='/signup'>Register</Link></li>
            </>
          )}
       
        </ul>
      </div>
      
  {
    user && <div className="navbar-end  lg:w-26 ">
        
      
    <img src={user.photoURL} className='rounded-full w-12 h-12 border-2 ' title={user.displayName} alt="IMG" />
    
    </div>
  }
</div>
    </div>
  );
};

export default Navbar;