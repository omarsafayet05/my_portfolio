import me from "../assets/me.png";
const Hireme = () => {
  return (
    <section
      id="hireme"
      className="py-10 px-3 text-white"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="850"
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 py-5 mt-24 rounded-xl min-h-[24rem] lg:max-w-4xl mx-auto gap-6 flex lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm text-gray-200 mt-4 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            tempora unde nostrum itaque, labore expedita beatae provident
            dignissimos, consequatur sit repellendus laborum sint doloribus
            iusto laboriosam vel ut ad amet mollitia natus saepe! Ad ipsam unde
            dolorem iure illum facilis eligendi accusantium, nesciunt aliquam
            dolores, exercitationem voluptas, odit eos incidunt. Eius aspernatur
            ea ducimus mollitia inventore. Cum cumque dicta vitae.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={me}
          alt=""
          className="lg:h-[40rem] h-[35rem] lg:absolute -right-3 bottom-0 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
