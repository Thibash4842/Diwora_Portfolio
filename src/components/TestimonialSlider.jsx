import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 2,
    name: "David Lee",
    role: "Frontend Developer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "CEO",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "UI/UX Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80"
  },
  {
    id: 5,
    name: "Sophia Taylor",
    role: "Founder",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&q=80"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-[3px] mb-4 text-[#ffb800]">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
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
    <section className="relative w-full bg-white dark:bg-[#16171d] py-24 overflow-hidden font-sans border-t border-gray-100/60 dark:border-neutral-800/40">

      {/* Edge Gradient vignettes with subtle backdrop blur to fade-out overflowing cards on screen borders */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#16171d] dark:via-[#16171d]/80 pointer-events-none z-10 backdrop-blur-[1px]"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#16171d] dark:via-[#16171d]/80 pointer-events-none z-10 backdrop-blur-[1px]"></div>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-semibold tracking-tight text-black dark:text-white leading-[1.15]">
              What it’s like working with us
            </h2>
          </div>
          <div className="md:max-w-xs text-left md:text-right">
            <p className="text-[15px] text-neutral-800 dark:text-neutral-400 font-normal leading-relaxed">
              How clients describe the work and the process.
            </p>
          </div>
        </div>
      </div>

      {/* Swiper Slider Outer Container (Keeps bounds for alignment, but overflow is visible) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative w-full pb-12 testimonial-slider-container">
          <Swiper
            modules={[Autoplay, Pagination, FreeMode, Mousewheel]}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto py-4">
                <div className="h-full flex flex-col justify-between bg-white dark:bg-[#1f2028] border border-[#f1f1f4] dark:border-[#2e303a]/60 rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_15px_40px_rgba(0,0,0,0.035)] dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                  <div>
                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />

                    {/* Testimonial Text */}
                    <p className="text-neutral-700 dark:text-neutral-300 text-[15px] md:text-[16px] font-normal leading-relaxed mb-10">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-100 dark:border-neutral-800"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-black dark:text-white leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500 font-medium mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="swiper-custom-pagination flex justify-center gap-2 mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
