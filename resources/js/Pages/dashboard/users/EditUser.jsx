import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import { useState } from 'react'

const EditUser = (props) => {
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
  

  console.log(props.user.id);

  return (
    <div>
      <div>
        <label htmlFor="">nama</label>
        <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">nis</label>
        <input type="text" 
          value={nis}
          onChange={(e) => setNis(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">nama</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="siswa">Siswa</option>
          <option value="guru">Guru</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <button onClick={() => submitEdit()}>edit</button>
      </div>
    </div>
  )
}

export default EditUser