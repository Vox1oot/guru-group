import Carousel from "react-bootstrap/Carousel";

const CardCarousel = ({ url }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CardCarousel;
