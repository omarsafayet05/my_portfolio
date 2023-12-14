import me from "../assets/me.png";

const About = () => {
  const info = [
    { text: "Fresher", count: "0" },
    { text: "Completed Projects", count: "10" },
    { text: "Completed Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div
        className="text-center mt-8"
        data-aos="zoom-in-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Inspiration</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                maiores possimus officia impedit corrupti voluptas veritatis
                dicta iusto, animi doloremque rerum commodi deleniti enim aut
                reprehenderit eos repudiandae ipsa officiis!
              </p>
            </div>
            <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
            <br />
            <br />
            <a href="https://docs.google.com/document/d/1Fh05wgoZkdPUM_0W7n08FtfHi3cNxpVK6sc02wvWsSg/edit">
              <button className="btn-secondary">Download CV</button>
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 md:mt-0 mt-6 h-full relative sm:w-11/12 max-w-sm  bg-cyan-600 rounded-xl me">
              <img
                src={me}
                alt=""
                className="w-full object-cover  drop-shadow-7xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
