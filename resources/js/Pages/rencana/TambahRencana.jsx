import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Inertia } from '@inertiajs/inertia'
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
    <div data-theme={mode} className="h-100">
      <div className="grid grid-cols-12">
        <div className="col-start-1 row-span-1">
          <Sidebar color={color} title={props.title} />
        </div>
        <div className="xl:ml-[1%] lg:ml-[4%] md:ml-[10%] lg:-mr-[6%] md:-mr-[4%]" style={{ gridColumn: '2/12' }}>
          <Navbar darkMode={() => darkMode()} />
          <div className="py-10">

            {props.rencana.map((ren, index) => <p key={index}>{ren.judul}</p>)}


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
                {/* <option value="">XII TKJ 1</option>
                <option value="">XII TKJ 2</option> */}
              </select>
              <button className="bg-slate-200" onClick={() => submitData()}>Submit</button>



          </div>
        </div>
      </div>
      <MobileNav color={color} title={props.title} />
    </div>
  )
}

export default TambahRencana