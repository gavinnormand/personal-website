import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import ProjectTagList from "./techStack";

interface ProjectCardProps {
  name: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  stack: string[];
  image: {
    src: string;
    alt: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  githubUrl,
  liveUrl,
  stack,
  image,
}) => {
  const hasLiveUrl = liveUrl && liveUrl.length > 0;
  const isImage = !image.src.endsWith(".mp4");
  return (
    <div className="flex w-[382px] flex-col rounded-xl border-primary bg-menus p-4 shadow dark:bg-menus-dark">
      <div className="mb-4 h-[200px] w-[350px]">
        <img
          className={`${isImage ? "block" : "hidden"} block h-full w-full rounded-xl object-cover`}
          src={image.src}
          alt={image.alt}
        />
        <video
          className={`${isImage ? "hidden" : "block"} block h-full w-full rounded-xl object-cover`}
          src={image.src}
          loop
          muted
          autoPlay
          playsInline
          controls={false}
        />
      </div>
      <h1 className="text-2xl text-primary-dark">{name}</h1>
      <p className="text-[#D1D5DB]">{description}</p>
      <div className="my-4">
        <ProjectTagList tags={stack} />
      </div>
      <div className="mt-auto flex justify-between">
        <a
          className="inline-flex items-center rounded-xl border-2 border-[#6e40c9] px-4 py-2 transition-colors hover:bg-[#8a63d2]"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="mr-2.5 h-5 w-5" />
          GitHub
        </a>
        <a
          className={`${hasLiveUrl ? "block" : "hidden"} inline-flex items-center rounded-xl border-2 border-accent-dark px-4 py-2 transition-colors hover:bg-[#4dbb91]`}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink className="mr-2.5 h-5 w-5" />
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
