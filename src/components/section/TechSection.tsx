"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {
  css,
  express,
  figma,
  git,
  html,
  javascript,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  python,
  reactjs,
  redux,
  tailwind,
  typescript,
} from "@/assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

function TechSection() {
  return (
    <section className="text-center mb-20 max-w-7xl px-5 w-full mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold">Skills</h1>
      <p className="mb-4 mt-2">
        Following are technologies that I specialized and have used recently.
      </p>
      <InfiniteMovingCards
        items={technologies}
        direction="right"
        speed="normal"
      />
    </section>
  );
}

export default TechSection;
