import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Getstart from './Getstart'
import App from '../App'
import SignIn from './Login/SignIn'
import Gbt from './Gbt'


    const router = createBrowserRouter([
        {
          path:"/",
          element:<Getstart/>
        },
        {
          path:"/app",
          element:<App/>
        }
       ,{
        path:"/signin",
        element:<SignIn/>
       },
       {
        path:"/Gpt",
        element:<Gbt/>
       }
      
      ]) 
      

export default router
