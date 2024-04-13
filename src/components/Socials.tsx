import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Socials = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/kean-jieden-villaflor/",
      label: "Linkedin",
      icon: (
        <Linkedin className="hover:scale-125 transition-all size-5 sm:size-6" />
      ),
    },
    {
      link: "https://github.com/Keeeyaan",
      label: "Github",
      icon: (
        <Github className="hover:scale-125 transition-all size-5 sm:size-6" />
      ),
    },
    {
      link: "https://www.instagram.com/kjiedenv/",
      label: "Instagram",
      icon: (
        <Instagram className="hover:scale-125 transition-all size-5 sm:size-6" />
      ),
    },
  ];

  return (
    <div
      className={cn(className, "flex items-center gap-4 dark:text-slate-200")}
    >
      <p className="font-medium text-sm sm:text-base">Follow Me</p>
      <Separator
        orientation="vertical"
        className="bg-[#020817] dark:bg-slate-200 h-8 w-[2px] rounded"
      />
      <div className="flex items-center gap-7">
        {socials.map((social, index) => (
          <Link
            href={social.link}
            target="_blank"
            key={index}
            aria-label={social.label}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
