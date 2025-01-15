import "./ProjectBox.scss";
import { useEffect, useState } from "react";

const ProjectBox = ({ active, title, image, handleProjectClick, id, row }) => {
  const [project, setProject] = useState("");

  useEffect(() => {
    if (active) {
      if (row === "1") {
        setProject("animate__animated animate__bounceInRight");
      } else {
        setProject("animate__animated animate__bounceInLeft");
      }
    } else {
      if (row === "1") {
        setProject("animate__animated animate__bounceOutRight");
      } else {
        setProject("animate__animated animate__bounceOutLeft");
      }
    }
  }, [active]);

  return (
    <div
      className={`projectBox ${project}`}
      onClick={() => handleProjectClick(id)}
    >
      <span>{title}</span>
      <img src={`/img/${image}.png`} alt="" />
    </div>
  );
};
export default ProjectBox;
