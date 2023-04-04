import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import React from 'react'

const TambahRencana = (props) => {
  const [mode, setMode] = useState('emerald')
  const [color, setColor] = useState('black')
  const [judul, setJudul] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [ruangan, setRuangan] = useState('')
  const idUser = props.auth.user.id

  const submitData = () => {
    const data = {
      judul, tanggal, ruangan, idUser
    }
    Inertia.post('/rencana/tambah-rencana', data)
  }

  return (
    <>
      <Head title={props.title} />
      <div data-theme={mode} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4 flex flex-1 mb-20 md:mb-0">
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
                      <select className="border-none rounded-lg" value={ruangan} onChange={(event) => setRuangan(event.target.value)} >
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
                      <label htmlFor="">Tanggal Kegiatan</label>
                      <input type="date" className="border-none rounded-lg" placeholder="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
                      <div className="flex flex-col md:w-1/2">
                        <label htmlFor="">Waktu Mulai</label>
                        <input type="time" className="border-none rounded-lg" placeholder="" />
                      </div>
                      <div className="flex flex-col md:w-1/2">
                        <label htmlFor="">Waktu Selesai</label>
                        <input type="time" className="border-none rounded-lg" placeholder="" />
                      </div>
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
                      <input type="text" className="border-none rounded-lg" placeholder="" />
                    </div>
                  </div>
                  <div className="flex flex-col mb-3">
                    <label htmlFor="">Deskripsi Kegiatan</label>
                    <textarea className="w-full border-none rounded-lg" rows="4"></textarea>
                  </div>
                  <div className="flex">
                    <button className="bg-slate-100 w-full rounded-lg px-4 py-3">Tambah Kegiatan</button>
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