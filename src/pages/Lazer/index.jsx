import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import lazer from "../../mocks/leisure";

function Lazer() {
  return (
    <>
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {lazer.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[61px] my-8 p-12">
                <h1 className="text-2xl uppercase font-semibold text-center">
                  {item.name}
                </h1>
              </div>
              <img
                className="object-cover h-[300px] w-full object-bottom"
                src={item.image}
                alt=""
              />
              <p className="text-justify px-2 mt-2 mb-20">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Lazer;
