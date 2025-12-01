"use client";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: index * 0.1 + 0.2
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          variants={iconVariants}
          className="shrink-0 bg-linear-to-br from-primary-green to-secondary-green p-3 rounded-xl group-hover:shadow-md"
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-green transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileHover={{ opacity: 1, width: "auto" }}
            className="mt-4 overflow-hidden"
          >
            <span className="inline-flex items-center gap-1 text-primary-green font-medium text-sm">
              Learn more
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;