import Profile from "../assets/profile.png";
import Typewriter from "../components/typewriter";

const titles = [
  " programmer",
  " software engineer",
  " student",
  " full-stack developer",
  " research assistant",
  " web developer",
  " robotics engineer",
  "n it consultant",
];

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-110px)] bg-background">
      <img
        className="my-8 rounded-full border-4 border-menus shadow-2xl"
        src={Profile}
        alt="Profile"
      />
      <h1 className="inline-flex text-4xl font-bold text-primary">
        Hi, I'm <div className="text-accent px-2">Gavin Normand!</div>
      </h1>
      <p className="mt-4 text-lg text-secondary">
        I am a<Typewriter words={titles} />
      </p>
      <p className="mt-2 text-lg text-secondary">
        Please feel free to explore my projects, experiences, and get in touch!
      </p>
    </div>
  );
}

export default Home;
