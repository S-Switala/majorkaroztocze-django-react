import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types"; // Walidacja propsów

const MyCarousel = ({ images }) => {
  return (
    <Carousel indicators={false} controls={true}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
            title={image.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// ✅ Walidacja `props`
MyCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string, // Opcjonalne
    })
  ).isRequired,
};

export default MyCarousel;
