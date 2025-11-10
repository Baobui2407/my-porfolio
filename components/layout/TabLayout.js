'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { tabTransition, staggerContainer } from '../animations/AnimationVariants';

const tabs = [
  { id: 'about', label: 'About Me', icon: FaUser },
  { id: 'resume', label: 'Resume', icon: FaGraduationCap },
  { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
  { id: 'contact', label: 'Contact', icon: FaEnvelope }
];

export default function TabLayout({ children }) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <motion.div 
      className="min-h-[80vh]"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
    >
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-[#2D2D2D]">
        <motion.div 
          className="flex"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 
                ${activeTab === id 
                  ? 'text-yellow-500' 
                  : 'text-gray-400 hover:text-yellow-500'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
              {activeTab === id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30 
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
          >
            {children[activeTab]}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}