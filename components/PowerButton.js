import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PowerButton({ onPowerChange }) {
  const [isOn, setIsOn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    handlePowerToggle();
  }, []);

  const handlePowerToggle = () => {
    setIsOn(!isOn);
    setIsAnimating(true);
    
    if (onPowerChange) {
      setTimeout(() => {
        onPowerChange(!isOn);
      }, 200);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative w-20 h-32 perspective-1000">
        {/* Base Plate */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg shadow-xl border border-neutral-700">
          {/* Screws */}
          {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((position, index) => (
            <div 
              key={index} 
              className={`absolute w-2 h-2 ${position} rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 border border-neutral-700 shadow-inner`}
            />
          ))}
          
          {/* Switch Mount */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-20 bg-neutral-800 rounded-lg shadow-inner border border-neutral-700">
            {/* Switch Track */}
            <div className="absolute inset-2 bg-neutral-900 rounded-md">
              {/* Switch Handle */}
              <motion.button
                onClick={handlePowerToggle}
                className={`
                  absolute left-1/2 -translate-x-1/2 bottom-1
                  w-6 h-12 
                  ${isOn ? 'animate-switch-on' : 'animate-switch-off'}
                `}
              >
                <div className="relative w-full h-full">
                  {/* Handle Base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-md shadow-lg">
                    {/* Handle Grip Lines */}
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-full h-[2px] bg-neutral-500"
                        style={{ top: `${25 + i * 25}%` }}
                      />
                    ))}
                  </div>
                  
                  {/* Metal Shine Effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 rounded-md animate-metal-shine" 
                    style={{ backgroundSize: '200% 100%' }}
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute -right-6 top-4 text-xs font-mono text-neutral-400">ON</div>
          <div className="absolute -right-7 bottom-4 text-xs font-mono text-neutral-400">OFF</div>

          {/* Status Light */}
          <div 
            className={`
              absolute -left-2 top-1/2 -translate-y-1/2
              w-3 h-3 rounded-full 
              transition-all duration-500
              ${isOn ? 'bg-primary animate-glow' : 'bg-neutral-700'}
              ${isAnimating ? 'animate-flicker' : ''}
            `}
          >
            {/* Light Reflection */}
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/30 to-transparent" />
          </div>
        </div>

        {/* Power Effect Overlay */}
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`fixed inset-0 pointer-events-none ${isOn ? 'animate-tube-warmup' : 'animate-power-on'}`}
            style={{
              background: isOn 
                ? 'radial-gradient(circle at center, rgba(192, 192, 192, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(0, 0, 0, 0.95) 0%, transparent 100%)',
              mixBlendMode: 'overlay',
              backdropFilter: 'contrast(1.1)'
            }}
          />
        )}
      </div>
    </div>
  );
}