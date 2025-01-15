import "./ExperienceBox.scss";
import { useEffect, useState } from "react";

const ExperienceBox = ({ active, title, info, icon, clickable, onClick }) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (active) {
      setExperience("animate__animated animate__flipInY");
    } else {
      setExperience("animate__animated animate__flipOutY");
    }
  }, [active]);

  return (
    <div
      className={`experienceBox ${experience} ${clickable}`}
      onClick={() => onClick("4")}
    >
      <h2>{title}</h2>
      <span className="experienceInfo">{info}</span>
      <span className="experienceIcon">{icon}</span>
    </div>
  );
};
export default ExperienceBox;
