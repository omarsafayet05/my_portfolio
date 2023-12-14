import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_2q6nj8q",
        "template_wrz4yfb",
        form.current,
        "y5BnttQJAzu2T5EAC"
      )
      .then(
        (result) => {
          toast.success(result.text);
          console.log(result.text);
        },
        (error) => {
          toast.err(error.text);
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      </div>
      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
        <form
          ref={form}
          className="flex flex-col flex-1 gap-5 text-black"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className="p-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            name="from_email"
            className="p-2 rounded-lg"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            rows={10}
            className="rounded-lg"
          />

          <input
            type="submit"
            value="Send Message"
            className=" bg-blue-700 font-semibold text-white  mx-auto rounded-full py-3 px-6 flex items-center gap-2"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
