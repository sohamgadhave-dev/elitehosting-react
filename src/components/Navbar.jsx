import React, { useState } from "react";
import { FaBars, FaServer, FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full bg-white fixed z-50 shadow">
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-24 py-8">
        {/* menu items.... */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <FaServer className="text-primary text-2xl" />
            <span className="text-2xl font-bold text-dark">Elitehosting</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
            <Link
              className={location.pathname === "/" ? "text-primary" : ""}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={location.pathname === "/hosting" ? "text-primary" : ""}
              to={"/hosting"}
            >
              Hosting
            </Link>
            <Link
              className={location.pathname === "/domain" ? "text-primary" : ""}
              to={"/domain"}
            >
              Domain
            </Link>
            <Link
              className={location.pathname === "/about" ? "text-primary" : ""}
              to={"/about"}
            >
              About
            </Link>
            <Link
              className={location.pathname === "/contact" ? "text-primary" : ""}
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Auth button */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            className="text-dark font-semibold rounded cursor-pointer"
            to={"/auth"}
          >
            Login
          </Link>
          <Link
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded cursor-pointer"
            to={"/auth"}
          >
            Sign up
          </Link>
        </div>

        {/* mobile version */}
        <div className="md:hidden z-20">
          {showMenu ? (
            <FaX
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <FaBars
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-6 font-semibold text-white fixed w-64 h-screen bg-primary top-0 right-0">
          <Link to={"/home"} onClick={() => setShowMenu(!showMenu)}>Home</Link>
          <Link to={"/hosting"} onClick={() => setShowMenu(!showMenu)}>Hosting</Link>
          <Link to={"/domain"} onClick={() => setShowMenu(!showMenu)}>Domain</Link>
          <Link to={"/about"} onClick={() => setShowMenu(!showMenu)}>About</Link>
          <Link to={"/contact"} onClick={() => setShowMenu(!showMenu)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
