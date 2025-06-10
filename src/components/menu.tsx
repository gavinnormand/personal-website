import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-16 z-50 w-full bg-menus shadow-lg dark:bg-menus-dark">
      <div className="flex flex-col items-center">
        <Link
          className="py-2 text-icon hover:text-icon-hover"
          to={"/"}
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          className="py-2 text-icon hover:text-icon-hover"
          to={"/about"}
          onClick={onClose}
        >
          About
        </Link>
        <Link
          className="py-2 text-icon hover:text-icon-hover"
          to={"/projects"}
          onClick={onClose}
        >
          Projects
        </Link>
        <Link
          className="py-2 text-icon hover:text-icon-hover"
          to={"/experiences"}
          onClick={onClose}
        >
          Experiences
        </Link>
        <Link
          className="py-2 text-icon hover:text-icon-hover"
          to={"/contact"}
          onClick={onClose}
        >
          Contact
        </Link>
        <a
          className="py-2 text-icon hover:text-icon-hover"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Menu;
