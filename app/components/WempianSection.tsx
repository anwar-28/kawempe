"use client";
import { Crimson_Pro } from "next/font/google";

const schoolFont = Crimson_Pro({
  subsets: ["latin"],
  weight: "400",
});

const WempianSection = () => {
  const students = [
    {
      name: "John Doe",
      role: "Student Leader",
      img: "/b1.png",
      description:
        "Our students come from all walks of life, realizing their potential as artists and changemakers.",
    },
    {
      name: "John Doe",
      role: "Student Leader",
      img: "/b2.png",
      description:
        "Our students come from all walks of life, realizing their potential as artists and changemakers.",
    },
    {
      name: "Jane Smith",
      role: "Debate Champion",
      img: "/b3.png",
      description:
        "Our students come from all walks of life, realizing their potential as artists and changemakers.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`text-4xl text-slate-800 lg:text-5xl font-bold mb-16 text-center ${schoolFont.className}`}
        >
          Get to Know a Wempian
        </h2>

        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center relative">
          {/* Images */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 lg:items-start relative">
            {students.map((student, idx) => (
              <div
                key={idx}
                className={`relative ${idx === 1 ? "-mt-24 lg:mt-0" : ""}`}
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-xl shadow-lg border-4 border-green-400"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="lg:w-1/3 mt-12 lg:mt-0 text-center lg:text-left">
            <p className="text-lg text-gray-700">{students[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WempianSection;
