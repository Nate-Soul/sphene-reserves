import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";
import img4 from "../Images/html-4.jpg";

const PropertyLists = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h3 className="home-headings font-bold text-lg mb-6">
          Browse by property type
        </h3>
        <div
          id="propertyList"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4 md:gap-6"
        >
          <figure className="property-list-item cursor-pointer transition rounded-xl cursor-pointer shadow-md hover:shadow-custom overflow-hidden">
            <img
              src={img1}
              alt="..."
              className="h-100 sm:h-64 md:h-48 lg:h-32 w-full object-cover"
            />
            <figcaption className="p-3">
              <h6 className="font-semibold text-lg">Dublins Properties</h6>
              <p className="text-sm">12 Hotels</p>
            </figcaption>
          </figure>
          <figure className="property-list-item cursor-pointer transition rounded-xl cursor-pointer shadow-md hover:shadow-custom overflow-hidden">
            <img
              src={img2}
              alt="..."
              className="h-100 sm:h-64 md:h-48 lg:h-32 w-full object-cover"
            />
            <figcaption className="p-3">
              <h6 className="font-semibold text-lg">Arcet Properties</h6>
              <p className="text-sm">4 Hotels</p>
            </figcaption>
          </figure>
          <figure className="property-list-item cursor-pointer transition rounded-xl cursor-pointer shadow-md hover:shadow-custom overflow-hidden">
            <img
              src={img3}
              alt="..."
              className="h-100 sm:h-64 md:h-48 lg:h-32 w-full object-cover"
            />
            <figcaption className="p-3">
              <h6 className="font-semibold text-lg">Aces Properties</h6>
              <p className="text-sm">17 Hotels</p>
            </figcaption>
          </figure>
          <figure className="property-list-item cursor-pointer transition rounded-xl cursor-pointer shadow-md hover:shadow-custom overflow-hidden">
            <img
              src={img4}
              alt="..."
              className="h-100 sm:h-64 md:h-48 lg:h-32 w-full object-cover"
            />
            <figcaption className="p-3">
              <h6 className="font-semibold text-lg">Deluxy Properties</h6>
              <p className="text-sm">56 Hotels</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PropertyLists;