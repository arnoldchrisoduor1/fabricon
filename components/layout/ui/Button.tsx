"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  fullWidth = false,
}) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary-green text-white hover:bg-primary-green/90 active:bg-primary-green/80',
    secondary: 'bg-secondary-green text-black hover:bg-secondary-green/90 active:bg-secondary-green/80',
    outline: 'bg-white text-primary-green border border-primary-green hover:bg-gray-50 active:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;