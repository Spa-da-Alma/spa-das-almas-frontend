import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import chales from "../../mocks/chales";
import { useEffect, useState } from "react";

function Chales() {
  const { innerWidth: width } = window;
  const [maxLenght, setMaxLenght] = useState(0);
  const [showMore, setShowMore] = useState(0);

  useEffect(() => {
    defMaxLenght();
  }, []);

  function defMaxLenght() {
    setMaxLenght(180);
    if (width >= 768) {
      setMaxLenght(300);
    } else if (width >= 1024) {
      setMaxLenght(700);
    }
  }

  return (
    <>
      <h3 className="title">Conheça nossos chalés</h3>
      <div className="w-full">
        {chales.map((item, index) => (
          <div key={index}>
            <div className="text-center my-8">
              <span className="uppercase text-md tracking-[0.25rem]">
                Chalé
              </span>
              <h3 className="text-2xl uppercase font-semibold">{item.name}</h3>
            </div>
            <Swiper
              spaceBetween={10}
              freeMode={true}
              navigation={true}
              className="cursor-pointer"
            >
              {item.images.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    flexShrink: 1,
                  }}
                >
                  <div className="w-[300px]">
                    <img
                      src={item}
                      className="h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold">
                Descrição do chalé:
              </h4>
              <div className="text-justify">
                <p className="inline">
                  {!showMore
                    ? item.description.slice(0, maxLenght) + "..."
                    : item.description}
                </p>
                {item.description.length >= maxLenght && (
                  <button
                    className="text-blue-900 font-light inline ml-2"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Ver menos" : "Ver mais"}
                  </button>
                )}
              </div>
            </div>
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Chales;
