import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux"
import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import UpdateData from '@/features/UpdateData';

const Kegiatan = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')

  const months = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  const date = !props.kegiatans[0] ? '' : new Date(props.kegiatans[0].mulai)
  const month = !props.kegiatans[0] ? '' :  date.getMonth() + 1

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
    <>
      <Head title={props.title} />
      <UpdateData data={props.kegiatans} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} role={props.auth.user.role} />
          <div className="w-full">
            <Navbar />
            <div className="mx-4 mt-4">
              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="table w-full">
                  {/* head*/}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Nama Kegiatan</th>
                      <th>Tanggal dan Waktu</th>
                      <th>Nama</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.kegiatans.map((rencana, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{rencana.judul}</td>
                          <td>{rencana.mulai.slice(8, 10)} {months[month]} {rencana.mulai.slice(0, 4)}, {rencana.mulai.slice(11)} - {rencana.selesai.slice(11)} WITA</td>
                          <td>{rencana.name}</td>
                          <td>
                            <div>
                              <button onClick={() => konfirmasiKegiatan(rencana.id)}>Konfirmasi</button>
                            </div>
                            <div>
                              <button onClick={() => tolakKegiatan(rencana.id)}>tolak</button>
                            </div>
                            <div>
                              <button onClick={() => hapusKegiatan(rencana.id)}>hapus</button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>

    </>
  )
}

export default Kegiatan