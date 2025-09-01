



import logo from "../assets/logo.png"
import { Link } from "react-scroll";
import StartFreeModal from "./startfree";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
       
        <div className="flex items-center gap-3">
          <img className="h-7" src={logo} alt="" />
          <h1 className="text-2xl font-black text-purple-600 cursor-pointer">
          Topmind Care
        </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="why" smooth={true} duration={600} className="cursor-pointer hover:text-purple-600">
              Why
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} duration={600} className="cursor-pointer hover:text-purple-600">
              Programs
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={600} className="cursor-pointer hover:text-purple-600">
              Features
            </Link>
          </li>
          <li>
            <Link to="Parents" smooth={true} duration={600} className="cursor-pointer hover:text-purple-600">
              For Parents
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={600} className="cursor-pointer hover:text-purple-600">
              FAQ
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <StartFreeModal />

      </div>
    </nav>
  );
}
