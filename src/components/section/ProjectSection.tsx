import Image from "next/image";

import { BackgroundGradient } from "../ui/background-gradient";
import { tasky, pokedex, damath, psits, portfolio } from "@/assets";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    image: tasky,
    title: "Tasky",
    description:
      "Tasky is a simple task management that allows you to organize, prioritize, and track your tasks.",
    tags: [
      { name: "React.js", color: "bg-sky-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "PostgreSQL", color: "bg-blue-500" },
      { name: "Express", color: "bg-lime-500" },
    ],
    github: "https://github.com/Keeeyaan/tasky",
    live: "https://tasky-web-site.vercel.app",
  },
  {
    image: psits,
    title: "PSITS Student Portal",
    description:
      "PSITS is a student portal for University of Cebu Main Campus CSS organization.",
    tags: [
      { name: "React.js", color: "bg-sky-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Express", color: "bg-lime-500" },
    ],
    github: "https://github.com/PSITS-UC-MAIN/PSITS-WEB",
    live: "https://psits-web-site-v2.vercel.app/",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description: "My simple porfolio what you are seeing right now.",
    tags: [
      { name: "Next.js", color: "bg-slate-800" },
      { name: "framer-motion", color: "bg-purple-500" },
      { name: "Tailwindcss", color: "bg-cyan-500" },
    ],
    github: "https://github.com/Keeeyaan/portfolio",
    live: "https://keanvillaflor.vercel.app/",
  },
  {
    image: pokedex,
    title: "Pokedex",
    description:
      "A platform that allows you to search pokemons and view their information.",
    tags: [
      { name: "React.js", color: "bg-sky-500" },
      { name: "PokeAPI", color: "bg-yellow-500" },
      { name: "framer-motion", color: "bg-purple-500" },
    ],
    github: "https://github.com/Keeeyaan/pokedex-react",
    live: "https://pokedex-react-ky.netlify.app/",
  },
  {
    image: damath,
    title: "DaMath",
    description:
      'Damath a two-player educational board game combining the board game "Dama" (Filipino checkers) and math.',
    tags: [
      { name: "React.js", color: "bg-sky-500" },
      { name: "Tailwindcss", color: "bg-cyan-500" },
    ],
    github: "https://github.com/Keeeyaan/damath",
    live: "https://tasky-web-site.vercel.app",
  },
];

const ProjectSection = () => {
  return (
    <section className="max-w-7xl px-5 w-full mx-auto mb-4 mt-20">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">
        Projects
      </h1>
      <p className="text-center mb-6">My recent and past personal projects.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] px-4 py-6 w-full inline-flex flex-wrap justify-center md:justify-normal gap-6 items-center bg-white dark:bg-zinc-900"
          >
            <Image
              src={project.image}
              alt="tasky"
              height="400"
              width="400"
              className="object-contain w-[350px] lg:w-[450px] border shadow rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-black dark:text-neutral-200">
                {project.title}
              </p>
              <p className="text-sm max-w-xs text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="py-2 flex items-center gap-4">
                <Link href={project.github} target="_blank">
                  <Button className="p-1.5 h-auto rounded-full">
                    <Github size={20} />
                  </Button>
                </Link>
                <Link href={project.live} target="_blank">
                  <Button className="p-1.5 h-auto rounded-full">
                    <ExternalLink size={20} />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`${tag.color} inline-block py-0.5 px-2 rounded-full text-white space-x-1 text-xs border border-blue-400 dark:border-white`}
                  >
                    {tag.name}
                  </p>
                ))}
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
