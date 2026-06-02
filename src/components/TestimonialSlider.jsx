import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    id: 1,
    name: "Name",
    role: "Designation",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 2,
    name: "Name",
    role: "Designation",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 3,
    name: "Name",
    role: "Designation",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 4,
    name: "Name",
    role: "Designation",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-[5px] mb-5">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-[20px] h-[20px] text-[#facc15] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
  return (
    <section className="relative w-full bg-white py-4 overflow-hidden font-sans">

      {/* Decorative blurred circles */}
      <div className="absolute left-[-2%] top-[55%] -translate-y-1/2 w-[150px] h-[150px] bg-black/15 blur-[60px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute right-[-2%] top-[55%] -translate-y-1/2 w-[150px] h-[150px] bg-black/15 blur-[60px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Container */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <h2 className="text-[36px] md:text-5xl lg:text-[44px] xl:text-[52px] font-normal tracking-tight text-black leading-none max-w-2xl">
            What it’s like working with us
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-normal md:mt-2 md:text-right">
            How clients describe the work and the process.
          </p>
        </div>

        {/* Swiper Slider Outer Container */}
        <div className="relative w-full pb-10">
          <style dangerouslySetInnerHTML={{
            __html: `
              .custom-swiper-pagination .swiper-pagination-bullet {
                width: 9px;
                height: 9px;
                background-color: #e5e5e5;
                opacity: 1;
                margin: 0 6px !important;
                border-radius: 50%;
                transition: all 0.3s ease;
                cursor: pointer;
              }
              .custom-swiper-pagination .swiper-pagination-bullet-active {
                background-color: #000;
              }
            `
          }} />
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={18}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            className="!pb-10 !pt-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="h-full flex flex-col justify-between bg-white border border-neutral-200/60 rounded-[24px] p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]">
                  <div>
                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />

                    {/* Testimonial Text */}
                    <p className="text-[#0a0a0a] text-[15px] md:text-[16px] font-normal leading-[1.65] tracking-tight mb-12">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[48px] h-[48px] rounded-full object-cover"
                    />
                    <div className="flex flex-col justify-center gap-0.5">
                      <h4 className="text-[16px] font-medium text-black leading-none">
                        {testimonial.name}
                      </h4>
                      <p className="text-[14px] text-[#333333] font-normal leading-none">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="custom-swiper-pagination flex justify-center items-center h-8"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
