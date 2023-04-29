import MobileNav from '@/Components/MobileNav'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as XLSX from 'xlsx'

const TambahAkun = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const [items, setItems] = useState([])
  const [nis, setNis] = useState('')
  const [nama, setNama] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result
        const wb = XLSX.read(bufferArray, { type: 'buffer' })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
    // const tes = promise.then((d) => {
    //   return (
    //     setTes(tess.concat(d))
    //   )
    // })
    promise.then((d) => {
      setItems(d)
    })
  }

  const submitUser = (event) => {
    // console.log(items[0])
    Inertia.post('/dashboard/users/tambah-users', items)
    // items.map(item => {
    //   Inertia.post('/dashboard/users/tambah-user', item)
    // })
  }

  const buatAkun = () => {
    const data = { nama, nis, role, password }
    Inertia.post('/dashboard/users/tambah-user', data)
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
                <h2 className="font-bold text-xl md:mb-3">Tambah User</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Nama User</label>
                      <input type="text" className="border-none rounded-lg" placeholder="inputkan nama user"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
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
                      <select className="border-none rounded-lg" onChange={(e) => setRole(e.target.value)} >
                        <option>--</option>
                        <option value="siswa">Siswa</option>
                        <option value="guru">Guru</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                      <label htmlFor="">Password</label>
                      <input type="password" className="border-none rounded-lg" placeholder="inputkan password user"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid mt-4">
                    <button className='rounded-lg bg-primary text-white py-3 px-10' onClick={() => buatAkun()}>Tambah</button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 w-full h-full rounded-lg px-8 pt-5 pb-7">
                <h2 className="font-bold text-xl md:mb-3">Tambah User Menggunakan Excel</h2>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    readExcel(file)
                  }}
                />
                <div className='mt-5'>
                  <button className='bg-primary px-5 py-2 rounded-lg text-white' onClick={(event) => submitUser()}>Tambah</button>
                </div>
                <div className="overflow-x-auto mt-7">
                  <table className="table table-compact w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nama User</th>
                        <th>NIS User</th>
                        <th>Role User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th>{index}</th>
                            <td>{item.nama}</td>
                            <td>{item.nis}</td>
                            <td>{item.role}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
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

export default TambahAkun