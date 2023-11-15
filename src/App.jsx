import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/Homepage"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Profile from "./components/Profile";
import { useState } from "react";


function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
