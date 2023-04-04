import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { useSelector } from "react-redux"

const Ruangan = (props) => {
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
  )
}

export default Ruangan