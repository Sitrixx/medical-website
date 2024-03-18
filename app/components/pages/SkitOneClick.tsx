const SkitOneClick = () => {
  return (
    <section className="h-screen w-full flex flex-row-reverse">
      <div className="p-8 md:px-14 md:py-10 lg:px-16 bg-white w-full h-full md:w-1/2">
        <div className="w-full h-full flex flex-col justify-between max-w-md">
          <div>
            <h1 className="text-3xl tracking-tight font-medium">
              One-Click Healthcare Access: Seamless Appointments with Ease
            </h1>
          </div>
          <div className="flex flex-col space-y-5 tracking-tight">
            <p className="text-gray-600 text-xs">
              We offer the convenience of scheduling doctor appointments with
              just one click, ensuring swift and easy access to medical care.
              Our innovative technologies streamline the appointment process,
              allowing you to focus on what matters most - your well-being.
            </p>
            <h2 className="font-medium text-lg">All Specialist</h2>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full"></div>
    </section>
  );
};

export default SkitOneClick;
