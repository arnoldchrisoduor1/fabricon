"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CompanyLogoProps {
  icon: LucideIcon;
  name: string;
  industry: string;
  delay: number;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ icon: Icon, name, industry, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        delay: delay + 0.2,
        duration: 0.5,
        ease: "backOut" as const
      }
    },
    hover: {
      rotate: 360,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-green/20 rounded-2xl transition-all duration-300" />
      
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={iconVariants}
            className="mb-6 p-4 rounded-2xl bg-linear-to-br from-primary-green/10 to-secondary-green/10"
          >
            <Icon className="text-primary-green" size={36} />
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{industry}</p>
          
          {/* Hover reveal */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-100">
              <span className="inline-flex items-center gap-1 text-primary-green text-sm font-medium">
                Success Story →
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyLogo;