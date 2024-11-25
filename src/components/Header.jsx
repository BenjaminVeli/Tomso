import { useState } from "react";
import Menu from "../assets/svg/bx-menu.svg";
import MenuClose from "../assets/svg/bx-x.svg";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul group">
      {navLinks.map(({ id, href, name}) => (
        <li key={id} className="nav-li">
          <a href={href} className="" onClick={() => {}}>{name}</a>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black border-b border-dashed border-light-gray">
      <div className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-600 font-bold text-xl">Tomso</a>
            <nav className="md:flex hidden">
              <NavItems />
            </nav>
            <button onClick={toggleMenu} className="md:invisible flex" alt="Toggle menu">
              <img src={isOpen ? MenuClose : Menu} alt="MenuSvg" className="h-6 w-6"/>
            </button>
          </div>

          <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5">
              <NavItems onClick={closeMenu} />
            </nav>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
