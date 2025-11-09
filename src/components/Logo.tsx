import { motion } from 'motion/react';
import logoFull from '../assets/Dennis-Logo.png';
import logoIcon from '../assets/Dennis-Favicon.png';
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'full', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { full: { height: 32 }, icon: { width: 32, height: 32 } },
    md: { full: { height: 40 }, icon: { width: 40, height: 40 } },
    lg: { full: { height: 56 }, icon: { width: 56, height: 56 } },
  };

  const currentSize = sizes[size];

  if (variant === 'icon') {
    return (
      <motion.img
        src={logoIcon}
        alt="Dennis Mwangi Logo"
        style={{
          width: currentSize.icon.width,
          height: currentSize.icon.height,
        }}
        className="object-contain"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      />
    );
  }

  return (
    <motion.img
      src={logoFull}
      alt="Dennis Mwangi - Clean, Modern Software Architecture"
      style={{
        height: currentSize.full.height,
        width: 'auto',
      }}
      className="object-contain"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    />
  );
}
