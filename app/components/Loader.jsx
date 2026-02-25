"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time to ensure smooth experience
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(minLoadingTime);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Animated Logo Container */}
            <div className="relative w-32 h-32">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Middle Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-cyan-200 dark:border-cyan-900"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-4 border-blue-400 dark:border-blue-600"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center Logo */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  P2T
                </motion.div>
              </motion.div>

              {/* Pulsing Dots */}
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${index * 60}deg) translate(70px) rotate(-${index * 60}deg)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h2
                className="text-xl font-semibold text-slate-800 dark:text-slate-200"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading
              </motion.h2>
              <motion.div
                className="flex gap-1 justify-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-sm text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              AI-Powered Creative Agency
            </motion.p>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 256 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
