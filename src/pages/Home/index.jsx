import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../mocks/reviews";
import { i18n } from "../../translate/i18n";
import ReviewCard from "./components/ReviewCard";
import { Link } from "react-router-dom";
import services from "../../mocks/services";

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
        <h3 className="title">{i18n.t("titles.facilities")}</h3>
        <div className="flex flex-col md: justify-between">
          <div className="flex flex-col">
            <div className="grid grid-cols-4 grid-rows-2 h-[300px] md:h-[400px] z-0 gap-2 overflow-hidden">
              <img
                src="/assets/facilities/foto1.jpg"
                alt=""
                className="grid-image"
              />
              <img
                src="/assets/facilities/foto3.jpg"
                alt=""
                className="grid-image"
              />
              <img
                src="/assets/facilities/foto4.jpg"
                alt=""
                className="grid-image hidden"
              />
              <img
                src="/assets/facilities/foto5.jpg"
                alt=""
                className="grid-image col-span-2"
              />
              <img
                src="/assets/facilities/foto2.jpg"
                alt=""
                className="col-span-2 grid-image"
              />
              <img
                src="/assets/facilities/foto1.jpg"
                alt=""
                className="grid-image"
              />
              <img
                src="/assets/facilities/foto1.jpg"
                alt=""
                className="grid-image"
              />
            </div>
            <Link
              to={"/chales"}
              className="bg-gray-800 rounded-md text-center mt-4 py-4 px-6 texl-lg text-white"
            >
              Conhecer agora
            </Link>
          </div>
          <h3 className="title">{i18n.t("titles.services")}</h3>
          <div className="flex flex-wrap gap-y-6 md:justify-center md:items-center md:gap-x-16 my-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-1/2 md:w-auto justify-center items-center"
              >
                <item.icon size={30} className="" color="#1f2937" />
                <p className="text-xl">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
