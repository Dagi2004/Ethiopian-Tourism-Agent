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
          src="https://images.unsplash.com/photo-1514911221983-f44b94b306ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluJTIwZm91bnRhaW58ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-full md:h-screen object-cover rounded-md "
        />
        <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] animate-fade-in opacity-0 transition-opacity duration-1000">
          <h1 className="sm:text-3xl  md:text-4xl font-bold">
            Discover Ethiopia
          </h1>
          <p className="mt-2 text-md font-bold text-white md:text-3xl">
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
              src: "https://www.prlog.org/12613377-eskista.jpg",
              title: "Traditional Ethiopian Dance",
              description:
                "Witness the energy and grace of traditional Ethiopian dances, performed during festivals and special occasions.",
            },
            {
              src: "https://media.istockphoto.com/id/2148372061/photo/ethiopian-coffee-ceremony-with-aromatic-frankincense-debre-libanos-ethiopia.webp?a=1&b=1&s=612x612&w=0&k=20&c=IaFkOl_ldV3V4hbLEI-OaMQkeU3DgyL5_h2mREWPBEk=",
              title: "Ethiopian Coffee Ceremony",
              description:
                "Experience the traditional Ethiopian coffee ceremony, a ritual that symbolizes hospitality and community.",
            },
            {
              src: "https://media.istockphoto.com/id/672077498/photo/panorama-of-semien-mountains-and-valley-around-lalibela-ethiopia.webp?a=1&b=1&s=612x612&w=0&k=20&c=nN1lhshYRODuHMkPTFj6hsjGAiWSXDWqmCYRLth3_c4=",
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
