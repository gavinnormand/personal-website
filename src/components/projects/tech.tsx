interface TagProps {
  text: string;
}

const Tech: React.FC<TagProps> = ({ text }) => {
  return (
    <p className="rounded-md text-xs py-1 px-2 text-primary-dark bg-secondary ">
      {text}
    </p>
  );
};

export default Tech;
