import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/Homepage"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Profile from "./components/Profile";
import { useState } from "react";


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [fac, setFac] = useState('')


  const handleFac = (e) => {
    setFac(e.target.value)
  }


  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }


  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: 'signup',
      element: <SignUp email={email} handleEmail={handleEmail} handleFac={handleFac} handlePassword={handlePassword} />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile',
      element: <Profile email={email} fac={fac} />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
