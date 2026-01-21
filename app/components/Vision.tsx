import { Crimson_Text } from "next/font/google";

const schoolFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const Vision = () => {
  return (
    <section className="bg-yellow-200 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="lg:w-2/3 text-center lg:text-left text-black">
          <h2
            className={
              "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 " +
              schoolFont.className
            }
          >
            School Vision
          </h2>

          <p
            className={`text-xl lg:text-2xl leading-relaxed font-bold text-slate-700`}
          >
            A fountain of enlightened and skilled young men and women rooted in
            Islamic values.
          </p>
        </div>

        {/* Image */}
        <div className="hidden lg:flex lg:w-1/3 justify-center">
          <img
            src="/bg.jpg"
            alt="School Vision"
            className="w-full max-w-sm h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
