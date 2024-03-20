import TitleReveal from "@/app/animations/TitleReveal";
import Link from "next/link";

const navItems = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Services",
  },
  {
    id: 2,
    name: "Doctors",
  },
  {
    id: 3,
    name: "About",
  },
  {
    id: 4,
    name: "Support",
  },
];

const HomePage = () => {
  return (
    <section className="h-svh w-full bg-adn bg-cover bg-center">
      <div className="h-svh w-full p-8 md:px-14 md:py-10 lg:px-16 bg-[#000000ad]">
        <div className="h-full flex flex-col w-full items-center">
          <div className="w-full flex flex-row justify-between max-w-screen-2xl mx-auto">
            <Link href="/" className="text-white text-lg">
              <span className="font-bold">Uni</span>care
            </Link>
            <div className="hidden md:flex flex-row space-x-12 text-white text-xs font-light lg:text-sm items-center justify-center">
              {navItems.map((item) => {
                return (
                  <h1 key={item.id} className="cursor-pointer">
                    {item.name}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className="text-white h-full space-y-6 md:space-y-9 flex items-center justify-center max-w-2xl flex-col md:w-9/12">
            <TitleReveal className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              Book appointments with local doctors in your plan.
            </TitleReveal>
            <p className="text-xs lg:text-sm leading-relaxed font-light text-center md:text-sm md:font-normal">
              Easily schedule appointments with nearby healthcare professionals
              who accepts your insurance coverage, ensuring convenient access to
              quality medical care within your plan.
            </p>
            <div className="bg-white w-full p-2 xl:text-sm flex flex-col md:flex-row rounded text-xs space-y-4 md:space-y-0 md:space-x-3 items-center justify-center">
              <input
                placeholder="Specialists, doctors..."
                className="p-2 outline-none text-black w-full"
              />
              {/* <div className="w-1/12 hidden md:block">
              <hr className="w-full rotate-90 border-t border-slate-400 rounded" />
            </div> */}
              <input
                placeholder="City, State or Zip code..."
                className="p-2 outline-none text-black w-full"
              />
              <button className="bg-blue-950 p-2 xl:p-3 rounded w-full lg:w-1/2">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
