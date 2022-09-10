import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchList from "../Components/SearchList";

const Hotels = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);  

  return (
    <>
        <Header/>
        <Hero/>
        <section className="py-8">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <aside className="col-span-1 pt-0 static lg:sticky top-16 h-max">
                  <div className="search-filter bg-secondary-700 shadow-md p-3 rounded-lg sticky-24">
                    <h3 className="text-xl font-bold mb-6 text-primary">Search Filter</h3>
                    <div className="search-filter-item mb-3">
                      <label htmlFor="destination" className="mb-2">Destination</label>
                      <input type="text" className="w-full border-none outline-none rounded-lg py-2 px-3" placeholder="Your Destination" defaultValue={destination}/>
                    </div>
                    <div className="search-filter-item mb-3">
                      <label className="mb-2">Check-in Date</label>
                      <div className="w-full rounded-lg py-2 px-3 bg-white text-gray-500">
                        <span onClick={() => setOpenDate(!openDate)} className="cursor-pointer">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && (
                        <DateRange
                          onChange={(item) => setDate([item.selection])}
                          minDate={new Date()}
                          ranges={date}
                          className="w-full mt-3"
                        />
                        )} 
                      </div>
                    </div>
                    <div className="options mt-4 text-sm">
                      <h6 className="mb-3 text-lg font-semibold ">Options</h6>
                      <div className="filter-option-item flex justify-between mb-3">
                        <span>Min price <small>(per night)</small></span>
                        <input type="number" className="w-16 border-none outline-none rounded-lg py-2 px-3"/>
                      </div>
                      <div className="filter-option-item flex justify-between mb-3">
                        <span>Max price <small>(per night)</small></span>
                        <input type="number" className="w-16 border-none outline-none rounded-lg py-2 px-3"/>
                      </div>
                      <div className="filter-option-item flex justify-between mb-3">
                        <span>Adults</span>
                        <input type="number" className="w-16 border-none outline-none rounded-lg py-2 px-3" defaultValue={options.adults} min={1}/>
                      </div>
                      <div className="filter-option-item flex justify-between mb-3">
                        <span>Children</span>
                        <input type="number" className="w-16 border-none outline-none rounded-lg py-2 px-3" defaultValue={options.children} min={0}/>
                      </div>
                      <div className="filter-option-item flex justify-between mb-3">
                        <span>Rooms</span>
                        <input type="number" className="w-16 border-none outline-none rounded-lg py-2 px-3" defaultValue={options.rooms}  min={1}/>
                      </div>
                    </div>
                    <button className="w-full p-3 mt-6 uppercase inline-flex justify-center bg-primary text-white items-center gap-3 rounded-lg hover:bg-primary-700 ring-4 ring-transparent focus:ring-primary-200">
                      Search
                    </button>
                  </div>
                </aside>
                <SearchList/>
              </div>
            </div>
        </section>
        <Footer/>      
    </>
  )
}

export default Hotels
