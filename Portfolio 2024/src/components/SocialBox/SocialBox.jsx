import "./SocialBox.scss";
import { Link } from "react-router-dom";

const SocialBox = ({ colour, icon, link }) => {
  return (
    <Link className="socialBox" style={{ backgroundColor: colour }} to={link}>
      <div className="socialIcon">{icon}</div>
    </Link>
  );
};
export default SocialBox;
