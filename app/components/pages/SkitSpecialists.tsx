const SkitSpecialists = () => {
  return (
    <section className="h-screen w-full flex flex-row">
      <div className="p-8 md:px-14 md:py-10 lg:px-16 bg-white w-full h-full md:w-1/2">
        <div className="w-full h-full flex flex-col justify-between max-w-md">
          <div>
            <h1 className="text-3xl tracking-tight font-medium">
              Our Exceptional Team of Global Specialists
            </h1>
          </div>
          <div className="flex flex-col space-y-5 tracking-tight">
            <p className="text-gray-600 text-xs">
              Our specialists possess the highest level of qualification and
              experience, ensuring you access to premium-class global medical
              expertise. Regardless of your needs, we have a team of experts
              ready to provide you with outstanding and personalized medical
              care.
            </p>
            <h2 className="font-medium text-lg">All Specialist</h2>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full"></div>
    </section>
  );
};

export default SkitSpecialists;
