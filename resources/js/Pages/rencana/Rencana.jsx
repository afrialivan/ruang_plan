import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { useSelector } from "react-redux"

const Rencana = (props) => {
  // const { title } = useSelector(state => state.title)
  const [mode, setMode] = useState('emerald')
  const [color, setColor] = useState('black')

  return (
    <div>
      <Head title={props.title} />
      <div data-theme={mode} className="h-100">
        <div className="grid grid-cols-12">
          <div className="col-start-1 row-span-1">
            <Sidebar color={color} title={props.title} />
          </div>
          <div className="xl:ml-[1%] lg:ml-[4%] md:ml-[10%] lg:-mr-[6%] md:-mr-[4%]" style={{ gridColumn: '2/12' }}>
            <Navbar darkMode={() => darkMode()} />
            <div className="py-10">
              <h4>title: {props.title} </h4>
              <div>
                <Link href="/rencana/tambah-rencana">
                  Tambah Rencana
                </Link>
              </div>
              <div>
                <Link href="/tes">
                  tes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>
    </div>
  )
}

export default Rencana