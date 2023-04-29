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
  const id = props.user.id

  const submitEdit = () => {
    const data = {
      id, name, nis, role
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
                    <div className="flex flex-col w-full">
                      <label htmlFor="">Role</label>
                      <select className="border-none rounded-lg" value={role} onChange={(e) => setRole(e.target.value)} >
                        <option>--</option>
                        <option value="siswa">Siswa</option>
                        <option value="guru">Guru</option>
                        <option value="admin">Admin</option>
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