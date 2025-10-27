import PolaroidGrid from "../components/about/polaroidGrid";

const images = [
  { src: "/cameraRoll/avif/Boston1.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Boston2.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Brooklyn.avif", location: "Brooklyn, NY" },
  { src: "/cameraRoll/avif/Cambridge1.avif", location: "Cambridge, MA" },
  { src: "/cameraRoll/avif/Cambridge2.avif", location: "Cambridge, MA" },
  { src: "/cameraRoll/avif/ChristianScience1.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/ChristianScience2.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/ChristianScience3.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Citgo.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Esplanade.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Fenway.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/GWBridge.avif", location: "New York, NY" },
  { src: "/cameraRoll/avif/Hoboken1.avif", location: "Hoboken, NJ" },
  { src: "/cameraRoll/avif/Hoboken2.avif", location: "Hoboken, NJ" },
  { src: "/cameraRoll/avif/JonesBeach.avif", location: "Jones Beach, NY" },
  { src: "/cameraRoll/avif/Killington.avif", location: "Killington, VT" },
  { src: "/cameraRoll/avif/LakeGeorge.avif", location: "Lake George, NY" },
  { src: "/cameraRoll/avif/LongBranch.avif", location: "Long Branch, NJ" },
  { src: "/cameraRoll/avif/Melrose1.avif", location: "Melrose, MA" },
  { src: "/cameraRoll/avif/Melrose2.avif", location: "Melrose, MA" },
  { src: "/cameraRoll/avif/MFA1.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/MFA2.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Seattle1.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Snowport.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/TDGarden.avif", location: "Boston, MA" },
  { src: "/cameraRoll/avif/Seattle2.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle3.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle4.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle5.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle6.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle7.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle8.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle9.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle10.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle11.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle12.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle13.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle14.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle15.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle16.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Seattle17.avif", location: "Seattle, WA" },
  { src: "/cameraRoll/avif/Brooklyn2.avif", location: "Brooklyn, NY" },
  { src: "/cameraRoll/avif/Brooklyn3.avif", location: "Brooklyn, NY" },
  { src: "/cameraRoll/avif/LakeGeorge2.avif", location: "Lake George, NY" },
  { src: "/cameraRoll/avif/LakeGeorge3.avif", location: "Lake George, NY" },
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
