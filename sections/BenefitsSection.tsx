// components/BenefitsSection.tsx
"use client";
import { motion } from "framer-motion";
import {
  CircleCheckBig,
  TrendingUp,
  Target,
  Zap,
  Shield,
  BarChart3,
  Factory,
  Cpu,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import ProgressBar from "@/components/ProgressBar";
import StatsChart from "@/components/StatsChart";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Boosting Quality with Tech",
      description: "Achieve exceptional product quality through our advanced technology solutions. Enhance your standards with precision engineering and real-time monitoring systems.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Optimizing Production Process",
      description: "Maximize factory efficiency and output with our innovative solutions. Streamline workflows and reduce downtime with smart automation systems.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "AI-Driven Production",
      description: "Transform your manufacturing with AI-powered insights. Achieve faster, more effective results through predictive analytics and machine learning.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enhanced Safety Protocols",
      description: "Implement cutting-edge safety measures with automated monitoring and emergency response systems for a secure working environment.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Factory,
      title: "Sustainable Manufacturing",
      description: "Reduce environmental impact with eco-friendly processes and energy-efficient systems that maintain high production standards.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Productivity Boost",
      description: "Empower your workforce with intuitive interfaces and collaborative tools that enhance productivity and decision-making capabilities.",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const progressData = [
    { label: "Finished", value: 87, color: "bg-primary-green" },
    { label: "In Progress", value: 65, color: "bg-secondary-green" },
    { label: "Quality Approved", value: 94, color: "bg-third-green" },
    { label: "On Schedule", value: 78, color: "bg-primary-green" },
  ];

  const chartData = [
    { height: 100, color: "bg-primary-green", label: "Q1", value: 100 },
    { height: 85, color: "bg-third-green", label: "Q2", value: 85 },
    { height: 95, color: "bg-primary-green", label: "Q3", value: 95 },
    { height: 75, color: "bg-third-green", label: "Q4", value: 75 },
    { height: 100, color: "bg-primary-green", label: "Q5", value: 100 },
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

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full text-sm text-primary-green font-medium mb-4">
            <Sparkles size={16} /> Why Choose Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Manufacturing Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our advanced systems boost productivity, cut operational costs, and drive 
            sustainable business growth through innovative technology solutions.
          </p>
        </motion.div>

        {/* Main Content - Improved Desktop Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Benefits Grid (2 columns on desktop) */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>

            {/* Quick Stats - Below benefits on desktop */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <p className="text-3xl font-bold text-primary-green">50%</p>
                <p className="text-gray-600 text-sm mt-2">Cost Reduction</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <p className="text-3xl font-bold text-primary-green">3x</p>
                <p className="text-gray-600 text-sm mt-2">Faster Production</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <p className="text-3xl font-bold text-primary-green">99%</p>
                <p className="text-gray-600 text-sm mt-2">Accuracy Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card (Full height on desktop) */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sticky top-8"
            >
              {/* Stats Card Header */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 bg-secondary-green/10 px-4 py-2 rounded-full text-sm text-secondary-green font-medium mb-4">
                  <Sparkles size={16} /> Performance Analytics
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Real-time Production Metrics
                </h3>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Projects</p>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-bold text-gray-900">1,475</span>
                      <span className="inline-flex items-center gap-1 bg-green-50 text-third-green px-2 py-1 rounded-full text-sm font-semibold">
                        <TrendingUp size={12} /> 34%
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Monthly Growth</p>
                    <p className="text-xl font-bold text-primary-green">+126</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6 mb-8">
                  {progressData.map((item, index) => (
                    <ProgressBar
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      color={item.color}
                      index={index}
                    />
                  ))}
                </div>

                {/* Chart Section */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-gray-900 font-semibold">Quarterly Performance</p>
                      <p className="text-gray-500 text-xs">Last 5 quarters</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 font-bold">94%</p>
                      <p className="text-gray-500 text-xs">Average</p>
                    </div>
                  </div>
                  <StatsChart data={chartData} />
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Efficiency Rate</p>
                    <p className="text-lg font-bold text-gray-900">96.5%</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Uptime</p>
                    <p className="text-lg font-bold text-gray-900">99.8%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section - Full width below main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-green to-secondary-green rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="lg:max-w-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to Optimize Your Production?
                </h3>
                <p className="text-white/80 text-lg">
                  Schedule a personalized demo and see the impact on your operations. 
                  Our experts will show you how to maximize efficiency and reduce costs.
                </p>
              </div>
              <div>
                <button className="group inline-flex items-center gap-3 bg-white text-primary-green px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl">
                  <span>Request Demo</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </button>
                <p className="text-white/60 text-sm mt-3 text-center lg:text-left">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;