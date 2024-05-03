import Link from "next/link";
import { FloatingName } from "../FloatingName";
import Socials from "../Socials";
import { MovingBorderButton } from "../ui/moving-border";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center justify-center mt-10 sm:mt-20 ">
      <FloatingName name="Kean" className="mb-6" />
      <h1 className="text-5xl md:text-7xl font-bold mb-2">
        Full Stack Developer
      </h1>
      <p className="sm:w-[550px] text-base sm:text-lg leading-relaxed">
        I specialize in PERN and MERN (PostgreSQL/MongoDB, Express.js, React.js,
        Node.js) stack application development. Based in Cebu, Philippines. 📍
      </p>
      <Socials className="mt-4" />
      <div className="flex justify-center items-center gap-4 mt-6">
        <MovingBorderButton borderRadius="0.5rem" className="p-3 font-semibold">
          <p>Download CV</p>
        </MovingBorderButton>
        <MovingBorderButton borderRadius="0.5rem" className="p-3 font-semibold">
          <Link href="#contact">
            <p>Contact Me</p>
          </Link>
        </MovingBorderButton>
      </div>

      {/* <motion.div
        animate={{ y: [10, -5, 10] }}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          duration: 3,
        }}
        className="mt-10 lg:m-0"
      >
        <Image
          src="/hero-image.png"
          width={300}
          height={300}
          alt="hero-image"
          className="md:h-[400px] md:w-[400px] xl:h-[500px] xl:w-[500px]"
        />
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
