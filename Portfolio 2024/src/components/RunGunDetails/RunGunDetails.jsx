import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  GithubOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const RunGunDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>Run and Gun game</h2>
        <p>
          This project is a classic arcade-style run-and-gun game where players
          aim to dodge or eliminate enemies while racking up a high score. As an
          avid gamer, I found this project particularly rewarding, especially
          the challenge of using pure JavaScript to implement the game&apos;s
          physics and mechanics. It showcases my ability to create engaging
          interactive experiences with clean and efficient code.
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
        </span>
      </div>
      <div className="right">
        <div className="imagesDetails">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="carousel"
          >
            <Carousel.Item interval={3000}>
              <img src="/img/runAndGun.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/runAndGun2.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/runAndGun3.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/Jumping-game"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default RunGunDetails;
