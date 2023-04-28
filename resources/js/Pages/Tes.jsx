import React, { useState } from "react"
// import { update } from "@/features/slice"
// import { Head, Link } from "@inertiajs/react"
// import { useDispatch, useSelector } from "react-redux"
// import { INITIAL_EVENTS, createEventId } from '../Components/Calender/event-utils'
// import MyWorker from '@/my-worker.js'


const Tes = (props) => {

  const [result, setResult] = useState('');

  const handleClick = () => {
    // Buat instance dari worker
    const worker = new MyWorker();

    // Kirim pesan ke worker untuk menjalankan algoritma
    worker.postMessage('start');

    // Terima pesan dari worker
    worker.onmessage = (event) => {
      setResult(event.data);
    };
  }

  return (
    <div>
      <button onClick={handleClick}>Jalankan Algoritma di Latar Belakang</button>
      <p>Hasil: {result}</p>
    </div>
  );











  // const [judul, setJudul] = useState('')
  // const [price, setPrice] = useState('')
  // const [date, setDate] = useState('')
  // const dispath = useDispatch()

  // console.log(props)

  // // {
  // //   id: createEventId(),
  // //   title: 'All-day event',
  // //   start: todayStr
  // // }

  // let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

  // // console.log(todayStr);
  // // console.log(date);

  // const updateTes = (e) => {
  //   e.preventDefault()
  //   const objectUpdate = {
  //     id: createEventId(),
  //     title: 'ini dari tes',
  //     start: todayStr
  //   }

  //   const tess = INITIAL_EVENTS.concat(objectUpdate)
  //   // console.log(tess)
  // }

  // const updatejudul = (e) => {
  //   e.preventDefault()
  //   dispath(update({ judul }))
  //   console.log('submit')
  //   setJudul('')
  //   setPrice('')
  // }

  // const start = new Date(2012, 4, 1);
  // const end = new Date(2012, 4, 23);
  // const range = moment().range(start, end);
  // console.log(range);

  // return (
  //   <div className="w-screen h-screen bg-white text-black">
  //     <Link href="/rencana">back</Link>
  //     {/* <form onSubmit={updatejudul}>
  //       <input type="text"
  //         value={judul}
  //         onChange={(e) => setJudul(e.target.value)}
  //       />
  //       <button>submit</button>
  //     </form> */}

  //     <div>
  //       <form onSubmit={updateTes}>
  //         <input type="date" value={date} onChange={() => setDate(event.target.value)} />
  //         <button>submit</button>
  //       </form>
  //     </div>
  //     <br />
  //     <br />
  //     <div>

  //     </div>

  //   </div>
  // )
}

export default Tes