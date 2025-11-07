import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-base-100/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-16">
          <div className="flex-1">
            <motion.a 
              href="#home"
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>
          </div>
          <div className="flex-none gap-4">
            <motion.a
              href="#about"
              className="link link-hover"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              className="link link-hover"
              whileHover={{ scale: 1.05 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              className="link link-hover"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="link link-hover"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            <div className="flex gap-2">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn btn-circle btn-ghost"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn btn-circle btn-ghost"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}