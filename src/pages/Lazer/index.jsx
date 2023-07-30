import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import lazer from "../../mocks/leisure";

function Lazer() {
  return (
    <>
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          slidesPerGroup={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          navigation={true}
          grabCursor={true}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {lazer.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[61px] my-8">
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
