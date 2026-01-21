import { Book } from "lucide-react";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";

const schoolFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const HeadMsg = () => {
  return (
    <section className="bg-gray-50 pb-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="w-10 h-[2px] bg-green-500" />
            <span className="uppercase tracking-widest text-sm text-slate-500">
              Student Leadership
            </span>
          </div>

          <h2
            className={`${schoolFont.className} text-4xl lg:text-5xl font-bold mb-6 text-slate-900`}
          >
            HeadBoy 2023/2024 Message
          </h2>

          <p
            className={`lg:text-xl text-md leading-relaxed line-clamp-5 text-slate-700 `}
          >
            On behalf of the student body, I warmly welcome you to our school.
            As Head Boy, I am proud to serve alongside a dedicated prefect team
            committed to discipline, leadership, and academic excellence.
            Together with our teachers and administration, we strive to uphold
            the values of our school and create a positive environment where
            every student can succeed.
          </p>
        </div>

        {/* Image / visual */}
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-green-100 rounded-2xl -z-10" />
            <img
              src="/logo.png"
              alt="Headteacher"
              className="w-56 h-56 object-contain rounded-xl bg-white shadow-md p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadMsg;
