import "./Home.scss";
import IntroBox from "../IntroBox/IntroBox";
import SkillsTab from "../SkillsTab/SkillsTab";
import SocialBox from "../SocialBox/SocialBox";
import { LinkedinOriginal, GithubOriginal } from "devicons-react";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import ProjectsBox from "../ProjectsBox/ProjectsBox";
import "animate.css";
import { useEffect, useState } from "react";

const Home = ({ selected, setSelected }) => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [education, setEducation] = useState("");
  const [education2, setEducation2] = useState("");

  useEffect(() => {
    if (selected === "1") {
      setActive(true);
      setEducation("animate__animated animate__fadeInUp");
      setEducation2("animate__animated animate__fadeOutDown");
    } else if (selected === "2") {
      setActive(false);
      setActive2(true);
      setEducation("animate__animated animate__fadeOutDown");
      setEducation2("animate__animated animate__fadeInUp");
    } else {
      setActive(false);
      setEducation("animate__animated animate__fadeOutDown");
    }
  }, [selected]);

  return (
    <div className="home" id="home" name="about">
      <IntroBox active={active} />
      <SkillsTab active={active} />
      <SocialBox
        colour={"#0077B5"}
        link={"https://www.linkedin.com/in/hugh-pullman-03b417b1/"}
        icon={<LinkedinOriginal size={60} />}
        active={active}
      />
      <SocialBox
        colour={"#21262d"}
        link={"https://github.com/HughPullman"}
        icon={<GithubOriginal size={60} />}
        active={active}
      />
      <div className={`stackedBox ${education}`} id="testing">
        <div className="educationBox" onClick={() => setSelected("2")}>
          <span>Education and</span> <span>Experience</span>
          <div className="circle">
            <SchoolIcon className="muiIcon" color="primary" />
          </div>
        </div>
        <div className="educationBox" onClick={() => setSelected("4")}>
          <span>Contact me</span>
          <div className="circle">
            <EmailIcon className="muiIcon" color="action" />
          </div>
        </div>
      </div>
      <ProjectsBox active={active} setSelected={setSelected} />

      {/* <IntroBox active={active2} />
      <SkillsTab active={active2} />
      <SocialBox
        colour={"#0077B5"}
        link={"https://www.linkedin.com/in/hugh-pullman-03b417b1/"}
        icon={<LinkedinOriginal size={60} />}
        active={active2}
      />
      <SocialBox
        colour={"#21262d"}
        link={"https://github.com/HughPullman"}
        icon={<GithubOriginal size={60} />}
        active={active2}
      />
      <div className={`stackedBox ${education}`} id="testing">
        <div className="educationBox">
          <span>Education and</span> <span>Experience</span>
          <div className="circle">
            <SchoolIcon className="muiIcon" color="primary" />
          </div>
        </div>
        <div className="educationBox">
          <span>Contact me</span>
          <div className="circle">
            <EmailIcon className="muiIcon" color="action" />
          </div>
        </div>
      </div>
      <ProjectsBox active={active2} /> */}
    </div>
  );
};

export default Home;
