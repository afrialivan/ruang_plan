import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { useSelector } from "react-redux"

const RencanaDetail = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')
  const rencana = props.rencana
  const hari = ['', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
  const bulan = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const date = new Date(rencana.mulai)
  const day = date.getDay()
  const month = date.getMonth() + 1
  // console.log(hari[day]);
  // console.log(month);

  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar />
            <div className="bg-primary rounded-3xl px-10 md:px-10 lg:px-24 py-14 mb-24 mx-4 mt-4">
              <div className="flex flex-1 flex-col md:flex-row gap-10 md:gap-0">
                <div className="md:w-4/5">
                  <div className="flex md:hidden justify-end">
                    <Link href="/rencana">
                      <img src="../img/back.svg" alt="" />
                    </Link>
                  </div>
                  <h1 className="font-bold text-5xl text-white mb-7">{rencana.judul}</h1>
                  <div className="w-100 h-72 overflow-hidden rounded-xl mb-5">
                    <img src="http://source.unsplash.com/1080x720?schedule" className="w-full h-full bg-black object-cover" alt="" />
                  </div>
                  <p className="text-white text-lg leading-tight">{rencana.deskripsi}</p>
                </div>
                <div className="hidden md:flex divider divider-horizontal before:bg-white after:bg-white"></div>
                <div className="flex md:hidden divider divider-vertical before:bg-white after:bg-white"></div>
                <div className="md:w-1/5">
                  <div className="hidden md:flex justify-end">
                    <Link href="/rencana">
                      <img src="../img/back.svg" alt="" />
                    </Link>
                  </div>
                  <div className="flex flex-col lg:justify-evenly h-full gap-10 md:mt-8 lg:mt-0 lg:gap-0">
                    <div className="font-bold text-white text-xl flex flex-col gap-2">
                      <h1>Hari, Tanggal</h1>
                      <h1>{hari[day]}, {rencana.mulai.slice(8, 10)} {bulan[month]} {rencana.mulai.slice(0, 4)}</h1>
                    </div>
                    <div className="font-bold text-white text-xl flex flex-col gap-2">
                      <h1>Waktu</h1>
                      <h1>{rencana.mulai.slice(11)} - {rencana.selesai.slice(11)} WITA</h1>
                    </div>
                    <div className="font-bold text-white text-xl flex flex-col gap-2">
                      <h1>Lokasi</h1>
                      <h1>{rencana.nama_ruangan}</h1>
                    </div>
                    <div className="font-bold text-white text-xl flex flex-col gap-2">
                      <h1>Penanggung Jawab</h1>
                      <h1>Kepala SMK Telkom Makassar</h1>
                    </div>
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

export default RencanaDetail