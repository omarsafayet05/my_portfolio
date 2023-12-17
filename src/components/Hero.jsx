import me from "../assets/me.png";

const Hero = () => {
  const social_media = [
    "logo-facebook",
    "logo-instagram",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-2 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <div
          className="lg:w-80 w-72 md:mt-0 mt-14 h-full  sm:w-11/12 max-w-sm   myself "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src={me}
            alt=""
            className="w-full object-cover rounded-bl-xl rounded-e-xl  bg-yellow-600 
            drop-shadow-2xl"
          />
        </div>
      </div>
      <div
        className="flex-1"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-yellow-500">
              Hello!
              <br />
            </span>
            My Name is Omar Safayet
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}> </ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
