import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'

const Login = (props) => {
  // console.log(props)
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
    <div className='flex flex-1 justify-center'>
      <div className='md:w-1/2 h-screen'>
        <div className="flex w-100 h-screen justify-center items-center">
          <div className='w-screen md:w-96'>
            <img src="img/logo(1).svg" className='md:mb-14 w-20 h-20 block m-auto' alt="" />
            <div className='m-auto text-primary px-10 md:px-0'>
              <div className='text-center'>
                <h1 className='font-bold text-3xl'>Selamat Datang</h1>
                <p>Anda Harus Mempunyai Akun Untuk Masuk</p>
              </div>
              <div className=''>
                <div className='mt-9 flex flex-col gap-7'>
                  <div className='relative'>
                    <label htmlFor="" className='bg-base-100 absolute text-[#BBCCCC] -top-3 left-5 px-3'>NIS</label>
                    <input type="text" className='w-full h-14 rounded-xl border-[#BBCCCC] bg-transparent'
                      value={nis}
                      onChange={(event) => setNis(event.target.value)}
                    />
                  </div>
                  <div className='relative'>
                    <label htmlFor="" className='bg-base-100 absolute text-[#BBCCCC] -top-3 left-5 px-3'>Password</label>
                    <input type="password" className='w-full h-14 rounded-xl border-[#BBCCCC] bg-transparent'
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className='mt-1'>
                  <Link>Lupa password</Link>
                </div>
                <div className='grid mt-9'>
                  <button className='md:m-auto bg-primary px-3 py-3 md:w-4/5 text-white rounded-xl text-xl' onClick={() => loginUser()}>Masuk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-1/2 hidden md:block bg-slate-300 h-screen overflow-hidden bg-[url('img/login.png')] bg-no-repeat bg-cover bg-bottom`}></div>

      {/* <div>
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
      <button onClick={() => loginUser()}>login</button> */}
    </div>
  )
}

export default Login