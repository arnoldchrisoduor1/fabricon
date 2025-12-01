"use client";
import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  index: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-900 font-bold">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
};

export default ProgressBar;