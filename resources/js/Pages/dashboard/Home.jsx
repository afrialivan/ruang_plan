import { Link } from '@inertiajs/react'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <Link href='/dashboard/konfirmasi-kegiatan' >Konfirmasi Kegiatan</Link>
      </div>
      <div>
        <Link href='/dashboard/users'>tambah akun</Link>
      </div>
    </div>
  )
}

export default Home