import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from '@inertiajs/react';
import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux"
import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"

const Users = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const [name, setName] = useState('')
  const [nis, setNis] = useState('')
  const [role, setRole] = useState('')

  const destroyUser = (id) => {
    confirm('ingin menghapus user ini?')
    Inertia.delete(`/dashboard/users/${id}`)
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
              <div>
                <div className='mb-6'>
                  <Link className='bg-primary px-5 py-2 rounded-lg text-white' href='/dashboard/users/tambah-user'>tambah</Link>
                </div>
                <div className="overflow-x-auto shadow-md rounded-lg">
                  <table className="table w-full">
                    {/* head*/}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nama User</th>
                        <th>Role</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.users.map((user, index) => {
                        return (
                          <tr key={user.id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>
                              <div>
                                <Link href={`/dashboard/users/${user.id}`} >edit</Link>
                              </div>
                              <div>
                                <button onClick={() => destroyUser(user.id)}>hapus</button>
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
        </div>
        <MobileNav color={color} title={props.title} />
      </div>

    </>
  )
}

export default Users