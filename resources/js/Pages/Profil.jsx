import MobileNav from '@/Components/MobileNav'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Profil = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('black')
  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4">
              <div className='w-56 h-w-56 m-auto block rounded-full overflow-hidden mb-3 img-thumbnail'>
                <img src="http://source.unsplash.com/500x500?person" alt="" className='h-full w-full' />
              </div>
              <h1 className='text-center font-bold text-4xl'>{props.auth.user.name}</h1>
              <div className="block m-auto max-w-5xl">
                <div className='flex flex-col bg-slate-200 rounded-lg gap-9 px-20 py-6'>
                  <div className='flex justify-between'>
                    <h1>Nama</h1>
                    <label htmlFor="my-modal" className='cursor-pointer'>{props.auth.user.name}</label>
                  </div>
                  <div className='flex justify-between'>
                    <h1>NIS</h1>
                    <h1>{props.auth.user.nis}</h1>
                  </div>
                  <div className='flex justify-between'>
                    <h1>Email</h1>
                    <h1>afrialivan@gmail.com</h1>
                  </div>
                </div>
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