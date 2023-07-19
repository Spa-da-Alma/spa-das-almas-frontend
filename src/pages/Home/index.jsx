import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../mocks/reviews";
import { i18n } from "../../translate/i18n";
import ReviewCard from "./components/ReviewCard";
import { Link } from "react-router-dom";
import services from "../../mocks/services";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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
        <div>
          <h3 className="title">Conheça nossas instalações</h3>
          <Link to="/chales">
            <div
              className="w-full h-[300px] rounded-md p-4"
              style={{
                backgroundImage: 'url("/assets/calls/chalepronto.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-4">
                <h3 className="text-white text-2xl">Chalés</h3>
                <MdOutlineArrowForwardIos size={24} color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="title">Localização</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5051.144008075224!2d-46.021924555312545!3d-22.863270661739612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc104a3a67a26b%3A0x34aa88739c7f0e92!2sHospedagem%20Spa%20da%20Alma!5e0!3m2!1sen!2sbr!4v1689790413916!5m2!1sen!2sbr"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Home;
