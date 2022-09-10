import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SearchDialog from "./SearchDialog";

const Hero = () => {

  const location = useLocation();

  return (
    <section id="hero" className="py-8 bg-primary text-white relative">
      <div className="container">
        <div id="heroContainer" className="grid grid-cols-1 sm:grid-cols-2">
          <div
            id="heroIcons"
            className="col-span-2 flex flex-wrap gap-3 sm:gap-6 md:gap-8 xl:gap-10"
          >
            <div className="hero-icon flex justify-center sm:justify-start items-center gap-3 border-2 border-white rounded-lg px-3 py-2">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="hero-icon flex justify-center sm:justify-start items-center gap-3">
              <FaPlane />
              <span>Flights</span>
            </div>
            <div className="hero-icon flex justify-center sm:justify-start items-center gap-3">
              <FaCar />
              <span>Car Rentals</span>
            </div>
            <div className="hero-icon flex justify-center sm:justify-start items-center gap-3">
              <FaTaxi />
              <span>Taxis</span>
            </div>
          </div>
          {location.pathname === "/" && (
            <div id="heroContent" className="my-6 sm:my-10 text-center sm:text-left">
              <h1
                id="heroText"
                className="text-4xl md:text-5xl 2xl:text-6xl capitalize font-bold mt-10 mb-4 text-secondary"
              >
                Stay with us where ever you go
              </h1>
              <p id="heroCopy" className="text-xl">
                Get rewarded for your travels - save up to 15% instantly on your
                travels with a
                <span className="highlight">free Sphene account</span>
              </p>
              <Link
                to="/register"
                className="inline-flex my-10 uppercase text-md px-4 py-3 rounded-full border-2 border-transparent text-primary bg-secondary font-semibold hover:bg-primary hover:text-secondary hover:border-primary-200 ring-2 ring-transparent focus:ring-primary-200"
              >
                Reserve a spot
              </Link>
            </div>
          )}
          {location.pathname === "/" && (
            <div
              id="heroSearch"
              className="col-span-1 sm:cols-span-2 border-2 border-primary-200 rounded-xl absolute mt-0 -bottom-8 bg-white p-3 text-black text-lg justify-self-center hidden md:block"
            >
            <SearchDialog/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;