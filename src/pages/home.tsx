import { Link } from "react-router-dom";
import TypeWriter from "../components/home/typewriter";
import { ArrowRight } from "lucide-react";

const titles = [
  " programmer",
  " software engineer",
  " student",
  " full-stack developer",
  " research assistant",
  " web developer",
  " robotics engineer",
  "n IT consultant",
];

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-128px)] flex-col items-center justify-center bg-background dark:bg-background-dark">
      <img
        className="my-8 rounded-full border-4 border-menus shadow-xl dark:border-menus-dark"
        src={"/profile.png"}
        alt="Profile"
      />
      <h1 className="text-center text-3xl font-bold text-primary dark:text-primary-dark sm:text-4xl">
        Hi, I'm <span className="text-accent">Gavin Normand!</span>
      </h1>
      <p className="mt-4 text-lg text-secondary dark:text-secondary-dark">
        I am a<TypeWriter words={titles} />
      </p>
      <p className="mt-2 px-2 text-center text-lg text-secondary dark:text-secondary-dark">
        Please feel free to explore my projects, experiences, and get in touch!
      </p>
      <Link
        className="m-4 inline-flex items-center rounded-xl border-4 border-accent-dark p-4 text-xl text-primary transition-colors hover:bg-accent-dark hover:text-primary-dark dark:text-primary-dark"
        to={"/about"}
      >
        More About Me <ArrowRight className="ml-2" />
      </Link>
    </div>
  );
}

export default Home;
