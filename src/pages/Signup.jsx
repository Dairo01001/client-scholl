import BloodSelect from '../components/BloodSelect'
import DocumentSelect from '../components/DocumentSelect'
import Input from '../components/Input'
import Select from '../components/Select'

export default function Signup () {
  return (
    <section className='bg-white dark:bg-gray-900 w-full'>
      <div className='flex flex-col items-center justify-center mx-auto lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Crea una cuenta
            </h1>
            <hr className='border-t border-blue-600 my-4 pb-4' />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = Object.fromEntries(new window.FormData(e.target))
                console.log(data)
              }}
            >
              <div className='grid md:grid-cols-2 md:gap-6'>
                <Input type='text' name='firstName' text='Nombre' required />
                <Input type='text' name='middleName' text='Segundo nombre' />
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <Input type='text' name='surname' text='Apellido' required />
                <Input
                  type='text'
                  name='secondSurname'
                  text='Segundo apellido'
                />
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <Select
                  name='gender'
                  text='Género'
                  options={[
                    { id: 'Male', name: 'Masculino' },
                    { id: 'Female', name: 'Femenino' }
                  ]}
                />
                <BloodSelect />
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <Input
                  type='date'
                  name='birthDate'
                  text='Fecha de nacimiento'
                  required
                />
                <Input
                  type='text'
                  name='profession'
                  text='Profesión'
                  required
                />
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <DocumentSelect />
                <Input
                  type='number'
                  text='Número documento'
                  name='documentNumber'
                  required
                />
              </div>
              <Input type='email' name='email' text='Correo' required />
              <Input
                type='tel'
                required
                name='phone'
                text='Teléfono (312-345-6789)'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              />
              <div className='grid md:grid-cols-2 md:gap-6'>
                <Input
                  type='password'
                  name='password'
                  text='Contraseña'
                  required
                />
                <Input
                  type='password'
                  name='password1'
                  text='Repite la Contraseña'
                  required
                />
              </div>

              <button
                type='submit'
                className='inline-flex capitalize text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
