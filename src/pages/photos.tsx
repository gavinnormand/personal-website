import PolaroidGrid from "../components/about/polaroidGrid";

const images = [
  { src: "/cameraRoll/Boston1.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Boston2.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Brooklyn.jpg", location: "Brooklyn, NY" },
  { src: "/cameraRoll/Cambridge1.jpg", location: "Cambridge, MA" },
  { src: "/cameraRoll/Cambridge2.jpg", location: "Cambridge, MA" },
  { src: "/cameraRoll/ChristianScience1.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/ChristianScience2.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/ChristianScience3.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Citgo.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Esplanade.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Fenway.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/GWBridge.jpg", location: "New York, NY" },
  { src: "/cameraRoll/Hoboken1.jpg", location: "Hoboken, NJ" },
  { src: "/cameraRoll/Hoboken2.jpg", location: "Hoboken, NJ" },
  { src: "/cameraRoll/JonesBeach.jpg", location: "Jones Beach, NY" },
  { src: "/cameraRoll/Killington.jpg", location: "Killington, VT" },
  { src: "/cameraRoll/LakeGeorge.jpg", location: "Lake George, NY" },
  { src: "/cameraRoll/LongBranch.jpg", location: "Long Branch, NJ" },
  { src: "/cameraRoll/Melrose1.jpg", location: "Melrose, MA" },
  { src: "/cameraRoll/Melrose2.jpg", location: "Melrose, MA" },
  { src: "/cameraRoll/MFA1.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/MFA2.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/Seattle1.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Snowport.jpg", location: "Boston, MA" },
  { src: "/cameraRoll/TDGarden.jpg", location: "Boston, MA" },
];

function Photos() {
  return (
    <div className="bg-background dark:bg-background-dark px-4 sm:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-12 ml-8 sm:ml-4">
        Pictures I've Taken:
      </h1>
      <div className="grid gap-12 grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] justify-items-center w-full ">
        <PolaroidGrid images={images} />
      </div>
    </div>
  );
}

export default Photos;
