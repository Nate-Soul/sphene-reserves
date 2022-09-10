import img1 from "../Images/html-3.jpg";
import { Link } from "react-router-dom";

const SearchListItem = () => {
  return (
    <figure className="search-item rounded-lg p-3 shadow-md mb-6 flex flex-col md:flex-row justify-between gap-6 ">
        <img src={img1} alt="..." className="object-cover w-full md:w-48"/>
        <figcaption className="flex flex-col sm:flex-row gap-3">
            <div className="search-item-desc flex-2 px-3 flex flex-col gap-2">
                <h4 className="font-bold text-lg text-primary">Tower Street Apartments</h4>
                <div className="bg-primary px-1 text-white w-max rounded-md">
                    <small>Free Airport Taxi</small>
                </div>
                <small className="text-gray-500">500M from center</small>
                <p>Studio Apartment with air conditioning</p>
                <small>Entire studio | 1 Bathroom | 21m<sup>3</sup> 1 full bed</small>
                <p className="text-sm font-semibold text-primary-700 ">Free cancellation</p>
                <p className="text-sm text-primary-700">You can cancel later, so lock in this great price today</p>
            </div>
            <div className="search-item-details flex-1 flex flex-col justify-between px-3 sm:px-0">
                <div className="rating flex justify-start sm:justify-between gap-3 sm:gap-0">
                    <span className="font-semibold">Excellent</span>
                    <button className="bg-primary text-white px-1 font-bold">8.9</button>
                </div>
                <div className="si-detail-text text-left sm:text-right flex flex-col gap-1">
                    <p className="text-xl font-semibold text-gray-500">$112</p>
                    <small>includes taxes and fees</small>
                    <Link to="/hotels/12" className="bg-primary text-center text-white p-1 w-full font-semibold rounded-md">
                        See Availabilty
                    </Link>
                </div>
            </div>
        </figcaption>
    </figure>
  )
}

export default SearchListItem
