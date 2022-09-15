import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const Navbar = () => {

  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);
  const [openSearchDialog, setOpenSearchDialog] = useState(false);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

  const toggleSearchDialog = () => {
    setOpenSearchDialog(!openSearchDialog);
  }

  return (
    <>
    <nav id="mainMenu" className="bg-secondary py-4">
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="navbar-brand text-primary font-bold flex items-center">
          Sphene Reserves
        </Link>
        <div id="navbarTogglers" className="flex justify-between gap-6 items-center text-primary text-lg md:hidden">
          <button onClick={toggleSearchDialog} className="hover:text-primary-700">
            <FaSearch/>
          </button>
          {openMenu && (
            <button onClick={handleToggle} className="hover:text-primary-700">
              <FaBars />
            </button>
          )}
          {closeMenu && (
            <button onClick={handleToggle} className="hover:text-primary-700">
              <FaTimes />
            </button>
          )}
        </div>
        <div
          id="mainMobileMenu"
          className={`${
            !closeMenu ? "hidden " : ""
          }md:flex w-full md:w-auto md:order-1 items-center justify-between`}
        >
          <ul className="uppercase text-sm text-gray-700 font-medium flex flex-col mt-4 md:mt-0 md:flex-row md:items-center gap-3">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link block py-2 px-3 ${(location.pathname === "/") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link block py-2 px-3 ${(location.pathname === "/about") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link block py-2 px-3 ${(location.pathname === "/contact") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={`nav-link block py-2 px-3 block md:inline-flex ${(location.pathname === "/login") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link nav-link-btn block bg-primary uppercase text-sm text-white rounded hover:bg-primary-700 py-2 px-3 text-center transition"
              >
                Reserve a spot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {openSearchDialog && (
      <div className={`mobile-search-dialog block md:hidden bg-white py-6 shadow`}>
        <SearchDialog/>
      </div>
      )
    }
    </>
  );
};

export default Navbar;