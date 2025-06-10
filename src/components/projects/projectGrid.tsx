import ProjectCard from "./projectCard";

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

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="justify-self-center py-8 grid grid-cols-1 mdlg:grid-cols-2 xl:grid-cols-3 gap-6 bg-background dark:bg-background-dark">
            {projects.map((projectInfo) => (
                <ProjectCard {... projectInfo}/>
            ))}
    </div>
  );
};

export default ProjectGrid;
