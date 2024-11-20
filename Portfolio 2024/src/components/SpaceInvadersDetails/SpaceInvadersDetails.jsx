import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  GithubOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const SpaceInvadersDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>Space Invaders</h2>
        <p>
          This project is a modern re-creation of the classic arcade game Space
          Invaders, built entirely with pure HTML, CSS, and JavaScript. It
          demonstrates my ability to develop interactive and dynamic web
          applications without relying on external libraries or frameworks,
          showcasing a strong foundation in core web development technologies.
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
              <img src="/img/spaceInvaders.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/spaceInvaders2.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/spaceInvaders3.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/SpaceInvaders"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default SpaceInvadersDetails;
