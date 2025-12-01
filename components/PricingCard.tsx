"use client";
import { CircleCheckBig, Star, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  recommended?: boolean;
  popular?: boolean;
  delay: number;
  icon?: ReactNode;
  color: "primary" | "secondary" | "premium";
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  period,
  features,
  recommended = false,
  popular = false,
  delay,
  icon,
  color = "primary"
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const colors = {
    primary: {
      bg: "bg-gray-900",
      border: "border-gray-800",
      text: "text-white",
      button: "bg-primary-green hover:bg-primary-green/90 text-white",
      accent: "text-primary-green"
    },
    secondary: {
      bg: "bg-gray-900",
      border: "border-gray-800",
      text: "text-white",
      button: "bg-secondary-green hover:bg-secondary-green/90 text-black",
      accent: "text-secondary-green"
    },
    premium: {
      bg: "bg-gradient-to-br from-gray-900 to-gray-950",
      border: "border-primary-green/30",
      text: "text-white",
      button: "bg-primary-green hover:bg-primary-green/90 text-white",
      accent: "text-primary-green"
    }
  };

  const selectedColor = colors[color];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative rounded-2xl p-8 border-2 ${selectedColor.bg} ${selectedColor.border} ${selectedColor.text} transition-all duration-300 group`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-linear-to-r from-primary-green to-secondary-green text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star size={12} fill="white" /> Most Popular
          </div>
        </div>
      )}

      {popular && (
        <div className="absolute -top-3 right-4">
          <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            Best Value
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          {icon && <div className={selectedColor.accent}>{icon}</div>}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold">${price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
        {price === 0 && (
          <p className="text-gray-400 text-sm mt-1">No credit card required</p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-200 ${selectedColor.button}`}
      >
        Get Started
      </motion.button>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-sm font-medium text-gray-400">FEATURES</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + (index * 0.1) }}
              className="flex items-start gap-3"
            >
              <CircleCheckBig className="text-green-500 shrink-0 mt-0.5" size={18} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default PricingCard;