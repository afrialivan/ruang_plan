import { Head, Link } from '@inertiajs/react'
import React from 'react'
import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { useState } from "react"
import { useSelector } from "react-redux"

const Home = (props) => {
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

              <div>
                <Link href='/dashboard/konfirmasi-kegiatan' >Konfirmasi Kegiatan</Link>
              </div>
              <div>
                <Link href='/dashboard/users'>tambah akun</Link>
              </div>

              <div>
                <Link href="/tes">
                  tes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>

    </>
  )
}

export default Home

