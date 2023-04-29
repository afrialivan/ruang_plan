import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import React from 'react'
import { useSelector } from "react-redux"

const TambahRencana = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const [judul, setJudul] = useState('')
  const [mulai, setMulai] = useState('')
  const [kategori, setkategori] = useState('')
  const [penanggungJawab, setPenanggungJawab] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [selesai, setSelesai] = useState('')
  const [ruangan, setRuangan] = useState('')
  // const idUser = props.auth.user.id

  const submitData = () => {
    const data = {
      judul, mulai, selesai, ruangan, kategori, deskripsi, penanggungJawab
    }
    Inertia.post('/rencana/tambah-rencana', data)
  }

  // console.log('2023-04-04t21:24 : ', mulai);

  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} role={props.auth.user.role} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4 mb-20 md:mb-0">
              <div className='mb-5'>
                <Link className='bg-primary px-5 py-2 rounded-lg text-white' href='/rencana'>back</Link>
              </div>
              <div className="bg-slate-200 w-full h-full rounded-lg px-8 pt-5 pb-7">

                <h2 className="font-bold text-xl md:mb-3">Tambah Kegiatan</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Nama Kegiatan</label>
                      <input type="text" className="border-none rounded-lg" placeholder="inputkan nama kegiatan"
                        value={judul}
                        onChange={(event) => setJudul(event.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Kategori Kegiatan</label>
                      <select className="border-none rounded-lg" value={kategori} onChange={(event) => setkategori(event.target.value)} >
                        <option>--</option>
                        <option value="semua">Semua</option>
                        <option value="siswa">Siswa</option>
                        <option value="guru">Guru</option>
                        <option value="osis">Osis</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Tanggal Mulai Kegiatan</label>
                      <input type="datetime-local" className="border-none rounded-lg" placeholder=""
                        value={mulai}
                        onChange={(event) => setMulai(event.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Tanggal Selesai Kegiatan</label>
                      <input type="datetime-local" className="border-none rounded-lg" placeholder=""
                        value={selesai}
                        onChange={(event) => setSelesai(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Pilih Ruangan</label>
                      <select className="border-none rounded-lg" value={ruangan} onChange={(event) => setRuangan(event.target.value)} >
                        <option>--</option>
                        {props.ruangan.map(ruangan => {
                          return (
                            <option key={ruangan.id} value={ruangan.id}>{ruangan.nama_ruangan}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Penanggung Jawab</label>
                      <input type="text" className="border-none rounded-lg" placeholder=""
                        value={penanggungJawab}
                        onChange={(event) => setPenanggungJawab(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="">Deskripsi Kegiatan</label>
                    <textarea className="w-full border-none rounded-lg" rows="4"
                      value={deskripsi}
                      onChange={(event) => setDeskripsi(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex">
                    <button className="bg-slate-100 w-full rounded-lg px-4 py-3" onClick={() => submitData()}>Tambah Kegiatan</button>
                  </div>
                </div>
              </div>

              {/* {props.rencana.map((ren, index) => <p key={index}>{ren.judul}</p>)}
              <label htmlFor="">Judul Kegiatan</label>
              <input type="text"
                value={judul}
                onChange={(event) => setJudul(event.target.value)}
              />
              <label htmlFor="">Tanggal Kegiatan</label>
              <input type="datetime-local"
                value={tanggal}
                onChange={(event) => setTanggal(event.target.value)}
              />
              <label htmlFor="">Ruangan Kegiatan</label>
              <select value={ruangan} onChange={(event) => setRuangan(event.target.value)} >
                <option>--</option>
                {props.ruangan.map(ruangan => {
                  return (
                    <option key={ruangan.id} value={ruangan.id}>{ruangan.nama_ruangan}</option>
                  )
                })}
              </select>
              <button className="bg-slate-200" onClick={() => submitData()}>Submit</button> */}

            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>
    </>
  )
}

export default TambahRencana