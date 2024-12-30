import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "He captured the most beautiful portraits of my family. His patience and warm personality made the entire session enjoyable, even for my kids, who are not easy to photograph! The final images were breathtaking, and we’ll treasure them forever. Thank you, Kojo!",
      author: "– Linda A.",
    },
    {
      id: 2,
      quote:
        "Working with Kojo was an absolute pleasure! He turned our simple product shoot into a stunning portfolio of images that elevated our brand. His professionalism, creativity, and keen sense of lighting made all the difference. Highly recommended!",
      author: "– Sophia M., Creative Director",
    },
    {
      id: 3,
      quote:
        "Kojo has an incredible eye for detail! He captured moments from our wedding that we will cherish forever. Every photo tells a story, and his ability to make us feel comfortable in front of the camera made all the difference. Highly recommended!",
      author: "– Amelia and Daniel",
    },
    {
      id: 4,
      quote:
        "His photography helped me stand out as a professional. His headshots were exactly what I needed, capturing both confidence and approachability. I’m beyond happy with the results!",
      author: "– Michael T.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Automatically slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative isolate overflow-hidden  bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black text-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-white sm:text-3xl">Client Testimonials</h2>
        <div className="relative">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4"
                  style={{ flex: "0 0 100%" }}
                >
                  <blockquote className="text-center text-xl font-semibold text-gray-100 sm:text-2xl">
                    <p className="mb-4 text-sm">{testimonial.quote}</p>
                    <footer className="text-sm text-indigo-300">{testimonial.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-indigo-500" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
