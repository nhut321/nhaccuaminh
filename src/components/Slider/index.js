import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { useContext } from "react";
import { ZingContext } from "../../Context/ZingContext";
const SliderShow = () => {
  const ZingMp3 = useContext(ZingContext)
  const PrevArr = ( style) => {
    return <div  style={{ ...style, display: "block", background: "green" }}/>
  };
  const settings = {
    arrows: false,
    dots: true, // Show navigation dots
    infinite: true, // Loop the slideshow
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    // nextArrow: <SampleNextArrow />,
    prevArrow: <PrevArr />,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {
          ZingMp3?.getHome?.banner?.items.map((value, index) => {
            return (
        <div key={index}>
          <img style={{ width: "100%", borderRadius: "4px"  }} src={value.banner} alt="Slide 1" />
        </div>

            )
          })
        }
        {/* <div>
          <img style={{ width: "100%", borderRadius: "4px"  }} src="/img/slider.png" alt="Slide 2" />
        </div>
        <div>
          <img style={{ width: "100%", borderRadius: "4px"  }} src="/img/slider.png" alt="Slide 3" />
        </div> */}
      </Slider>
    </div>
  );
};

export default SliderShow;
