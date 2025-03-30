import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Contact Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Have a project idea or just want to say hi? Feel free to reach out!
        </motion.p>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-blue-500 transition"
          >
            <FaEnvelope className="text-red-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">
                <a
                  href="mailto:anuragtripathi2602@gmail.com"
                  className="text-gray-400 hover:underline"
                >
                  Email
                </a>
              </h4>
            </div>
          </motion.div>

          {/* Peerlist */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-blue-500 transition"
          >
            <FaUserTie className="text-red-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">
                <a
                  href="https://peerlist.io/anurag2426"
                  className="text-gray-400 hover:underline"
                >
                  PeerList
                </a>
              </h4>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-blue-400 transition"
          >
            <FaLinkedin className="text-blue-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">
                <a
                  href="https://www.linkedin.com/in/anurag-tripathi2602/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Linkedin
                </a>
              </h4>
            </div>
          </motion.div>
          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-gray-400 transition"
          >
            <FaGithub className="text-gray-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">
                <a
                  href="https://github.com/anurag24-26"
                  target="_blank"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </h4>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Send a Message
          </h3>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-md shadow-lg hover:shadow-blue-400 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
