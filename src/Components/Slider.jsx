import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1200, min: 924 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel responsive={responsive}>
            <div className="bg-white">Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
    );
};

export default Slider;