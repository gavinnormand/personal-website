import ProjectTag from "./projectTag";

interface TagListProps {
  tags: string[];
}

const ProjectTagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tags.map((text) => (
        <ProjectTag text={text} />
      ))}
    </div>
  );
};

export default ProjectTagList;
