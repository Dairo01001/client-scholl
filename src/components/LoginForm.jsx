import { useContext, useId } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useRemenber } from '../hooks/useRemenber'
import Swal from 'sweetalert2'

export default function LoginForm () {
  const { login } = useContext(AuthContext)
  const { userStorage, addUserStorage } = useRemenber()
  const navigate = useNavigate()
  const userID = useId()
  const passwordID = useId()
  const rememberID = useId()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { user, password, remember } = Object.fromEntries(
      new window.FormData(event.target)
    )

    if (remember) {
      addUserStorage({ user, password })
    } else {
      addUserStorage({ user: '', password: '' })
    }

    login({ user, password })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        event.target.reset()
        navigate('/')
      })
      .catch((err) => {
        Swal.fire('Ups!!', err.message, 'warning')
      })
  }

  return (
    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor={userID}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Usuario
        </label>
        <input
          type='text'
          name='user'
          autoComplete='off'
          defaultValue={userStorage.user}
          id={userID}
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Jon Doe'
          required
        />
      </div>
      <div>
        <label
          htmlFor={passwordID}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Contraseña
        </label>
        <input
          type='password'
          name='password'
          autoComplete='off'
          defaultValue={userStorage.password}
          id={passwordID}
          placeholder='••••••••'
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              id={rememberID}
              aria-describedby='remember'
              name='remember'
              type='checkbox'
              defaultChecked
              className='w-4 h-4 border hover:cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
              required=''
            />
          </div>
          <div className='ml-3 text-sm'>
            <label
              htmlFor={rememberID}
              className='text-gray-500 dark:text-gray-300'
            >
              Recuérdame
            </label>
          </div>
        </div>
        <a
          href='#'
          className='text-sm font-medium text-primary-600 hover:underline dark:text-blue-300'
        >
          ¿Olvidó contraseña?
        </a>
      </div>
      <div className='flex justify-center'>
        <button
          type='submit'
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          Entrar
        </button>
      </div>
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        ¿No tienes una cuenta?{'  '}
        <Link
          to='/signup'
          className='font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Registrarse
        </Link>
      </p>
    </form>
  )
}
