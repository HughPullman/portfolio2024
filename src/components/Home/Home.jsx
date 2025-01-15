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
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import ExperienceBox from "../ExperienceBox/ExperienceBox";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TapasIcon from "@mui/icons-material/Tapas";
import SurfingIcon from "@mui/icons-material/Surfing";
import SailingIcon from "@mui/icons-material/Sailing";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import GetAppIcon from "@mui/icons-material/GetApp";
import ContactMe from "../ContactMe/ContactMe";
import CV from "../CV/CV";
import ContactDetails from "../ContactDetails/ContactDetails";
import ProjectBox from "../ProjectBox/ProjectBox";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Home = ({ selected, setSelected }) => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [education, setEducation] = useState("");
  const [change, setChange] = useState("1");
  const [chosenProject, setChosenProject] = useState("1");
  const [projectVis, setProjectVis] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChange(selected);
    }, [600]);

    if (selected === "1") {
      setProjectVis(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setTimeout(() => {
        setEducation("animate__animated animate__fadeInUp");
      }, [500]);
      setTimeout(() => {
        setActive(true);
      }, [500]);
    } else if (selected === "2") {
      setProjectVis(false);
      setActive(false);
      setActive3(false);
      setActive4(false);
      setEducation("animate__animated animate__fadeOutDown");
      setTimeout(() => {
        setActive2(true);
      }, [500]);
    } else if (selected === "3") {
      setProjectVis(false);
      setActive(false);
      setActive2(false);
      setActive4(false);
      setEducation("animate__animated animate__fadeOutDown");
      setTimeout(() => {
        setActive3(true);
      }, [600]);
    } else {
      setProjectVis(false);
      setActive(false);
      setActive2(false);
      setActive3(false);
      setEducation("animate__animated animate__fadeOutDown");
      setTimeout(() => {
        setActive4(true);
      }, [600]);
    }
  }, [selected]);

  const handleProjectClick = (id) => {
    setChosenProject(id);
    setProjectVis(true);
  };

  return (
    <div className="home" id="home">
      {change === "1" && (
        <>
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
          <div className={`stackedBox `} id="testing">
            <div
              className={`educationBox ${education}`}
              onClick={() => setSelected("2")}
            >
              <span>Education and</span> <span>Experience</span>
              <div className="circle">
                <SchoolIcon className="muiIcon" color="primary" />
              </div>
            </div>
            <div
              className={`educationBox ${education}`}
              onClick={() => setSelected("4")}
            >
              <span>Contact me</span>
              <div className="circle">
                <EmailIcon className="muiIcon" color="action" />
              </div>
            </div>
          </div>
          <ProjectsBox active={active} setSelected={setSelected} />
        </>
      )}
      {change === "2" && (
        <>
          <div className="experienceBoxes">
            <AboutMe active={active2} />
            <div className="box">
              <ExperienceBox
                active={active2}
                title={"Hospitality"}
                info={
                  "I have over five years of experience in hospitality roles, including bar staff, barista, and seafood preparation, developing teamwork, adaptability, and problem-solving skills in fast-paced environments."
                }
                icon={
                  <>
                    <BrunchDiningIcon fontSize="large" />
                    <RestaurantMenuIcon fontSize="large" />
                    <TapasIcon fontSize="large" />
                  </>
                }
              />
              <ExperienceBox
                active={active2}
                title={"Seasonal Worker"}
                info={
                  "Seasonal experience as a watersports manager and instructor, overseeing equipment hire, safety boat operations, office and equipment management, safety briefings, and providing water sports guidance."
                }
                icon={
                  <>
                    <SurfingIcon fontSize="large" />
                    <SailingIcon fontSize="large" />
                    <KitesurfingIcon fontSize="large" />
                  </>
                }
              />
              <div className="contactExp">
                <ExperienceBox
                  active={active2}
                  title={"Any Questions?"}
                  info={"Please contact me!"}
                  icon={
                    <div className="contactExperience">
                      <EmailIcon fontSize="large" />{" "}
                      <GetAppIcon fontSize="large" />
                    </div>
                  }
                  clickable={"contactBox"}
                  onClick={setSelected}
                />
              </div>
            </div>
            <Education active={active2} ids={"education1"} />
          </div>
          <Education active={active2} ids={"education2"} />
        </>
      )}
      {change === "3" && (
        <div className="projectsTab">
          <ProjectBox
            active={active3}
            title={"Fitness App"}
            image={"fitnessAppWorkout"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"1"}
            row={"1"}
          />
          <ProjectBox
            active={active3}
            title={"Spotify Audio-Visualizer"}
            image={"spotifyVisual"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"2"}
            row={"1"}
          />
          <ProjectBox
            active={active3}
            title={"E-commerce"}
            image={"HughStore"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"3"}
            row={"1"}
          />
          <ProjectBox
            active={active3}
            title={"Weather App"}
            image={"weatherAppWeather"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"4"}
            row={"1"}
          />
          <ProjectBox
            active={active3}
            title={"Space Invaders"}
            image={"spaceInvaders"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"5"}
            row={"2"}
          />
          <ProjectBox
            active={active3}
            title={"Gazetteer"}
            image={"gazetter"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"6"}
            row={"2"}
          />
          <ProjectBox
            active={active3}
            title={"Run and Gun"}
            image={"runAndGun"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"7"}
            row={"2"}
          />
          <ProjectBox
            active={active3}
            title={"My Portfolio"}
            image={"thisWeb"}
            link={""}
            handleProjectClick={handleProjectClick}
            id={"8"}
            row={"2"}
          />
          <ProjectDetails
            projectNo={chosenProject}
            projectVis={projectVis}
            setProjectVis={setProjectVis}
          />
        </div>
      )}
      {change === "4" && (
        <>
          <ContactDetails active={active4} />
          <CV active={active4} />
          <ProjectsBox active={active4} setSelected={setSelected} />
          <SocialBox
            colour={"#21262d"}
            link={"https://github.com/HughPullman"}
            icon={<GithubOriginal size={60} />}
            active={active4}
          />
          <SocialBox
            colour={"#0077B5"}
            link={"https://www.linkedin.com/in/hugh-pullman-03b417b1/"}
            icon={<LinkedinOriginal size={60} />}
            active={active4}
          />
          <ContactMe active={active4} />
        </>
      )}
    </div>
  );
};

export default Home;
