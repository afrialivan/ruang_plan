import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-1">
          <div className="w-full">
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
      </div>
    </>
  )
}

export default Home