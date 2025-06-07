import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import TypeWriter from "../components/typewriter";
import { ArrowRight } from "lucide-react";

const titles = [
  " programmer",
  " software engineer",
  " student",
  " full-stack developer",
  " research assistant",
  " web developer",
  " robotics engineer",
  "n it consultant",
];

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-background dark:bg-background-dark">
      <img
        className="my-8 rounded-full border-4 border-menus dark:border-menus-dark shadow-xl"
        src={Profile}
        alt="Profile"
      />
      <h1 className="text-3xl sm:text-4xl text-center font-bold text-primary dark:text-primary-dark">
        Hi, I'm <span className="text-accent">Gavin Normand!</span>
      </h1>
      <p className="mt-4 text-lg text-secondary dark:text-secondary-dark">
        I am a<TypeWriter words={titles} />
      </p>
      <p className="mt-2 px-2 text-lg text-secondary dark:text-secondary-dark text-center">
        Please feel free to explore my projects, experiences, and get in touch!
      </p>
      <Link
        className="inline-flex items-center m-4 border-4 p-4 rounded-xl transition-colors border-accent-dark dark:border-accent-dark bg-accent hover:bg-accent-dark text-xl"
        to={"/about"}
      >
        More About Me <ArrowRight className="ml-2" />
      </Link>
    </div>
  );
}

export default Home;
