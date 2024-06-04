import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {loader as rootLoader, action as rootAction} from './routes/root';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from './error-page';
import Contact, {loader as contactLoader} from './routes/contact';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root/>,
  action: rootAction,
  errorElement: <ErrorPage/>,
  loader: rootLoader,
  children: [
    {
      path: "contacts/:contactId",
      element: <Contact/>,
      loader: contactLoader
     }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
