'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaEnvelope, 
  FaCode, 
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';
import PowerButton from '../PowerButton';

const menuItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaCode, label: 'Resume', href: '#resume' },
  { icon: FaBriefcase, label: 'Portfolio', href: '#portfolio' },
  { icon: FaEnvelope, label: 'Contact', href: '#contact' }
];

export default function MainLayout({ children }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      // Update active section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });

      // Update header background
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1E1E1E]">
      {/* Sidebar - Desktop */}
      <aside className="fixed top-0 left-0 h-full w-[140px] bg-[#242424] text-white hidden lg:block z-40 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="py-10 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-500">
              <Image
                src="/images/profile.jpg"
                alt="Bùi Viết Tuấn Bảo"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-bold mb-1">Bùi Viết Tuấn Bảo</h2>
            <p className="text-sm text-yellow-500">Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 pt-8">
            <ul className="space-y-1">
              {menuItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`flex flex-col items-center py-4 transition-all duration-300 relative ${
                      activeSection === href.slice(1)
                        ? 'text-yellow-500 bg-[#1E1E1E]'
                        : 'text-gray-400 hover:text-yellow-500'
                    }`}
                    onClick={() => setActiveSection(href.slice(1))}
                  >
                    {activeSection === href.slice(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#1E1E1E]"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <Icon className={`w-5 h-5 relative z-10 ${
                      activeSection === href.slice(1) ? 'scale-110' : ''
                    }`} />
                    <span className="text-xs mt-1 relative z-10">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="py-8 border-t border-[#2D2D2D]">
            <div className="flex flex-col items-center space-y-4">
              <a href="https://github.com/Baobui2407" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaDribbble className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
              <Image
                src="/images/profile.jpg"
                alt="Bùi Viết Tuấn Bảo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-white">Bùi Viết Tuấn Bảo</h2>
              <p className="text-sm text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="py-4">
            {menuItems.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`flex items-center space-x-4 px-6 py-4 transition-all ${
                    activeSection === href.slice(1)
                      ? 'bg-gray-800 text-primary'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveSection(href.slice(1));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Icon className={`w-5 h-5 transition-transform ${
                    activeSection === href.slice(1) ? 'scale-110' : ''
                  }`} />
                  <span className="uppercase text-sm tracking-wider">{label}</span>
                </a>
              </li>
            ))}
            
            {/* Mobile Social Links */}
            <li className="mt-6 px-6">
              <div className="flex space-x-4 justify-center pt-4 border-t border-gray-800">
                <a href="https://github.com/Baobui2407" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="mailto:contact@example.com" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </li>
          </ul>
        </motion.nav>
      </header>

      {/* Main Content */}
      <main className="lg:pl-[140px] min-h-screen bg-[#1E1E1E] p-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#242424] rounded-lg shadow-xl p-8">
            {children}
          </div>
        </div>
      </main>

      {/* Download CV Button */}
      <a
        href="/cv.pdf"
        className="fixed bottom-8 right-8 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg"
        download
      >
        <FaDownload className="w-4 h-4" />
        <span>Download CV</span>
      </a>
    </div>
  );
}