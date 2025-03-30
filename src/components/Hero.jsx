import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Name & Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Hi, I'm <span className="text-white">Anurag Tripathi</span>
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
          <Typewriter
            words={[
              "Fullstack Web Developer",
              "React & Tailwind Enthusiast",
              "Building Amazing Experiences",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg transition-all"
          >
            View My Work
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/15Obpmlh1KFfMVaEolGQzTC7Rby5k_FVc/view?usp=sharing"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
