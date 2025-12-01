"use client";
import { motion } from "framer-motion";
import { Factory, Cpu, Zap } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", animate = true, className = "" }) => {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const iconVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative"
        variants={animate ? iconVariants : undefined}
        animate={animate ? "pulse" : undefined}
      >
        <div className="flex items-center">
          <Factory className="text-primary-green" size={size === "lg" ? 40 : size === "md" ? 28 : 20} />
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="text-secondary-green" size={size === "lg" ? 16 : size === "md" ? 12 : 10} />
          </motion.div>
        </div>
      </motion.div>
      
      <div className={`font-bold ${sizes[size]} text-third-green`}>
        Fabri<span className="text-primary-green">Con</span>
      </div>
      
      <motion.div
        className="mt-1"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Cpu className="text-primary-green/50" size={size === "lg" ? 16 : size === "md" ? 12 : 10} />
      </motion.div>
    </motion.div>
  );
};

export default Logo;