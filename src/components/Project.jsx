// import Project1 from "../assets/Education.com-App .png";
// import Project2 from "../assets/To-Do-List App.png";
// import Project3 from "../assets/Age-Calculator.png";
import Project1 from "../assets/sample.png";
import Project2 from "../assets/sample.png";
import Project3 from "../assets/sample.png";
import Project_Person from "../assets/me.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: Project1,
      github_link: "https://github.com/omarsafayet05/Education-dot-com-client",
      live_link: "https://education-com-auth.web.app/",
      project_name: "Education App",
    },
    {
      img: Project2,
      github_link: "https://github.com/omarsafayet05/To-Do-List-Javascript-",
      live_link:
        "https://64a896944dd25f1f1ec76f5d--jolly-syrniki-e2bcad.netlify.app/",
      project_name: "To-Do-List App",
    },
    {
      img: Project3,
      github_link: "https://github.com/omarsafayet05/Age-Calculator",
      live_link: "https://gorgeous-cupcake-e1bc15.netlify.app/",
      project_name: "Age Calculator App",
    },
    {
      img: Project2,
      github_link: "https://github.com/omarsafayet05/To-Do-List-Javascript-",
      live_link:
        "https://64a896944dd25f1f1ec76f5d--jolly-syrniki-e2bcad.netlify.app/",
      project_name: "To-Do-List App",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-yellow-500">Portfolio</span>
        </h3>
        <p className="text-gray-300 text-lg mt- 3">My Projects</p>
      </div>
      <br />

      <div className="flex max-w-6xl items-center px-5 mx-auto ">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="bg-slate-600 rounded-lg h-fit w-full p-4">
                  <img src={project_info.img} alt="" className="rounded-xl" />
                  <h3 className="text-xl my-4">{project_info.project_name}</h3>
                  <div>
                    <a
                      href={project_info.github_link}
                      className="bg-yellow-600 inline-block gap-4 rounded-lg me-2 text-cyan-800 px-2 py-1"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="blank"
                      className="bg-yellow-600 inline-block rounded-lg text-cyan-800 px-2 py-1"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="lg:w-56 md:mt-0 mt-6 h-full relative sm:w-11/12 max-w-sm me bg-yellow-600  rounded-xl">
            <img
              src={Project_Person}
              alt=""
              className="w-full object-cover   drop-shadow-2xl"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
