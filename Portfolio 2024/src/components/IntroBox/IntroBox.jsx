import "./IntroBox.scss";
import CanvasMac from "../CanvasMac/CanvasMac";
import { useEffect, useState } from "react";

const IntroBox = ({ active }) => {
  const [intro, setIntro] = useState("");

  useEffect(() => {
    if (active) {
      setIntro("animate__animated animate__fadeIn");
    } else {
      setIntro("animate__animated animate__bounceOutLeft");
    }
  }, [active]);

  return (
    <div className={`introbox ${intro}`}>
      <div className="left">
        <span className="softwareDev">Junior Software Engineer</span>
        <span className="hello">
          Hello,<br></br>I&apos;m <span className="colouredText">Hugh</span>{" "}
          Pullman
        </span>
      </div>
      <div className="about">
        <div className="me">
          <h1>About Me</h1>
          <img src="/img/me.jpg" alt="" />
        </div>
        <p>
          I’m a software engineer with a background in Electrical Engineering
          and a recent graduate of the Digital Futures Software Engineering
          course.
        </p>
        <CanvasMac />
      </div>
    </div>
  );
};
export default IntroBox;
