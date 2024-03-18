const AboutPage = () => {
  return (
    <section className="h-svh w-full p-8 md:px-14 md:py-10 lg:px-16 bg-white">
      <div className="h-full flex flex-col w-full items-center">
        <div className="w-full flex flex-row max-w-screen-2xl items-center justify-center">
          <h1 className="text-lg font-medium tracking-tight">About us</h1>
        </div>
        <div className="h-full space-y-12 md:space-y-16 flex items-center justify-center max-w-2xl flex-col md:w-9/12">
          <div className="flex flex-col w-full space-y-3 md:space-y-9 items-center justify-center">
            <h1 className="text-center -tracking-wider text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              Connecting You to Global Healthcare Excellence.
            </h1>
            <p className="text-xs lg:text-sm leading-relaxed font-light text-center md:text-sm md:font-normal">
              Our mission is to unite healthcare professionnals and patients on
              a global scale, ensuring quality and affordable medical care in
              any situation. With UniCare, your health is in reliable hands -
              regardless of your location.
            </p>
          </div>
          <h1 className="underline text-black font-semibold text-lg lg:text-xl">
            More info
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;