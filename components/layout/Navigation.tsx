"use client";
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Settings, 
  Phone, 
  MoveUpRight,
  ArrowUp
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import Logo from "../Logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const majorSections = [
    {
      id: "home",
      label: "Home",
      icon: <Home size={18} />
    },
    {
      id: "services",
      label: "Services",
      icon: <Settings size={18} />
    },
    {
      id: "benefits",
      label: "Benefits",
      icon: <Info size={18} />
    },
    {
      id: "pricing",
      label: "Pricing",
      icon: <MoveUpRight size={18} />
    },
    {
      id: "clients",
      label: "Clients",
      icon: <Phone size={18} />
    }
  ];

  // Handle scroll for sticky navbar and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
      setShowScrollTop(scrollTop > 500);
      setIsScrolling(true);
      
      // Set active link based on scroll position
      const sections = majorSections.map(section => document.getElementById(section.id));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection !== -1) {
        setActiveLink(majorSections[currentSection].id);
      }

      setTimeout(() => setIsScrolling(false), 100);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  const navVariants = {
    hidden: { y: 0 },
    visible: { 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary-green text-white rounded-full shadow-lg hover:shadow-xl hover:bg-primary-green/90 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Navigation Bar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => handleLinkClick('home')}
            >
              <Logo size="md" animate={false} className="text-gray-900" />
            </motion.div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {majorSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleLinkClick(section.id)}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeLink === section.id
                      ? "text-primary-green font-semibold"
                      : "text-gray-700 hover:text-primary-green"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: activeLink === section.id ? [0, 10, -10, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.icon}
                    </motion.div>
                    {section.label}
                  </div>
                  
                  {/* Active indicator */}
                  {activeLink === section.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-green rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => handleLinkClick('home')}
            >
              <Logo size="md" animate={false} className={isScrolled ? "text-gray-900" : "text-white"} />
            </motion.div>
            
            <div className="flex gap-2 items-center">
              <Button variant="primary" size="sm">
                Sign In
              </Button>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className={isScrolled ? "text-gray-900" : ""} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className={isScrolled ? "text-gray-900" : ""} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50 overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col p-2">
                {majorSections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => handleLinkClick(section.id)}
                    variants={itemVariants}
                    custom={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeLink === section.id
                        ? "text-primary-green font-semibold bg-secondary-green/40"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`${activeLink === section.id ? "text-primary-green" : "text-gray-500"}`}
                      animate={{
                        rotate: activeLink === section.id ? [0, 360] : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {section.icon}
                    </motion.div>
                    <span className="text-base">{section.label}</span>
                  </motion.button>
                ))}
                
                <div className="grid grid-cols-2 gap-2 mt-4 px-2">
                  <Button variant="outline" size="sm" fullWidth>
                    Sign In
                  </Button>
                  <Button variant="primary" size="sm" fullWidth>
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Transparent spacer to prevent content from jumping under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navigation;