import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  
  const location=useLocation()
  const handleSignOut=()=>{
    logOut()
  .then(result=>{
// console.log('');
  })
  .catch(error=>{
    console.log(error);
  })
  }
  return (
    <div>
      <div className="navbar bg-cyan-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className={location.pathname === '/' ? 'text-green-400' : ''}><Link to='/'>Home</Link></li>
            <li className={location.pathname === '/blog' ? 'text-green-400' : ''}>
              <Link to='/blog' className="justify-between">
                Blogs
              </Link>
            </li>
            {user ? (
              <li><Link to='/' onClick={handleSignOut}>Logout</Link></li>
            ) : (
              <>
                <li className={location.pathname === '/login' ? 'text-green-400' : ''}><Link to='/login'>Login</Link></li>
                <li className={location.pathname === '/register' ? 'text-green-400' : ''}><Link to='/register'>Register</Link></li>
              </>
            )}
            <li className={location.pathname === '/about' ? 'text-green-400' : ''}><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-warning text-xl border-2 border-white">Food Bliss</a>
      </div>
  <div className="navbar-center hidden lg:flex lg:mr-80">
        <ul className="menu menu-horizontal px-1 font-semibold text-rose-400 text-lg">
          <li className={location.pathname === '/' ? 'text-green-400' : ''}><Link to='/'>Home</Link></li>
          <li className={location.pathname === '/blog' ? 'text-green-400' : ''}>
            <Link to='/blog' className="justify-between">
              Blogs
            </Link>
          </li>
          {user ? (
            <li><Link to='/' onClick={handleSignOut}>Logout</Link></li>
          ) : (
            <>
              <li className={location.pathname === '/login' ? 'text-green-400' : ''}><Link to='/login'>Login</Link></li>
              <li className={location.pathname === '/register' ? 'text-green-400' : ''}><Link to='/register'>Register</Link></li>
            </>
          )}
          <li className={location.pathname === '/about' ? 'text-green-400' : ''}><Link to='/about'>About Us</Link></li>
        </ul>
      </div>
  {
    user && <div className="navbar-end lg:mx-4 lg:w-24">
    <img src={user.photoURL} className='rounded-full w-12 h-12 border-2 ' title={user.displayName} alt="IMG" />
    
    </div>
  }
</div>
    </div>
  );
};

export default Navbar;