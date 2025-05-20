import { useRef } from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.error || "An error occurred while sending the message."
      );
    }

    alert(result.message || "Message sent successfully!");
    formRef.current?.reset();
  } catch (error: unknown) {
    console.error("Error submitting form:", error);
    if (error instanceof Error) {
      alert(
        error.message || "Failed to send the message. Please try again later."
      );
    } else {
      alert("An unknown error occurred. Please try again later.");
    }
  }
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-8 min-h-[calc(100vh-128px)] bg-background dark:bg-background-dark">
      <div className="flex flex-col items-start mb-8 mx-8 md:ml-16 md:mr-0 text-primary dark:text-primary-dark">
        <h1 className="text-4xl font-semibold text-accent">Contact Info</h1>
        <p className="pt-2 text-primary dark:text-primary-dark">
          Feel free to use the info below to reach out with any questions,
          freelance inquiries, or just to chat!
        </p>
        <a
          className="mt-4 text-primary dark:text-primary-dark"
          href="mailto:normandgavin@gmail.com"
          target="_blank"
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
          target="_blank"
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
          target="_blank"
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
        <form
        ref={formRef}
          className="flex flex-col w-3/4 justify-self-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold text-accent">Message Me</h1>
          <label className="my-2">Name *</label>
          <input
            className="rounded-md p-3 mb-3 text-primary border-2 border-primary"
            placeholder="Name *"
            required={true}
            name="name"
            type="text"
          ></input>
          <label className="my-2">Email Address *</label>
          <input
            className="rounded-md p-3 mb-3 text-primary border-2 border-primary"
            placeholder="Email Address *"
            required={true}
            name="email"
            type="email"
          ></input>
          <label className="my-2">Message *</label>
          <textarea
            className="rounded-md p-3 mb-5 text-primary border-2 border-primary"
            placeholder="Message *"
            required={true}
            name="message"
          ></textarea>
          <button className="bg-accent p-3 rounded-md my-2 text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
