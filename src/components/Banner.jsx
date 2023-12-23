import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div
    data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <Carousel dynamicHeight={false} >
        <div>
          <img src="https://i.ibb.co/3vSFvtd/Online-Shopping-Concept-2.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/CB8RSkm/Screenshot-2023-10-18-at-3-55-52-PM.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/7kW5D26/Screenshot-2023-10-18-at-4-11-43-PM.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
