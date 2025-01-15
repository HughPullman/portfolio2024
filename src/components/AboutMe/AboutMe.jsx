import "./AboutMe.scss";
import { useEffect, useState } from "react";

const AboutMe = ({ active }) => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (active) {
      setAbout("animate__animated animate__bounceInDown");
    } else {
      setAbout("animate__animated animate__bounceOutUp");
    }
  }, [active]);

  return (
    <div className={`aboutMe ${about}`}>
      <h2>More About Me</h2>
      <span>
        I hold a degree in Electrical and Electronic Engineering from the
        University of Nottingham and have enhanced my technical skillset through
        coding courses with Digital Futures, Codecademy, and IT Career Switch. I
        thrive in both independent and collaborative environments, bringing a
        hardworking, honest, and organized approach to all tasks.
      </span>
      <span>
        My experience spans various industries, including hospitality, where I
        honed customer service and multitasking skills, as well as warehouse and
        dispatch operations, which developed my organizational abilities.
        Additionally, summers spent in water sports center management allowed me
        to build leadership and problem-solving capabilities.
      </span>
      <span>
        Having grown up in a military family, frequent relocations and boarding
        school life shaped my adaptability and resilience. These experiences,
        combined with a passion for exploration, have fueled my love for solo
        world travel.
      </span>
    </div>
  );
};
export default AboutMe;
