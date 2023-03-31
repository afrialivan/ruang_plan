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
    <div data-theme={mode} className="h-100 overflow-x-hidden">
      <Head title={props.title} />
      <div className="grid grid-cols-12">
        <div className="col-start-1 row-span-1">
          <Sidebar color={color} title={props.title} />
        </div>
        <div className="xl:ml-[2%] lg:ml-[7%] md:ml-[10%] lg:-mr-[6%] md:-mr-[4%]" style={{ gridColumn: '2/12' }}>
          {/* <div className="col-span-12 lg:mr-10 mr-5 ml-2 md:-ml-3 lg:-ml-7 xl:-ml-36"> */}
          <Navbar darkMode={() => darkMode()} />
          <div className="py-10">
            <div className="grid lg:grid-flow-col grid-cols-1 xl:gap-20 lg:gap-10">
              <div className="w-100 bg-base-200 rounded-lg h-100 shadow-lg lg:mb-0 mb-5">
                <Calendar events={props.plans} />
              </div>
              <div className="w-100 lg:col-span-7 h-[630px] bg-base-200 rounded-lg shadow-lg px-5 py-4">
                <h4 className="font-bold text-xl">Kegiatan Yang Akan Datang</h4>
                <div className="flex flex-col gap-3 mt-3">
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



  )
}

export default Home