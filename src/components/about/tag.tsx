interface TagProps {
  text: string;
  title: boolean;
}

const Tag: React.FC<TagProps> = ({ text, title }) => {
  const style = title
    ? "rounded-md text-sm py-1.5 px-3 text-primary-dark dark:text-primary bg-primary dark:bg-primary-dark"
    : "rounded-md text-sm py-1.5 px-3 text-primary-dark dark:text-primary bg-secondary dark:bg-secondary-dark";
  return <p className={style}>{text}</p>;
};

export default Tag;
