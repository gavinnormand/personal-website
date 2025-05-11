import Polaroid from "../components/polaroid";

function Photos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center bg-background dark:bg-background-dark w-full px-12">
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
      <Polaroid image={{ src: "", location: "" }} />
    </div>
  );
}

export default Photos;
