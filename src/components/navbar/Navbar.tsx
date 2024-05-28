import { DotsHorizontalIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

  return (
    <nav className="bg-neutral-800 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">Minha Logo</Link>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/cesta" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="text-white hover:text-gray-400">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/servicos" className="text-white hover:text-gray-400">
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/contato" className="text-white hover:text-gray-400">
              Contato
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuMobileIsVisible((prev) => !prev)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>
      {menuMobileIsVisible && (
        <div className="">
          <ul className=" flex flex-col justify-center ">
            <li>
              <Link to="/cesta" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-white hover:text-gray-400">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-white hover:text-gray-400">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-white hover:text-gray-400">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
