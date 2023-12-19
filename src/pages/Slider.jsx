import React from "react";
import Slider from "react-slick";

const NextSlideButton = ({ onClick }) => (
  <button onClick={onClick}>Next Slide</button>
);

const SliderComponent = () => {
  const settings = {
    infinite: false, // To prevent looping
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextSlideButton />,
  };

  return (
    <Slider {...settings}>
      <div>
        <h1>Slide 1</h1>
      </div>
      <div>
        <h1>Slide 2</h1>
      </div>
      <div>
        <h1>Slide 3</h1>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SliderComponent;
