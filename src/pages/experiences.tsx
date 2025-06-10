import ExperienceList from "../components/experience/experienceList";

const experiences = [
  {
    position: "Software Developer",
    company: "Sandbox",
    startDate: { month: "January", year: "2025" },
    endDate: null,
    location: "Boston, MA",
    description:
      "Building Good Dog Licensing, a client-based project, that connects independent musicians with media makers, for Green Line Records at Northeastern University.",
    logo: {
      src: "/experiences/sandbox.png",
      alt: "Sandbox Logo",
      link: "https://sandboxnu.com/",
    },
  },
  {
    position: "CS Curriculum Lead",
    company: "First Byte",
    startDate: { month: "August", year: "2024" },
    endDate: null,
    location: "Boston, MA",
    description:
      "Leading a team of ~8 Northeastern students to develop and deliver in-person Computer Science workshops for high school aged students around the Boston area.",
    logo: {
      src: "/experiences/firstbyte.jpg",
      alt: "First Byte Logo",
      link: "https://www.teachfirstbyte.com/",
    },
  },
  {
    position: "Teaching Assistant",
    company: "Northeastern University",
    startDate: { month: "July", year: "2025" },
    endDate: null,
    location: "Boston, MA",
    description:
      "Supporting the understanding of course material for 80+ students in Foundations of Cybersecurity by hosting office hours, answering outstanding questions, and grading assignments.",
    logo: {
      src: "/experiences/khoury.png",
      alt: "Northeastern Khoury Logo",
      link: "https://www.khoury.northeastern.edu/",
    },
  },
  {
    position: "Part-Time IT Consultant",
    company: "CMD Sleep Disorder Center",
    startDate: { month: "January", year: "2024" },
    endDate: null,
    location: "East Windsor, NJ",
    description:
      "Provides IT support by configuring new machines, managing network infrastructure, and providing on-call technical support to resolve hardware and software issues.",
    logo: {
      src: "/experiences/cmdsleep.png",
      alt: "CMD Sleep Logo",
      link: "https://cmdsleep.com/",
    },
  },
  {
    position: "Resident Assistant",
    company: "Northeastern University",
    startDate: { month: "August", year: "2025" },
    endDate: null,
    location: "Boston, MA",
    description:
      "Supporting 30+ residents through community-building events, enforcing university policies, and being a resource for conflict resolution and peer mentorship.",
    logo: {
      src: "/experiences/northeastern.png",
      alt: "Northeastern Logo",
      link: "https://www.khoury.northeastern.edu/",
    },
  },
  {
    position: "Peer Tutor",
    company: "Northeastern University",
    startDate: { month: "January", year: "2025" },
    endDate: null,
    location: "Boston, MA",
    description:
      "Tutoring students in various Computer Science courses, including Foundations of Cybersecurity, Discrete Structures, and Fundamentals of Computer Science I/II, to help them better understand course material and improve their grades.",
    logo: {
      src: "/experiences/knack.png",
      alt: "Knack Tutoring Logo",
      link: "https://northeasternpeertutoring.sites.northeastern.edu/",
    },
  },
  {
    position: "Software Lead",
    company: "FRC Team 1807",
    startDate: { month: "September", year: "2022" },
    endDate: { month: "July", year: "2024" },
    location: "Allentown, NJ",
    description:
      "Led a team of 10+ developers through brainstorming, creating, testing, and maintaining both an autonomous and teleoperated code base for an internationally competitive robot as a part of the FIRST Robotics Competition.",
    logo: {
      src: "/experiences/1807.jpg",
      alt: "FRC 1807 Logo",
      link: "https://frc1807.org/",
    },
  },
  {
    position: "Youth Course Director",
    company: "National Youth Leadership Training",
    startDate: { month: "July", year: "2021" },
    endDate: { month: "July", year: "2024" },
    location: "Manalapan, NJ",
    description:
      "Oversaw, organized, and led a staff of 20+ through months of development to prepare a yearly 10 day long course aimed to develop 60+ youth participants into effective leaders of their communities.",
    logo: {
      src: "/experiences/nylt.jpeg",
      alt: "NYLT Logo",
      link: "https://www.monmouthcouncilscouting.org/nylt",
    },
  },
];

function Experiences() {
  return (
    <div className="bg-background dark:bg-background-dark">
      <h1 className="pl-8 pt-8 text-4xl font-semibold text-accent dark:text-accent lg:pl-16">
        Experiences
      </h1>
      <ExperienceList experiences={experiences} />
    </div>
  );
}

export default Experiences;
