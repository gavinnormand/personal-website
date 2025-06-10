interface Image {
  src: string;
  location: string;
}

interface PolaroidProps {
  image: Image;
}

const Polaroid: React.FC<PolaroidProps> = ({ image }) => {
  return (
    <div className="flex h-[400px] w-[330px] flex-col items-center justify-between border-[15px] border-white bg-white shadow-xl">
      <img
        src={image.src}
        alt={image.location}
        className="h-[300px] w-[300px] object-cover"
        loading="lazy"
      />
      <div className="pb-[20px] text-center text-black">{image.location}</div>
    </div>
  );
};

export default Polaroid;
