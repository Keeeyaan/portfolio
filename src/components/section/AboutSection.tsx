import Image from "next/image";

import { profile } from "@/assets";
import { Button } from "../ui/button";
import { Mail, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-blue-400 dark:bg-[#061335] px-5 py-20 mb-10 space-y-4 w-full">
      <h1 className="text-center text-3xl font-bold">About Me</h1>
      <div className="flex flex-wrap gap-4 sm:gap-16 lg:gap-20 items-center justify-center">
        <Image
          src={profile}
          className="blob w-[250px] sm:w-[300px] rounded-full "
          alt="profile"
        />
        <div className="space-y-4 text-center sm:text-start max-w-lg">
          <h2 className="font-semibold text-lg text-yellow-200 dark:text-blue-500">
            A passionate Full Stack Developer with a solid grasp of both
            front-end and back-end development.
          </h2>
          <p className="text-slate-100">
            I enjoy building user-friendly web applications using frameworks
            like NextJS and React for the front-end, and Node.js with Express
            for the back-end. I consistently explore new technologies,
            frameworks, and design trends to stay up-to-date with the latest
            advancements. I&apos;m excited to put my skills to use in a
            professional setting. I&apos;m a quick learner and eager to
            contribute to a challenging and collaborative environment.
          </p>

          <div className="flex gap-4 items-center">
            <Button size="sm" variant="ghost">
              <MapPin />
              <span className="ml-2">Cebu, Philippines</span>
            </Button>
            <Button size="sm" variant="ghost">
              <Mail />
              <span className="ml-2">keanjieden@gmail.com</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
