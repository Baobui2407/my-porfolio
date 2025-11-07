import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PowerButton from '@/components/PowerButton';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isPowered, setIsPowered] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Set data-theme attribute for DaisyUI
    document.documentElement.setAttribute('data-theme', 'fender');
    setIsInitialLoad(false);
  }, []);

  const handlePowerChange = (powered) => {
    setIsPowered(powered);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {!isPowered && !isInitialLoad && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          opacity: isPowered ? 1 : 0.3,
          filter: isPowered ? 'brightness(1)' : 'brightness(0.5)',
        }}
        transition={{ duration: 1 }}
      >
        <Component {...pageProps} />
      </motion.div>

      <PowerButton onPowerChange={handlePowerChange} />
    </div>
  );
}
