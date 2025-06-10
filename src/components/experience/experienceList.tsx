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
    <div className="flex flex-col gap-4 bg-background p-4 px-4 dark:bg-background-dark md:px-8 lg:px-16">
      {experiences.map((experienceInfo) => (
        <ExperienceCard {...experienceInfo} />
      ))}
    </div>
  );
};

export default ExperienceList;
