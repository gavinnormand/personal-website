import Carousel from "../components/about/carousel";

import RecentSongs from "../components/about/recentSongs";
import TagList from "../components/about/tagList";
import { Link } from "react-router-dom";

const images = [
  { src: "/aboutMe/Capitol.jpg", alt: "Me in front of the Capitol Building!" },
  {
    src: "/aboutMe/ClassicDC.jpg",
    alt: "Me in front of this cool pyramid sculpture in DC",
  },
  { src: "/aboutMe/DOOM.jpg", alt: "DR. DOOM ride at Universal" },
  { src: "/aboutMe/Einstein.jpg", alt: "Me in front of a statue of myself" },
  { src: "/aboutMe/Escalator.jpg", alt: "Me on an escalator" },
  { src: "/aboutMe/Hike.jpg", alt: "Me on a hike with friends" },
  { src: "/aboutMe/Lincoln.jpg", alt: "Me in front of Abraham Lincoln" },
  { src: "/aboutMe/Panda.jpg", alt: "Me in front of a real live panda" },
  { src: "/aboutMe/Suit.jpg", alt: "Me in a suit" },
  { src: "/aboutMe/Tree.jpg", alt: "Me crossing a tree" },
  {
    src: "/aboutMe/Washington.jpg",
    alt: "Me holding the Washington Monument, REAL",
  },
];

const languages = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "C",
  "C#",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "Racket",
];

const frameworksAndLibraries = [
  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",

  // Backend / Full-stack
  "Node.js",
  "Bun",
  "Flask",
  "tRPC",
  "Prisma",

  // Testing
  "JUnit",

  // Data Science
  "NumPy",
  "Pandas",
];

const toolsAndPlatforms = [
  // Dev Tools
  "Git",
  "Docker",
  "ESLint",
  "Prettier",
  "Figma",

  // Deployment & Hosting
  "Vercel",
  "GitHub Pages",
  "AWS",

  // Databases / Backend-as-a-Service
  "PostgreSQL",
  "Supabase",

  // IDEs
  "VS Code",
  "IntelliJ",
  "Eclipse",
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
          I am originally from Millstone, New Jersey, but for a majority of the
          year I am now located in Boston, MA. In my free time I love{" "}
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
        <TagList title="Frameworks & Libraries" tags={frameworksAndLibraries} />
        <TagList title="Tools & Platforms" tags={toolsAndPlatforms} />
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
