import "./ProjectDetails.scss";
import { useEffect, useState } from "react";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  ThreejsOriginal,
  NodejsOriginalWordmark,
  BootstrapOriginal,
  MongodbOriginal,
  GithubOriginal,
  SassOriginal,
} from "devicons-react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

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
          {projectNo === "1" && (
            <>
              <div className="left">
                <h2>Audio Visualizer with Spotify API</h2>
                <p>
                  This project is an audio-visualization web application that
                  leverages the Spotify API to provide an interactive and
                  engaging experience. Users can log in with their Spotify
                  account to access all standard Spotify features, such as
                  browsing playlists, selecting tracks, and playing music.
                </p>
                <p>
                  The application integrates the Spotify &quot;Current Track
                  Audio Analysis&quot; API to analyze the audio data of the
                  currently playing track. This data drives a dynamic, real-time
                  3D animation rendered using Three.js. The visualizer reacts to
                  the audio features, creating a visually captivating
                  synchronization between music and visuals.
                </p>
                <span>
                  <div className="icon">
                    <Html5Original size={40} />
                  </div>
                  <div className="icon">
                    <Css3Original size={40} />
                  </div>
                  <div className="icon">
                    <JavascriptOriginal size={40} />
                  </div>
                  <div className="icon">
                    <ReactOriginal size={40} />
                  </div>
                  <div className="icon">
                    <ThreejsOriginal size={40} />
                  </div>
                  <div className="icon">
                    <SassOriginal size={40} />
                  </div>
                </span>
              </div>
              <div className="right">
                <img src="/img/spotifyVisual.png" alt="" />
                <Link to="https://github.com/HughPullman/Spotify-Audio-Visualizer">
                  <GithubOriginal size={50} />
                </Link>
              </div>
            </>
          )}
          <button className="closeBtn" onClick={() => setProjectVis(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};
export default ProjectDetails;
