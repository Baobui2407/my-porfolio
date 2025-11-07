import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timelineData = {
  experience: [
    {
      title: "Full Stack Developer",
      company: "Your Company",
      period: "2023 - Present",
      description: "Working on full-stack web applications using React, Node.js, and modern technologies."
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      period: "2022 - 2023",
      description: "Developed responsive web applications and improved user experiences."
    }
  ],
  education: [
    {
      title: "Computer Science Degree",
      institution: "Your University",
      period: "2019 - 2023",
      description: "Studied computer science with focus on web development and software engineering."
    },
    {
      title: "Web Development Certification",
      institution: "Online Platform",
      period: "2022",
      description: "Completed advanced web development certification course."
    }
  ]
};

const TimelineItem = ({ data, index, type }) => {
  const Icon = type === 'experience' ? FaBriefcase : FaGraduationCap;
  
  return (
    <motion.div
      className="relative pl-8 pb-8 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Vertical Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-base-300 group-last:bg-gradient-to-b group-last:from-base-300 group-last:to-transparent" />
      
      {/* Icon */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
        <Icon className="w-2 h-2 text-white" />
      </div>

      {/* Content */}
      <div className="bg-base-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-bold mb-1">{data.title}</h3>
        <div className="text-primary font-medium mb-2">{data.company || data.institution}</div>
        <div className="text-sm text-base-content/70 mb-3">{data.period}</div>
        <p className="text-base-content/80">{data.description}</p>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <section id="resume" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaBriefcase className="text-primary" />
              Experience
            </motion.h3>
            <div>
              {timelineData.experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  data={item}
                  index={index}
                  type="experience"
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="text-primary" />
              Education
            </motion.h3>
            <div>
              {timelineData.education.map((item, index) => (
                <TimelineItem
                  key={index}
                  data={item}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}