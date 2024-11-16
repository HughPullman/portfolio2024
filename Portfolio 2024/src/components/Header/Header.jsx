import "./Header.scss";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <span className="colouredLet">H</span>
          <span>ugh.</span>
        </div>
        <div className="right">
          <div className="item">
            <HashLink className="link" smooth to="/#home">
              Home
            </HashLink>
          </div>
          <div className="item">
            <HashLink className="link" smooth to="/#about">
              About
            </HashLink>
          </div>
          <div className="item">
            <HashLink className="link" smooth to="/#projects">
              Projects
            </HashLink>
          </div>
          <div className="item">
            <HashLink className="link" smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
