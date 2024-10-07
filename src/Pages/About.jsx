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
            src="https://plus.unsplash.com/premium_photo-1691868602803-2051726efba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEV0aGlvcGlhbiUyME5hdGlvbmFsJTIwUGFya3N8ZW58MHx8MHx8fDA%3D"
            alt="Forest"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="flex-flex-col space-y-4 md:w-1/3 mt-4 ">
          <img
            src="https://media.istockphoto.com/id/185009260/photo/gelada-baboon-in-the-simien-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=pFK86SjI9FAt0apJsoJVZqcYZjtIrhp39ckN8e1nrmc="
            alt="Park"
            className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-105"
          />
          <img
            src="https://media.istockphoto.com/id/1191115931/photo/simien-mountains-panorama-in-northern-ethiopia.webp?a=1&b=1&s=612x612&w=0&k=20&c=O2gktb3EWisUkmCmwrirE1cFjhmbjjkHtfNugKpEpIs="
            alt="Park"
            className="rounded-lg w-full h-auto transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
