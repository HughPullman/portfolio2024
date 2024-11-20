import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  GithubOriginal,
  PhpOriginal,
  BootstrapOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";

const GazetDetails = () => {
  return (
    <>
      <div className="left">
        <h2>Gazetteer App</h2>
        <p>
          This project was developed during my IT Career Switch course and is a
          Gazetteer App designed to enhance geographic exploration and data
          visualization. The app initially loads your country and displays a
          world map centered on your location, highlighting nearby cities and
          airports.
        </p>
        <p>
          Users can select any country, prompting the app to zoom in, outline
          its borders, and provide detailed information about the selected
          region. This project demonstrates my ability to integrate interactive
          mapping features with dynamic data presentation.
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
            <BootstrapOriginal size={40} />
          </div>
          <div className="icon">
            <PhpOriginal size={40} />
          </div>
        </span>
      </div>
      <div className="right">
        <img src="/img/gazetter.png" alt="" className="gazetImg" />
        <Link
          to="https://github.com/HughPullman/HughPullman/tree/main/project1PHPVer"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default GazetDetails;
