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
    <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] justify-items-center gap-12">
      {images.map((image) => (
        <Polaroid image={{ src: image.src, location: image.location }} />
      ))}
    </div>
  );
};

export default PolaroidGrid;
