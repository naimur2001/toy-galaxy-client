import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Folders/Routes/Routes.jsx'
import AuthProvider from './Folders/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

<div className='max-w-5xl mx-auto'>
<AuthProvider>
<React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
          
  </React.StrictMode>
</AuthProvider>
</div>

)

// https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-naimur2001