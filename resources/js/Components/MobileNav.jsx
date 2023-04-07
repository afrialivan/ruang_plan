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
  const ruangan = `text-primary ${title == "Ruangan" ? "active" : ""}`
  const rencana = `text-primary ${title == "Rencana" ? "active" : ""}`

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
        <button className={ruangan}>
          <Link href="/ruangan">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={colorActive} d="M13.5386 2.30758H16.4614V0H13.5386V2.30758ZM16.4614 27.6909H13.5386V29.9985H16.4614V27.6909ZM13.5386 27.6909C12.4771 27.6909 11.754 26.9048 11.754 26.0756H9.44645C9.44645 28.3047 11.3387 29.9985 13.5386 29.9985V27.6909ZM18.246 26.0756C18.246 26.9048 17.5229 27.6909 16.4614 27.6909V29.9985C18.6613 29.9985 20.5535 28.3047 20.5535 26.0756H18.246ZM16.4614 2.30758C17.5229 2.30758 18.246 3.0937 18.246 3.92289H20.5535C20.5535 1.69377 18.6613 0 16.4614 0V2.30758ZM13.5386 0C11.3387 0 9.44645 1.69377 9.44645 3.92289H11.754C11.754 3.0937 12.4771 2.30758 13.5386 2.30758V0ZM27.4609 20.1205L25.9995 22.5189L27.9687 23.7234L29.4301 21.3251L27.4609 20.1205ZM2.53912 9.87798L4.00051 7.47963L2.03133 6.27507L0.569937 8.67342L2.53912 9.87798ZM4.00051 7.47963C4.47741 6.70428 5.58502 6.39199 6.47728 6.87658L7.58506 4.85053C5.66208 3.80597 3.18512 4.40131 2.03133 6.27507L4.00051 7.47963ZM3.16991 12.0456C2.32379 11.5794 2.0776 10.6103 2.53912 9.87798L0.569937 8.67342C-0.61462 10.5902 0.123775 13.0086 2.07752 14.0716L3.16991 12.0456ZM25.9995 22.5189C25.5226 23.2942 24.415 23.6065 23.5227 23.1219L22.4149 25.148C24.3379 26.1926 26.8149 25.5972 27.9687 23.7234L25.9995 22.5189ZM29.4301 21.3251C30.6146 19.4083 29.8762 16.9899 27.9225 15.9269L26.8301 17.953C27.6762 18.4191 27.9224 19.3883 27.4609 20.1205L29.4301 21.3251ZM4.00051 22.5189L2.53912 20.1205L0.569937 21.3251L2.03133 23.7234L4.00051 22.5189ZM25.9995 7.47963L27.4609 9.87798L29.4301 8.67342L27.9687 6.27507L25.9995 7.47963ZM27.4609 9.87798C27.9224 10.6103 27.6762 11.5794 26.8301 12.0456L27.9225 14.0716C29.8762 13.0086 30.6146 10.5902 29.4301 8.67342L27.4609 9.87798ZM23.5227 6.87658C24.415 6.39199 25.5226 6.70428 25.9995 7.47963L27.9687 6.27507C26.8149 4.40131 24.3379 3.80597 22.4149 4.85053L23.5227 6.87658ZM2.53912 20.1205C2.0776 19.3883 2.32379 18.4191 3.16991 17.953L2.07752 15.9269C0.123775 16.9899 -0.61462 19.4083 0.569937 21.3251L2.53912 20.1205ZM2.03133 23.7234C3.18512 25.5972 5.66208 26.1926 7.58506 25.148L6.47728 23.1219C5.58502 23.6065 4.47741 23.2942 4.00051 22.5189L2.03133 23.7234ZM23.3687 6.96273L23.5227 6.87658L22.4149 4.85053L22.2611 4.93513L23.3687 6.96273ZM6.47728 6.87658L6.63127 6.96273L7.73887 4.93513L7.58506 4.85053L6.47728 6.87658ZM23.5227 23.1219L23.3687 23.0358L22.2611 25.0634L22.4149 25.148L23.5227 23.1219ZM6.63127 23.0358L6.47728 23.1219L7.58506 25.148L7.73887 25.0634L6.63127 23.0358ZM2.07752 14.0716C2.80057 14.4716 2.80057 15.5269 2.07752 15.9269L3.16991 17.953C5.50825 16.6792 5.50825 13.3193 3.16991 12.0456L2.07752 14.0716ZM7.73887 25.0634C8.50806 24.6449 9.44645 25.2003 9.44645 26.0756H11.754C11.754 23.4496 8.93885 21.7805 6.63127 23.0358L7.73887 25.0634ZM20.5535 26.0756C20.5535 25.2003 21.4919 24.6449 22.2611 25.0634L23.3687 23.0358C21.0611 21.7805 18.246 23.4496 18.246 26.0756H20.5535ZM27.9225 15.9269C27.1994 15.5269 27.1994 14.4716 27.9225 14.0716L26.8301 12.0456C24.4917 13.3193 24.4917 16.6792 26.8301 17.953L27.9225 15.9269ZM6.63127 6.96273C8.93885 8.21806 11.754 6.54891 11.754 3.92289H9.44645C9.44645 4.79823 8.50806 5.35357 7.73887 4.93513L6.63127 6.96273ZM22.2611 4.93513C21.4919 5.35357 20.5535 4.79823 20.5535 3.92289H18.246C18.246 6.54891 21.0611 8.21806 23.3687 6.96273L22.2611 4.93513ZM18.4614 14.9993C18.4614 16.9115 16.9076 18.4606 15 18.4606V20.7682C18.1845 20.7682 20.7689 18.1853 20.7689 14.9993H18.4614ZM15 18.4606C13.0924 18.4606 11.5386 16.9115 11.5386 14.9993H9.23105C9.23105 18.1853 11.8155 20.7682 15 20.7682V18.4606ZM11.5386 14.9993C11.5386 13.087 13.0924 11.5379 15 11.5379V9.23031C11.8155 9.23031 9.23105 11.8133 9.23105 14.9993H11.5386ZM15 11.5379C16.9076 11.5379 18.4614 13.087 18.4614 14.9993H20.7689C20.7689 11.8133 18.1845 9.23031 15 9.23031V11.5379Z" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default MobileNav