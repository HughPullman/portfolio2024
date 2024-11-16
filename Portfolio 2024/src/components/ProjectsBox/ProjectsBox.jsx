import "./ProjectsBox.scss";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

const ProjectsBox = ({ active, setSelected }) => {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState("");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (active) {
      setProjects("animate__animated animate__fadeInBottomRight");
    } else {
      setProjects("animate__animated animate__fadeOutRight");
    }
  }, [active]);

  return (
    <div className={`projectsBox ${projects}`} onClick={() => setSelected("3")}>
      <span>Projects</span>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
        controls={false}
      >
        <Carousel.Item interval={3000}>
          <img src="/img/HughsFoods.png" alt="" className="slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/img/HughStore.png" alt="" className="slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/img/runAndGun.png" alt="" className="slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/img/spotifyVisual.png" alt="" className="slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/img/spaceInvaders.png" alt="" className="slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ProjectsBox;
