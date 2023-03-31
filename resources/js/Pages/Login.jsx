import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import { useState } from 'react'

const Login = (props) => {
  console.log(props)
  const [nis, setNis] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    console.log('tes')
    const data = {
      nis, password
    }

    Inertia.post('login', data)

  }

  return (
    <div>
      <div>
        <label htmlFor="">Nis</label>
        <input type="text"
          value={nis}
          onChange={(event) => setNis(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button onClick={() => loginUser()}>login</button>
    </div>
  )
}

export default Login