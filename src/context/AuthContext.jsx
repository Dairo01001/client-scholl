import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import { loginService } from '../services/login'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const login = ({ user, password }) => {
    loginService({ user, password })
      .then((data) => {
        setUser(data)
        setIsAuth(true)
        Swal.fire('¡Bienvenido de vuelta!', '', 'success')
      })
      .catch((err) => {
        Swal.fire('Opss!', err.message, 'warning')
      })
  }

  const logout = () => {
    setUser(null)
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
