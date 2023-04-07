import Calendar from "@/Components/Calender/Calendar"
import MobileNav from "@/Components/MobileNav"
import Navbar from "@/Components/Navbar"
import Plans from "@/Components/Plan"
import Sidebar from "@/Components/Sidebar"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"

const Home = (props) => {
  const [mode, setMode] = useState('mytheme')
  const [color, setColor] = useState('white')

  const darkMode = () => {
    if (mode === "emerald") {
      setMode("mytheme")
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
            <div className="mx-4 lg:mx-16 mt-4">
              <div className="flex flex-1 flex-col md:flex-row gap-7">
                <div className="rounded-3xl overflow-hidden w-full h-full shadow-lg lg:mb-0 mb-5 text-neutral bg-primary">
                  <Calendar events={props.plans} />
                </div>
                <div className="md:w-1/3  bg-primary rounded-3xl h-full pt-5 overflow-hidden">
                  <h4 className={`font-bold text-xl mb-3 text-${color} px-5`}>Kegiatan Yang Akan Datang</h4>
                  <div className="flex flex-col gap-3 px-5 mb-5">
                    {props.plans.slice(0, 7).map((plan, index) => {
                      return (
                        // console.log(plan.judul)
                        <Plans key={index} plan={plan} />
                      )
                    })}
                  </div>
                  <div className="bg-secondary py-5 px-9">
                    <Link href="/rencana">
                      <div className="bg-primary rounded-2xl text-center py-3 px-4 text-xl text-secondary font-semibold">
                        Lainnya
                      </div>
                    </Link>
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

export default Home