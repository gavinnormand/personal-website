import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import ProejctTagList from "./projectTagList";

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
    <div className="w-[382px] rounded-xl border shadow flex flex-col border-primary bg-menus dark:bg-menus-dark p-4">
      <div className="w-[350px] h-[200px] mb-4">
        <img
          className={`${isImage ? "block" : "hidden"} rounded-xl w-full h-full object-cover block`}
          src={image.src}
          alt={image.alt}
        />
        <video
          className={`${isImage ? "hidden" : "block"} rounded-xl w-full h-full object-cover block`}
          src={image.src}
          loop
          muted
          autoPlay
          playsInline
          controls={false}
        />
      </div>
      <h1 className="text-primary-dark text-2xl">{name}</h1>
      <p className="text-[#D1D5DB]">{description}</p>
      <div className="my-4">
        <ProejctTagList tags={stack} />
      </div>
      <div className="flex justify-between mt-auto">
        <a
          className="inline-flex items-center border-2 py-2 px-4 rounded-xl transition-colors border-[#6e40c9] hover:bg-[#8a63d2]"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="w-5 h-5 mr-2.5" />
          GitHub
        </a>
        <a
          className={`${hasLiveUrl ? "block" : "hidden"} inline-flex items-center border-2 py-2 px-4 rounded-xl transition-colors border-accent-dark hover:bg-[#4dbb91]`}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink className="w-5 h-5 mr-2.5" />
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
