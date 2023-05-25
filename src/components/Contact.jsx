import { useId, useState } from 'react'
import { EMAIL } from '../config'
import { sendEmail } from '../services/email'
import Swal from 'sweetalert2'

export default function Contact () {
  const emailId = useId()
  const subjectId = useId()
  const messageId = useId()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleContact = () => {
    setShow(!show)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { email, message, subject } = Object.fromEntries(
      new window.FormData(event.target)
    )
    try {
      setLoading(true)
      const { message: msg } = await sendEmail({
        to: EMAIL,
        message: `${message} Contact: ${email}`,
        subject
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: error.message,
        showConfirmButton: false,
        timer: 1500
      })
    } finally {
      setLoading(false)
    }
    event.target.reset()
  }

  return (
    <div className='md:absolute md:right-2'>
      <div className='text-center'>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          onClick={toggleContact}
        >
          Contáctame
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto md:w-96 transition-transform ${
          show ? '' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex='-1'
      >
        <h5 className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
          <svg
            className='w-5 h-5 mr-2'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          contáctame
        </h5>
        <button
          type='button'
          onClick={toggleContact}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <form
          onSubmit={handleSubmit}
          className='mb-6'
        >
          <div className='mb-6'>
            <label
              htmlFor={emailId}
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Tu correo
            </label>
            <input
              type='email'
              name='email'
              id={emailId}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@example.com'
              autoComplete='off'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor={subjectId}
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Asunto
            </label>
            <input
              type='text'
              name='subject'
              id={subjectId}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Permítenos saber en qué te podemos ayudar'
              autoComplete='off'
              minLength='5'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor={messageId}
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Tu mensaje
            </label>
            <textarea
              id={messageId}
              name='message'
              rows='10'
              autoComplete='off'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Tu mensaje...'
              minLength='50'
              required
            />
          </div>
          {loading
            ? (
              <button
                disabled
                type='submit'
                className='text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
              >
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline w-4 h-4 mr-3 text-white animate-spin'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#E5E7EB'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentColor'
                  />
                </svg>
                Enviando...
              </button>
              )
            : (
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block'
              >
                Enviar
              </button>
              )}
        </form>
        <p className='mb-2 text-sm w-full text-gray-500 dark:text-gray-400'>
          <a
            href='https://github.com/Dairo01001'
            target='_blank'
            className='hover:underline flex gap-3'
            rel='noreferrer'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
            <span>Git-Hub</span>
          </a>
        </p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          <a
            href='www.linkedin.com/in/dairo-garcía-naranjo'
            target='_blank'
            className='hover:underline flex gap-3'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                clipRule='evenodd'
              />
            </svg>
            <span>Linkdin</span>
          </a>
        </p>
      </div>
    </div>
  )
}
