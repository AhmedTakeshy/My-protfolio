/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo1.jpg";

const Header = () => {
  return (
    <header className="bg-pink-300 py-8">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <button></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
