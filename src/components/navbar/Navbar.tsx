
import { Link } from 'react-router-dom'

type Props = {}

export default function Navbar ({}: Props) {
  return (
    <>
    
<nav className=" border-gray-200 bg-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <img src="vite.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Vite Ecommerse</span>
    </Link>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
        <li>
          <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            About
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<br />

    </>
  )
}
