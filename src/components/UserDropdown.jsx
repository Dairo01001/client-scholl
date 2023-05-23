import { useState } from 'react'

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
        className={`z-10 mt-1 absolute right-0 md:left-0 ${
          isOpen || 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        onBlur={toggleDropdown}
      >
        <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
          <div>Bonnie Green</div>
          <div className='font-medium truncate'>name@flowbite.com</div>
        </div>
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
        >
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className='py-1'>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  )
}
