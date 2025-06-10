import { Link } from "react-router-dom";
import { CodeXml, MenuIcon, X } from "lucide-react";
import ThemeToggle from "./themeToggle";
import { useState } from "react";
import Menu from "./menu";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {/* Desktop Layout */}
      <div className="hidden grid-cols-3 items-center bg-menus px-14 py-4 dark:bg-menus-dark md:grid">
        <Link className="justify-self-star group inline-flex" to={"/"}>
          <CodeXml className="mr-3 text-accent group-hover:text-accent-dark" />{" "}
          <span className="hidden text-icon transition-colors group-hover:text-icon-hover lg:block">
            Gavin Normand
          </span>
        </Link>
        <div className="inline-flex justify-center">
          <div className="border-b-2 border-accent pb-1.5">
            <Link
              className="mx-3 text-icon transition-colors hover:text-icon-hover"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="mx-3 text-icon transition-colors hover:text-icon-hover"
              to={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="mx-3 text-icon transition-colors hover:text-icon-hover"
              to={"/experiences"}
            >
              Experiences
            </Link>
            <Link
              className="mx-3 text-icon transition-colors hover:text-icon-hover"
              to={"/contact"}
            >
              Contact
            </Link>
            <a
              className="mx-3 text-icon transition-colors hover:text-icon-hover"
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="inline-flex justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-2 justify-between bg-menus px-6 py-4 dark:bg-menus-dark md:hidden">
        <button
          className="text-icon hover:text-icon-hover"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </button>
        <div className="inline-flex justify-self-end">
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Nav;
