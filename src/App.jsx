import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './ErrorPage'
import Login from './pages/Login'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router} />
}

export default App
