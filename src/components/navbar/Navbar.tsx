import { ChatBubbleIcon, DotsHorizontalIcon, HamburgerMenuIcon, HomeIcon, InfoCircledIcon, SlashIcon } from "@radix-ui/react-icons";
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
            <Link to="/" className="text-white hover:text-gray-400 flex justify-between">
              <HomeIcon width={50} height={21} /> Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="text-white hover:text-gray-400 flex justify-between">
              <InfoCircledIcon width={50} height={21} /> Sobre
            </Link>
          </li>
          <li>
            <Link to="/carrinho" className="text-white hover:text-gray-400 flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="21" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg> Carrinho
            </Link>
          </li>
          <li>
            <Link to="/contato" className="text-white hover:text-gray-400 flex justify-between">
              <ChatBubbleIcon width={50} height={21} />   Contato
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
              <Link to="/" className="text-white hover:text-gray-400">
                <HomeIcon /> Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-white hover:text-gray-400">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/carrinho" className="text-white hover:text-gray-400">
                Carrinho
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
