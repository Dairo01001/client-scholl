import Logo from './Logo'
import ThemeButton from './ThemeButton'
import PropTypes from 'prop-types'

export default function Nav ({ children }) {
  return (
    <nav className='bg-white shadow mb-5 border-gray-200 dark:bg-gray-800 dark:border-gray-600'>
      <div className='lg:w-4/5 pr-5 pl-5 flex flex-wrap items-center justify-between mx-auto p-1'>
        <Logo />
        <div className='flex space-x-5  md:order-2'>
          {children}
          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired
}
