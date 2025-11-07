import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaDesktop, FaMobileAlt, FaServer, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/images/projects/project1.jpg",
    description: "Modern e-commerce platform with advanced features",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/images/projects/project2.jpg",
    description: "Secure and user-friendly mobile banking application",
    technologies: ["React Native", "Redux", "Firebase"],
    link: "#"
  },
  // Add more projects as needed
];

const categories = ["All", "Web Development", "Mobile Development", "Backend"];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Bùi Viết Tuấn Bảo</title>
      </Head>

      <MainLayout>
        <div className="min-h-screen py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Portfolio Title */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">My Portfolio</h1>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              {/* Portfolio Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                          <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-white/80 text-sm mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-white/20 rounded text-white">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}