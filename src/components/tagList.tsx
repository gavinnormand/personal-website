import Tag from "./tag";

interface TagListProps {
  title: string;
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ title, tags }) => {
  return (
    <div className="flex flex-col items-start pt-4">
        <Tag text={title} title={true}/>
        <div className="flex flex-row flex-wrap">
            {tags.map((text) => (
                <Tag text={text} title={false} />
            ))}
        </div>
    </div>
  );
};

export default TagList;
