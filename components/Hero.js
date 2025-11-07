import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full animate-[spin_20s_linear_infinite] origin-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_100%)]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image - Now on left for larger screens */}
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-primary/20 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                
                <Image
                  src="/images/profile.jpg"
                  alt="Bùi Viết Tuấn Bảo"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Social links overlay */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                  {[
                    { icon: FaGithub, href: 'https://github.com/yourusername' },
                    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername' },
                    { icon: FaFacebook, href: 'https://facebook.com/yourusername' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-lg font-medium">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Bùi Viết{" "}
              <span className="text-primary">
                Tuấn Bảo
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-xl md:text-2xl text-base-content/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer based in Đà Nẵng, Vietnam
            </motion.h2>

            <motion.p
              className="text-base-content/80 mb-12 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I specialize in building exceptional digital experiences, combining 
              beautiful code with delightful user interfaces. Let's work together 
              to bring your ideas to life.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="btn btn-primary btn-lg px-8"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline btn-lg px-8"
                download
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}