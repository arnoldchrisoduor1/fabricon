// components/HeroSection.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  ChartNoAxesColumn,
  CircleGauge,
  EllipsisVertical,
  LayoutDashboard,
  MoveUpRight,
  NotepadTextDashed,
  Sparkles,
  Star,
  Waves,
  TrendingUp,
  Users,
  Award,
  Zap,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/layout/ui/Button";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [sparkleRotate, setSparkleRotate] = useState(false);

  // Toggle sparkle rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkleRotate(true);
      setTimeout(() => setSparkleRotate(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const statCardVariants: Variants = {
    hidden: (custom: number) => ({
      x: custom % 2 === 0 ? -50 : 50,
      opacity: 0,
      scale: 0.9,
    }),
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const floatingIconVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="mt-10 md:mt-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight"
        >
          The Future of Manufacturing <br /> with{" "}
          <span className="text-primary-green relative inline-block">
            Latest Technology
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary-green/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          Expert tech to elevate your manufacturing. Let's take your business
          further with innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10"
        >
          <Button variant="primary" size="lg">
            Get Started <MoveUpRight size={18} />
          </Button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-white w-full text-primary-green px-8 py-3.5 rounded-full text-base font-medium border border-primary-green hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2">
              Try Demo
              <motion.div
                animate={{
                  rotate: sparkleRotate ? [0, 360] : 0,
                  scale: sparkleRotate ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 1, ease: "easeInOut" },
                  scale: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <Sparkles size={18} />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center mt-8">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                </motion.div>
              ))}
              <span className="text-sm font-bold ml-2">5.0</span>
            </div>
            <span className="text-gray-600 text-sm">
              from 80+ <span className="text-black font-bold">reviews</span>
            </span>
          </div>

      {/* Stats Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        // initial="hidden"
        // animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-16 sm:mt-24 lg:mt-32 items-end" // Changed to items-end
      >
        {/* Image Card - Tallest (5 units) */}
        <motion.div
          custom={0}
          variants={statCardVariants}
          whileHover="hover"
          className="lg:col-span-1 rounded-2xl overflow-hidden"
          style={{ height: "450px" }} // Tallest - 5 units
        >
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
              alt="Modern manufacturing"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white text-lg font-semibold">
                Advanced Manufacturing Solutions
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Clients Card - 4 units */}
        <motion.div
          custom={1}
          variants={statCardVariants}
          whileHover="hover"
          className="bg-primary-green rounded-2xl p-6 flex flex-col justify-end text-center"
          style={{ height: "360px" }} // 4 units
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            whileHover={{ scale: 1.1 }}
          >
            <Users className="text-white" size={28} />
          </motion.div>
          <p className="text-white text-4xl md:text-5xl font-bold">100+</p>
          <p className="text-white/90 mt-4 text-base sm:text-lg">
            Esteemed Clients & Partners Worldwide
          </p>
          <motion.div
            className="mt-6"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="text-white/70 mx-auto" size={20} />
          </motion.div>
        </motion.div>

        {/* Reviews Card - 3 units */}
        <motion.div
          custom={2}
          variants={statCardVariants}
          whileHover="hover"
          className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
          style={{ height: "270px" }} // 3 units
        >

          {/* Stats Card */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <motion.div
                className="bg-secondary-green/20 p-2 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <LayoutDashboard size={18} className="text-primary-green" />
              </motion.div>
              <EllipsisVertical size={18} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-700 text-sm font-medium">
                Total Projects
              </span>
              <span className="bg-primary-green rounded-full p-1">
                <TrendingUp size={10} className="text-white" />
              </span>
              <span className="text-primary-green text-sm font-bold">8%</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">1951+</p>
            <p className="text-gray-600 text-xs mt-2">
              Increase of{" "}
              <span className="text-third-green font-bold">126</span> this month
            </p>
          </div>
        </motion.div>

        {/* Years Service Card - 4 units */}
        <motion.div
          custom={3}
          variants={statCardVariants}
          whileHover="hover"
          className="bg-secondary-green rounded-2xl p-6 flex flex-col justify-end text-center"
          style={{ height: "360px" }} // 4 units
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Award className="text-black" size={36} />
          </motion.div>
          <p className="text-black text-5xl md:text-6xl font-bold">6+</p>
          <p className="text-black/80 mt-6 text-lg font-bold">
            Years of Dedicated Service Excellence
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Zap size={24} className="text-primary-green mx-auto" />
          </motion.div>
        </motion.div>

        {/* Efficiency Card - Tallest (5 units) */}
        <motion.div
          custom={4}
          variants={statCardVariants}
          whileHover="hover"
          className="bg-gradient-to-br from-primary-green to-primary-green/80 rounded-2xl p-6 flex flex-col justify-between"
          style={{ height: "450px" }} // 5 units
        >
          <div>
            <motion.div
              className="bg-white/20 p-3 rounded-full w-fit mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <CircleGauge className="text-white" size={32} />
            </motion.div>
            <p className="text-white text-xl font-bold mb-4">
              Achieve Optimal Efficiency & Boost Performance
            </p>
          </div>
          <div>
            <motion.div
              className="bg-white/20 p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-white text-sm mb-2">Performance Metrics</p>
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </div>
              <p className="text-white text-right text-sm mt-1">85% Efficiency</p>
            </motion.div>
            <button className="w-full bg-white text-primary-green mt-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Decorations - Left */}
      <motion.div
        variants={floatingIconVariants}
        animate="float"
        className="hidden lg:block absolute top-1/4 -left-8"
      >
        <div className="flex items-center gap-4">
          <div className="border border-gray-300 rounded-full p-3 bg-white shadow-xl">
            <MoveUpRight size={20} className="text-primary-green" />
          </div>
          <div className="flex flex-col gap-4">
            <motion.div
              className="bg-primary-green rounded-full p-3 shadow-xl"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <Sparkles className="text-white" size={20} />
            </motion.div>
            <motion.div
              className="bg-secondary-green p-3 rounded-full shadow-xl"
              whileHover={{ scale: 1.1, rotate: -45 }}
            >
              <NotepadTextDashed size={20} className="text-black" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorations - Right */}
      <motion.div
        variants={floatingIconVariants}
        animate="float"
        className="hidden lg:block absolute top-1/3 right-8"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            variants={floatingIconVariants}
            animate="float"
            transition={{ delay: 1 }}
            className="border border-gray-300 rounded-full p-3 bg-white shadow-xl ml-8"
            whileHover={{ scale: 1.1 }}
          >
            <Waves size={20} className="text-primary-green" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={floatingIconVariants}
        animate="float"
        className="hidden lg:block absolute top-1/4 -right-8"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            className="bg-secondary-green p-3 rounded-full shadow-xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            <ChartNoAxesColumn size={20} className="text-black" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;