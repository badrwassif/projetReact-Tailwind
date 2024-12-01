import { FRAMEWORK_DATA } from "../../data/mockData";
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { motion } from "framer-motion";

const Framework = () => {
  const gradientRefs = useGradientUpdater();

  const frameworkGridSettings = [
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[25%] before:-right-[5%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:bottom-0 after:right-[35%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-bottom-[10%] before:-right-[5%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:top-0 after:right-[35%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[15%] before:-right-0 before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:-bottom-[10%] after:left-[52%] after:blur-[30px] after:rounded-full",
    },
    {
      cardGradientBefore:
        "before:content-[''] before:bg-grad-theme-135 before:absolute before:w-[300px] before:h-[300px] before:-top-[5%] before:right-[20%] before:blur-[30px] before:rounded-full",
      cardGradientAfter:
        "after:content-[''] after:bg-grad-theme-135 after:absolute after:w-[270px] after:h-[270px] after:-bottom-[15%] after:-right-[5%] after:blur-[30px] after:rounded-full",
    },
  ];

  return (
    <section className="lg:py-[65px] py-10 text-white px-4">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="lg:text-3xl md:text-2xl text-xl text-center font-semibold max-w-[767px] mx-auto">
          Transform work practices forever. <br /> Our Framework for the future:
        </h3>
        <div className="grid xxl:gap-y-[30px] xl:gap-y-6 gap-y-4 items-start lg:mt-[65px] mt-10">
          {FRAMEWORK_DATA?.map(({ id, title, image, description }, index) => {
            return (
              <motion.div
                key={id}
                className="bg-grad-theme-135 rounded-3xl p-[3px]"
                ref={(el) => (gradientRefs.current[index] = el)}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div
                  className={`rounded-3xl bg-jet h-full grid items-center md:grid-cols-2 ${
                    FRAMEWORK_DATA?.length - 1 === index
                      ? "lg:ps-10 ps-6"
                      : "lg:py-12 lg:px-10 py-8 px-6"
                  } xxl:gap-20 xl:gap-16 lg:gap-12 gap-10 relative overflow-hidden ${
                    frameworkGridSettings[index].cardGradientBefore
                  } ${frameworkGridSettings[index].cardGradientAfter}`}
                >
                  <div
                    className={`relative z-10 ${
                      FRAMEWORK_DATA?.length - 1 === index &&
                      "lg:py-10 pt-6 pe-6"
                    }`}
                  >
                    <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-3">
                      {title}
                    </h3>
                    <p className="lg:text-xl md:text-lg text-base font-source-sans font-normal">
                      {description}
                    </p>
                  </div>
                  <img className="relative z-10" src={image} alt="" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Framework;
