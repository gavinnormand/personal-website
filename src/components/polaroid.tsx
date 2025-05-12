interface Image {
  src: string;
  location: string;
}

interface PolaroidProps {
  image: Image;
}

const Polaroid: React.FC<PolaroidProps> = ({ image }) => {
  return (
    <div className="w-[330px] h-[400px] flex flex-col items-center justify-between border-[15px] border-white bg-white">
      <img
        src={image.src}
        alt={image.location}
        className="w-[300px] h-[300px] object-cover"
        loading="lazy"
      />
      <div className="text-center text-black pb-[20px]">{image.location}</div>
    </div>
  );
};

export default Polaroid;
