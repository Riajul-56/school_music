import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Master",
    },
    {
      text: "The",
    },
    {
      text: "Art",
    },
    {
      text: "of",
    },
    {
      text: "Music",
      className: "text-blue-500 dark:text-blue-700",
    },
  ];

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-10 left-10 md:-top-20 lg:left-150 md:left-60"
        fill="white"
      />

      <div className="py-4 px-2 relative z-10 w-full text-center">
        <div className="w-full flex justify-center">
          <h1 className="mt-20 w-full max-w-4xl">
            <TypewriterEffectSmooth words={words} />
          </h1>
        </div>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential
        </p>

        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
