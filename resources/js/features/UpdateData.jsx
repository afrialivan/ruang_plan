import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import { useEffect } from 'react'

const UpdateData = (props) => {
  const datas = props.data
  // const date = new Date(rencana.mulai)

  useEffect(() => {
    // console.log(datas);

    datas.map(data => {
      const mulai = new Date(data.mulai)
      const selesai = new Date(data.selesai)
      const sekarang = new Date()
      const status = data.status_rencana
      // console.log(selesai);
      if (mulai <= sekarang && sekarang <= selesai && status === 'belum') {
        // console.log('udin')
        const datanya = {...data, status_rencana: 'proses'}
        Inertia.post('/rencana/update', datanya)
      }
      if (sekarang >= selesai && status === 'proses') {
        // console.log('udin')
        const datanya = {...data, status_rencana: 'selesai'}
        Inertia.post('/rencana/update', datanya)
      }
    })
  }, [])

  return (
    <></>
  )
}

export default UpdateData