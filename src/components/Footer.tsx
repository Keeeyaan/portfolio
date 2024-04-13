"use client";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 dark:bg-[#040b1f] border-t mt-20">
      <motion.div className="flex justify-center items-center text-center">
        <h3 className="py-6 flex text-sm font-semibold">
          &#169; {new Date().getFullYear()} Kean Villaflor &#128054;. All rights
          reserved.
        </h3>
      </motion.div>
    </footer>
  );
};

export default Footer;
