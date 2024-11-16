import "./Loading.scss";
import { useEffect } from "react";
import { gsap } from "gsap";

const Loading = () => {
  useEffect(() => {
    gsap.to(".loadingPage", {
      opacity: 0,
      duration: 1.5,
      delay: 3.5,
    });
    gsap.to(".loadingPage", {
      "z-index": 0,
      duration: 1.5,
      delay: 3.5,
    });
  }, []);

  return (
    <div className="loadingPage">
      <span className="h">H</span>
      <span className="ugh">ugh</span>
      <span className="dot">.</span>
    </div>
  );
};

export default Loading;
