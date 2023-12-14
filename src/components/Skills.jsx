const Skills = () => {
  const skills = [
    { logo: "logo-html5", level: "Advance" },
    { logo: "logo-css3", level: "Intermediate" },
    { logo: "logo-nodejs", level: "Beginner" },
    {
      logo: "logo-react",
      level: "Intermediate",
    },
    {
      logo: "logo-firebase",
      level: "Beginner",
    },
  ];
  return (
    <section id="skills" className="relative py-10 bg-gray-800 z-[-999]">
      <div
        className="mt-8 text-gray-100 text-center"
        data-aos="zoom-in-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h3 className="text-4xl font-semibold">
          My <span className="text-yellow-500">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div className="flex items center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((content) => (
            <div
              key={content}
              className="border-2 border-orange-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl group"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-8xl w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center group-hover:text-orange-600">
                  <ion-icon name={content?.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{content?.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
