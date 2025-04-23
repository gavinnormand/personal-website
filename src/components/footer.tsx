import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div className="grid grid-cols-3 items-center bg-zinc-800 w-full px-16 py-4">
      <p className="text-gray-400 justify-self-start">© 2025 Gavin Normand</p>
      <div className="flex flex-row justify-center items-center">
        <a
          className="mx-3"
          href="mailto:normandgavin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="E-Mail"
        >
          <SiGmail className="hover:text-gray-300 h-8 w-8" />
        </a>
        <a
          className="mx-3"
          href="https://www.linkedin.com/in/gavin-normand/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin className="hover:text-gray-300 h-8 w-8" />
        </a>
        <a
          className="mx-3"
          href="https://github.com/gavinnormand"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiGithub className="hover:text-gray-300 h-8 w-8" />
        </a>
      </div>
      <p className="text-gray-400 justify-self-end">Made with ❤️ by Gavin Normand</p>
    </div>
  );
}

export default Footer;
