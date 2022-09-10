import {
    FaBed,
    FaCalendarDay,
    FaUser,
    FaSearch 
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchDialog = () => {
    
    const navigate = useNavigate();

    const [destination, setDestination] = useState(" ");
  
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adults: 1,
      children: 0,
      rooms: 1,
    });
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const handleSearch = () => {
      navigate("/hotels", { state: { destination, date, options } });
    };
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 basis-full">
        <div className="hero-search-item gap-3 flex items-center basis-full md:basis-auto">
            <FaBed className="text-gray-500 text-md" />
            <input
            type="text"
            name="location"
            id="location"
            placeholder="Where are you going?"
            className="border-none outline-none bg-transparent w-4/5"
            onChange={(e) => setDestination(e.target.value)}
            />
        </div>
        <div className="hero-search-item relative cursor-pointer gap-3 basis-full md:basis-auto flex justify-center items-center">
            <FaCalendarDay className="text-gray-500 text-lg" />
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
            date[0].startDate,
            "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
            <DateRange
                onChange={(item) => setDate([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="date absolute z-40 top-8 md:top-14 left-0"
            />
            )}
        </div>
        <div className="hero-search-item relative cursor-pointer gap-3 basis-full md:basis-auto flex justify-center items-center">
            <FaUser className="text-gray-500 text-lg" />
            <span
            onClick={() => setOpenOptions(!openOptions)}
            >{`${options.adults} Adult(s) ${options.children} Child(ren) ${options.rooms} Room(s)`}</span>
            {openOptions && (
            <div className="options absolute top-8 md:top-14 bg-white rounded-md shadow left-0 p-3 text-gray-400 z-40 w-full xs:w-64">
                <div className="options-item flex justify-between my-2">
                <span className="option-text">Adult(s)</span>
                <div className="option-counter flex gap-3 justify-center text-sm text-black">
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("adults", "d")}
                    disabled={options.adults <= 1}
                    >
                    &minus;
                    </button>
                    <span className="option-counter-number">
                    {options.adults}
                    </span>
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("adults", "i")}
                    >
                    +
                    </button>
                </div>
                </div>
                <div className="options-item flex justify-between my-2">
                <span className="option-text">Child(ren)</span>
                <div className="option-counter flex gap-3 justify-center text-sm text-black">
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("children", "d ")}
                    disabled={options.children <= 0}
                    >
                    &minus;
                    </button>
                    <span className="option-counter-number">
                    {options.children}
                    </span>
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("children", "i")}
                    >
                    +
                    </button>
                </div>
                </div>
                <div className="options-item flex justify-between my-2">
                <span className="option-text">Room(s)</span>
                <div className="option-counter flex gap-3 justify-center text-sm text-black">
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("rooms", "d")}
                    disabled={options.rooms <= 1}
                    >
                    &minus;
                    </button>
                    <span className="option-counter-number">
                    {options.rooms}
                    </span>
                    <button
                    className="option-counter-btn w-6 h-6 border border-blue-200 bg-white hover:bg-blue-200"
                    onClick={() => handleOption("rooms", "i")}
                    >
                    +
                    </button>
                </div>
                </div>
            </div>
            )}
        </div>
        <div className="hero-search-item">
            <button
            className="inline-flex search-btn bg-primary text-white capitalize text-sm p-3 rounded-lg hover:bg-primary-700"
            onClick={handleSearch}
            >
            <FaSearch />
            </button>
        </div>
    </div>
  )
}

export default SearchDialog