import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../mocks/reviews";
import { i18n } from "../../translate/i18n";
import ReviewCard from "./components/ReviewCard";
import { Link } from "react-router-dom";
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

  const callAction = [
    { name: i18n.t("items.cottage"), path: "/chales", image: "chales.jpg" },
    { name: i18n.t("items.leisure"), path: "/chales", image: "lazer.jpg" },
    { name: i18n.t("items.services"), path: "/chales", image: "servicos.jpg" },
  ];

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
      <div className="">
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.reviews")}</h3>
        </div>
        <div className="max-w-full overflow-hidden">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </Slider>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.facilities")}</h3>
          <div className="flex flex-col gap-6 md:flex-row">
            {callAction.map((action, index) => (
              <Link to={action.path} className="md:w-[33%]" key={index}>
                <div
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md"
                  style={{
                    backgroundImage: `url("/assets/calls/${action.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex gap-4 h-full hover:gap-6 transition-all p-4  items-end">
                    <h3
                      className="text-white text-2xl"
                      style={{ textShadow: "2px 2px rgb(0 0 0 / 38%)" }}
                    >
                      {action.name}
                    </h3>
                    <MdOutlineArrowForwardIos
                      size={24}
                      color="white"
                      style={{ marginTop: "3px" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.location")}</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5051.144008075224!2d-46.021924555312545!3d-22.863270661739612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc104a3a67a26b%3A0x34aa88739c7f0e92!2sHospedagem%20Spa%20da%20Alma!5e0!3m2!1sen!2sbr!4v1689790413916!5m2!1sen!2sbr"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </>
  );
}

export default Home;
