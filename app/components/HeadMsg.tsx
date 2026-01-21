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
              Leadership
            </span>
          </div>

          <h2
            className={`${schoolFont.className} text-4xl lg:text-5xl font-bold mb-6 text-slate-900`}
          >
            Message from the Headteacher
          </h2>

          <p
            className={`lg:text-xl text-md leading-relaxed lg:line-clamp-3 line-clamp-5 text-slate-700 `}
          >
            Assalam alaikum warahmatullahi wabarakatuh. Welcome to Kawempe
            Muslim Secondary School. We are dedicated to providing quality
            education rooted in academic excellence, discipline, and strong
            Islamic values. Our goal is to nurture well-rounded students who are
            confident, responsible, and prepared to succeed in both education
            and life. We value partnership with parents and the community as we
            guide our learners toward a bright and purposeful future.
          </p>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
            <Book className="w-5 h-5 text-blue-600" />
            <Link
              href="/about"
              className="text-blue-600 font-medium hover:underline underline-offset-4 transition"
            >
              Read full message
            </Link>
          </div>
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
