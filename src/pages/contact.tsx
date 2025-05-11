import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-8 min-h-[calc(100vh-128px)] bg-background dark:bg-background-dark">
      <div className="flex flex-col items-start mb-8 mx-8 md:ml-16 md:mr-0 text-primary dark:text-primary-dark">
        <h1 className="text-4xl font-semibold text-accent">
          Contact Info
        </h1>
        <p className="pt-2 text-primary dark:text-primary-dark">
          Feel free to use the info below to reach out with any questions, freelance inquiries, or
          just to chat!
        </p>
        <a
          className="mt-4 text-primary dark:text-primary-dark"
          href="mailto:normandgavin@gmail.com"
        >
          <div className="inline-flex items-center">
            <SiGmail className="w-6 h-6 mr-2.5" />{" "}
            <span className="text-accent underline hover:decoration-wavy">
              normandgavin@gmail.com
            </span>
          </div>
        </a>
        <a
          className="mt-4 text-primary dark:text-primary-dark"
          href="https://www.linkedin.com/in/gavin-normand/"
        >
          <div className="inline-flex items-center">
            <SiLinkedin className="w-6 h-6 mr-2.5" />{" "}
            <span className="text-accent underline hover:decoration-wavy">
              www.linkedin.com/in/gavin-normand
            </span>
          </div>
        </a>
        <a
          className="mt-4 text-primary dark:text-primary-dark"
          href="https://github.com/gavinnormand"
        >
          <div className="inline-flex">
            <SiGithub className="w-6 h-6 mr-2.5" />{" "}
            <span className="text-accent underline hover:decoration-wavy">
              www.github.com/gavinnormand
            </span>
          </div>
        </a>
      </div>
      <div className="text-primary dark:text-primary-dark">
        <form className="flex flex-col w-3/4 justify-self-center">
        <h1 className="text-2xl font-semibold text-accent">Message Me</h1>
          <label className="my-2">Name *</label>
          <input
            className="rounded-md p-3 mb-3 text-primary"
            placeholder="Name *"
            required={true}
          ></input>
          <label className="my-2">Email Address *</label>
          <input
            className="rounded-md p-3 mb-3 text-primary"
            placeholder="Email Address *"
            required={true}
          ></input>
          <label className="my-2">Message *</label>
          <input
            className="rounded-md p-3 mb-5 text-primary"
            placeholder="Message *"
            required={true}
            
          ></input>
          <button className="bg-accent p-3 rounded-md my-2 text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
