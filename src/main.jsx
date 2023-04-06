import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import OrderReview from './Component/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
         {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('tshirts.json')
         },
         {
          path:'/review',
          element:<OrderReview></OrderReview>
         }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
