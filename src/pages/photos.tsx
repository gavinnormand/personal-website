import Polaroid from "../components/polaroid";

import Boston1 from "../assets/cameraRoll/Boston1.jpg";
import Boston2 from "../assets/cameraRoll/Boston2.jpg";
import Brooklyn from "../assets/cameraRoll/Brooklyn.jpg";
import Cambridge1 from "../assets/cameraRoll/Cambridge1.jpg";
import Cambridge2 from "../assets/cameraRoll/Cambridge2.jpg";
import ChristianScience1 from "../assets/cameraRoll/ChristianScience1.jpg";
import ChristianScience2 from "../assets/cameraRoll/ChristianScience2.jpg";
import ChristianScience3 from "../assets/cameraRoll/ChristianScience3.jpg";
import Citgo from "../assets/cameraRoll/Citgo.jpg";
import Esplanade from "../assets/cameraRoll/Esplanade.jpg";
import Fenway from "../assets/cameraRoll/Fenway.jpg";
import GWBridge from "../assets/cameraRoll/GWBridge.jpg";
import Hoboken1 from "../assets/cameraRoll/Hoboken1.jpg";
import Hoboken2 from "../assets/cameraRoll/Hoboken2.jpg";
import LakeGeorge from "../assets/cameraRoll/LakeGeorge.jpg";
import JonesBeach from "../assets/cameraRoll/JonesBeach.jpg";
import Killington from "../assets/cameraRoll/Killington.jpg";
import LongBranch from "../assets/cameraRoll/LongBranch.jpg";
import Melrose1 from "../assets/cameraRoll/Melrose1.jpg";
import Melrose2 from "../assets/cameraRoll/Melrose2.jpg";
import MFA1 from "../assets/cameraRoll/MFA1.jpg";
import MFA2 from "../assets/cameraRoll/MFA2.jpg";
import Seattle1 from "../assets/cameraRoll/Seattle1.jpg";
import Snowport from "../assets/cameraRoll/Snowport.jpg";
import TDGarden from "../assets/cameraRoll/TDGarden.jpg";

function Photos() {
  return (
    <div className="bg-background dark:bg-background-dark px-4 sm:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-12 ml-8 sm:ml-4">
        Pictures I've Taken:
      </h1>
      <div className="grid gap-12 grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] justify-items-center w-full ">
        <Polaroid image={{ src: Boston1, location: "Boston, MA" }} />
        <Polaroid image={{ src: Boston2, location: "Boston, MA" }} />
        <Polaroid image={{ src: Brooklyn, location: "Brooklyn, NY" }} />
        <Polaroid image={{ src: Cambridge1, location: "Cambridge, MA" }} />
        <Polaroid image={{ src: Cambridge2, location: "Cambridge, MA" }} />
        <Polaroid image={{ src: ChristianScience1, location: "Boston, MA" }} />
        <Polaroid image={{ src: ChristianScience2, location: "Boston, MA" }} />
        <Polaroid image={{ src: ChristianScience3, location: "Boston, MA" }} />
        <Polaroid image={{ src: Citgo, location: "Boston, MA" }} />
        <Polaroid image={{ src: Esplanade, location: "Boston, MA" }} />
        <Polaroid image={{ src: Fenway, location: "Boston, MA" }} />
        <Polaroid image={{ src: GWBridge, location: "New York, NY" }} />
        <Polaroid image={{ src: Hoboken1, location: "Hoboken, NJ" }} />
        <Polaroid image={{ src: Hoboken2, location: "Hoboken, NJ" }} />
        <Polaroid image={{ src: JonesBeach, location: "Jones Beach, NY" }} />
        <Polaroid image={{ src: Killington, location: "Killington, VT" }} />
        <Polaroid image={{ src: LakeGeorge, location: "Lake George, NY" }} />
        <Polaroid image={{ src: LongBranch, location: "Long Branch, NJ" }} />
        <Polaroid image={{ src: Melrose1, location: "Melrose, MA" }} />
        <Polaroid image={{ src: Melrose2, location: "Melrose, MA" }} />
        <Polaroid image={{ src: MFA1, location: "Boston, MA" }} />
        <Polaroid image={{ src: MFA2, location: "Boston, MA" }} />
        <Polaroid image={{ src: Seattle1, location: "Seattle, WA" }} />
        <Polaroid image={{ src: Snowport, location: "Boston, MA" }} />
        <Polaroid image={{ src: TDGarden, location: "Boston, MA" }} />
      </div>
    </div>
  );
}

export default Photos;
