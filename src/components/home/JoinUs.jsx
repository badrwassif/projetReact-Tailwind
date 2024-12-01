const JoinUs = () => {
  return (
    <section className="py-[65px] lg:min-h-[680px] min-h-auto px-4 text-white relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[612px] xl:after:h-[612px] md:after:w-[360px] md:after:h-[360px] after:w-[240px] after:h-[240px] after:bottom-0 after:right-0 after:blur-[80px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[612px] xl:before:h-[612px] md:before:w-[360px] md:before:h-[360px] before:w-[240px] before:h-[240px] before:-top-[5%] before:-left-[5%] before:blur-[80px] before:rounded-full flex items-center">
      <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto text-center relative z-10">
        <h2 className="font-semibold font-montserrat lg:text-[40px] md:text-4xl sm:text-3xl text-2xl leading-tight">
          Join us in revolutionizing global business growth through AI-driven innovation today
        </h2>
        <p className="text-xl lg:mt-[44px] md:mt-8 sm:mt-6 mt-4 lg:mb-[46px] md:mb-8 sm:mb-6 mb-4">Get early access to our free features.</p>
        <form className="w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto">
            <input type="email" placeholder="Enter your work email" className="lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full placeholder:text-cadet-blue outline-0 font-source-sans lg:text-base text-sm" />
            <button type="submit" className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap lg:text-base text-sm px-5 font-semibold hover:scale-105 transition-all duration-300 ease-in-out">Get early access</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
