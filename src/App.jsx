import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoot from './routes/PublicRoot'
import ErrorPage from './ErrorPage'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  }
])

const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <h1>DashBoard</h1>,
    errorElement: <ErrorPage />
  }
])

function App () {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <RouterProvider router={isAuth ? privateRouter : publicRouter} />
    </>
  )
}

export default App
