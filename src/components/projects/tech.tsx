interface TagProps {
  text: string;
}

const Tech: React.FC<TagProps> = ({ text }) => {
  return (
    <p className="rounded-md bg-secondary px-2 py-1 text-xs text-primary-dark">
      {text}
    </p>
  );
};

export default Tech;
