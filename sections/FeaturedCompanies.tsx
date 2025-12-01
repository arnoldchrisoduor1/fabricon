// components/FeaturedCompanies.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Factory, 
  Building2, 
  Package, 
  Car, 
  Plane, 
  Home,
  Ship,
  Truck,
  Cpu,
  CircuitBoard,
  Zap,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Globe
} from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

const FeaturedCompanies = () => {
  const companies = [
    {
      icon: Factory,
      name: "Tesla",
      industry: "Automotive & Energy",
      description: "Advanced electric vehicle manufacturing",
      color: "from-red-500/20 to-red-500/5"
    },
    {
      icon: Building2,
      name: "Siemens",
      industry: "Industrial Manufacturing",
      description: "Digital factory solutions pioneer",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Package,
      name: "Amazon Robotics",
      industry: "Logistics & Automation",
      description: "Warehouse automation leaders",
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      icon: Car,
      name: "Toyota",
      industry: "Automotive Manufacturing",
      description: "Lean production innovators",
      color: "from-gray-900/20 to-gray-900/5"
    },
    {
      icon: Plane,
      name: "Boeing",
      industry: "Aerospace",
      description: "Advanced aerospace manufacturing",
      color: "from-blue-600/20 to-blue-600/5"
    },
    {
      icon: Home,
      name: "3M",
      industry: "Industrial Innovation",
      description: "Material science manufacturing",
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Ship,
      name: "Maersk",
      industry: "Shipping & Logistics",
      description: "Global supply chain optimization",
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      icon: Truck,
      name: "Caterpillar",
      industry: "Heavy Equipment",
      description: "Industrial machinery manufacturing",
      color: "from-orange-500/20 to-orange-500/5"
    },
    {
      icon: Cpu,
      name: "Intel",
      industry: "Semiconductors",
      description: "Advanced chip manufacturing",
      color: "from-blue-400/20 to-blue-400/5"
    },
    {
      icon: CircuitBoard,
      name: "Bosch",
      industry: "Smart Manufacturing",
      description: "Industry 4.0 solutions",
      color: "from-green-600/20 to-green-600/5"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Partners", icon: <Globe size={20} /> },
    { value: "40%", label: "Average Efficiency Gain", icon: <TrendingUp size={20} /> },
    { value: "99.7%", label: "Satisfaction Rate", icon: <Target size={20} /> },
    { value: "24/7", label: "Support Network", icon: <Users size={20} /> }
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
    <section className="relative py-16 md:py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-primary-green/5 bg-[size:30px_30px]" />
      
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-green/5 rounded-full blur-3xl"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={containerVariants} className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} /> Trusted Worldwide
            </span>
          </motion.div>
          
          <motion.h2 
            variants={containerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Powering Manufacturing Leaders <br />
            <span className="text-primary-green">Across Industries</span>
          </motion.h2>
          
          <motion.p 
            variants={containerVariants}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
          >
            Join industry pioneers who trust our solutions to transform their manufacturing 
            processes and drive unprecedented growth.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-primary-green">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-600 text-sm text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Companies Grid - Animated */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {companies.map((company, index) => (
            <div key={index} className={index >= 5 ? "lg:block hidden" : ""}>
              <CompanyLogo
                icon={company.icon}
                name={company.name}
                industry={company.industry}
                delay={index * 0.05}
              />
            </div>
          ))}
          
          {/* Empty state for hover effect */}
          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4 group-hover:bg-primary-green/20 transition-colors duration-300">
                  <Zap className="text-gray-400 group-hover:text-primary-green transition-colors duration-300" size={24} />
                </div>
                <p className="text-gray-400 text-sm font-medium">
                  Your Company Here
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial/Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary-green to-secondary-green rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Sparkles size={14} /> Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  How We Helped <span className="text-gray-900">Tesla</span> Streamline Production
                </h3>
                <p className="text-white/90 mb-6">
                  By implementing our AI-driven optimization system, Tesla achieved a 42% 
                  increase in production efficiency and reduced material waste by 28% within 
                  the first six months.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-white font-bold text-lg">
                    42% <span className="text-white/70 text-sm font-normal">Efficiency Gain</span>
                  </div>
                  <div className="text-white font-bold text-lg">
                    28% <span className="text-white/70 text-sm font-normal">Waste Reduction</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Factory className="text-primary-green" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Sarah Chen</div>
                      <div className="text-white/70 text-sm">Production Director, Tesla</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "The integration was seamless, and the results were immediate. 
                    Our production lines are now operating at peak efficiency, 
                    thanks to FabriCon's innovative solutions."
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-400">
                        ★
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <TrendingUp size={16} className="text-primary-green" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap size={16} className="text-secondary-green" />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Join Industry Leaders?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how our manufacturing solutions can transform your operations 
              just like they did for the world's most innovative companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center gap-2 bg-primary-green text-white px-8 py-3 rounded-full font-bold hover:bg-primary-green/90 transition-all duration-300 hover:shadow-lg">
                Schedule a Demo
                <Sparkles className="group-hover:rotate-12 transition-transform" size={18} />
              </button>
              <button className="group inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-primary-green hover:text-primary-green transition-all duration-300">
                View All Case Studies
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Join 500+ manufacturing companies already transforming their operations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;