import { Link } from "react-router-dom";
import { FileUser, Code } from 'lucide-react';

function Nav() {
  return (
    <nav>
      <div className="grid grid-cols-3 items-center bg-zinc-800 py-2 px-14">
        <Link className="inline-flex justify-self-start" to={"/"}>
        <Code className="mr-3"/> Gavin Normand
          </Link>
        <div className="inline-flex justify-center">
          <div className="pb-1 border-b-2 border-white">
          <Link className="mx-3" to={"/about"}>
            About
          </Link>
          <Link className="mx-3" to={"/projects"}>
            Projects
          </Link>
          <Link className="mx-3" to={"/experiences"}>
            Experiences
          </Link>
          <Link className="mx-3" to={"/contact"}>
            Contact
          </Link>
          </div>
        </div>
        <a className="inline-flex mx-3 justify-self-end" href="../assets/resume.pdf" target="_blank">
            Resume<FileUser className="ml-3" />
          </a>
      </div>
    </nav>
  );
}

export default Nav;
