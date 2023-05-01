import { Link } from "@inertiajs/react"
import { useState } from "react"

const MobileNav = ({ color, title }) => {
  let colorActive = 'black'
  if (color == 'white') {
    colorActive = 'black'
  } else {
    colorActive = 'white'
  }

  const home = `text-primary ${title == "Home" ? "active" : ""}`
  const rencana = `text-primary ${title == "Rencana" ? "active" : ""}`
  const profil = `text-primary ${title == "Profil" ? "active" : ""}`

  return (
    <div className="md:hidden">
      <div className="btm-nav">
        <button className={home}>
          <Link href="/">
            <svg width="30" height="30" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke={colorActive} d="M2 13.6667V28.6667C2 32.3485 4.98477 35.3333 8.66667 35.3333H25.3333C29.0152 35.3333 32 32.3485 32 28.6667V13.6667M2 13.6667V11.1667C2 7.48477 4.98477 4.5 8.66667 4.5H25.3333C29.0152 4.5 32 7.48477 32 11.1667V13.6667M2 13.6667H32M23.6667 2V7M10.3333 2V7" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </Link>
        </button>
        <button className={rencana}>
          <Link href="/rencana">
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke={colorActive} d="M14 26H20M23.2706 32H10.7295C7.26635 32 4.45895 29.321 4.45895 26.0162V18.6995C4.45895 17.6372 4.0167 16.6184 3.22953 15.8672C1.40571 14.1268 1.6428 11.2431 3.72876 9.79538L13.3119 3.1445C15.5107 1.6185 18.4894 1.6185 20.6882 3.1445L30.2713 9.79537C32.3572 11.2431 32.5943 14.1268 30.7705 15.8672C29.9833 16.6184 29.5411 17.6372 29.5411 18.6995V26.0162C29.5411 29.321 26.7337 32 23.2706 32Z" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </Link>
        </button>
        <button className={profil}>
          <Link href="/profil">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8385 28.3251C25.3475 24.3351 21.506 21.5 17 21.5C12.494 21.5 8.65247 24.3351 7.16147 28.3251M26.8385 28.3251C30.0005 25.5801 32 21.515 32 17C32 8.72 25.2845 2 17 2C8.7155 2 2 8.72 2 17C2 21.515 3.99947 25.5801 7.16147 28.3251M26.8385 28.3251C24.2045 30.6201 20.7635 32 17 32C13.2365 32 9.79547 30.6201 7.16147 28.3251M21.5 12.5C21.5 14.99 19.4855 17 17 17C14.5145 17 12.5 14.99 12.5 12.5C12.5 10.01 14.5145 8 17 8C19.4855 8 21.5 10.01 21.5 12.5Z" stroke={colorActive} strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default MobileNav