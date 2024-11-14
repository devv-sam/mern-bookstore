import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCard from "../Books/BookCard";
// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="py-16">
        <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {books.length > 0 &&
            books.slice(8, 16).map((book, index) => (
              <SwiperSlide key={index}>
                {" "}
                <BookCard book={book} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Recommended;
