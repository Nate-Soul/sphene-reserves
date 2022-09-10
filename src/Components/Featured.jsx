import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";

const Featured = () => {
  return (
    <section id="featured" className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-6">
                <figure className="featured-item relative rounded-lg overflow-hidden">
                    <img src={img1} alt="..." className="w-full h-full"/>
                    <div className="img-overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50">
                    </div>
                    <figcaption className="absolute bottom-6 p-2 text-white">
                        <a href="#">
                            <h4 className="text-2xl font-bold">Featured Hotels One</h4>
                            <p className="text-lg">a night of full luxury awaits you</p>
                        </a>
                    </figcaption>
                </figure>
                <figure className="featured-item relative rounded-lg overflow-hidden">
                    <img src={img2} alt="..." className="w-full h-full"/>
                    <div className="img-overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50">
                    </div>
                    <figcaption className="absolute bottom-6 p-2 text-white">
                        <a href="#">
                            <h4 className="text-2xl font-bold">Featured Hotels Two</h4>
                            <p className="text-lg">a night of full luxury awaits you</p>
                        </a>
                    </figcaption>
                </figure>
                <figure className="featured-item relative rounded-lg overflow-hidden">
                    <img src={img3} alt="..." className="w-full h-full"/>
                    <div className="img-overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50">
                    </div>
                    <figcaption className="absolute bottom-6 p-2 text-white">
                        <a href="#">
                            <h4 className="text-2xl font-bold">Featured Hotels Three</h4>
                            <p className="text-lg">a night of full luxury awaits you</p>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Featured
