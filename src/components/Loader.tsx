import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

const LOGO_SRC = new URL('../assets/Dennis-Logo.png', import.meta.url).href;

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0f]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated logo/text */}
        <motion.div
          className="w-56 text-center md:w-72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={LOGO_SRC}
            alt="Dennis Mwangi logo"
            className="mx-auto w-full object-contain"
            initial={{ opacity: 0.6 }}
            animate={{
              opacity: [0.6, 1, 0.6],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10 md:w-72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#b026ff]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
