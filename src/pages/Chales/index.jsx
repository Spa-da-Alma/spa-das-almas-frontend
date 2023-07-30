import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import chales from "../../mocks/chales";
import { useEffect, useState } from "react";

function Chales() {
  const { innerWidth: width } = window;
  console.log(width);

  const [maxLenght, setMaxLenght] = useState(0);

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

  const [expandedChales, setExpandedChales] = useState({});

  const toggleDescription = (index) => {
    setExpandedChales((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
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
              slidesPerView={1.15}
              slidesPerGroup={1}
              centeredSlides={true}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2.5,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3.5,
                  centeredSlides: false,
                },
              }}
            >
              {item.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    alt=""
                    className="w-full h-[300px] lg:h-[350px] object-cover cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-4 md:px-8 lg:px-12">
              <h4 className="mb-4 text-lg font-semibold">
                Descrição do chalé:
              </h4>
              <div className="text-justify">
                {item.description.length > maxLenght ? (
                  <p>
                    {expandedChales[index]
                      ? item.description
                      : `${item.description.slice(0, maxLenght)}...`}
                    <button onClick={() => toggleDescription(index)}>
                      {expandedChales[index] ? "Ver menos" : "Ver mais"}
                    </button>
                  </p>
                ) : (
                  <p>{item.description}</p>
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
