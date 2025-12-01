"use client";
import { motion } from "framer-motion";

interface BarData {
  height: number;
  color: string;
  label: string;
  value: number;
}

interface StatsChartProps {
  data: BarData[];
}

const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  return (
    <div className="flex items-end gap-3 h-40">
      {data.map((bar, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          whileInView={{ height: `${bar.height}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          whileHover={{ 
            scaleY: 1.1,
            transition: { duration: 0.2 }
          }}
          className="relative group"
        >
          <div 
            className={`w-8 rounded-lg ${bar.color} transition-all duration-300`}
            style={{ height: '100%' }}
          />
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              {bar.label}: {bar.value}%
            </div>
            <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
          </div>
          
          {/* Label */}
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium">
            {bar.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsChart;