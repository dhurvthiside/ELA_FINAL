import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

const InfluencerSpotlight = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".multiple-slide-carousel", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50 relative">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-600 uppercase tracking-wide">
          Influencer Spotlight
        </h2>
        <p className="text-gray-600 text-sm md:text-lg mt-3 w-3/4 md:w-1/2 mx-auto">
          Discover the trendsetters who are shaping the fashion world with their unique style and influence.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative w-11/12 md:w-4/5 mx-auto">
        <div className="swiper multiple-slide-carousel swiper-container">
          <div className="swiper-wrapper mb-16">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="swiper-slide">
                <div className="bg-white shadow-lg rounded-2xl h-96 flex justify-center items-center border border-gray-200 transition-transform transform hover:scale-105">
                  <span className="text-2xl font-semibold text-indigo-600">
                    Slide {num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Placed Absolutely for Visibility) */}
        <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 z-10 bg-white border border-indigo-600 !w-12 !h-12 flex justify-center items-center rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300">
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 z-10 bg-white border border-indigo-600 !w-12 !h-12 flex justify-center items-center rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300">
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InfluencerSpotlight;
