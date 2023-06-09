import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './Components/Checkout/Checkout';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/providers/AuthProvider';
import PrivateRoutes from './routs/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
       {
        path: 'inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
       {
        path: 'login',
        element: <Login></Login>
      },
       {
        path: 'sign-up',
        element: <SignUp></SignUp>
      },
       {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
