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
    <div className="grid grid-cols-1 gap-6 justify-self-center bg-background py-8 dark:bg-background-dark mdlg:grid-cols-2 xl:grid-cols-3">
      {projects.map((projectInfo) => (
        <ProjectCard {...projectInfo} />
      ))}
    </div>
  );
};

export default ProjectGrid;
