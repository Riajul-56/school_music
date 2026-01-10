"use client";

import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [animationComplete, setAnimationComplete] = useState(false);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0`,
                    word.className
                  )}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      {!animationComplete && (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[2px] h-4 md:h-6 lg:h-8 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
      )}
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [animationComplete, setAnimationComplete] = useState(false);

  const renderWords = () => {
    return (
      <div className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setAnimationComplete(true);
          }, 500);
        }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
      {!animationComplete && (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "block rounded-sm w-[3px] h-8 sm:h-10 md:h-12 lg:h-14 bg-blue-500 ml-1",
            cursorClassName
          )}
        ></motion.span>
      )}
    </div>
  );
};
