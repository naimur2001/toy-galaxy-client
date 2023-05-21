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
