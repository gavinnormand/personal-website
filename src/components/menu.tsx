import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-menus dark:bg-menus-dark shadow-lg z-50">
      <div className="flex flex-col items-center">
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/"}
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/about"}
          onClick={onClose}
        >
          About
        </Link>
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/projects"}
          onClick={onClose}
        >
          Projects
        </Link>
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/experiences"}
          onClick={onClose}
        >
          Experiences
        </Link>
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/contact"}
          onClick={onClose}
        >
          Contact
        </Link>
        <Link
          className="text-icon hover:text-icon-hover py-2"
          to={"/resume"}
          onClick={onClose}
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Menu;
