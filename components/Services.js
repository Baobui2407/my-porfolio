import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobileAlt, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Building responsive and dynamic web applications using modern frameworks and libraries."
  },
  {
    icon: FaDesktop,
    title: "Frontend Development",
    description: "Creating beautiful user interfaces with React, Next.js, and modern CSS frameworks."
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Developing robust server-side applications and RESTful APIs."
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description: "Ensuring applications work flawlessly across all devices and screen sizes."
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description: "Designing and optimizing database structures for optimal performance."
  },
  {
    icon: FaTools,
    title: "DevOps",
    description: "Setting up CI/CD pipelines and managing cloud infrastructure."
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-base-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-16 -translate-y-16">
          <service.icon className="w-full h-full" />
        </div>
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-base-content/70">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}