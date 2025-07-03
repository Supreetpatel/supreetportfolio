import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const WorkExperience = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default WorkExperience;
