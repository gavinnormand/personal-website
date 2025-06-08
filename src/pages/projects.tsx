import ProjectGrid from "../components/projectGrid";

const projects = [
  {
    name: "Good Dog Licensing",
    description:
      "Good Dog Licensing is a student-run, nonprofit music licensing initiative developed by Northeastern University students and Green Line Records that connects independent musicians with media makers such as filmmakers, podcasters, and game developers who need music for their projects.",
    githubUrl: "https://github.com/sandboxnu/good-dog-licensing",
    liveUrl: "https://good-dog-licensing.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Next.js",
      "NextAuth.js",
      "Vercel",
    ],
    image: {
      src: "/projects/gdl.png",
      alt: "Good Dog Licensing's Landing Page",
    },
  },
  {
    name: "Personal Portfolio",
    description:
      "The personal portfolio website that you are currently viewing! I wanted to build a space that showcases my projects, experiences, and skills as a software engineer, but also serves as a platform to share my pictures, interests, and a bit about myself.",
    githubUrl: "https://github.com/gavinnormand/personal-website",
    liveUrl: "https://gavinnormand.com/",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "Vercel",
    ],
    image: {
      src: "/projects/website.png",
      alt: "My Personal Portfolio's Landing Page",
    },
  },
  {
    name: "Seam Carver",
    description:
      "This is a seam carver that I created as a part of my Accelerated Fundamentals of Computer Science II course. It takes a given image and then begins to remove seams, which are the paths of pixels that are least important to the image, until the user stops it or the image is fully carved.",
    githubUrl: "https://github.com/gavinnormand/seam-carver",
    liveUrl: "https://www.youtube.com/watch?v=iTsX2446KKE",
    stack: [
      "Java",
      "Seam Carving Algorithm",
      "Image Processing",
      "Dynamic Programming",
    ],
    image: {
      src: "/projects/seamCarver.mp4",
      alt: "My Seam Carver",
    },
  },
  {
    name: "Maze Solver",
    description:
      "This is a maze solver game that I created as a part of my Accelerated Fundamentals of Computer Science II course. It randomly generates a maze using Kruskal's Algorithm and then allows the user to solve it using either a depth-first search or breadth-first search algorithm.",
    githubUrl: "https://github.com/gavinnormand/maze-solver",
    liveUrl: "https://www.youtube.com/watch?v=i757tDnsfn8",
    stack: [
      "Java",
      "Kruskal's Algorithm",
      "Depth-First Search",
      "Breadth-First Search",
      "Dynamic Programming",
    ],
    image: {
      src: "/projects/mazeGame.mp4",
      alt: "My Maze Solver",
    },
  },
  {
    name: "Scholar Saver",
    description:
      "Scholar Saver is a full-stack personal finance web app aimed to help students manage their finances. It was built as a part of the 2025 FinHacks hackathon and was my first full-stack web dev experience.",
    githubUrl: "https://github.com/gavinnormand/finhacks-25",
    liveUrl: "",
    stack: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "Supabase",
      "React Router",
    ],
    image: {
      src: "/projects/scholarSaver.png",
      alt: "Scholar Saver's Personal Finance Page",
    },
  },
  {
    name: "PlaNUr",
    description:
      "A front-end web app that streamlines and presents all the information that Northeastern University students would need in order to construct their future schedules or switch classes in their current schedule. Created as a part of the F24 cohort of Oasis NEU, and first ever web dev experience.",
    githubUrl: "https://github.com/Oasis-NEU/f24-group20",
    liveUrl: "",
    stack: ["React", "JavaScript", "HTML", "CSS", "Vite", "React Router"],
    image: {
      src: "/projects/planur.png",
      alt: "PlaNUr's Landing Page",
    },
  },
];

function Projects() {
  return (
    <div className="bg-background dark:bg-background-dark">
      <h1 className="text-4xl pt-8 pl-8 lg:pl-16 font-semibold text-accent dark:text-accent">
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}

export default Projects;
