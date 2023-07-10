import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../mocks/reviews";
import { i18n } from "../../translate/i18n";
import ReviewCard from "./components/ReviewCard";

function Home() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div
          className="h-[60vh] max-w-screen z-0 bg-fixed bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/assets/monteverde.jpg')`,
          }}
        ></div>
      </div>
      <div className="p-4 md:px-8 lg:px-12">
        <h3 className="title">{i18n.t("titles.reviews")}</h3>

        <div className="max-w-full overflow-hidden">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Home;
