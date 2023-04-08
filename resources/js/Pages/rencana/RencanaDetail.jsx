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


  return (
    <>
      <Head title={props.title} />
      <div data-theme={warna} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar />
            <div className="mx-4 mt-4 bg-primary rounded-xl px-28 py-14">
              <div className="flex flex-1 gap-10">
                <div className="w-4/5">
                  <h1 className="font-bold text-5xl text-white mb-7">{rencana.judul}</h1>
                  <div className="w-100 h-72 overflow-hidden rounded-xl mb-5">
                    <img src="http://source.unsplash.com/1080x720?schedule" className="w-full h-full bg-black object-cover" alt="" />
                  </div>
                  <p className="text-white text-lg leading-tight">{rencana.deskripsi} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi atque exercitationem accusantium animi, libero rem minus possimus quidem tempore quis repudiandae, culpa distinctio maiores, assumenda odit eaque nam? Quisquam enim unde placeat nemo facilis laboriosam eos porro. Veniam, id quod. Non in commodi fugit similique sed dolorem adipisci, laborum quas! Ratione excepturi consequuntur perspiciatis cumque dolores aspernatur dolore, quisquam quas voluptatem vero omnis earum nostrum itaque magni error, doloribus, possimus cupiditate. Tempora placeat repudiandae eius velit facilis sit earum id optio! Numquam vero nemo dolore atque ex. Sed laboriosam fuga veniam eos quaerat ab culpa placeat error, deleniti aspernatur. Illum.</p>
                </div>
                <div className="w-1/5">
                  <h1>oi</h1>
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