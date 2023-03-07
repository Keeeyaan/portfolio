import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { navLinks, socmeds } from "../constants/index";
import { SectionWrapper } from "../hoc/index";
import { slideIn } from "../utils/motion";

const Footer = () => {
  const today = new Date();

  return (
    <>
      <hr className=" border-gray-800 dark:border-transparent-white sm:mx-auto" />
      <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center text-center">
        <div className="flex flex-col justify-center md:mb-0 mb-10">
          <div className="flex items-center">
            <p className="flex items-center whitespace-nowrap cursor-pointer text-2xl font-semibold text-black dark:text-white">
              Kean Jieden Villaflor.
              <span className="mx-1 mr-2 rounded-lg bg-slate-800 px-2 py-1 text-xs text-white">
                v2.0.0
              </span>
            </p>
          </div>
          <p className="mt-2 flex text-sm font-semibold text-black dark:text-white">
            &#169; Kean Villaflor {today.getFullYear()} &#128054;.
          </p>
        </div>

        <div className=" grid grid-cols-2 text-start gap-8 sm:gap-24">
          <ul className="text-lightsecondary dark:text-secondary ">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <p href=" " className="mb-2 ">
                Home
              </p>
            </Link>
            {navLinks.map((link) => (
              <li key={link.id} className="mb-2">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul className="text-lightsecondary dark:text-secondary ">
            {socmeds.map((socmed) => (
              <li key={socmed.name} className="mb-2 cursor-pointer">
                {socmed.name}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="relative -top-[2px] ml-2 inline-block"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  ></path>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" justify-center md:justify-end mt-4 flex gap-4 items-center ">
        {socmeds.map((socmed) => (
          <a key={socmed.name} className="cursor-pointer">
            <img
              src={socmed.icon}
              className={socmed.name == "LinkedIn" ? "w-10 h-10" : "w-8 h-8"}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Footer, " ");
