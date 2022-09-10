import { Link } from "react-router-dom";
import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";
import img4 from "../Images/html-4.jpg";

const PopularLists = () => {
  return (
    <section id="popularHotels" className="py-8">
        <div className="container">
            <h3 className="home-headings font-bold text-lg mb-6">Browse by Most Popular</h3>
            <div id="popularLists" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Link to="/hotels/12">
                    <figure className="popular-item cursor-pointer rounded-xl overflow-hidden transition duration-300 shadow-md hover:shadow-custom">
                        <img src={img3} alt="..." />
                        <figcaption className="p-3">
                            <h6 className="text-lg font-semibold">Arial Grande</h6>
                            <p className="city fw-300 text-gray-500">USA</p>
                            <p className="price fw-500 ">Starts from $120</p>
                            <div className="rating mt-3 flex gap-3 items-center text-sm">
                                <button className="bg-blue-500 text-white p-1 font-bold">9.0</button> 
                                <span>Excellence</span>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/hotels/12">
                    <figure className="popular-item cursor-pointer rounded-xl overflow-hidden transition duration-300 shadow-md hover:shadow-custom">
                        <img src={img1} alt="..." />
                        <figcaption className="p-3">
                            <h6 className="text-lg font-semibold">Budes Aires</h6>
                            <p className="city fw-300 text-gray-500">Madrid</p>
                            <p className="price fw-500 ">Starts from $120</p>
                            <div className="rating mt-3 flex gap-3 items-center text-sm">
                                <button className="bg-blue-500 text-white p-1 font-bold">9.4</button> 
                                <span>Excellence</span>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/hotels/12">
                    <figure className="popular-item cursor-pointer rounded-xl overflow-hidden transition duration-300 shadow-md hover:shadow-custom">
                        <img src={img4} alt="..." />
                        <figcaption className="p-3">
                            <h6 className="text-lg font-semibold">Delta Premiere</h6>
                            <p className="city fw-300 text-gray-500">Madrid</p>
                            <p className="price fw-500 ">Starts from $120</p>
                            <div className="rating mt-3 flex gap-3 items-center text-sm">
                                <button className="bg-blue-500 text-white p-1 font-bold">7.0</button> 
                                <span>Good</span>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/hotels/12">
                    <figure className="popular-item rounded-xl overflow-hidden transition duration-300 shadow-md hover:shadow-custom">
                        <img src={img2} alt="..." />
                        <figcaption className="p-3">
                            <h6 className="text-lg font-semibold">Serbia Dunes</h6>
                            <p className="city fw-300 text-gray-500">Madrid</p>
                            <p className="price fw-500 ">Starts from $120</p>
                            <div className="rating mt-3 flex gap-3 items-center text-sm">
                                <button className="bg-blue-500 text-white p-1 font-bold">7.0</button> 
                                <span>Good</span>
                            </div>
                        </figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default PopularLists
