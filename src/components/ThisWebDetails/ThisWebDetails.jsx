import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  ThreejsOriginal,
  GithubOriginal,
  SassOriginal,
  VitejsOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const ThisWebDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>My Portfolio</h2>
        <p>
          This portfolio showcases the diverse range of skills I have developed
          throughout my coding journey. Built using Vite and React as the
          primary framework, it integrates modern design tools such as Sass and
          Bootstrap for styling, along with Three.js to create visually engaging
          animations and 3D effects.
        </p>
        <p>
          This project reflects my proficiency in building responsive, visually
          appealing, and interactive web applications while utilising
          industry-standard tools and frameworks.
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
          <div className="icon">
            <ReactOriginal size={40} />
          </div>
          <div className="icon">
            <VitejsOriginal size={40} />
          </div>
          <div className="icon">
            <ThreejsOriginal size={40} />
          </div>
          <div className="icon">
            <SassOriginal size={40} />
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
              <img src="/img/thisWeb.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/thisWeb2.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/thisWeb3.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/portfolio2024"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default ThisWebDetails;
