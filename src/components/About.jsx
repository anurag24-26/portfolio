import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";

const timeline = [
  { year: "2022 - Present", title: "B.Tech in CSE", place: "GLA University" },
  { year: "2020 - 2022", title: "PCM 12th", place: "St. Joseph's School" },
];

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Git",
  "Express.js",
];

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* About Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          I'm Anurag Tripathi, a **Fullstack Web Developer** from **Gorakhpur,
          Uttar Pradesh**. Passionate about **building scalable applications**,
          problem-solving, and creating **beautiful UI/UX experiences** with
          modern web technologies.
        </motion.p>

        {/* Timeline Section */}
        <div className="mt-10 space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4"
            >
              <FaGraduationCap className="text-blue-400 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.place}</p>
                <span className="text-blue-400 font-semibold">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl font-bold text-center mt-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Skills & Technologies
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow-lg cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl font-bold text-center mt-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Achievements & Certifications
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4"
          >
            <FaAward className="text-yellow-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">UI/UX Course</h4>
              <p className="text-gray-400">Great Learnings</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4"
          >
            <FaAward className="text-yellow-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">4-Star on HackerRank</h4>
              <p className="text-gray-400">Python & Java</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-3xl font-bold text-center mt-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Get In Touch
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <FaEnvelope className="text-red-400 text-2xl" />
            <span className="text-gray-300">anuragtripathi2602@gmail.com</span>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-4">
            <FaLaptopCode className="text-green-400 text-2xl" />
            <span className="text-gray-300">Fullstack Web Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
