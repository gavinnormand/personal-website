import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import ThemeToggle from "./themeToggle";

function Nav() {
  return (
    <nav>
      <div className="grid grid-cols-3 items-center bg-menus dark:bg-menus-dark py-4 px-14">
        <Link
          className="inline-flex justify-self-start text-icon hover:text-icon-hover"
          to={"/"}
        >
          <Code className="mr-3" /> Gavin Normand
        </Link>
        <div className="inline-flex justify-center">
          <div className="pb-1.5 border-b-2 border-white">
            <Link
              className="text-icon hover:text-icon-hover mx-3"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="text-icon hover:text-icon-hover mx-3"
              to={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="text-icon hover:text-icon-hover mx-3"
              to={"/experiences"}
            >
              Experiences
            </Link>
            <Link
              className="text-icon hover:text-icon-hover mx-3"
              to={"/contact"}
            >
              Contact
            </Link>
            <a
          className="text-icon hover:text-icon-hover mx-3"
          href="https://drive.google.com/file/d/17GSW2EOedPHEzP3nzrnQzRRjRvhObpzb/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
          </div>
        </div>
        <div className="inline-flex justify-self-end">
        <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
