import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  { 
    name: 'HTML5', 
    level: 90, 
    icon: FaHtml5,
    color: '#E34F26',
    description: 'Semantic HTML, SEO optimization, Accessibility'
  },
  { 
    name: 'CSS3', 
    level: 85, 
    icon: FaCss3Alt,
    color: '#1572B6',
    description: 'Responsive design, Animations, Flexbox/Grid'
  },
  { 
    name: 'JavaScript', 
    level: 88, 
    icon: FaJs,
    color: '#F7DF1E',
    description: 'ES6+, DOM manipulation, Async/Await'
  },
  { 
    name: 'React', 
    level: 85, 
    icon: FaReact,
    color: '#61DAFB',
    description: 'Hooks, Context, Redux, Performance optimization'
  },
  { 
    name: 'Node.js', 
    level: 80, 
    icon: FaNodeJs,
    color: '#339933',
    description: 'Express, RESTful APIs, Database integration'
  },
  { 
    name: 'Next.js', 
    level: 82, 
    icon: TbBrandNextjs,
    color: '#000000',
    description: 'Server-side rendering, API routes, Static generation'
  }
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="relative group"
    >
      <div className="bg-base-100 rounded-xl overflow-hidden">
        <div className="p-6 relative z-10">
          <div className="mb-4">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <skill.icon 
                className="w-12 h-12" 
                style={{ color: skill.color }}
              />
            </motion.div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          
          <p className="text-base-content/80 text-sm mb-4">
            {skill.description}
          </p>

          <div className="relative h-2 bg-base-300 rounded-full overflow-hidden">
            <motion.div
              className="absolute h-full rounded-full"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
          
          <div className="mt-2 flex justify-between items-center text-sm">
            <span className="font-medium">Proficiency</span>
            <motion.span 
              className="text-primary font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {skill.level}%
            </motion.span>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(255,255,255,0)", "rgba(248,250,252,0.5)", "rgba(255,255,255,0)"]
  );

  return (
    <section ref={ref} id="skills" className="py-20 relative overflow-hidden bg-base-200">
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency in various web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}