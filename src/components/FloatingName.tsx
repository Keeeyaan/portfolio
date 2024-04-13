"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const FloatingName = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <motion.h2
      animate={{ y: [6, -6, 6] }}
      transition={{
        ease: "easeInOut",
        repeat: Infinity,
        duration: 1,
      }}
      className={cn(className, "text-3xl md:text-4xl font-semibold")}
    >
      👋 Hi, I&apos;m <span className="text-blue-500">{name}</span>
    </motion.h2>
  );
};
