"./SpotifyDetails.scss";
import {
  ReactOriginal,
  GithubOriginal,
  SassOriginal,
  MongodbOriginalWordmark,
  ExpressOriginal,
} from "devicons-react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const EcomDetails = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="left">
        <h2>E-commerce Clothing Store</h2>
        <p>
          This project is a e-commerce application designed for browsing,
          filtering, adding items to a cart, and completing a checkout process
          for clothing. It features a classic e-commerce interface, providing an
          intuitive and seamless shopping experience for users.
        </p>
        <p>
          On the back-end, the application implements fundamental CRUD
          operations, ensuring efficient data handling and management. This
          project demonstrates my proficiency in building user-friendly
          interfaces and developing robust back-end systems to support essential
          e-commerce functionality.
        </p>
        <span>
          <div className="icon">
            <ReactOriginal size={40} />
          </div>
          <div className="icon">
            <MongodbOriginalWordmark size={40} />
          </div>
          <div className="icon">
            <SassOriginal size={40} />
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
              <img src="/img/HughStore.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/eComAppFeatured.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/img/eComAppProducts.png" alt="" className="slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Link
          to="https://github.com/HughPullman/E-Commerce-Final-App"
          className="gitLink"
          target="_blank"
        >
          <GithubOriginal size={50} />
        </Link>
      </div>
    </>
  );
};
export default EcomDetails;
