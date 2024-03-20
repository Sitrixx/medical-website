import SecondTitleReveal from "@/app/animations/SecondTitleReveal";
import TitleReveal from "@/app/animations/TitleReveal";
import clsx from "clsx";

const Skit = ({ title, description, background, id }: any) => {
  return (
    <section
      className={clsx(
        "h-screen w-full bg-cover bg-center",
        id === 2 && "bg-scientist"
      )}
    >
      <div
        className={clsx(
          "h-full w-full flex bg-[#000000bd]",
          id % 2 === 0 ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div
          className={clsx(
            "p-8 md:px-14 md:py-10 lg:px-16 w-full h-full md:w-1/2",
            id === 2 ? "bg-transparent" : "bg-white"
          )}
        >
          <div
            className={clsx(
              "w-full h-full flex flex-col justify-between max-w-md",
              id === 2 && "text-white"
            )}
          >
            <div>
              <TitleReveal className="text-3xl lg:text-4xl tracking-tight font-medium">
                {title}
              </TitleReveal>
            </div>
            <div className="flex flex-col space-y-5 tracking-tight">
              <p
                className={clsx(
                  "text-xs xl:text-sm xl:font-light",
                  id === 2 && "text-white"
                )}
              >
                {description}
              </p>
              <SecondTitleReveal
                className="font-medium text-lg xl:text-xl"
                delay={0.8}
              >
                All Specialist
              </SecondTitleReveal>
            </div>
          </div>
        </div>
        <div
          className={clsx("hidden md:block w-1/2 h-full bg-cover bg-center")}
          style={{ backgroundImage: `url('${background}')` }}
        ></div>
      </div>
    </section>
  );
};

export default Skit;
