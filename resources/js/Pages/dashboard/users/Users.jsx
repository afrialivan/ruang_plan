import { Link } from '@inertiajs/react'
import React from 'react'

const Users = (props) => {
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
            <p className='bg-slate-100 w100 mb-2' key={user.id}>{user.name}</p>

          )
        })}
      </div>

    </div>
  )
}

export default Users