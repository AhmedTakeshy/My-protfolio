import React from "react";
import logo from "./assets/logo1.jpg";

const Header = () => {
  return (
    <header className="container mx-10 bg-primary border-secondary rounded-b-lg bg-opacity-90">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>
        <div className="menu">
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="#" className="font-mova text-2xl text-white">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="font-mova text-2xl">
                About
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="font-mova text-2xl">
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="font-mova text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
