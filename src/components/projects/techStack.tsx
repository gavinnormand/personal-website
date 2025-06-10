import Tech from "./tech";

interface TechStackProps {
  tags: string[];
}

const TechStack: React.FC<TechStackProps> = ({ tags }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tags.map((text) => (
        <Tech text={text} />
      ))}
    </div>
  );
};

export default TechStack;
