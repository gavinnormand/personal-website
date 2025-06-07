import Polaroid from "./polaroid";

interface Image {
  src: string;
  location: string;
}

interface PolaroidGridProps {
  images: Image[];
}

const PolaroidGrid: React.FC<PolaroidGridProps> = ({ images }) => {
  return (
    <div className="grid gap-12 grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] justify-items-center w-full ">
        {images.map((image) => (
            <Polaroid image={{ src: image.src, location: image.location }} />
        ))}
      </div>
  );
};

export default PolaroidGrid;
