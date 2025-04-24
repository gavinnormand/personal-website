import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="flex flex-col items-center bg-zinc-800 py-2">
        <div className="inline-flex border-b-2 border-white pb-1">
          <Link className="mx-3" to={"/"}>
            Home
          </Link>
          <Link className="mx-3" to={"/about"}>
            About
          </Link>
          <Link className="mx-3" to={"/contact"}>
            Contact
          </Link>
          <Link className="mx-3" to={"/projects"}>
            Projects
          </Link>
          <Link className="mx-3" to={"/experience"}>
            Experience
          </Link>
          <Link className="mx-3" to={"/skills"}>
            Skills
          </Link>
          <a className="mx-3" href="../assets/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
        <hr />
      </div>
    </nav>
  );
}

export default Nav;
