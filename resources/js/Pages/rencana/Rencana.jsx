import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Plan from "@/Components/Plan"
import Sidebar from "@/Components/Sidebar"
import UpdateData from "@/features/UpdateData"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { useSelector } from "react-redux"

const Rencana = (props) => {
  const { warna } = useSelector(state => state.warna)
  const [color, setColor] = useState('white')

  return (
    <>
      <Head title={props.title} />
      <UpdateData data={props.rencana} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} role={props.auth.user.role} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4">
              <div className="bg-primary w-full h-full rounded-lg px-8 pt-5 pb-7 mb-14">
                <h2 className={`font-bold text-3xl md:mb-3 text-${color}`}>Rencana</h2>
                <div className="flex md:flex-col flex-col-reverse">
                  <div className="flex gap-4 flex-col md:flex-row md:mb-4">
                    <div className="card md:w-1/3 bg-secondary h-80 md:h-[650px] overflow-hidden">
                      <div className="flex flex-col gap-2 overflow-y-scroll px-6 py-5 h-full">
                        <h2 className="font-bold text-2xl text-primary">Akan Datang</h2>
                        {props.rencana.map(rencana => {
                          if (rencana.status_rencana === 'belum' && rencana.kategori === props.auth.user.role) {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'belum' && rencana.kategori === 'semua') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'belum' && props.auth.user.role === 'admin') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                        })}
                      </div>
                    </div>
                    <div className="card md:w-1/3 bg-secondary h-80 md:h-[650px] overflow-hidden">
                      <div className="flex flex-col gap-2 overflow-y-scroll px-6 py-5 h-full">
                        <h2 className="font-bold text-2xl text-primary">Sedang Berlangsung</h2>
                        {props.rencana.map(rencana => {
                          if (rencana.status_rencana === 'proses' && rencana.kategori === props.auth.user.role) {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'proses' && rencana.kategori === 'semua') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'proses' && props.auth.user.role === 'admin') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                        })}
                      </div>
                    </div>
                    <div className="card md:w-1/3 bg-secondary h-80 md:h-[650px] overflow-hidden">
                      <div className="flex flex-col gap-2 overflow-y-scroll px-6 py-5 h-full">
                        <h2 className="font-bold text-2xl text-primary">Telah Selesai</h2>
                        {props.rencana.map(rencana => {
                          if (rencana.status_rencana === 'selesai' && rencana.kategori === props.auth.user.role) {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'selesai' && rencana.kategori === 'semua') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                          if (rencana.status_rencana === 'selesai' && props.auth.user.role === 'admin') {
                            return (
                              <Link key={rencana.id} href={`/rencana/${rencana.id}`}>
                                <Plan plan={rencana} />
                              </Link>
                            )
                          }
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex md:justify-end mb-2 md:mb-0">
                    <Link href="/rencana/tambah-rencana" className="bg-slate-300 rounded-lg px-3 py-1 md:px-5 md:py-3">Tambah Kegiatan</Link>
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

export default Rencana