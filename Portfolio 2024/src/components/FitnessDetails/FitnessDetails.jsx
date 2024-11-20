import {
  ReactOriginal,
  VitejsOriginal,
  GithubOriginal,
  SassOriginal,
  MongodbOriginalWordmark,
  ExpressOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const FitnessDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>Digital Futures Capstone - Fitness App</h2>
        <p>
          This project was my capstone during the Digital Futures software
          engineering course, where I was tasked with designing and implementing
          a solution that adhered to specific technical requirements. The
          application had to feature an N-tier architecture, a RESTful API, a
          database, CRUD operations, a user interface, and robust authentication
          and authorization functionality.
        </p>
        <p>
          For the project, I developed a fitness helper app aimed at simplifying
          workout planning. The app enables users to search for exercises based
          on various criteria, such as muscle group and difficulty level. Users
          can log in to save exercises and organize them into custom workout
          plans.
        </p>
        <p>
          Looking ahead, I would enhance the app by integrating features like a
          workout calendar and note-taking capabilities, further increasing its
          value as a fitness planning tool. This project highlights my ability
          to design user-centric solutions while leveraging full-stack
          development principles.
        </p>
        <span>
          <div className="icon">
            <ReactOriginal size={40} />
          </div>
          <div className="icon">
            <VitejsOriginal size={40} />
          </div>
          <div className="icon">
            <SassOriginal size={40} />
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
              <img src="/img/fitnessAppSearch.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/fitnessAppLogin.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/fitnessAppWorkout.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/Fitness-app-Front-end"
          className="gitLink"
          target="_blank"
        >
          Front-end
          <GithubOriginal size={50} />
        </Link>
        <Link
          to="https://github.com/HughPullman/Fitness-app-Back-end"
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
export default FitnessDetails;
