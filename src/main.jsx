import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Folders/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-5xl mx-auto'>
<React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
          
  </React.StrictMode>
</div>
)

// https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-naimur2001