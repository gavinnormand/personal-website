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

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  startDate,
  endDate,
  location,
  description,
  logo,
}) => {
  const isSmallWindow = window.innerWidth < 768;
  const startDateString = `${isSmallWindow ? startDate.month.substring(0, 3).concat(".") : startDate.month} ${isSmallWindow ? "'".concat(startDate.year.substring(2, 4)) : startDate.year}`;
  const endDateString =
    endDate != null
      ? `${isSmallWindow ? endDate.month.substring(0, 3).concat(".") : endDate.month} ${isSmallWindow ? "'".concat(endDate.year.substring(2, 4)) : endDate.year}`
      : "Present";
  return (
    <div className="flex w-full flex-col items-center rounded-xl border border-menus bg-menus dark:border-menus-dark dark:bg-menus-dark md:flex-row">
      <div className="m-4 h-[100px] w-[100px]">
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <img
            className="h-full w-full rounded-xl object-cover blur-0 transition duration-200 hover:shadow-[0_0_15px_#FFFFFF]"
            src={logo.src}
            alt={logo.alt}
          />
        </a>
      </div>
      <div className="m-4 flex flex-1 flex-col">
        <div className="grid grid-cols-2">
          <p className="text-lg text-primary-dark"> {position}</p>
          <p className="text-md justify-self-end text-primary-dark">
            {" "}
            {startDateString}
            {" - "}
            {endDateString}
          </p>
          <p className="text-md italic text-primary-dark"> {company}</p>
          <p className="text-md justify-self-end italic text-primary-dark">
            {" "}
            {location}
          </p>
        </div>
        <p className="text-md my-2 text-primary-dark"> {description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
