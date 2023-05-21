import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
  useTitle('Blogs')
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
  <>
  <Navbar></Navbar>
    <div className='my-7'>
    <h1 className='text-center text-4xl text-lime-400 font-mono font-bold my-2'>Blogs</h1>
    <div className='grid grid-cols-2 gap-6 '>
       <div className='bg-zinc-100 mx-5  rounded-lg   border-4 border-t-transparent border-b-transparent border-r-lime-400 border-l-lime-400'>
         <h1 className='text-center font-medium text-purple-600'>TWhat is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
         <p className='text-center font-mono'>
         An access token is a credential obtained during authentication that allows a user to access protected resources/data on a server. It is generally a JSON Web Token (JWT) and has a limited time. The client assigns the access token securely and includes it in requests to authenticate and authorize the user for accessing specific information or data.
         <br /> <br />
         A refresh token is a long-lived credential used to obtain a new access token without requiring the user to re-authenticate. It has a longer lifespan than the access token and is used to maintain user sessions and provide a smoother user experience. When the access token expires, the client sends the refresh token to the authentication server to obtain a fresh access token and continue accessing protected resources. Refresh tokens should be securely stored on the server-side to prevent unauthorized access.
         </p>
       </div>
       <div className='bg-zinc-100 mx-5  rounded-lg   border-4 border-t-transparent border-b-transparent border-r-lime-400 border-l-lime-400'>
         <h1 className='text-center font-medium text-purple-600'>Compare SQL and NoSQL databases?</h1>
         <p className='text-center font-mono'>
         SQL databases, also known as relational databases, store data in structured tables with predefined schemas. They use SQL (Structured Query Language) for managing and manipulating data. SQL databases are well-suited for complex data relationships and transactions, ensuring data integrity and consistency. They are commonly used in applications such as financial systems, inventory management, and e-commerce platforms.
         <br /> <br />
         NoSQL databases, on the other hand, store data in flexible formats such as key-value pairs, documents, or graphs. They provide more flexibility in terms of data structure and do not require a fixed schema. NoSQL databases excel in scalability and performance, making them suitable for handling large volumes of data and distributed systems. They are commonly used in real-time analytics, content management systems, and applications with dynamic data requirements.
         </p>
       </div>
   
       <div className='bg-zinc-100 mx-5  rounded-lg   border-4 border-t-transparent border-b-transparent border-r-lime-400 border-l-lime-400'>
         <h1 className='text-center font-medium text-purple-600'>What is express js? What is Nest JS?</h1>
         <p className='text-center font-mono'>
         
Express.js: Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features for handling HTTP requests, routing, and middleware integration.
         <br /> <br />
         Nest.js: Nest.js is a progressive and efficient framework for building scalable server-side applications. It is built on top of Node.js and utilizes TypeScript for development. Nest.js follows modular and structured architectural patterns, making it suitable for large-scale projects. It provides features like dependency injection, robust routing, and easy integration with other libraries and frameworks.
         </p>
       </div>
       <div className='bg-zinc-100 mx-5  rounded-lg   border-4 border-t-transparent border-b-transparent border-r-lime-400 border-l-lime-400'>
         <h1 className='text-center font-medium text-purple-600'>What is MongoDB aggregate and how does it work?</h1>
         <p className='text-center font-mono'>
        
MongoDB's aggregate is a powerful feature that allows you to perform advanced data analysis and manipulation operations on collections. It enables you to process multiple documents and apply various stages, such as filtering, grouping, sorting, and transforming the data. Aggregation pipelines in MongoDB consist of multiple stages chained together, where each stage performs a specific operation on the input documents. This flexible and versatile feature helps you extract meaningful insights, generate reports, and perform complex calculations on your data within the database itself.
         </p>
       </div>
     </div>
    
   </div>
   <Footer></Footer>
  </>
  );
};

export default Blog;