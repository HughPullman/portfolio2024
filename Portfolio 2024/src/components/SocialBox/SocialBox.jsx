import "./SocialBox.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SocialBox = ({ colour, icon, link, active }) => {
  const [intro, setIntro] = useState("");

  useEffect(() => {
    if (active) {
      setIntro("animate__animated animate__flipInY");
    } else {
      setIntro("animate__animated animate__flipOutX");
    }
  }, [active]);

  return (
    <Link
      className={`socialBox ${intro}`}
      style={{ backgroundColor: colour }}
      to={link}
    >
      <div className="socialIcon">{icon}</div>
    </Link>
  );
};
export default SocialBox;
