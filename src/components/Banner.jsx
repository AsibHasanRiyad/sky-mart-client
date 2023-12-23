import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className=""
    >
      <Carousel dynamicHeight={false}>
        <div>
          <img src="https://i.ibb.co/kGbJpVk/vecteezy-hooded-shirt-collection-for-men-and-women-generated-by-ai-24749691-2-1.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/ykqHgmK/vecteezy-hooded-jacket-on-mannequin-in-modern-boutique-generated-by-ai-24905593-2-1.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
