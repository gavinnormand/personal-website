interface Image {
  src: string;
  location: string;
}

interface PolaroidProps {
  image: Image;
}

const Polaroid: React.FC<PolaroidProps> = ({ image }) => {
  return (
    <div className="m-12 bg-white w-64 h-80">

    </div>
  );
};

export default Polaroid;
