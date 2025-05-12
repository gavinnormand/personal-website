import Carousel from "../components/carousel";

import Capitol from "../assets/aboutMe/Capitol.jpg";
import ClassicDC from "../assets/aboutMe/ClassicDC.jpg";
import DOOM from "../assets/aboutMe/DOOM.jpg";
import Einstein from "../assets/aboutMe/Einstein.jpg";
import Escalator from "../assets/aboutMe/Escalator.jpg";
import Hike from "../assets/aboutMe/Hike.jpg";
import Lincoln from "../assets/aboutMe/Lincoln.jpg";
import Panda from "../assets/aboutMe/Panda.jpg";
import Suit from "../assets/aboutMe/Suit.jpg";
import Tree from "../assets/aboutMe/Tree.jpg";
import Washington from "../assets/aboutMe/Washington.jpg";
import RecentSongs from "../components/recentSongs";
import TagList from "../components/tagList";
import { Link } from "react-router-dom";

const images = [
  { src: Capitol, alt: "Me in front of the Capitol Building!" },
  { src: ClassicDC, alt: "Me in front of this cool pyramid sculpture in DC" },
  { src: DOOM, alt: "DR. DOOM ride at Universal" },
  { src: Einstein, alt: "Me in front of a statue of myself" },
  { src: Escalator, alt: "Me on an escalator" },
  { src: Hike, alt: "Me on a hike with friends" },
  { src: Lincoln, alt: "Me in front of Abraham Lincoln" },
  { src: Panda, alt: "Me in front of a real live panda" },
  { src: Suit, alt: "Me in a suit" },
  { src: Tree, alt: "Me crossing a tree" },
  { src: Washington, alt: "Me holding the Washington Monument, REAL" },
];

const languages = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "C#",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Racket",
];

const frameworksAndTools = [
  "React",
  "Node.js",
  "Git",
  "Flask",
  "Firebase",
  "JUnit",
  "Docker",
  "Prisma",
  "Bun",
  "ESLint",
  "Prettier",
  "Figma",
  "Postman",
  "Next.js",
  "tRPC",
];

const platformsAndDeployment = [
  "PostgreSQL",
  "AWS",
  "Vercel",
  "Github Pages",
  "Supabase",
];

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-8 bg-background dark:bg-background-dark">
      <div className="flex flex-col items-start mx-8 lg:ml-16 lg:mr-0 mb-4 text-primary dark:text-primary-dark">
        <h1 className="text-4xl font-semibold text-accent dark:text-accent">
          About Me
        </h1>
        <p className="text-l pt-4 text-primary dark:text-primary-dark">
          Hi! My name is Gavin Normand and I am a rising second-year student at
          Northeastern University pursuing a bachelor's degree in Computer
          Science with a concentration in Software and a minor in Mathematics. I
          expect to graduate in December of 2027.
        </p>
        <p className="text-l pt-4 text-primary dark:text-primary-dark">
          I spend a lot of my time working on projects through Sandbox,
          freelancing, or personal projects, as well as researching topics that
          I am interested in. My current research interests are in Robotics,
          Artificial Intelligence, Machine Learning, Computer Vision, and Cloud
          Computing.{" "}
        </p>{" "}
        <p className="text-l pt-4 text-primary dark:text-primary-dark">
          I am originally from Millstone, New Jersey, but for a majority of the year I am now located in
          Boston, MA. In my free time I love{" "}
          <Link
            className="text-accent underline hover:decoration-wavy"
            to={"/photos"}
          >
            taking pictures
          </Link>
          , playing basketball, biking, cooking, skiing, playing tennis, running
          with my dogs, and overall just spending quality time with friends and
          family.
        </p>
        <TagList title="Languages" tags={languages} />
        <TagList title="Frameworks & Tools" tags={frameworksAndTools} />
        <TagList title="Platforms & Deployment" tags={platformsAndDeployment} />
      </div>
      <div className="flex flex-col items-center text-primary dark:text-primary-dark">
        <Carousel images={images} />
        <RecentSongs />
      </div>
      <div className="flex flex-col items-start ml-16"></div>
    </div>
  );
}

export default About;
