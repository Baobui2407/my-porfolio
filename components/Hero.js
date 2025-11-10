import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

const socialVariants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.div 
            className="absolute top-20 left-20 w-60 h-60 rounded-full bg-primary/5 animate-float"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/5 animate-float"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 animate-float"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm{" "}
              <span className="text-primary">
                Bùi Viết Tuấn Bảo
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Mobile App Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Based in Đà Nẵng, Vietnam. I'm passionate about creating beautiful and 
              functional digital experiences that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 justify-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#portfolio"
                className="btn btn-primary btn-lg px-8 rounded-full font-medium flex items-center gap-2 hover:gap-4 transition-all group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="btn btn-outline btn-lg px-8 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all group"
                download
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: FaGithub, href: 'https://github.com/Baobui2407', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
                { icon: FaFacebook, href: 'https://facebook.com/', label: 'Facebook' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors relative group"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <motion.div
                    className="absolute -inset-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                    initial={false}
                    animate={{ scale: [0.8, 1.2, 1] }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}