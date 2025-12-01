// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Factory, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowUpRight,
  Sparkles,
  Globe,
  Shield,
  Award,
  Send,
  ChevronRight
} from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const footerLinks = {
    "Products": [
      { label: "Production Dashboard", href: "#" },
      { label: "Quality Control AI", href: "#" },
      { label: "Supply Chain Manager", href: "#" },
      { label: "Predictive Maintenance", href: "#" },
      { label: "Energy Optimizer", href: "#" }
    ],
    "Solutions": [
      { label: "Automotive Manufacturing", href: "#" },
      { label: "Electronics Assembly", href: "#" },
      { label: "Pharmaceutical Production", href: "#" },
      { label: "Food Processing", href: "#" },
      { label: "Aerospace Components", href: "#" }
    ],
    "Company": [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Center", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Contact Us", href: "#" }
    ],
    "Resources": [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Manufacturing Blog", href: "#" },
      { label: "Support Center", href: "#" }
    ]
  };

  const contactInfo = [
    { icon: <Phone size={18} />, text: "+1 (555) 123-4567", subtext: "24/7 Support" },
    { icon: <Mail size={18} />, text: "hello@fabricon.com", subtext: "General Inquiries" },
    { icon: <MapPin size={18} />, text: "123 Tech Park Blvd", subtext: "San Francisco, CA" },
    { icon: <Globe size={18} />, text: "Global Offices", subtext: "12 Countries" }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" }
  ];

  const certifications = [
    { icon: <Shield size={16} />, text: "ISO 9001 Certified" },
    { icon: <Award size={16} />, text: "Industry 4.0 Compliant" },
    { icon: <Sparkles size={16} />, text: "Eco-Friendly Certified" }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black pt-16 pb-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
      
      {/* Animated floating elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-1/4 w-32 h-32 bg-primary-green/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-1/4 w-40 h-40 bg-secondary-green/5 rounded-full blur-2xl"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-green/20 to-secondary-green/20 rounded-2xl p-8 border border-primary-green/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Sparkles size={14} /> Industry Insights
                </motion.div>
                <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stay Ahead in Manufacturing
                </motion.h3>
                <motion.p variants={itemVariants} className="text-gray-400">
                  Get weekly insights on Industry 4.0, automation trends, and manufacturing innovation.
                </motion.p>
              </div>
              
              <motion.div variants={itemVariants}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary-green placeholder-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-green text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-primary-green/90 transition-colors"
                  >
                    Subscribe
                    <Send size={18} />
                  </motion.button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  No spam, unsubscribe anytime. Join 10,000+ manufacturing leaders.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Logo size="lg" />
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed">
              Revolutionizing manufacturing through cutting-edge technology and AI-driven solutions. 
              We empower businesses to achieve peak efficiency and sustainable growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <MapPin size={18} className="text-primary-green" />
                Contact Information
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="text-primary-green mt-0.5">{info.icon}</div>
                    <div>
                      <p className="text-white group-hover:text-primary-green transition-colors">
                        {info.text}
                      </p>
                      <p className="text-gray-500 text-sm">{info.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3"
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div 
                key={category}
                variants={itemVariants}
                custom={categoryIndex}
              >
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  {category}
                  <ChevronRight className="text-primary-green" size={16} />
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-green transition-colors duration-200 flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-gray-800"
              >
                <div className="text-primary-green">{cert.icon}</div>
                <span className="text-gray-400 text-sm">{cert.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FabriCon Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-green hover:bg-white/10 transition-all duration-200 border border-gray-800"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors"
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="rotate-270" size={16} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;