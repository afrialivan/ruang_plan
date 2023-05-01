import MobileNav from '@/Components/MobileNav'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const EditUser = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const [name, setName] = useState(props.user.name)
  const [nis, setNis] = useState(props.user.nis)
  const [role, setRole] = useState(props.user.role)
  const [kelas, setKelas] = useState(props.user.kelas)
  const [jurusan, setJurusan] = useState(props.user.jurusan)
  const [kelamin, setKelamin] = useState(props.user.jenis_kelamin)
  const id = props.user.id

  const submitEdit = () => {
    const data = {
      id, name, nis, role, kelas, jurusan, kelamin
    }

    Inertia.post(`/dashboard/users/${props.user.id}`, data)
  }



  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} role={props.auth.user.role} />
          <div className="w-full">
            <Navbar />
            <div className="mx-4 mt-4">

              <div className='mb-5'>
                <Link className='bg-primary px-5 py-2 rounded-lg text-white' href='/dashboard/users'>back</Link>
              </div>

              <div className="bg-slate-200 w-full h-full rounded-lg px-8 pt-5 pb-7">
                <h2 className="font-bold text-xl md:mb-3">Edit User</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Nama User</label>
                      <input type="text" className="border-none rounded-lg" placeholder="inputkan nama user"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">NIS User</label>
                      <input type="text" className="border-none rounded-lg" placeholder="inputkan NIS user"
                        value={nis}
                        onChange={(e) => setNis(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Role</label>
                      <select className="border-none rounded-lg" onChange={(e) => setRole(e.target.value)} value={role} >
                        <option>--</option>
                        <option value="siswa">Siswa</option>
                        <option value="guru">Guru</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Jurusan</label>
                      <select className="border-none rounded-lg" onChange={(e) => setJurusan(e.target.value)} value={jurusan} >
                        <option value="-">--</option>
                        <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                        <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                        <option value="Teknik Jaringan Akses">Teknik Jaringan Akses</option>
                        <option value="Teknik Telekomunikasi">Teknik Telekomunikasi</option>
                        <option value="Pariwisata">Pariwisata</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Kelas</label>
                      <select className="border-none rounded-lg" onChange={(e) => setKelas(e.target.value)} value={kelas} >
                        <option value="-">--</option>
                        <option value="10">Kelas 10</option>
                        <option value="11">Kelas 11</option>
                        <option value="12">Kelas 12</option>
                      </select>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Jenis Kelamin</label>
                      <select className="border-none rounded-lg" onChange={(e) => setKelamin(e.target.value)} value={kelamin} >
                        <option value="-">--</option>
                        <option value="Perempuan">Perempuan</option>
                        <option value="Laki-laki">Laki-laki</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid mt-4">
                    <button className='rounded-lg bg-primary text-white py-3 px-10' onClick={() => submitEdit()}>Edit</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>

    </>
  )
}

export default EditUser