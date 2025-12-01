// components/ServicesSection.tsx
"use client";
import { 
  Factory, 
  Palette, 
  ShieldCheck, 
  Cpu, 
  Package, 
  BarChart3,
  Sparkle,
  TrendingUp,
  Target,
  Zap,
  Users,
  Globe,
  ArrowUpRight
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Production and Assembly",
      description: "Advanced production processes with high-capacity assembly lines and flexible production types to meet diverse manufacturing needs.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Palette,
      title: "Custom Manufacturing",
      description: "Tailored product creation with comprehensive design services and unlimited customization options for unique business requirements.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous quality assurance systems and real-time monitoring procedures ensuring exceptional product standards and reliability.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cpu,
      title: "Technology and Innovation",
      description: "Cutting-edge manufacturing technologies, AI-driven solutions, and continuous innovation for future-proof production capabilities.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Package,
      title: "Packaging and Logistics",
      description: "Comprehensive packaging solutions and global logistics networks ensuring safe, efficient delivery to customers worldwide.",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: BarChart3,
      title: "Consulting and Market Research",
      description: "Strategic consulting services and in-depth market research to optimize manufacturing strategies and capture market opportunities.",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain management with predictive analytics and optimization strategies for maximum efficiency.",
      color: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Micro-level precision engineering with advanced CNC machining and laser cutting technologies for intricate designs.",
      color: "from-rose-500/20 to-pink-500/20"
    },
    {
      icon: Zap,
      title: "Energy Efficiency Solutions",
      description: "Sustainable manufacturing practices with energy optimization systems and renewable energy integration for eco-friendly production.",
      color: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-linear-to-b from-primary-green to-primary-green/90 py-16 md:py-24 overflow-hidden mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={textVariants} className="inline-block">
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm md:text-base text-white mb-6">
              <Sparkle size={16} /> Our Comprehensive Services
            </span>
          </motion.div>
          
          <motion.h2 
            variants={textVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Efficient and Integrated <br />
            <span className="text-secondary-green">Manufacturing Services</span>
          </motion.h2>
          
          <motion.p 
            variants={textVariants}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Streamline your operations with our comprehensive, quality-focused manufacturing 
            solutions designed for modern industry demands.
          </motion.p>

          <motion.div 
            variants={textVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-white/70">
              <Users size={16} />
              <span className="text-sm">Trusted by 100+ Companies</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Globe size={16} />
              <span className="text-sm">Global Manufacturing Network</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-white/70 text-sm">Quality Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 text-sm">Production Uptime</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">40%</div>
            <div className="text-white/70 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 text-sm">Countries Served</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16 md:mt-24"
        >
          <button className="group relative px-8 py-4 bg-secondary-green text-primary-green font-bold rounded-full hover:bg-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <p className="text-white/60 mt-4 text-sm">
            Ready to transform your manufacturing process? Get in touch today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;