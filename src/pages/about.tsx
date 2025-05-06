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

function About() {
  return (
    <div className="grid grid-cols-2 bg-background dark:bg-background-dark">
      <div className="flex flex-col items-start ml-16 text-primary dark:text-primary-dark">
        <h1 className="text-4xl pt-8 font-semibold text-primary dark:text-primary-dark">
          About Me
        </h1>
        <p className="text-l py-4 text-secondary dark:text-secondary-dark">
          I'm a second-year student at Northeastern pursuing a bachelor's degree
          in Computer Science with a concentration in Software and a minor in
          Mathematics. I am originally from Millstone, New Jersey before moving
          to Boston for school. In my free time I love playing basketball,
          biking, skiing, playing tennis, running with my dogs, and overall just
          spending quality time with friends and family.
        </p>
        <RecentSongs />
      </div>
      <Carousel images={images} />
    </div>
  );
}

export default About;
