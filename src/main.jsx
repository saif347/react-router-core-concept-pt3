import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home';
import ErrorPage from './component/error/ErrorPage';
import About from './component/about/About';
// import Header from './component/header/Header';
import ContactLPage from './contactpage/ContactLPage';
import Users from './component/users/Users';
import UserDetails from './component/userdetails/UserDetails';
import Countries from './countries/Countries';
import CountryDetail from './countryDetail/CountryDetail';
import Posts from './post/Posts';
import UserPost from './userpost/UserPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element:<ContactLPage></ContactLPage>
      },
      {
        path: "/users",
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>
      },
      {
        path: "/users/:usersId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element: <UserDetails></UserDetails>

      },
      {
        path: "/countries",
        loader: ()=> fetch('https://restcountries.com/v3.1/all'),
        element: <Countries></Countries>
      },
      {
        path: "/country/:countryName",
        loader: ({params})=> fetch (`https://restcountries.com/v3.1/name/${params.countryName}`),
        element:<CountryDetail></CountryDetail>
      },
      {
        path: "/post",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/post/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <UserPost></UserPost>
      }

    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
