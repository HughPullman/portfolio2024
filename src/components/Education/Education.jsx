import "./Education.scss";
import { useEffect, useState } from "react";

const Education = ({ active, ids }) => {
  const [education, setEducation] = useState("");

  useEffect(() => {
    if (active) {
      setEducation("animate__animated animate__bounceInRight");
    } else {
      setEducation("animate__animated animate__bounceOutRight");
    }
  }, [active]);

  return (
    <div className={`education ${education}`} id={ids}>
      <h2>Education</h2>
      <div className="wrap">
        <span className="title">Digital Futures</span>
        <span>- Software Engineering Course</span>
        <span>- Professional Skills</span>
        <span>- Agile Methodologies</span>
      </div>
      <div className="wrap">
        <span className="title">CodeAcademy Courses</span>
        <span>- Full-Stack Engineering</span>
        <span>- Learn Bootstrap</span>
        <span>- Learn jQuery</span>
      </div>
      <div className="wrap">
        <span className="title">
          BEng Electrical and Electronic Engineering
        </span>
        <span>- Advanced Engineering Mathematics</span>
        <span>- Engineering Design Solutions</span>
        <span>- Computer Aided Engineering</span>
        <span>- Information and Systems</span>
      </div>
      <div className="wrap">
        <span className="title">Bryanston School</span>
        <div className="list">
          <span>A-Levels -</span>
          <div className="aLvl">
            <span>Mathematics</span>
            <span>Further Mathematics</span>
            <span>Physics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
