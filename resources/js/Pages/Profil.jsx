import MobileNav from '@/Components/MobileNav'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Profil = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const [nama, setNama] = useState(props.auth.user.name)
  const [nis, setNis] = useState(props.auth.user.nis)
  const [kelas, setKelas] = useState(props.auth.user.kelas)
  const [jurusan, setJurusan] = useState(props.auth.user.jurusan)
  const [kelamin, setKelamin] = useState(props.auth.user.jenis_kelamin)
  const [aktif, setAktif] = useState(true)
  // console.log(props);

  const submitEdit = () => {
    confirm('yakin ingin merubah data?')
    const data = {
      nama, nis, kelas, jurusan, kelamin
    }

    Inertia.post(`/profil`, data)
  }

  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} role={props.auth.user.role} />
          <div className="w-full">
            <Navbar title="profil" />
            <div className="mx-4 mt-4">
              <div className='w-56 h-56 m-auto bg-black block rounded-full overflow-hidden mb-3 mt-20'>
                <img src="https://user-images.githubusercontent.com/101108042/235445549-19391164-089c-4e9f-8b83-eea89885c0ae.png" alt="" className='h-full w-full' />
              </div>
              {aktif ?
                <>
                  <h1 className='text-center font-bold text-5xl text-primary'>{props.auth.user.name}</h1>
                  <h1 className='text-center text-3xl text-primary'>Kelas {props.auth.user.kelas}</h1>
                </>
                :
                <>
                  <input type="text" className='w-96 mb-3 block m-auto bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary'
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    disabled={aktif}
                  />
                  <select className="w-96 mb-3 block m-auto bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary" onChange={(e) => setKelas(e.target.value)} value={kelas} >
                    <option>--</option>
                    <option value="10">Kelas 10</option>
                    <option value="11">Kelas 11</option>
                    <option value="12">Kelas 12</option>
                  </select>
                </>
              }
              <div className="hidden lg:block m-auto px-48 mt-20">
                <div className="overflow-x-auto">
                  <table>
                    <tbody>
                      <tr className='h-16'>
                        <td className='w-72'>
                          <h1 className='text-2xl font-bold text-primary'>Nomor Induk</h1>
                        </td>
                        <td>
                          <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary'
                            value={nis}
                            onChange={(e) => setNis(e.target.value)}
                            disabled={aktif}
                          />
                        </td>
                      </tr>
                      <tr className='h-16'>
                        <td className='w-72'>
                          <h1 className='text-2xl font-bold text-primary'>Jurusan</h1>
                        </td>
                        <td>
                          {aktif ?
                            <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary'
                              value={jurusan}
                              onChange={(e) => setJurusan(e.target.value)}
                              disabled={aktif}
                            />
                            :
                            <select className="w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary" onChange={(e) => setJurusan(e.target.value)} value={jurusan} >
                              <option>--</option>
                              <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                              <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                              <option value="Teknik Jaringan Akses">Teknik Jaringan Akses</option>
                              <option value="Teknik Telekomunikasi">Teknik Telekomunikasi</option>
                              <option value="Pariwisata">Pariwisata</option>
                            </select>
                          }
                        </td>
                      </tr>
                      <tr className='h-16'>
                        <td className='w-72'>
                          <h1 className='text-2xl font-bold text-primary'>Jenis Kelamin</h1>
                        </td>
                        <td>
                          {aktif ?
                            <input type="text" className='w-96 bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary'
                              value={kelamin}
                              onChange={(e) => setKelamin(e.target.value)}
                              disabled={aktif}
                            />
                            :
                            <select className="w-96 mb-3 block m-auto bg-[#D6E4E5] py-2 px-3 border-none rounded-lg text-2xl font-bold text-primary" onChange={(e) => setKelamin(e.target.value)} value={kelamin} >
                              <option>--</option>
                              <option value="Perempuan">Perempuan</option>
                              <option value="Laki-laki">Laki-laki</option>
                            </select>
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='flex text-white gap-3 justify-end mt-16 font-bold'>
                  <button className='bg-primary px-7 py-2 rounded-xl' onClick={() => setAktif(!aktif)}>{aktif ? 'Edit' : 'Batal Edit'}</button>
                  <button className='bg-primary px-7 py-2 rounded-xl' onClick={() => !aktif ? submitEdit() : ''}>Simpan</button>
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