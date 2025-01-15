import "./Header.scss";
import { HashLink } from "react-router-hash-link";

const Header = ({ active, setActive }) => {
  const handleActive = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <span className="colouredLet">H</span>
          <span>ugh.</span>
        </div>
        <div className="right">
          <div
            className={active === "1" ? "active" : ""}
            onClick={handleActive}
            id="1"
          >
            <HashLink className="link" smooth to="" id="1">
              Home
            </HashLink>
          </div>
          <div
            className={active === "2" ? "active" : ""}
            onClick={handleActive}
            id="1"
          >
            <HashLink className="link" smooth to="" id="2">
              More Info
            </HashLink>
          </div>
          <div
            className={active === "3" ? "active" : ""}
            onClick={handleActive}
            id="1"
          >
            <HashLink className="link" smooth to="" id="3">
              Projects
            </HashLink>
          </div>
          <div
            className={active === "4" ? "active" : ""}
            onClick={handleActive}
            id="1"
          >
            <HashLink className="link" smooth to="" id="4">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
