// components/PricingSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Crown, 
  Building, 
  Sparkles, 
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Target,
  BarChart3
} from "lucide-react";
import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = [
    {
      title: "Starter",
      description: "Perfect for small manufacturers beginning their digital transformation journey.",
      monthlyPrice: 39,
      yearlyPrice: 399,
      features: [
        "Production up to 10,000 units per month",
        "24/7 basic technical support",
        "Access to production dashboard",
        "Initial setup and onboarding",
        "Basic analytics and reporting",
        "Email support"
      ],
      icon: <Zap size={24} />,
      color: "primary" as const,
      delay: 0.1
    },
    {
      title: "Professional",
      description: "Advanced tools for growing businesses with custom manufacturing needs.",
      monthlyPrice: 79,
      yearlyPrice: 799,
      features: [
        "Up to 50,000 units per month",
        "Priority technical support",
        "Custom manufacturing solutions",
        "Advanced analytics dashboard",
        "API access",
        "Dedicated account manager",
        "Training sessions",
        "Quality control integration"
      ],
      icon: <Building size={24} />,
      color: "premium" as const,
      delay: 0.2,
      recommended: true,
      popular: true
    },
    {
      title: "Enterprise",
      description: "Complete solution for large-scale manufacturing with unlimited capabilities.",
      monthlyPrice: 199,
      yearlyPrice: 1999,
      features: [
        "Unlimited production units",
        "24/7 dedicated account manager",
        "Tailored manufacturing solutions",
        "Predictive production optimization",
        "Custom API development",
        "On-site implementation support",
        "Advanced AI analytics",
        "Multi-location management",
        "Custom reporting suite",
        "SLA with 99.9% uptime guarantee"
      ],
      icon: <Crown size={24} />,
      color: "secondary" as const,
      delay: 0.3
    }
  ];

  const stats = [
    { value: "1000+", label: "Manufacturing Clients", icon: <Users size={20} /> },
    { value: "99.8%", label: "Uptime SLA", icon: <Shield size={20} /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Target size={20} /> },
    { value: "24/7", label: "Support Available", icon: <CheckCircle2 size={20} /> }
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
    <section className="relative py-16 md:py-24 bg-linear-to-b from-black to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-size-[20px_20px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-green/10 rounded-full blur-3xl" />
      
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
            <span className="inline-flex items-center gap-2 bg-primary-green/20 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} /> Flexible Pricing
            </span>
          </motion.div>
          
          <motion.h2 
            variants={containerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Tailored Plans for Your <br />
            <span className="text-primary-green">Manufacturing Scale</span>
          </motion.h2>
          
          <motion.p 
            variants={containerVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Choose the perfect plan for your manufacturing needs. Scale up as you grow with 
            our flexible pricing options designed for businesses of all sizes.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={containerVariants}
            className="inline-flex items-center bg-gray-800 rounded-full p-1 mb-8"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary-green text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-primary-green text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly <span className="ml-1 text-xs bg-green-500 text-black px-1.5 py-0.5 rounded">Save 15%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              period={billingPeriod === "monthly" ? "month" : "year"}
              features={plan.features}
              recommended={plan.recommended}
              popular={plan.popular}
              delay={plan.delay}
              icon={plan.icon}
              color={plan.color}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700"
            >
              <div className="flex justify-center text-primary-green mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* FAQ/Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary-green" />
                What's Included in All Plans
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                  Secure cloud infrastructure
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                  Regular security updates
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                  Mobile app access
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                  Data backup & recovery
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-secondary-green" />
                Need Custom Solutions?
              </h3>
              <p className="text-gray-400 mb-4">
                For manufacturing facilities with unique requirements, we offer 
                completely customized enterprise solutions.
              </p>
              <button className="group inline-flex items-center gap-2 border border-primary-green text-primary-green px-6 py-3 rounded-full font-medium hover:bg-primary-green hover:text-black transition-all duration-300">
                Contact Sales
                <TrendingUp className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
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
          <div className="bg-gradient-to-r from-primary-green/20 to-secondary-green/20 border border-primary-green/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Not Sure Which Plan is Right?
            </h3>
            <p className="text-gray-400 mb-6">
              Schedule a free consultation with our manufacturing experts to 
              find the perfect solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center gap-2 bg-primary-green text-white px-8 py-3 rounded-full font-bold hover:bg-primary-green/90 transition-all duration-300">
                Book Free Consultation
                <Sparkles className="group-hover:rotate-12 transition-transform" size={18} />
              </button>
              <button className="group inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-primary-green hover:text-primary-green transition-all duration-300">
                View Detailed Comparison
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;