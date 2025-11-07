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
  FaTimes
} from 'react-icons/fa';
import PowerButton from '../PowerButton';

const menuItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaCode, label: 'Skills', href: '#skills' },
  { icon: FaGraduationCap, label: 'Experience', href: '#experience' },
  { icon: FaBriefcase, label: 'Projects', href: '#projects' },
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
    <div className="relative min-h-screen bg-base-100">
      {/* Sidebar - Desktop */}
      <aside className="fixed top-0 left-0 h-full w-72 bg-base-200 border-r border-base-300 hidden lg:block z-40">
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-6 text-center border-b border-base-300">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary ring-offset-4 ring-offset-base-200">
              <Image
                src="/images/profile.jpg"
                alt="Bùi Viết Tuấn Bảo"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-1">Bùi Viết Tuấn Bảo</h2>
            <p className="text-sm text-base-content/70">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {menuItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === href.slice(1)
                        ? 'bg-primary/10 text-primary translate-x-2'
                        : 'hover:bg-base-300 hover:translate-x-1'
                    }`}
                    onClick={() => setActiveSection(href.slice(1))}
                  >
                    <Icon className={`w-5 h-5 transition-transform ${
                      activeSection === href.slice(1) ? 'scale-110' : ''
                    }`} />
                    <span className="font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-base-300">
            <p className="text-sm text-center text-base-content/70">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-base-200/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary">
              <Image
                src="/images/profile.jpg"
                alt="Bùi Viết Tuấn Bảo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold">Bùi Viết Tuấn Bảo</h2>
              <p className="text-xs text-base-content/70">Full Stack Developer</p>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-base-300 rounded-lg transition-colors"
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
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-base-200/95 backdrop-blur-md border-b border-base-300`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="p-4">
            {menuItems.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === href.slice(1)
                      ? 'bg-primary/10 text-primary translate-x-2'
                      : 'hover:bg-base-300 hover:translate-x-1'
                  }`}
                  onClick={() => {
                    setActiveSection(href.slice(1));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Icon className={`w-5 h-5 transition-transform ${
                    activeSection === href.slice(1) ? 'scale-110' : ''
                  }`} />
                  <span className="font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </header>

      {/* Main Content */}
      <main className="lg:pl-72 min-h-screen">
        <div className="h-full">{children}</div>
      </main>

      {/* Power Button */}
      <PowerButton />
    </div>
  );
}