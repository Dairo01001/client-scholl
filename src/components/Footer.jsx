import Contact from './Contact'

export default function Footer () {
  return (
    <footer className='mt-auto bg-white border-t border-gray-200 shadow flex items-center justify-around dark:bg-gray-800 dark:border-gray-600'>
      <div className='w-full mx-auto p-4 md:flex md:items-center md:justify-center'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Hecho con ❤️ por
          <a
            href='https://github.com/Dairo01001'
            target='_blank'
            className='hover:underline'
            rel='noreferrer'
          >
            {' dairo-dev '}
          </a>
          © 2023
        </span>
        <Contact />
      </div>
    </footer>
  )
}
