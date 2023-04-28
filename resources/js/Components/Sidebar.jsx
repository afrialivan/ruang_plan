import { Link } from "@inertiajs/react"

const Sidebar = ({ color, title, role }) => {
  // console.log(role);
  return (
    <div className="hidden md:flex md:flex-col bg-primary z-50 w-32 h-screen sticky top-0">
      <div className="flex justify-between flex-col h-screen pt-28">
        <ul className="flex-col">
          <li className="h-28">
            <Link href="/" className={`grid justify-center ${title == "Home" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`}>
              <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 13.6667V28.6667C2 32.3485 4.98477 35.3333 8.66667 35.3333H25.3333C29.0152 35.3333 32 32.3485 32 28.6667V13.6667M2 13.6667V11.1667C2 7.48477 4.98477 4.5 8.66667 4.5H25.3333C29.0152 4.5 32 7.48477 32 11.1667V13.6667M2 13.6667H32M23.6667 2V7M10.3333 2V7" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </Link>
          </li>
          <li className="h-28">
            <Link href="/rencana" className={`grid justify-center ${title == "Rencana" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 26H20M23.2706 32H10.7295C7.26635 32 4.45895 29.321 4.45895 26.0162V18.6995C4.45895 17.6372 4.0167 16.6184 3.22953 15.8672C1.40571 14.1268 1.6428 11.2431 3.72876 9.79538L13.3119 3.1445C15.5107 1.6185 18.4894 1.6185 20.6882 3.1445L30.2713 9.79537C32.3572 11.2431 32.5943 14.1268 30.7705 15.8672C29.9833 16.6184 29.5411 17.6372 29.5411 18.6995V26.0162C29.5411 29.321 26.7337 32 23.2706 32Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </Link>
          </li>
          {role == 'admin' ?
            <li className="h-28">
              <Link href="/dashboard/konfirmasi-kegiatan" className={`grid justify-center ${title == "Konfirmasi Kegiatan" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`}>
                <svg height="36" viewBox="0 0 1747 2048" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1280 576C1280 611.346 1251.35 640 1216 640H832C796.654 640 768 611.346 768 576V576C768 540.654 796.654 512 832 512H1216C1251.35 512 1280 540.654 1280 576V576ZM768 1088C768 1052.65 796.654 1024 832 1024H1216C1251.35 1024 1280 1052.65 1280 1088V1088C1280 1123.35 1251.35 1152 1216 1152H832C796.654 1152 768 1123.35 768 1088V1088ZM872.49 1920C889.464 1920 905.743 1926.74 917.745 1938.75V1938.75C958.063 1979.06 929.508 2048 872.49 2048H89C39.8466 2048 0 2008.15 0 1959V89C0 39.8467 39.8467 0 89 0H1447C1496.15 0 1536 39.8467 1536 89V1256.49C1536 1273.46 1529.26 1289.74 1517.25 1301.75V1301.75C1476.94 1342.06 1408 1313.51 1408 1256.49V217C1408 167.847 1368.15 128 1319 128H217C167.847 128 128 167.847 128 217V1831C128 1880.15 167.847 1920 217 1920H872.49ZM640 384C664.853 408.853 664.853 449.147 640 474L510.932 603.068C476.176 637.824 419.824 637.824 385.067 603.067L320 538C295.147 513.147 295.147 472.853 320 448L323.5 444.5C346.42 421.58 383.58 421.58 406.5 444.5V444.5C429.42 467.42 466.58 467.42 489.5 444.5L550 384C574.853 359.147 615.147 359.147 640 384V384ZM640 896C664.853 920.853 664.853 961.147 640 986L510.932 1115.07C476.176 1149.82 419.824 1149.82 385.067 1115.07L320 1050C295.147 1025.15 295.147 984.853 320 960L323.5 956.5C346.42 933.58 383.58 933.58 406.5 956.5V956.5C429.42 979.42 466.58 979.42 489.5 956.5L550 896C574.853 871.147 615.147 871.147 640 896V896ZM406.5 1468.5C429.42 1491.42 466.58 1491.42 489.5 1468.5L550 1408C574.853 1383.15 615.147 1383.15 640 1408V1408C664.853 1432.85 664.853 1473.15 640 1498L510.932 1627.07C476.176 1661.82 419.824 1661.82 385.067 1627.07L320 1562C295.147 1537.15 295.147 1496.85 320 1472L323.5 1468.5C346.42 1445.58 383.58 1445.58 406.5 1468.5V1468.5ZM1728 1408C1752.86 1432.86 1752.88 1473.16 1728.04 1498.04L1279.05 1947.84C1244.26 1982.69 1187.77 1982.67 1153.01 1947.78L991.938 1786.1C967.106 1761.18 967.143 1720.86 992.021 1695.98V1695.98C1016.88 1671.12 1057.17 1671.06 1082.1 1695.85L1153.14 1766.49C1187.89 1801.05 1244.06 1801 1278.76 1766.38L1637.96 1407.95C1662.84 1383.12 1703.14 1383.14 1728 1408V1408Z" fill="white" />
                </svg>

              </Link>
            </li>
            : ''}
          {role == 'admin' &&
            <li className="h-28">
              <Link href="/dashboard/users" className={`grid justify-center ${title == "Users" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 20 20"><path fill="white" d="M12.346 11.101c.88 0 1.741.146 2.555.428a.681.681 0 0 1 .426.873a.7.7 0 0 1-.89.418a6.372 6.372 0 0 0-2.09-.35c-3.467 0-6.276 2.757-6.276 6.159c0 .208.01.414.03.619a.688.688 0 0 1-.624.749a.694.694 0 0 1-.763-.614a7.469 7.469 0 0 1-.038-.754c0-4.157 3.434-7.528 7.67-7.528Zm4.146 1.369a.707.707 0 0 1 .7.694v2.259l2.114-.005a.707.707 0 0 1 .686.599l.008.102a.675.675 0 0 1-.688.68l-2.12.005v2.37a.674.674 0 0 1-.68.688a.707.707 0 0 1-.7-.694l-.001-2.361l-2.51.007a.707.707 0 0 1-.685-.598l-.008-.103a.675.675 0 0 1 .687-.68l2.516-.007v-2.269a.675.675 0 0 1 .681-.687ZM7.671 8.22a.69.69 0 0 1 .697.684a.69.69 0 0 1-.697.685c-3.467 0-6.276 2.757-6.276 6.159c0 .207.01.414.03.618a.688.688 0 0 1-.624.75a.694.694 0 0 1-.763-.614A7.469 7.469 0 0 1 0 15.748C0 11.59 3.434 8.22 7.67 8.22Zm4.938-5.254c2.183 0 3.952 1.737 3.952 3.878c0 2.142-1.77 3.878-3.952 3.878S8.658 8.986 8.658 6.844c0-2.141 1.769-3.878 3.951-3.878Zm0 1.369c-1.412 0-2.557 1.123-2.557 2.51c0 1.385 1.145 2.508 2.557 2.508s2.557-1.123 2.557-2.509s-1.145-2.509-2.557-2.509ZM8.025 0c1.245 0 2.395.57 3.138 1.52c.234.3.176.73-.13.96a.706.706 0 0 1-.977-.127a2.568 2.568 0 0 0-2.031-.984c-1.412 0-2.557 1.123-2.557 2.509c0 1.212.882 2.245 2.081 2.466c.378.07.628.427.557.799a.697.697 0 0 1-.815.546c-1.855-.342-3.218-1.938-3.218-3.811C4.073 1.736 5.843 0 8.025 0Z" /></svg>
              </Link>
            </li>
          }
          <li className="h-28">
            <Link href="/ruangan" className={`grid justify-center ${title == "Ruangan" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`} >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5386 2.30758H16.4614V0H13.5386V2.30758ZM16.4614 27.6909H13.5386V29.9985H16.4614V27.6909ZM13.5386 27.6909C12.4771 27.6909 11.754 26.9048 11.754 26.0756H9.44645C9.44645 28.3047 11.3387 29.9985 13.5386 29.9985V27.6909ZM18.246 26.0756C18.246 26.9048 17.5229 27.6909 16.4614 27.6909V29.9985C18.6613 29.9985 20.5535 28.3047 20.5535 26.0756H18.246ZM16.4614 2.30758C17.5229 2.30758 18.246 3.0937 18.246 3.92289H20.5535C20.5535 1.69377 18.6613 0 16.4614 0V2.30758ZM13.5386 0C11.3387 0 9.44645 1.69377 9.44645 3.92289H11.754C11.754 3.0937 12.4771 2.30758 13.5386 2.30758V0ZM27.4609 20.1205L25.9995 22.5189L27.9687 23.7234L29.4301 21.3251L27.4609 20.1205ZM2.53912 9.87798L4.00051 7.47963L2.03133 6.27507L0.569937 8.67342L2.53912 9.87798ZM4.00051 7.47963C4.47741 6.70428 5.58502 6.39199 6.47728 6.87658L7.58506 4.85053C5.66208 3.80597 3.18512 4.40131 2.03133 6.27507L4.00051 7.47963ZM3.16991 12.0456C2.32379 11.5794 2.0776 10.6103 2.53912 9.87798L0.569937 8.67342C-0.61462 10.5902 0.123775 13.0086 2.07752 14.0716L3.16991 12.0456ZM25.9995 22.5189C25.5226 23.2942 24.415 23.6065 23.5227 23.1219L22.4149 25.148C24.3379 26.1926 26.8149 25.5972 27.9687 23.7234L25.9995 22.5189ZM29.4301 21.3251C30.6146 19.4083 29.8762 16.9899 27.9225 15.9269L26.8301 17.953C27.6762 18.4191 27.9224 19.3883 27.4609 20.1205L29.4301 21.3251ZM4.00051 22.5189L2.53912 20.1205L0.569937 21.3251L2.03133 23.7234L4.00051 22.5189ZM25.9995 7.47963L27.4609 9.87798L29.4301 8.67342L27.9687 6.27507L25.9995 7.47963ZM27.4609 9.87798C27.9224 10.6103 27.6762 11.5794 26.8301 12.0456L27.9225 14.0716C29.8762 13.0086 30.6146 10.5902 29.4301 8.67342L27.4609 9.87798ZM23.5227 6.87658C24.415 6.39199 25.5226 6.70428 25.9995 7.47963L27.9687 6.27507C26.8149 4.40131 24.3379 3.80597 22.4149 4.85053L23.5227 6.87658ZM2.53912 20.1205C2.0776 19.3883 2.32379 18.4191 3.16991 17.953L2.07752 15.9269C0.123775 16.9899 -0.61462 19.4083 0.569937 21.3251L2.53912 20.1205ZM2.03133 23.7234C3.18512 25.5972 5.66208 26.1926 7.58506 25.148L6.47728 23.1219C5.58502 23.6065 4.47741 23.2942 4.00051 22.5189L2.03133 23.7234ZM23.3687 6.96273L23.5227 6.87658L22.4149 4.85053L22.2611 4.93513L23.3687 6.96273ZM6.47728 6.87658L6.63127 6.96273L7.73887 4.93513L7.58506 4.85053L6.47728 6.87658ZM23.5227 23.1219L23.3687 23.0358L22.2611 25.0634L22.4149 25.148L23.5227 23.1219ZM6.63127 23.0358L6.47728 23.1219L7.58506 25.148L7.73887 25.0634L6.63127 23.0358ZM2.07752 14.0716C2.80057 14.4716 2.80057 15.5269 2.07752 15.9269L3.16991 17.953C5.50825 16.6792 5.50825 13.3193 3.16991 12.0456L2.07752 14.0716ZM7.73887 25.0634C8.50806 24.6449 9.44645 25.2003 9.44645 26.0756H11.754C11.754 23.4496 8.93885 21.7805 6.63127 23.0358L7.73887 25.0634ZM20.5535 26.0756C20.5535 25.2003 21.4919 24.6449 22.2611 25.0634L23.3687 23.0358C21.0611 21.7805 18.246 23.4496 18.246 26.0756H20.5535ZM27.9225 15.9269C27.1994 15.5269 27.1994 14.4716 27.9225 14.0716L26.8301 12.0456C24.4917 13.3193 24.4917 16.6792 26.8301 17.953L27.9225 15.9269ZM6.63127 6.96273C8.93885 8.21806 11.754 6.54891 11.754 3.92289H9.44645C9.44645 4.79823 8.50806 5.35357 7.73887 4.93513L6.63127 6.96273ZM22.2611 4.93513C21.4919 5.35357 20.5535 4.79823 20.5535 3.92289H18.246C18.246 6.54891 21.0611 8.21806 23.3687 6.96273L22.2611 4.93513ZM18.4614 14.9993C18.4614 16.9115 16.9076 18.4606 15 18.4606V20.7682C18.1845 20.7682 20.7689 18.1853 20.7689 14.9993H18.4614ZM15 18.4606C13.0924 18.4606 11.5386 16.9115 11.5386 14.9993H9.23105C9.23105 18.1853 11.8155 20.7682 15 20.7682V18.4606ZM11.5386 14.9993C11.5386 13.087 13.0924 11.5379 15 11.5379V9.23031C11.8155 9.23031 9.23105 11.8133 9.23105 14.9993H11.5386ZM15 11.5379C16.9076 11.5379 18.4614 13.087 18.4614 14.9993H20.7689C20.7689 11.8133 18.1845 9.23031 15 9.23031V11.5379Z" fill={color} />
              </svg>
            </Link>
          </li>
        </ul>
        <ul className="flex-col">
          <li className="h-16">
            <Link href="/profil" className={`grid justify-center ${title == "Profil" ? "border-r-4 border-white" : ""}  hover:border-r-4 hover:border-white py-2`}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8385 28.3251C25.3475 24.3351 21.506 21.5 17 21.5C12.494 21.5 8.65247 24.3351 7.16147 28.3251M26.8385 28.3251C30.0005 25.5801 32 21.515 32 17C32 8.72 25.2845 2 17 2C8.7155 2 2 8.72 2 17C2 21.515 3.99947 25.5801 7.16147 28.3251M26.8385 28.3251C24.2045 30.6201 20.7635 32 17 32C13.2365 32 9.79547 30.6201 7.16147 28.3251M21.5 12.5C21.5 14.99 19.4855 17 17 17C14.5145 17 12.5 14.99 12.5 12.5C12.5 10.01 14.5145 8 17 8C19.4855 8 21.5 10.01 21.5 12.5Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar