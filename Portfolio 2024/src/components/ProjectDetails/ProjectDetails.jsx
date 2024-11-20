import "./ProjectDetails.scss";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SpotifyDetails from "../SpotifyDetails/SpotifyDetails";
import FitnessDetails from "../FitnessDetails/FitnessDetails";
import EcomDetails from "../EcomDetails/EcomDetails";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import ThisWebDetails from "../ThisWebDetails/ThisWebDetails";
import SpaceInvadersDetails from "../SpaceInvadersDetails/SpaceInvadersDetails";
import GazetDetails from "../GazetDetails/GazetDetails";
import RunGunDetails from "../RunGunDetails/RunGunDetails";

const ProjectDetails = ({ projectNo, projectVis, setProjectVis }) => {
  const [project, setProject] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (projectVis) {
      setTimeout(() => {
        setVisible(true);
      }, [100]);
      setProject("animate__animated animate__bounceInDown");
    } else {
      setTimeout(() => {
        setVisible(false);
      }, [500]);
      setProject("animate__animated animate__bounceOutDown");
    }
  }, [projectVis]);

  return (
    <>
      {visible && (
        <div className={`projectDetails ${project}`}>
          <CloseIcon
            fontSize="medium"
            className="closeIcon"
            onClick={() => setProjectVis(false)}
          />
          {projectNo === "1" && <FitnessDetails />}
          {projectNo === "2" && <SpotifyDetails />}
          {projectNo === "3" && <EcomDetails />}
          {projectNo === "4" && <WeatherDetails />}
          {projectNo === "5" && <SpaceInvadersDetails />}
          {projectNo === "6" && <GazetDetails />}
          {projectNo === "7" && <RunGunDetails />}
          {projectNo === "8" && <ThisWebDetails />}
          <button className="closeBtn" onClick={() => setProjectVis(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};
export default ProjectDetails;
