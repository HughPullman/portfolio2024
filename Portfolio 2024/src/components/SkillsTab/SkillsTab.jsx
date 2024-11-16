import "./SkillsTab.scss";
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
} from "devicons-react";

const SkillsTab = () => {
  return (
    <div className="skillsTab">
      <div className="icon">
        <Html5Original size={40} />
        <span>HTML5</span>
      </div>
      <div className="icon">
        <Css3Original size={40} />
        <span>CSS3</span>
      </div>
      <div className="icon">
        <JavascriptOriginal size={40} />
        <span>JavaScript</span>
      </div>
      <div className="icon">
        <ReactOriginal size={40} />
        <span>React</span>
      </div>
      <div className="icon">
        <ThreejsOriginal size={40} />
        <span>Three.js</span>
      </div>
      <div className="icon">
        <NodejsOriginalWordmark size={40} />
        <span>Node.js</span>
      </div>
      <div className="icon">
        <BootstrapOriginal size={40} />
        <span>Bootstrap</span>
      </div>
      <div className="icon">
        <MongodbOriginal size={40} />
        <span>MongoDB</span>
      </div>
      <div className="icon">
        <GithubOriginal size={40} />
        <span>Github</span>
      </div>
    </div>
  );
};
export default SkillsTab;
