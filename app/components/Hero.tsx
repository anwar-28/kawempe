const Hero = () => {
  return (
    <section className="relative  max-w-screen h-screen text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/back.png)] bg-cover bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 h-full text-center">
        <div className="w-0.5 mt-20 h-40 bg-green-400" />

        <h1 className="font-light tracking-[10px] text-sm sm:text-base">
          WELCOME TO
        </h1>

        <h2 className="text-4xl w-screen lg:text-6xl font-semibold">
          KAWEMPE MUSLIM <br />
          SECONDARY SCHOOL
        </h2>

        <p className="tracking-widest text-sm">GO HIGHER</p>

        <div className="w-0.5 h-40 bg-green-400 mt-4" />
      </div>
    </section>
  );
};

export default Hero;
