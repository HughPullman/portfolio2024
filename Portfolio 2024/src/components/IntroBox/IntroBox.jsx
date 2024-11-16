import "./IntroBox.scss";

const IntroBox = () => {
  return (
    <div className="introbox">
      <div className="left">
        <span className="softwareDev">Junior Software Developer</span>
        <span className="hello">
          Hello,<br></br>I&apos;m <span className="colouredText">Hugh</span>{" "}
          Pullman
        </span>
      </div>
      <div className="about">
        <div className="me">
          <h1>About Me</h1>
          <img src="/img/me.jpg" alt="" />
        </div>
        <p>
          I’m a software engineer with a background in Electrical Engineering
          and a recent graduate of the Digital Futures Software Engineering
          course.
        </p>
      </div>
    </div>
  );
};
export default IntroBox;
