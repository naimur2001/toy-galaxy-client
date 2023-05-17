import React from 'react';

const Blog = () => {
  return (
    <div className='my-7'>
    

   <h1 className='text-center text-4xl text-lime-400 font-mono font-bold my-2'>Blogs</h1>
   <div className='grid grid-cols-2 gap-6 '>
      <div className='bg-zinc-100 mx-5 hover:scale-110 hover:bg-amber-200 rounded-lg transform transition-transform duration-1000  border-4 border-t-transparent border-b-transparent border-r-amber-400 border-l-rose-400'>
        <h1 className='text-center font-medium text-purple-600'>TWhat is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
        <p className='text-center font-mono'>
        An access token is a credential obtained during authentication that allows a user to access protected resources/data on a server. It is generally a JSON Web Token (JWT) and has a limited time. The client assigns the access token securely and includes it in requests to authenticate and authorize the user for accessing specific information or data.
        <br /> <br />
        A refresh token is a long-lived credential used to obtain a new access token without requiring the user to re-authenticate. It has a longer lifespan than the access token and is used to maintain user sessions and provide a smoother user experience. When the access token expires, the client sends the refresh token to the authentication server to obtain a fresh access token and continue accessing protected resources. Refresh tokens should be securely stored on the server-side to prevent unauthorized access.
        </p>
      </div>
    </div>
   
  </div>
  );
};

export default Blog;