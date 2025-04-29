import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@/utils/motion";
import { send, sendHover } from "@/assets";
import { ToastContainer, toast } from "react-toastify";
import SectionWrapper from "@/hoc/section-wrapper";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name === "") {
      toast.warning("Enter your full name!");
    } else if (form.email === "") {
      toast.warning("Enter your email");
    } else if (form.message === "") {
      toast.warning("Enter the content");
    } else {
      emailjs
        .send(
          "service_fdvk2u9",
          "template_s1hxzrb",
          {
            from_name: form.name,
            to_name: "Cool Job",
            from_email: form.email,
            to_email: "devmmy1031@gmail.com",
            message: form.message
          },
          "v3CCyUs9ikygrF7IB"
        )
        .then(
          () => {
            setLoading(false);

            toast.success("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: ""
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);

            toast.error("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-jetounded-2xl">
        <p className="sm:text-[18px] text-[16px] text-[#9999a1] uppercase tracking-wider font-semibold font-poppins">
          Get in touch
        </p>
        <h3 className="text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Contact
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#1f1f1f] py-4 px-6
              placeholder:text-[#9999a1]
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#1f1f1f] py-4 px-6
              placeholder:text-[#9999a1]
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-[#1f1f1f] py-4 px-6
              placeholder:text-[#9999a1]
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="hover-target live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-[#858585] hover:text-[#1f1f1f] 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document.querySelector(".contact-btn").setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Send"}
            <Image
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <ToastContainer className={"mt-[4rem]"} />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
