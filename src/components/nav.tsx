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
      <div className="hidden md:grid grid-cols-3 items-center bg-menus dark:bg-menus-dark py-4 px-14">
        <Link className="group inline-flex justify-self-star" to={"/"}>
          <CodeXml className="mr-3 text-accent group-hover:text-accent-dark" />{" "}
          <span className="hidden lg:block text-icon transition-colors group-hover:text-icon-hover">
            Gavin Normand
          </span>
        </Link>
        <div className="inline-flex justify-center">
          <div className="pb-1.5 border-b-2 border-accent">
            <Link
              className="text-icon transition-colors hover:text-icon-hover mx-3"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="text-icon transition-colors hover:text-icon-hover mx-3"
              to={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="text-icon transition-colors hover:text-icon-hover mx-3"
              to={"/experiences"}
            >
              Experiences
            </Link>
            <Link
              className="text-icon transition-colors hover:text-icon-hover mx-3"
              to={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="text-icon transition-colors hover:text-icon-hover mx-3"
              to={"/resume"}
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="inline-flex justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-2 md:hidden justify-between bg-menus dark:bg-menus-dark py-4 px-6">
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
