import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'

const Users = (props) => {
  const [name, setName] = useState('')
  const [nis, setNis] = useState('')
  const [role, setRole] = useState('')

  const destroyUser = (id) => {
    Inertia.delete(`/dashboard/users/${id}`)
  }

  return (
    <div>
      <div>
        <Link href='/dashboard/home'>back</Link>
      </div>
      <div>
        <Link href='/dashboard/users/tambah-user'>tambah</Link>
      </div>

      <div>
        {props.users.map(user => {
          return (
            <div key={user.id} className='bg-slate-100 w100 mb-2'>
              <p>{user.name}</p>
              <div>
                <Link href={`/dashboard/users/${user.id}`} >edit</Link>
              </div>
              <div>
                <button onClick={() => destroyUser(user.id)}>hapus</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Users