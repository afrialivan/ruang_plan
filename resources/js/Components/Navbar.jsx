import { Head, Link } from "@inertiajs/react"
import { useDispatch, useSelector } from "react-redux"
import { update } from '../features/warnaActive'
import Logo from '@/img/Logo'
import Close from "@/img/Close"

const Navbar = (props) => {
  const { warna } = useSelector(state => state.warna)
  const dispath = useDispatch()

  const darkMode = (warna) => {
    if (warna == "emerald") {
      warna = 'mytheme'
      dispath(update({ warna }))
    } else {
      warna = 'emerald'
      dispath(update({ warna }))
    }
  }

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="img/logoo.svg" />
      </Head>
      <div className="navbar sticky top-0 border-b-2 bg-base-100 z-20 px-4 lg:px-16 h-24">
        <div className="flex-1">
          {/* <Link href="/" className="btn btn-ghost normal-case text-xl"><img src="img/logo.svg" className="w-36" alt="" /></Link> */}
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Logo />
          </Link>
        </div>
        {!props.title ?
          <div className="flex-none gap-3">
            <div className="relative hidden md:block">
              <div className="absolute pt-2 pl-3 bg-primary rounded-full">
                <svg height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 18.4999L22 22M21 11.5C21 6.24997 16.7463 2 11.5 2C6.25376 2 2 6.24997 2 11.5C2 16.75 6.25376 20.9999 11.5 20.9999C16.7463 20.9999 21 16.75 21 11.5Z" stroke="#EFF5F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <input className="bg-primary rounded-2xl pl-12 font-bold text-white placeholder:text-white" placeholder="Cari" type="text" />
            </div>
            <div className="bg-primary rounded-full p-2">
              <svg height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6123 15.9686L20.9073 16.5114C20.9951 16.6874 21.0488 16.8728 21.0659 17.0643C21.0981 17.4256 20.996 17.766 20.8144 18.0555C20.8143 18.0555 20.8143 18.0555 20.8143 18.0556L21.6123 15.9686ZM21.6123 15.9686C22.1472 16.7633 22.1007 17.6581 21.6447 18.3848L22.0682 18.6506L21.6123 15.9686ZM15.6328 4.01157V3.79259C17.7011 4.78274 19.2091 6.45542 19.6473 8.44168L18.7254 8.5363C18.2801 6.57843 16.6697 4.96957 14.5064 4.15202L14.5139 4.13216H15.1328H15.6328V4.01157ZM19.7954 9.43173L20.2457 13.0207L19.3244 13.1153L18.874 9.5263L19.7954 9.43173ZM20.98 15.1934L20.2955 15.7204C19.9053 15.2237 19.6301 14.6763 19.482 14.1044L20.4056 14.0096C20.5204 14.4258 20.7143 14.825 20.98 15.1934ZM10.75 1.29202C9.83028 1.46984 9.06691 2.12825 8.8546 3.01157H8.63114L8.48671 2.63006L8.32026 2.19042L8.18995 2.23077C8.6579 1.34717 9.59626 0.682905 10.75 0.532263V1.29202ZM11.75 1.29202V0.532263C12.9037 0.682905 13.8421 1.34716 14.31 2.23075L14.1798 2.19042L14.0133 2.63006L13.8689 3.01157H13.6454C13.4331 2.12825 12.6697 1.46984 11.75 1.29202ZM3.32207 19.82C2.19928 19.6885 1.31677 19.1202 0.855329 18.3848L0.431802 18.6506L0.855323 18.3848C0.399293 17.6581 0.352853 16.7633 0.887687 15.9686L1.59268 16.5114C1.50492 16.6874 1.4512 16.8728 1.43412 17.0642C1.40189 17.4256 1.50395 17.766 1.68563 18.0555L1.68565 18.0556C1.99718 18.5519 2.57331 18.9431 3.32207 19.065V19.82ZM6.86715 3.79264V4.01157V4.13216H7.36715H7.98612L7.99364 4.15202C5.83033 4.96957 4.21991 6.57843 3.77462 8.5363L6.86715 3.79264ZM14.4502 22.1076L15.3046 22.3972C14.6245 23.5203 13.3097 24.3325 11.75 24.477V23.7264C12.9164 23.5883 13.9124 22.9736 14.4502 22.1076ZM8.04982 22.1076C8.58763 22.9736 9.58365 23.5883 10.75 23.7264V24.477L8.04982 22.1076Z" fill="#EFF5F5" stroke="#EFF5F5" />
              </svg>
            </div>
          </div>
          :
          <Link href="/logout">
            <div className="bg-primary p-4 rounded-full">
              <Close />
            </div>
          </Link>
        }

      </div>
    </>
  )
}

export default Navbar