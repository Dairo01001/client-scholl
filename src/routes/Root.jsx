import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Root () {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '85vh' }} className='flex justify-center items-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
