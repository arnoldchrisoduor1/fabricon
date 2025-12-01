import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  index 
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -90, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { delay: delay + 0.2, duration: 0.4 }
    },
    hover: {
      rotate: 180,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5, y: -5 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-20">
          <motion.div
            variants={iconVariants}
            className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20"
          >
            <Icon size={24} className="text-white" />
          </motion.div>
          
          <motion.div
            variants={arrowVariants}
            className="bg-white/20 p-2 rounded-full group-hover:bg-white/30"
          >
            <ArrowUpRight size={20} className="text-white" />
          </motion.div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl md:text-2xl text-white group-hover:text-secondary-green transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hidden hover text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-6 pt-4 border-t border-white/10"
        >
          <span className="text-secondary-green text-sm font-medium">
            Learn more →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;