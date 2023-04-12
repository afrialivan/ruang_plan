import MobileNav from '@/Components/MobileNav'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Profil = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar />
            <div className="mx-4 mt-4">
              <div className='w-56 h-56 m-auto bg-black block rounded-full overflow-hidden mb-3 mt-20'>
                <img src="http://source.unsplash.com/500x500?person" alt="" className='h-full w-full' />
              </div>
              <h1 className='text-center font-bold text-5xl text-primary'>A. Muh. Afrial Ivan Pratama</h1>
              <h1 className='text-center text-3xl text-primary'>Kelas 12</h1>
              <div className="block m-auto px-48 mt-20">
                <table>
                  <tr className='h-16'>
                    <td className='w-72'>
                      <h1 className='text-2xl font-bold text-primary'>Nomor Induk</h1>
                    </td>
                    <td>
                      <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary' value='544201505' />
                    </td>
                  </tr>
                  <tr className='h-16'>
                    <td className='w-72'>
                      <h1 className='text-2xl font-bold text-primary'>Jurusan</h1>
                    </td>
                    <td>
                      <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary' value='Rekayasa Perangkat Lunak' />
                    </td>
                  </tr>
                  <tr className='h-16'>
                    <td className='w-72'>
                      <h1 className='text-2xl font-bold text-primary'>Jenis Kelamin</h1>
                    </td>
                    <td>
                      <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary' value='Laki-Laki' />
                    </td>
                  </tr>
                </table>
                {/* <Link href="tes">
                  tes
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>
    </>
  )
}

export default Profil