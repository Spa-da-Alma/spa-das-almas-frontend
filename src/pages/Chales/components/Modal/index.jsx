import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import chales from "../../../../mocks/chales";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  isOpen,
  onClose,
  selectedImageCottage,
  selectedImageIndex,
}) => {
  const cottage = chales.find((item) => item.name === selectedImageCottage);
  console.log(cottage);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay fixed top-1/2 left-1/2 z-40 w-[80%] -translate-x-1/2 -translate-y-1/2">
      <button
        className="absolute right-4 top-4 text-black z-30"
        onClick={onClose}
      >
        <AiOutlineClose size={40} />
      </button>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        pagination={{ clickable: true }}
        initialSlide={selectedImageIndex}
        centeredSlides={true}
      >
        {cottage?.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt=""
              className="w-full h-[80vh] object-contain cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Modal;
