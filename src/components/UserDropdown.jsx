import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserDropdown () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'
      >
        <svg
          className='absolute w-12 h-12 text-gray-400 top-0 -left-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={`z-10 mt-1 absolute right-0 ${
          isOpen || 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow min-w-fit dark:bg-gray-700 dark:divide-gray-600`}
        onClick={toggleDropdown}
      >
        <div className='py-1'>
          <Link
            to='/signup'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Registrarse
          </Link>
        </div>
        <div className='py-1'>
          <Link
            to='/login'
            className='block w-32 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
