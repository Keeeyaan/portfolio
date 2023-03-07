import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white-100 dark:bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3
          className={`dark:${styles.sectionHeadText} ${styles.sectionLightHeadText}`}
        >
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-black dark:text-white">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              defaultValue={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#fafafa] dark:bg-tertiary py-4 px-6 placeholder:text-slate-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-black dark:text-white">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              defaultValue={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-[#fafafa] dark:bg-tertiary py-4 px-6 placeholder:text-slate-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-black dark:text-white">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              defaultValue={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#fafafa] dark:bg-tertiary py-4 px-6 placeholder:text-slate-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
