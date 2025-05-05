import { Link } from "react-router-dom";
import { FileUser, Code } from "lucide-react";

function Nav() {
  return (
    <nav>
      <div className="grid grid-cols-3 items-center bg-menus py-2 px-14">
        <Link
          className="inline-flex justify-self-start text-icon hover:text-icon-hover"
          to={"/"}
        >
          <Code className="mr-3" /> Gavin Normand
        </Link>
        <div className="inline-flex justify-center">
          <div className="pb-1 border-b-2 border-white">
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
          </div>
        </div>
        <a
          className="inline-flex mx-3 justify-self-end text-icon hover:text-icon-hover"
          href="https://drive.google.com/file/d/17GSW2EOedPHEzP3nzrnQzRRjRvhObpzb/view?usp=sharing"
          target="_blank"
        >
          Resume
          <FileUser className="ml-3" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
