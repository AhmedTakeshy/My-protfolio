/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8 bg-banner bg-no-repeat bg-cover bg-fixed">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className=" pointer-events-none">
            <img src={logo} alt="logo" className="w-12 h-12" />
          </a>
          <div className="flex justify-center items-center">
            <Link to="contact" smooth={true}>
              <button className="btn btn-sm">Let's Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
