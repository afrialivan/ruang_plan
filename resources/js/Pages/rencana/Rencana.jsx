import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Plan from "@/Components/Plan"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { useSelector } from "react-redux"

const Rencana = (props) => {
  // const { title } = useSelector(state => state.title)
  const [mode, setMode] = useState('emerald')
  const [color, setColor] = useState('black')

  return (
    <>
      <Head title={props.title} />
      <div data-theme={mode} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4">

              <div className="bg-slate-200 w-full h-full rounded-lg px-8 pt-5 pb-7">
                <h2 className="font-bold text-3xl md:mb-3">Rencana</h2>
                <div className="flex md:flex-col flex-col-reverse">
                  <div className="flex gap-4 flex-col md:flex-row md:mb-4">
                    <div className="card md:w-1/3 bg-slate-300 h-[450px] px-3 py-3 flex flex-col gap-2 overflow-y-scroll">
                      <h2 className="font-bold text-xl">Akan Datang</h2>
                      {props.rencana.map(rencana => {
                        if (rencana.status_rencana === 'belum') {
                          return (
                            <Plan key={rencana.id} plan={rencana} />
                          )
                        }
                      })}
                    </div>
                    <div className="card md:w-1/3 bg-slate-300 h-[450px] px-3 py-3 flex flex-col gap-2 overflow-y-scroll">
                      <h2 className="font-bold text-xl">Sedang Berlangsung</h2>
                      {props.rencana.map(rencana => {
                        if (rencana.status_rencana === 'proses') {
                          return (
                            <Plan key={rencana.id} plan={rencana} />
                          )
                        }
                      })}
                    </div>
                    <div className="card md:w-1/3 bg-slate-300 h-[450px] px-3 py-3 flex flex-col gap-2 overflow-y-scroll">
                      <h2 className="font-bold text-xl">Telah Selesai</h2>
                      {props.rencana.map(rencana => {
                        if (rencana.status_rencana === 'selesai') {
                          return (
                            <Plan key={rencana.id} plan={rencana} />
                          )
                        }
                      })}
                    </div>
                  </div>
                  <div className="flex md:justify-end mb-2 md:mb-0">
                    <Link href="/rencana/tambah-rencana" className="bg-slate-300 rounded-lg px-3 py-1 md:px-5 md:py-3">Tambah Kegiatan</Link>
                  </div>
                </div>
              </div>
              
              <div>
                <Link href="tes">
                  tes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>
    </>
    // <div>
    //   <Head title={props.title} />
    //   <div data-theme={mode} className="h-100">
    //     <div className="grid grid-cols-12">
    //       <div className="col-start-1 row-span-1">
    //         <Sidebar color={color} title={props.title} />
    //       </div>
    //       <div className="xl:ml-[1%] lg:ml-[4%] md:ml-[10%] lg:-mr-[6%] md:-mr-[4%]" style={{ gridColumn: '2/12' }}>
    //         <Navbar darkMode={() => darkMode()} />
    //         <div className="py-10">
    //           <h4>title: {props.title} </h4>
    //           <div>
    //             <Link href="/rencana/tambah-rencana">
    //               Tambah Rencana
    //             </Link>
    //           </div>
    //           <div>
    //             <Link href="/tes">
    //               tes
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <MobileNav color={color} title={props.title} />
    //   </div>
    // </div>
  )
}

export default Rencana