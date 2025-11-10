'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const tabs = [
  { id: 'about', label: 'About Me', icon: FaUser },
  { id: 'resume', label: 'Resume', icon: FaGraduationCap },
  { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
  { id: 'contact', label: 'Contact', icon: FaEnvelope }
];

const tabVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function TabLayout({ children }) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-[80vh]">
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-[#2D2D2D]">
        <div className="flex">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 
                ${activeTab === id 
                  ? 'text-yellow-500' 
                  : 'text-gray-400 hover:text-yellow-500'}`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
              {activeTab === id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="enter"
          animate="center"
          exit="exit"
          variants={tabVariants}
          transition={{ duration: 0.3 }}
        >
          {children[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}