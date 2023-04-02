import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import React from 'react'

const Kegiatan = (props) => {

  // console.log(props);

  const konfirmasiKegiatan = (id) => {
    console.log(id);
    const idKegiatan = { id }
    Inertia.post('/dashboard/konfirmasi-kegiatan', idKegiatan)
  }

  const tolakKegiatan = (id) => {
    console.log(id);
    const idKegiatan = { id }
    Inertia.post('/dashboard/tolak-kegiatan', idKegiatan)
  }

  const hapusKegiatan = (id) => {
    console.log(id);
    const idKegiatan = { id }
    Inertia.post('/dashboard/hapus-kegiatan', idKegiatan)
  }

  return (
    <div>
      <Link href='/dashboard/home' >back</Link>
      {props.kegiatans.map((rencana, index) => {
        return (
          <div key={index} className='bg-slate-100 mb-3'>
            <p>{rencana.name}</p>
            <p>{rencana.judul}</p>
            <p>{rencana.tanggal}</p>
            <div>
              <button onClick={() => konfirmasiKegiatan(rencana.id)}>Konfirmasi</button>
            </div>
            <div>
              <button onClick={() => tolakKegiatan(rencana.id)}>tolak</button>
            </div>
            <div>
              <button onClick={() => hapusKegiatan(rencana.id)}>hapus</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Kegiatan