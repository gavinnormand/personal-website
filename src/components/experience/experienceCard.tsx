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
    <div className="flex flex-col md:flex-row w-full items-center rounded-xl border bg-menus dark:bg-menus-dark border-menus dark:border-menus-dark">
      <div className="w-[100px] h-[100px] m-4 ">
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <img
            className="blur-0 hover:blur-[1px] transition duration-300 rounded-xl w-full h-full object-cover"
            src={logo.src}
            alt={logo.alt}
          />
        </a>
      </div>
      <div className="flex flex-col flex-1 m-4">
        <div className="grid grid-cols-2">
          <p className="text-lg text-primary-dark"> {position}</p>
          <p className="justify-self-end text-md text-primary-dark">
            {" "}
            {startDateString}
            {" - "}
            {endDateString}
          </p>
          <p className="text-md italic text-primary-dark"> {company}</p>
          <p className="justify-self-end italic text-md text-primary-dark">
            {" "}
            {location}
          </p>
        </div>
        <p className="my-2 text-md text-primary-dark"> {description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
