import { motion } from "framer-motion";

const projects = [
  {
    title: "EduSearch",
    description: "An educational search engine fetching learning resources.",
    image: "/images/edusearch.png",
    link: "https://edusearch.com",
  },
  {
    title: "CPI Calculator",
    description: "A web app for students to calculate their CPI easily.",
    image: "/images/cpi.png",
    link: "https://cpicalc.com",
  },
  {
    title: "Game Record Keeper",
    description: "A mobile app to track gaming time and set usage limits.",
    image: "/images/gamekeeper.png",
    link: "https://gamerecordkeeper.com",
  },
  {
    title: "GourmetFusion",
    description: "A modern restaurant website with animations & UI/UX.",
    image: "/images/gourmetfusion.png",
    link: "https://gourmetfusion.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-700 relative overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg transition hover:scale-105"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
