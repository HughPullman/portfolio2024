import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  VitejsOriginal,
  GithubOriginal,
  MongodbOriginalWordmark,
  ExpressOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const WeatherDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>Weather App</h2>
        <p>
          This project was developed during my time on the Digital Futures
          software engineering course. The task was to design and implement both
          the front-end and back-end of a weather application.
        </p>
        <p>
          The app leverages API calls to retrieve and display weekly weather
          forecasts for any user-searched location. It also includes a user
          authentication system, enabling users to log in and save preferred
          locations for quick access to their weather information.
        </p>
        <p>
          This project highlights my ability to integrate APIs, build functional
          user interfaces, and implement secure user authentication for a
          practical application.
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
            <MongodbOriginalWordmark size={40} />
          </div>
          <div className="icon">
            <ExpressOriginal size={40} />
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
              <img src="/img/weatherAppWeather.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/weatherAppLogin.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/weatherAppHome.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/DigitalFutures-Challenge-4"
          className="gitLink"
          target="_blank"
        >
          Front-end
          <GithubOriginal size={50} />
        </Link>
        <Link
          to="https://github.com/HughPullman/DigitalFutures-Challenge-5"
          className="gitLink"
          target="_blank"
        >
          Back-end
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default WeatherDetails;
