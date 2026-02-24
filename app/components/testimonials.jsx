"use client";
import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(3);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= testimonials.length - slidesToShow ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const numDots = Math.ceil(testimonials.length / slidesToShow);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2 w-full">
            <div
              className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6"
              style={{
                background:
                  "linear-gradient(90deg, #4880f0 -0.55%, #306bf2 22.86%, #1d52cf 48.36%,#1d52cf 73.33%, #1d52cf 99.34%)",
                filter: "blur(lg)",
                opacity: 0.3,
                borderRadius: "1.5rem",
              }}
            />
            <div className="relative overflow-hidden">
              <div
                className={`flex transition-transform duration-500 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`flex-shrink-0 ${
                      slidesToShow === 1 ? "w-full" : "md:w-1/3"
                    } px-3`}
                  >
                    <div className="flex flex-col overflow-hidden shadow-xl h-full">
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                        <div className="flex-1">
                          <blockquote className="flex-1 mt-8">
                            <p className="text-lg leading-relaxed text-gray-900 font-pj">
                              {testimonial.quote}
                            </p>
                          </blockquote>
                        </div>
                        <div className="flex items-center mt-8">
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900 font-pj">
                              {testimonial.name}
                            </p>
                            <p className="mt-0.5 text-sm font-pj text-gray-600">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {Array.from({ length: numDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    border: "none",
                    margin: "0 5px",
                    backgroundColor:
                      currentIndex === index ? "black" : "lightgray",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Let's Build Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
