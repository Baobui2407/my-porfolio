import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeInWhenVisible, SlideIn } from './animations/MotionEffects';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your project',
    image: '/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project 2',
    description: 'Another amazing project description',
    image: '/project2.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="projects" className="py-20 relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-base-200/50 via-transparent to-base-200/50"
        style={{ y }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="card bg-base-100 shadow-xl overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <figure className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </figure>

                <div className="card-body">
                  <SlideIn direction={index % 2 === 0 ? "left" : "right"}>
                    <h3 className="card-title text-xl font-bold">{project.title}</h3>
                  </SlideIn>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        className="badge badge-primary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}