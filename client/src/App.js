import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Home/Homepage";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import "./app.scss"

const Layout = () =>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[{
      path:"/",
      element:<Homepage />
    },
    {
      path:"/products/:id",
      element:<Products />
    } ,
    {
      path:"/product/:id",
      element:<Product />
    }
  ]
  }
]);


function App(){
  return(
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App

