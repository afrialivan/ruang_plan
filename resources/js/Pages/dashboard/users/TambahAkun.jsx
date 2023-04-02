import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import * as XLSX from 'xlsx'

const TambahAkun = () => {
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

  const submitUser = () => {
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
    <div>
      <div>
        <Link href='/dashboard/users'>back</Link>
      </div>
      <input type="file" onChange={(e) => {
        const file = e.target.files[0]
        readExcel(file)
      }} />
      <div>
        <button onClick={() => submitUser()}>tambah user</button>
      </div>
      <div className='bg-slate-100'>
        <div>
          <label htmlFor="">Nama</label>
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">nis</label>
          <input type="text" value={nis} onChange={(e) => setNis(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">role</label>
          <select onChange={(e) => setRole(e.target.value)} >
            <option value="">--</option>
            <option value="admin">admin</option>
            <option value="siswa">siswa</option>
            <option value="guru">guru</option>
          </select>
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='bg-white' onClick={() => buatAkun() }>tambah akun</button>
      </div>
      <div>
        {items.map((item, index) => {
          return (
            <ol key={index} className='bg-slate-100 w-100 mt-2'>
              <li>nama: {item.nama}</li>
              <li>nis: {item.nis}</li>
              <li>password: {item.password}</li>
            </ol>
          )
        })}
      </div>
    </div>
  )
}

export default TambahAkun