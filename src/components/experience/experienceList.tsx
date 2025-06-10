import ExperienceCard from "./experienceCard";

interface Date {
  month: string;
  year: string;
}

interface ExperienceCardProps {
  position: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  location: string;
  description: string;
  logo: {
    src: string;
    alt: string;
    link: string;
  };
}

interface ExperienceListProps {
  experiences: ExperienceCardProps[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-4 md:px-8 lg:px-16 bg-background dark:bg-background-dark">
            {experiences.map((experienceInfo) => (
                <ExperienceCard {... experienceInfo}/>
            ))}
    </div>
  );
};

export default ExperienceList;
