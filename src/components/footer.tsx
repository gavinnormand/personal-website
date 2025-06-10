import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div className="grid w-full grid-cols-3 items-center bg-menus px-4 py-4 dark:bg-menus-dark lg:px-16">
      <p className="justify-self-start text-icon-hover">
        © 2025 Gavin <span className="hidden md:inline"> Normand</span>
      </p>
      <div className="flex flex-row items-center justify-center">
        <a
          className="mx-3"
          href="mailto:normandgavin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="E-Mail"
        >
          <SiGmail className="h-8 w-8 text-icon transition-colors hover:text-icon-hover" />
        </a>
        <a
          className="mx-3"
          href="https://www.linkedin.com/in/gavin-normand/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="h-8 w-8 text-icon transition-colors hover:text-icon-hover" />
        </a>
        <a
          className="mx-3"
          href="https://github.com/gavinnormand"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiGithub className="h-8 w-8 text-icon transition-colors hover:text-icon-hover" />
        </a>
      </div>
      <p className="justify-self-end text-icon-hover">
        Made with ❤️ <span className="hidden md:inline">by Gavin Normand</span>
      </p>
    </div>
  );
}

export default Footer;
