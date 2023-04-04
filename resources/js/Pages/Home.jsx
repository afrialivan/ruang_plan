import Calendar from "@/Components/Calender/Calendar"
import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Plans from "@/Components/Plan"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"

const Home = (props) => {
  // const { title } = useSelector(state => state.title)
  const [mode, setMode] = useState('emerald')
  const [color, setColor] = useState('black')

  // console.log(props)

  const darkMode = () => {
    if (mode === "emerald") {
      setMode("forest")
      setColor("white")
    } else {
      setMode("emerald")
      setColor("black")
    }
  }

  return (
    <>
      <Head title={props.title} />
      <div data-theme={mode} className="flex flex-col">
        <div className="flex flex-1">
          <Sidebar color={color} title={props.title} />
          <div className="w-full">
            <Navbar darkMode={() => darkMode()} />
            <div className="mx-4 mt-4">
              <div className="flex flex-1 flex-col md:flex-row gap-5">
                <div className="w-full bg-base-200 rounded-lg h-100 shadow-lg lg:mb-0 mb-5">
                  <Calendar events={props.plans} />
                </div>
                <div className="md:w-1/3 bg-slate-200 px-5 py-5 rounded-lg h-full">
                  <h4 className="font-bold text-xl">Kegiatan Yang Akan Datang</h4>
                  <div className="flex flex-col gap-2">
                    {props.plans.slice(0, 5).map((plan, index) => {
                      return (
                        // console.log(plan.judul)
                        <Plans key={index} plan={plan} />
                      )
                    })}
                  </div>
                </div>
              </div>
              <Link href="tes">
                tes
              </Link>
            </div>
          </div>
        </div>
        <MobileNav color={color} title={props.title} />
      </div>
    </>



  )
}

export default Home