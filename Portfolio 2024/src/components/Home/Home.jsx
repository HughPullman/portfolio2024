import "./Home.scss";
import IntroBox from "../IntroBox/IntroBox";
import SkillsTab from "../SkillsTab/SkillsTab";
import SocialBox from "../SocialBox/SocialBox";
import { LinkedinOriginal, GithubOriginal } from "devicons-react";

const Home = () => {
  return (
    <div className="home" id="home" name="about">
      <IntroBox />
      <SkillsTab />
      <SocialBox
        colour={"#0077B5"}
        icon={
          <LinkedinOriginal
            size={60}
            link={"https://www.linkedin.com/in/hugh-pullman-03b417b1/"}
          />
        }
      />
      <SocialBox
        colour={"#21262d"}
        icon={
          <GithubOriginal size={60} link={"https://github.com/HughPullman"} />
        }
      />
    </div>
  );
};

export default Home;
