"use client";
import { Crimson_Pro } from "next/font/google";

const schoolFont = Crimson_Pro({
  subsets: ["latin"],
  weight: "400",
});

const CoreValues = () => {
  const carouselImages = [
    "/c1.jpg",
    "/c2.jpg",
    "/c3.jpg",
    "/c4.jpg",
    "/c5.jpg",
  ];

  return (
    <section className="bg-gray-50 text-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={
            "text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 " +
            schoolFont.className
          }
        >
          Core Values
        </h2>

        {/* Values Pills */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-16 font-semibold`}
        >
          <div className="bg-red-50 p-6 rounded-full w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] shadow-md">
            Fear Allah
          </div>
          <div className="bg-amber-50 p-6 rounded-full w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] shadow-md">
            Academic Excellence
          </div>
          <div className="bg-green-50 p-6 rounded-full w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] shadow-md">
            Ethics, Integrity & Teamwork
          </div>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-4">
            {carouselImages.concat(carouselImages).map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70%] sm:w-[50%] md:w-[33%] lg:w-[25%] h-40 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`carousel ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for smooth auto-scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CoreValues;
