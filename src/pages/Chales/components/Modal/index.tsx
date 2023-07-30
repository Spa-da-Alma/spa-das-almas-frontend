import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <div className="modal-overlay fixed top-1/2 left-1/2 z-40 w-[80%] -translate-x-1/2 -translate-y-1/2">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        centeredSlides={true}
        initialSlide={selectedImageIndex}
        pagination={{ clickable: true }}
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
