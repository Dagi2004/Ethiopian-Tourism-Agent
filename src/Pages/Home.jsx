import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in ");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100");
      }, index * 200); // Delay for staggered animation
    });
  }, []);

  return (
    <>
      <div className="min-h relative text-center text-white">
        <img
          src="herosection.jpg"
          alt=""
          className="w-full md:h-screen object-cover rounded-md "
        />
        <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] animate-fade-in opacity-0 transition-opacity duration-1000">
          <h1 className="sm:text-3xl  md:text-4xl font-bold">
            Discover Ethiopia
          </h1>
          <p className="mt-2 text-sm md:text-lg">
            Explore the breathtaking landscapes and rich cultural heritage of
            Ethiopia
          </p>
          <div className="mt-3">
            <Link to="/about">
              <button className="bg-darkgreen text-white rounded-full px-6 md:px-8 py-2 mt-3">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-lightblue mx-auto px-4 py-8">
        <h2 className="text-darkgreen font-bold text-center animate-fade-in opacity-0 transition-opacity duration-1000">
          Discover Ethiopian Cultural Insights
        </h2>
        <p className="text-center animate-fade-in opacity-0 transition-opacity duration-1000 mt-4">
          Explore the rich traditions of Ethiopia, from the iconic coffee
          ceremony to vibrant traditional dances. Immerse yourself in the unique
          cultural experiences that make Ethiopia a must-visit destination.
        </p>
        <div className="mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              src: "Ethiopian Dances.jpg",
              title: "Traditional Ethiopian Dance",
              description:
                "Witness the energy and grace of traditional Ethiopian dances, performed during festivals and special occasions.",
            },
            {
              src: "Coffee Ceremony.jpg",
              title: "Ethiopian Coffee Ceremony",
              description:
                "Experience the traditional Ethiopian coffee ceremony, a ritual that symbolizes hospitality and community.",
            },
            {
              src: "Eth-Park.png",
              title: "Ethiopian National Parks",
              description:
                "Ethiopia is home to some of Africa's most breathtaking national parks, each offering unique landscapes and diverse wildlife.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg  bg-lightblue shadow-md hover:shadow-lg  animate-fade-in opacity-0 transition-opacity duration-1000"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <h3 className="text-md font-semibold text-blue-600 mb-2 px-4 pt-4">
                {item.title}
              </h3>
              <p className="px-4 pb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
