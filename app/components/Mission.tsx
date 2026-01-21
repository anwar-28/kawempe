import { Crimson_Pro } from "next/font/google";
import Link from "next/link";

const schoolFont = Crimson_Pro({
  subsets: ["latin"],
  weight: "400",
});

const Mission = () => {
  return (
    <div className="flex bg-black/40 flex-col text-center lg:flex-row justify-center items-center bg h-fit">
      <div className="mx-10 my-20  text-white">
        <h2
          className={`${schoolFont.className}text-2xl lg:text-4xl font-semibold mb-4`}
        >
          School Mission
        </h2>

        <p
          className={`text-3xl lg:text-6xl lg:w-175 text-center font-light text-slate-200 ${schoolFont.className}`}
        >
          To Produce Versatile Individuals through Quality Education and Islamic
          Values to address Global Challenges
        </p>
      </div>
    </div>
  );
};

export default Mission;
