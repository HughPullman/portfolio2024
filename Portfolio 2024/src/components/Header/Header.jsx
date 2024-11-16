import "./Header.scss";
import { HashLink } from "react-router-hash-link";

const Header = ({ active, setActive }) => {
  const handleActive = (e) => {
    setActive(e.target.id);
    console.log(e.target);
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
            className={active === "1" ? "active" : undefined}
            onClick={handleActive}
          >
            <HashLink className="link" smooth to="/#home" id="1">
              Home
            </HashLink>
          </div>
          <div
            className={active === "2" ? "active" : undefined}
            onClick={handleActive}
          >
            <HashLink className="link" smooth to="/#about" id="2">
              About
            </HashLink>
          </div>
          <div
            className={active === "3" ? "active" : undefined}
            onClick={handleActive}
          >
            <HashLink className="link" smooth to="/#projects" id="3">
              Projects
            </HashLink>
          </div>
          <div
            className={active === "4" ? "active" : undefined}
            onClick={handleActive}
          >
            <HashLink className="link" smooth to="/#contact" id="4">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
