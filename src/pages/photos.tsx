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
  { src: "/cameraRoll/Seattle2.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle3.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle4.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle5.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle6.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle7.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle8.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle9.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle10.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle11.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle12.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle13.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle14.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle15.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle16.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Seattle17.jpg", location: "Seattle, WA" },
  { src: "/cameraRoll/Brooklyn2.jpg", location: "Brooklyn, NY" },
  { src: "/cameraRoll/Brooklyn3.jpg", location: "Brooklyn, NY" },
  { src: "/cameraRoll/LakeGeorge2.jpg", location: "Lake George, NY" },
  { src: "/cameraRoll/LakeGeorge3.jpg", location: "Lake George, NY" },
];

function Photos() {
  return (
    <div className="px-auto bg-background py-8 dark:bg-background-dark md:px-8">
      <h1 className="mb-12 ml-8 text-4xl font-bold text-accent">
        Pictures I've Taken:
      </h1>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] justify-items-center gap-12">
        <PolaroidGrid images={images} />
      </div>
    </div>
  );
}

export default Photos;
