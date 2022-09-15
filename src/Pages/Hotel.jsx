import Header from "../Components/Header";
import Hero from "../Components/Hero";
import MailList from "../Components/MailList";
import Footer from "../Components/Footer";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaMapMarker, FaTimesCircle } from "react-icons/fa";
import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";
import img4 from "../Images/html-4.jpg";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0); 
  const [openModal, setOpenModal]     = useState(false);

  const photos = [
    {
      src: img1
    },
    {
      src: img4
    },
    {
      src: img2
    },
    {
      src: img3
    },
    {
      src: img1
    },
    {
      src: img4
    }
  ];


  const handleModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  }

  const handleSlides = (direction) => {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <>
        <Header/>
        <Hero/>
        <section id="singleHotel" className="py-10">
          <div className="container">
            <div className="hotel-hero-wrap grid grid-cols-3 justify-between gap-2">
              <div className="hotel-hero-text-wrap flex flex-col gap-2 col-span-3 md:col-span-2">
                <h2 className="text-2xl font-bold">Grand Hotel</h2>
                <address className="flex items-center gap-1">
                  <FaMapMarker/> 
                  <span>5 Botswana, Old Town, 333 Krakow, Poland </span>
                </address>
                <p>Excellent location - 500m from center</p>
                <p className="text-primary-700">Book a stay over 1114 at this property and get a free airport taxi</p>
              </div>
              <div className="hotel-cta-wrap col-span-3 md:col-span-1 text-left md:text-right">
                <button className="p-3 capitalize bg-primary text-white rounded-md ring-2 ring-transparent hover:bg-primary-700 focus:ring-primary-200">Reserve / book now</button>
              </div>
            </div>
            <div className="hotel-gallery-wrap my-8 flex flex-wrap justify-between">
              {photos.map((photo, index) => (
                <figure className="w-full sm:w-1/2 lg:w-1/3 p-1" key={index}> 
                  <img src={photo.src} alt="..." className="w-full h-72 object-cover" onClick={() => handleModal(index)}/>
                </figure>
              ))}
            </div>
            <div className="hotel-detail-wrapper grid grid-cols-3 justify-between gap-4">
              <div className="hotel-detail-desc col-span-3 md:col-span-2">
                <h5 className="font-bold text-xl mb-4 col-span-2">Stay in the heart of Krakov</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam, vel, tempore iusto temporibus labore iure, inventore sed eaque maiores deleniti accusamus dolor perspiciatis veniam odio veritatis odit dicta rem atque consectetur modi fugit delectus obcaecati. Quos, expedita. Sequi reiciendis, sit maxime perspiciatis laborum recusandae qui unde molestias quod eos vitae suscipit, voluptatibus atque. Quas blanditiis commodi iste rem maxime quaerat repudiandae temporibus consequatur voluptatibus? Tempora, voluptatum exercitationem error, placeat fugit officia inventore delectus incidunt nam cumque dolores natus blanditiis minus magni reprehenderit nulla laborum eaque ad maxime? Recusandae dicta sit ipsa sunt quia repellendus tenetur nisi, illum vitae asperiores!</p>
              </div>
              <div className="hotel-detail-features col-span-3 md:col-span-1">
                <div className="hotel-feature-card p-4 bg-secondary text-black flex flex-col gap-3 rounded-lg">
                  <h6 className="font-semibold text-lg">Perfect for a 9-night stay</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem eum debitis amet quae magnam.
                  </p>
                  <p><span className="text-xl font-bold">$945</span> (9 nights)</p>
                  <button className="w-full capitalize p-3 rounded-md bg-primary text-white ring-2 ring-transparent hover:bg-primary-700 focus:ring-primary-200">Reserve / Book now </button>
                </div>
              </div>
            </div>
          </div> 
        </section>
        <MailList/>
        <Footer/>
        {openModal && (
          <div className="gallery-modal block fixed left-0 top-0 w-full h-full bg-black bg-opacity-60 z-lg overflow-auto">
            <figure className="gallery-modal-inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 border-4 border-primary rounded">
              <img src={photos[slideNumber].src} alt="..." className="w-auto h-auto -z-lg"/>
              <figcaption>
                <FaArrowAltCircleLeft 
                  className="text-white hover:text-primary-200 text-lg sm:text-2xl md:text-3xl z-xl absolute top-1/2 -left-6 cursor-pointer sm:-left-10"
                  onClick={() => handleSlides("l")}
                />
                <FaArrowAltCircleRight 
                  className="text-white hover:text-primary-200 text-lg sm:text-2xl md:text-3xl z-xl absolute top-1/2 -right-6 cursor-pointer sm:-right-10"
                  onClick={()=>handleSlides("r")}
                />
                <FaTimesCircle 
                  className="text-white hover:text-primary-200 text-lg sm:text-2xl md:text-3xl z-xl absolute -top-6 right-0 cursor-pointer sm:-top-10" 
                  onClick={()=>setOpenModal(false)}
                />
              </figcaption>
            </figure>
          </div>
        )}
    </>
  )
}

export default Hotel
