import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-lightblue px-10 ">
      <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8">
        <div className="md:-mt-36 md:w-1/3 text-center mx-auto md:text-left ransform transition duration-500 hover:scale-105">
          <h1 className="font-bold text-2xl ">About Us</h1>
          <p className="">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage. Our curated
            adventures take you through the majestic Simien Mountains, where you
            can trek alongside stunning vistas and encounter unique wildlife,
            including the iconic gelada baboons.
          </p>
          <Link to="/">
            <button className="bg-darkgreen text-white rounded-full px-8 py-2 mt-3">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="md:w-1/3 mt-4 transform transition duration-500 hover:scale-105">
          <img
            src="ForestAbout.png"
            alt="Forest"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="flex-flex-col space-y-4 md:w-1/3 mt-4 ">
          <img
            src="park-1.png"
            alt="Park"
            className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-105"
          />
          <img
            src="park.jpeg"
            alt="Park"
            className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
